// src/App.js
import React, { useState } from 'react';
import ResumeForm from './ResumeForm';
import ResumePreview from './ResumePreview';
import './App.css';

function App() {
  const [resumeData, setResumeData] = useState({
    name: '',
    email: '',
    phone: '',
    summary: '',
    education: '',
    experience: '',
    skills: ''
  });

  const [showPreview, setShowPreview] = useState(false);

  // Update resume data field
  const handleChange = (field, value) => {
    setResumeData(prevData => ({
      ...prevData,
      [field]: value
    }));
  };

  // On form submit, show preview
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPreview(true);
  };

  // Allow going back to editing
  const handleEdit = () => {
    setShowPreview(false);
  };

  return (
    <div className="App">
      <h1>Resume Builder</h1>
      {showPreview ? (
        <div>
          <ResumePreview data={resumeData} />
          <button onClick={handleEdit}>Edit Resume</button>
        </div>
      ) : (
        <ResumeForm data={resumeData} onChange={handleChange} onSubmit={handleSubmit} />
      )}
    </div>
  );
}

export default App;
