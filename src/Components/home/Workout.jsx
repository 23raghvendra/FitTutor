import React, { useState } from 'react';
import './Workout.css';

const workoutData = [
  {
    day: 'Monday',
    focus: 'Chest & Triceps',
    exercises: ['Bench Press', 'Push-ups', 'Tricep Dips', 'Cable Flyes'],
    duration: '45 min',
    color: '#4A90E2',
    bgImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("https://images.unsplash.com/photo-1534367610401-9f5ed68180aa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")'
  },
  {
    day: 'Tuesday',
    focus: 'Back & Biceps',
    exercises: ['Pull-ups', 'Rows', 'Curls', 'Face Pulls'],
    duration: '50 min',
    color: '#6BFF6B',
    bgImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")'
  },
  {
    day: 'Wednesday',
    focus: 'Legs & Core',
    exercises: ['Squats', 'Deadlifts', 'Lunges', 'Planks'],
    duration: '55 min',
    color: '#6B6BFF',
    bgImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")'
  },
  {
    day: 'Thursday',
    focus: 'Shoulders & Arms',
    exercises: ['Military Press', 'Lateral Raises', 'Curls', 'Pushdowns'],
    duration: '45 min',
    color: '#FFFF6B',
    bgImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")'
  },
  {
    day: 'Friday',
    focus: 'Full Body HIIT',
    exercises: ['Burpees', 'Mountain Climbers', 'Jump Rope', 'Box Jumps'],
    duration: '40 min',
    color: '#FF6BBF',
    bgImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")'
  },
  {
    day: 'Saturday',
    focus: 'Yoga & Flexibility',
    exercises: ['Sun Salutation', 'Warrior Poses', 'Stretching', 'Meditation'],
    duration: '30 min',
    color: '#6BFFFA',
    bgImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")'
  },
  {
    day: 'Sunday',
    focus: 'Active Recovery',
    exercises: ['Light Walking', 'Swimming', 'Stretching', 'Foam Rolling'],
    duration: '30 min',
    color: '#FF6B6B',
    bgImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")'
  }
];

const Workout = () => {
  const [selectedDay, setSelectedDay] = useState(null);

  return (
    <section className="workout-section" id="workouts">
      <div className="workout-header">
        <h2>Weekly Workout Plan</h2>
        <p>Click on any day to see detailed exercises</p>
      </div>

      <div className="workout-grid">
        {workoutData.map((workout, index) => (
          <div
            key={index}
            className={`workout-card ${selectedDay === workout.day ? 'active' : ''}`}
            onClick={() => setSelectedDay(workout.day === selectedDay ? null : workout.day)}
            style={{ 
              backgroundImage: workout.bgImage,
              backgroundColor: workout.color 
            }}
          >
            <div className="workout-content">
              <h3>{workout.day}</h3>
              <h4>{workout.focus}</h4>
              
              <div className={`workout-details ${selectedDay === workout.day ? 'show' : ''}`}>
                <ul>
                  {workout.exercises.map((exercise, i) => (
                    <li key={i}>{exercise}</li>
                  ))}
                </ul>
                <p className="duration">Duration: {workout.duration}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Workout;
