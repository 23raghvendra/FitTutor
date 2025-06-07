import React, { useState } from 'react';
import './Workout.css';
import workoutImage3 from '../../assets/3.jpg';
import cardioImage from '../../assets/h&c.jpeg';
import legsImage from '../../assets/L&c.jpg';
import shouldersImage from '../../assets/s&a.jpg';
import hiitImage from '../../assets/full.jpeg';
import yogaImage from '../../assets/y&f.jpeg';
import recoveryImage from '../../assets/rest.jpeg';

const workoutData = [
  {
    day: 'Monday',
    focus: 'Strength Training',
    exercises: ['Dumbbell Press', 'Shoulder Press', 'Bicep Curls', 'Tricep Extensions'],
    duration: '45 min',
    color: '#4A90E2',
    image: workoutImage3,
    bgColor: 'rgba(74, 144, 226, 0.9)'
  },
  {
    day: 'Tuesday',
    focus: 'HIIT & Cardio',
    exercises: ['Battle Ropes', 'Box Jumps', 'Burpees', 'Mountain Climbers'],
    duration: '40 min',
    color: '#6BFF6B',
    image: cardioImage,
    bgColor: 'rgba(107, 255, 107, 0.9)'
  },
  {
    day: 'Wednesday',
    focus: 'Legs & Core',
    exercises: ['Squats', 'Deadlifts', 'Lunges', 'Planks'],
    duration: '55 min',
    color: '#6B6BFF',
    image: legsImage,
    bgColor: 'rgba(107, 107, 255, 0.9)'
  },
  {
    day: 'Thursday',
    focus: 'Shoulders & Arms',
    exercises: ['Military Press', 'Lateral Raises', 'Curls', 'Pushdowns'],
    duration: '45 min',
    color: '#FFFF6B',
    image: shouldersImage,
    bgColor: 'rgba(255, 255, 107, 0.9)'
  },
  {
    day: 'Friday',
    focus: 'Full Body HIIT',
    exercises: ['Burpees', 'Mountain Climbers', 'Jump Rope', 'Box Jumps'],
    duration: '40 min',
    color: '#FF6BBF',
    image: hiitImage, 
    bgColor: 'rgba(255, 107, 191, 0.9)'
  },
  {
    day: 'Saturday',
    focus: 'Yoga & Flexibility',
    exercises: ['Sun Salutation', 'Warrior Poses', 'Stretching', 'Meditation'],
    duration: '30 min',
    color: '#6BFFFA',
    image: yogaImage,
    bgColor: 'rgba(107, 255, 250, 0.9)'
  },
  {
    day: 'Sunday',
    focus: 'Active Recovery',
    exercises: ['Light Walking', 'Swimming', 'Stretching', 'Foam Rolling'],
    duration: '30 min',
    color: '#FF6B6B',
    image: recoveryImage,
    bgColor: 'rgba(255, 107, 107, 0.9)'
  }
];

const Workout = () => {
  const [selectedDay, setSelectedDay] = useState(null);

  return (
    <section className="workout-section" id="workouts">
      <div className="workout-header">
        <h2>Transform Your Body</h2>
        <p>Customized workouts for every fitness goal</p>
      </div>

      <div className="workout-grid">
        {workoutData.map((workout, index) => (
          <div
            key={index}
            className={`workout-card ${selectedDay === workout.day ? 'active' : ''}`}
            onClick={() => setSelectedDay(workout.day === selectedDay ? null : workout.day)}
          >
            <div className="workout-image" style={{ backgroundImage: `url(${workout.image})` }} />
            <div className="workout-content" style={{ backgroundColor: workout.bgColor }}>
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
