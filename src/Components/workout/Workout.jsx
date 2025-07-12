import React, { useState, useEffect } from 'react';
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
    description: 'Build muscle and increase power with our strength-focused routine',
    exercises: ['Dumbbell Press', 'Shoulder Press', 'Bicep Curls', 'Tricep Extensions'],
    duration: '45 min',
    intensity: 'High',
    benefits: ['Muscle Growth', 'Increased Strength', 'Improved Posture'],
    color: '#ff5733',
    image: workoutImage3,
    bgColor: 'rgba(255, 87, 51, 0.9)',
    trainer: 'Mike Strong'
  },
  {
    day: 'Tuesday',
    focus: 'HIIT & Cardio',
    description: 'Burn calories and improve cardiovascular health with high-intensity intervals',
    exercises: ['Battle Ropes', 'Box Jumps', 'Burpees', 'Mountain Climbers'],
    duration: '40 min',
    intensity: 'Very High',
    benefits: ['Fat Loss', 'Endurance', 'Heart Health'],
    color: '#33c4ff',
    image: cardioImage,
    bgColor: 'rgba(51, 196, 255, 0.9)',
    trainer: 'Sarah Cardio'
  },
  {
    day: 'Wednesday',
    focus: 'Legs & Core',
    description: 'Strengthen your foundation with focused lower body and core training',
    exercises: ['Squats', 'Deadlifts', 'Lunges', 'Planks'],
    duration: '55 min',
    intensity: 'High',
    benefits: ['Lower Body Strength', 'Core Stability', 'Improved Balance'],
    color: '#ff33a8',
    image: legsImage,
    bgColor: 'rgba(255, 51, 168, 0.9)',
    trainer: 'Tom Quads'
  },
  {
    day: 'Thursday',
    focus: 'Shoulders & Arms',
    description: 'Sculpt defined shoulders and arms with targeted isolation exercises',
    exercises: ['Military Press', 'Lateral Raises', 'Curls', 'Pushdowns'],
    duration: '45 min',
    intensity: 'Medium',
    benefits: ['Upper Body Definition', 'Arm Strength', 'Improved Mobility'],
    color: '#ff9433',
    image: shouldersImage,
    bgColor: 'rgba(255, 148, 51, 0.9)',
    trainer: 'Lisa Arms'
  },
  {
    day: 'Friday',
    focus: 'Full Body HIIT',
    description: 'Challenge your entire body with this high-intensity circuit training',
    exercises: ['Burpees', 'Mountain Climbers', 'Jump Rope', 'Box Jumps'],
    duration: '40 min',
    intensity: 'Very High',
    benefits: ['Total Body Conditioning', 'Calorie Burn', 'Cardiovascular Health'],
    color: '#33ff57',
    image: hiitImage, 
    bgColor: 'rgba(51, 255, 87, 0.9)',
    trainer: 'Alex Power'
  },
  {
    day: 'Saturday',
    focus: 'Yoga & Flexibility',
    description: 'Improve flexibility, reduce stress and enhance mind-body connection',
    exercises: ['Sun Salutation', 'Warrior Poses', 'Stretching', 'Meditation'],
    duration: '30 min',
    intensity: 'Low',
    benefits: ['Flexibility', 'Stress Reduction', 'Mind-Body Balance'],
    color: '#ffc300',
    image: yogaImage,
    bgColor: 'rgba(255, 195, 0, 0.9)',
    trainer: 'Maya Zen'
  },
  {
    day: 'Sunday',
    focus: 'Active Recovery',
    description: 'Promote muscle recovery and prevent injury with gentle movement',
    exercises: ['Light Walking', 'Swimming', 'Stretching', 'Foam Rolling'],
    duration: '30 min',
    intensity: 'Very Low',
    benefits: ['Improved Recovery', 'Reduced Soreness', 'Injury Prevention'],
    color: '#845ec2',
    image: recoveryImage,
    bgColor: 'rgba(132, 94, 194, 0.9)',
    trainer: 'Robert Rest'
  }
];

