// src/ResumeForm.js
import React from 'react';

const ResumeForm = ({ data, onChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className="resume-form">
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={data.name}
          onChange={(e) => onChange('name', e.target.value)}
          required
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={data.email}
          onChange={(e) => onChange('email', e.target.value)}
          required
        />
      </div>
      <div>
        <label>Phone:</label>
        <input
          type="tel"
          value={data.phone}
          onChange={(e) => onChange('phone', e.target.value)}
          required
        />
      </div>
      <div>
        <label>Summary:</label>
        <textarea
          value={data.summary}
          onChange={(e) => onChange('summary', e.target.value)}
          rows="3"
          required
        />
      </div>
      <div>
        <label>Education:</label>
        <textarea
          value={data.education}
          onChange={(e) => onChange('education', e.target.value)}
          rows="3"
          required
        />
      </div>
      <div>
        <label>Experience:</label>
        <textarea
          value={data.experience}
          onChange={(e) => onChange('experience', e.target.value)}
          rows="3"
          required
        />
      </div>
      <div>
        <label>Skills:</label>
        <textarea
          value={data.skills}
          onChange={(e) => onChange('skills', e.target.value)}
          rows="3"
          required
        />
      </div>
      <button type="submit">Preview Resume</button>
    </form>
  );
};

export default ResumeForm;
