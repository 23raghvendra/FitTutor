import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, Outlet } from 'react-router-dom';
import './Progress.css';

const Progress = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('dashboard');

  const tabs = [
    { id: 'dashboard', label: 'Dashboard', path: '/progress' },
    { id: 'goals', label: 'Goals & Streaks', path: '/progress/goals' },
    { id: 'measurements', label: 'Body Stats', path: '/progress/measurements' },
    { id: 'calendar', label: 'Calendar', path: '/progress/calendar' },
    { id: 'photos', label: 'Progress Photos', path: '/progress/photos' }
  ];

  useEffect(() => {
    const path = location.pathname;
    const currentTab = tabs.find(tab => tab.path === path) || tabs[0];
    setActiveTab(currentTab.id);
  }, [location.pathname]);

  return (
    <div className="progress-container">
      <h1 className="progress-title">Track Your Progress</h1>
      
      <div className="progress-tabs">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => navigate(tab.path)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="progress-content">
        <Outlet />
      </div>
    </div>
  );
};

export default Progress;
