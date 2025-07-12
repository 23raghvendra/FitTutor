import React, { useState } from 'react';
import './Profile.css';
import workoutImage3 from '../../assets/3.jpg'; // Import background image

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: 'John Doe',
    image: "https://via.placeholder.com/150",
    fitnessGoal: 'Build Muscle & Strength',
    weight: 75,
    height: 175,
    bmi: 24.5,
    achievements: ['10K Steps Daily', 'Weight Goal Achieved', '30 Days Streak'],
    nextWorkout: 'Strength Training - Monday',
    completedWorkouts: 24,
    motto: "Stronger Every Day",
    level: "Advanced",
    streakDays: 15
  });

  return (
    <div className="profile-container">
      <div className="profile-background"></div>
      <div className="profile-content">
        <div className="profile-card">
          <div className="profile-header">
            <div className="profile-image-container">
              <img src={profileData.image} alt="Profile" className="profile-image" />
              {isEditing && (
                <button className="change-photo-btn">
                  <i className="fas fa-camera"></i>
                </button>
              )}
            </div>
            <h2 className="profile-name">{profileData.name}</h2>
            <p className="profile-goal">{profileData.fitnessGoal}</p>
          </div>

          <div className="profile-motto">
            <span className="motto-quote">" {profileData.motto} "</span>
            <span className="level-badge">{profileData.level}</span>
          </div>

          <div className="profile-stats-grid">
            <div className="stat-card">
              <span className="stat-icon">⚖️</span>
              <div className="stat-details">
                <span className="stat-label">Weight</span>
                <span className="stat-value">{profileData.weight} kg</span>
              </div>
            </div>
            <div className="stat-card">
              <span className="stat-icon">📏</span>
              <div className="stat-details">
                <span className="stat-label">Height</span>
                <span className="stat-value">{profileData.height} cm</span>
              </div>
            </div>
            <div className="stat-card">
              <span className="stat-icon">📊</span>
              <div className="stat-details">
                <span className="stat-label">BMI</span>
                <span className="stat-value">{profileData.bmi}</span>
              </div>
            </div>
          </div>

          <div className="streak-banner">
            <span className="streak-icon">🔥</span>
            <span className="streak-text">{profileData.streakDays} Day Streak!</span>
          </div>

          <div className="achievements-section">
            <h3>Achievements</h3>
            <div className="achievements-grid">
              {profileData.achievements.map((achievement, index) => (
                <div key={index} className="achievement-card">
                  <span className="achievement-icon">🏆</span>
                  <span className="achievement-text">{achievement}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="workout-summary">
            <h3>Workout Progress</h3>
            <div className="workout-stats">
              <div className="workout-stat">
                <span className="stat-number">{profileData.completedWorkouts}</span>
                <span className="stat-label">Completed Workouts</span>
              </div>
              <div className="next-workout">
                <span className="next-workout-label">Next Session</span>
                <span className="next-workout-value">{profileData.nextWorkout}</span>
              </div>
            </div>
          </div>

          <button 
            className="edit-profile-btn" 
            onClick={() => setIsEditing(!isEditing)}
          >
            {isEditing ? 'Save Profile' : 'Edit Profile'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
