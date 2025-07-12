
class WorkoutAPI {
  constructor() {
    this.storageKey = 'fittutor_workout_data';
    this.initializeData();
  }

  initializeData() {
    const existingData = localStorage.getItem(this.storageKey);
    if (!existingData) {
      const defaultData = {
        user: {
          name: 'Fitness Enthusiast',
          startDate: new Date().toISOString(),
          currentStreak: 0,
          longestStreak: 0,
          totalWorkouts: 0,
          weeklyGoal: 5,
          currentWeekWorkouts: 0
        },
        workouts: [
          {
            day: 'Monday',
            focus: 'Strength Training',
            exercises: ['Dumbbell Press', 'Shoulder Press', 'Bicep Curls', 'Tricep Extensions'],
            duration: '45 min',
            color: '#4A90E2',
            completed: false,
            lastCompleted: null
          },
          {
            day: 'Tuesday',
            focus: 'HIIT & Cardio',
            exercises: ['Battle Ropes', 'Box Jumps', 'Burpees', 'Mountain Climbers'],
            duration: '40 min',
            color: '#6BFF6B',
            completed: false,
            lastCompleted: null
          },
          {
            day: 'Wednesday',
            focus: 'Legs & Core',
            exercises: ['Squats', 'Deadlifts', 'Lunges', 'Planks'],
            duration: '55 min',
            color: '#6B6BFF',
            completed: false,
            lastCompleted: null
          },
          {
            day: 'Thursday',
            focus: 'Shoulders & Arms',
            exercises: ['Military Press', 'Lateral Raises', 'Curls', 'Pushdowns'],
            duration: '45 min',
            color: '#FFFF6B',
            completed: false,
            lastCompleted: null
          },
          {
            day: 'Friday',
            focus: 'Full Body HIIT',
            exercises: ['Burpees', 'Mountain Climbers', 'Jump Rope', 'Box Jumps'],
            duration: '40 min',
            color: '#FF6BBF',
            completed: false,
            lastCompleted: null
          },
          {
            day: 'Saturday',
            focus: 'Yoga & Flexibility',
            exercises: ['Sun Salutation', 'Warrior Poses', 'Stretching', 'Meditation'],
            duration: '30 min',
            color: '#6BFFFA',
            completed: false,
            lastCompleted: null
          },
          {
            day: 'Sunday',
            focus: 'Active Recovery',
            exercises: ['Light Walking', 'Swimming', 'Stretching', 'Foam Rolling'],
            duration: '30 min',
            color: '#FF6B6B',
            completed: false,
            lastCompleted: null
          }
        ],
        workoutHistory: []
      };
      localStorage.setItem(this.storageKey, JSON.stringify(defaultData));
    }
  }

  // Get all data
  getData() {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : null;
  }

  // Save data
  saveData(data) {
    localStorage.setItem(this.storageKey, JSON.stringify(data));
  }

  // Get user progress
  getUserProgress() {
    const data = this.getData();
    return data.user;
  }

  // Get current week's workout schedule
  getWeeklySchedule() {
    const data = this.getData();
    return data.workouts;
  }

  // Get next workout
  getNextWorkout() {
    const data = this.getData();
    const today = new Date();
    const currentDay = today.getDay(); // 0 = Sunday, 1 = Monday, etc.
    
    // Map day index to day name
    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    
    // Find next workout starting from today
    for (let i = 0; i < 7; i++) {
      const dayIndex = (currentDay + i) % 7;
      const dayName = dayNames[dayIndex];
      const workout = data.workouts.find(w => w.day === dayName);
      
      if (workout && !workout.completed) {
        return {
          ...workout,
          isToday: i === 0,
          daysUntil: i
        };
      }
    }
    
    // If all workouts are completed, return Monday as next week's start
    return {
      ...data.workouts.find(w => w.day === 'Monday'),
      isToday: false,
      daysUntil: 7 - currentDay + 1
    };
  }

  // Mark workout as completed
  completeWorkout(dayName) {
    const data = this.getData();
    const workout = data.workouts.find(w => w.day === dayName);
    
    if (workout && !workout.completed) {
      workout.completed = true;
      workout.lastCompleted = new Date().toISOString();
      
      // Update user stats
      data.user.totalWorkouts++;
      data.user.currentWeekWorkouts++;
      
      // Update streak
      this.updateStreak(data);
      
      // Add to history
      data.workoutHistory.push({
        day: dayName,
        focus: workout.focus,
        completedAt: new Date().toISOString(),
        duration: workout.duration
      });
      
      this.saveData(data);
      return true;
    }
    
    return false;
  }

  // Update streak logic
  updateStreak(data) {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    
    // Check if user worked out yesterday or today
    const recentWorkout = data.workoutHistory.find(w => {
      const workoutDate = new Date(w.completedAt);
      return workoutDate.toDateString() === today.toDateString() || 
             workoutDate.toDateString() === yesterday.toDateString();
    });
    
    if (recentWorkout) {
      data.user.currentStreak++;
      if (data.user.currentStreak > data.user.longestStreak) {
        data.user.longestStreak = data.user.currentStreak;
      }
    } else {
      data.user.currentStreak = 1; // Start new streak
    }
  }

  // Reset weekly progress (call this every Monday)
  resetWeeklyProgress() {
    const data = this.getData();
    data.user.currentWeekWorkouts = 0;
    data.workouts.forEach(workout => {
      workout.completed = false;
    });
    this.saveData(data);
  }

  // Get workout history
  getWorkoutHistory(limit = 10) {
    const data = this.getData();
    return data.workoutHistory
      .sort((a, b) => new Date(b.completedAt) - new Date(a.completedAt))
      .slice(0, limit);
  }

  // Update weekly goal
  updateWeeklyGoal(goal) {
    const data = this.getData();
    data.user.weeklyGoal = goal;
    this.saveData(data);
  }

  // Get streak statistics
  getStreakStats() {
    const data = this.getData();
    return {
      currentStreak: data.user.currentStreak,
      longestStreak: data.user.longestStreak,
      totalWorkouts: data.user.totalWorkouts,
      weeklyGoal: data.user.weeklyGoal,
      currentWeekWorkouts: data.user.currentWeekWorkouts,
      weeklyProgress: Math.min((data.user.currentWeekWorkouts / data.user.weeklyGoal) * 100, 100)
    };
  }

  // Get calendar data for the month
  getCalendarData(month, year) {
    const data = this.getData();
    const startDate = new Date(year, month, 1);
    const endDate = new Date(year, month + 1, 0);
    
    const calendarData = [];
    
    for (let day = startDate; day <= endDate; day.setDate(day.getDate() + 1)) {
      const dayString = day.toDateString();
      const workoutsOnDay = data.workoutHistory.filter(w => 
        new Date(w.completedAt).toDateString() === dayString
      );
      
      calendarData.push({
        date: new Date(day),
        workouts: workoutsOnDay,
        hasWorkout: workoutsOnDay.length > 0
      });
    }
    
    return calendarData;
  }

  // Simulate API delay (for realistic feel)
  async delay(ms = 500) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

// Create singleton instance
const workoutAPI = new WorkoutAPI();

export default workoutAPI;