const Workout = () => {
  const [selectedDay, setSelectedDay] = useState(null);
  const [animateCards, setAnimateCards] = useState(false);

  useEffect(() => {
    setAnimateCards(true);
  }, []);


  const getIntensityLevel = (intensity) => {
    switch (intensity) {
      case 'Very Low': return 1;
      case 'Low': return 2;
      case 'Medium': return 3;
      case 'High': return 4;
      case 'Very High': return 5;
      default: return 3;
    }
  };

  return (
    <section className="workout-section" id="workouts">
      <div className="workout-intro">
        <div className="workout-header">
          <h2>ELITE TRAINING PROGRAMS</h2>
          <div className="header-accent"></div>
          <p>Scientifically designed workouts to transform your body and elevate your performance</p>
        </div>

        <div className="workout-benefits">
          <div className="benefit-item">
            <div className="benefit-icon">💪</div>
            <h3>Expert Coaching</h3>
            <p>Trained by certified fitness professionals</p>
          </div>
          <div className="benefit-item">
            <div className="benefit-icon">⏱️</div>
            <h3>Efficient Workouts</h3>
            <p>Maximum results in minimum time</p>
          </div>
          <div className="benefit-item">
            <div className="benefit-icon">🔄</div>
            <h3>Progressive Programs</h3>
            <p>Evolving routines to prevent plateaus</p>
          </div>
        </div>
      </div>
          
      <div className={`workout-grid ${animateCards ? 'animate' : ''}`}>
        {workoutData.map((workout, index) => {
          const intensityLevel = getIntensityLevel(workout.intensity);
          
          return (
            <div
              key={index}
              className={`workout-card ${selectedDay === workout.day ? 'active' : ''}`}
              onClick={() => setSelectedDay(workout.day === selectedDay ? null : workout.day)}
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <div className="workout-image" style={{ backgroundImage: `url(${workout.image})` }} />
              <div className="workout-content" style={{ backgroundImage: `linear-gradient(135deg, ${workout.bgColor} 0%, rgba(0,0,0,0.9) 100%)` }}>
                <div className="workout-day-badge" style={{ backgroundColor: workout.color }}>{workout.day}</div>
                <h3>{workout.focus}</h3>
                
                <div className="workout-meta">
                  <span className="workout-duration">{workout.duration}</span>
                  <div className="workout-intensity">
                    <span className="intensity-label">{workout.intensity}</span>
                    <div className="intensity-meter">
                      {[1, 2, 3, 4, 5].map(level => (
                        <span 
                          key={level} 
                          className={`intensity-dot ${level <= intensityLevel ? 'active' : ''}`}
                          style={level <= intensityLevel ? { backgroundColor: workout.color } : {}}
                        ></span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className={`workout-details ${selectedDay === workout.day ? 'show' : ''}`}>
                  <p className="workout-description">{workout.description}</p>
                  
                  <div className="workout-exercises">
                    <h4>Workout Includes:</h4>
                    <ul>
                      {workout.exercises.map((exercise, i) => (
                        <li key={i}>{exercise}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="workout-benefits-list">
                    <h4>Benefits:</h4>
                    <div className="benefits-tags">
                      {workout.benefits.map((benefit, i) => (
                        <span key={i} className="benefit-tag" style={{ backgroundColor: workout.color }}>{benefit}</span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="workout-trainer">
                    <p>Trainer: <strong>{workout.trainer}</strong></p>
                  </div>
                  
                  <div className="workout-cta">
                    <button className="book-class-btn" style={{ backgroundColor: workout.color }}>Book This Class</button>
                    <button className="view-details-btn">View Full Details</button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="workout-footer">
        <div className="workout-motivation">
          <h3>Ready to transform your fitness journey?</h3>
          <p>Join our community of fitness enthusiasts and achieve your goals faster</p>
          <button className="join-now-btn">Join Now</button>
        </div>
      </div>
    </section>
  );
};

export default Workout;
