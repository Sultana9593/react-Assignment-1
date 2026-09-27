import React from 'react';
import './App.css';
import profilePhoto from './assets/photo.jpg'; 

function App() {
  return (
    <div style={{ maxWidth: '750px', margin: '40px auto', padding: '40px', fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif', backgroundColor: '#f4f7f6', borderRadius: '15px', boxShadow: '0 8px 16px rgba(0,0,0,0.1)' }}>
      
      {/* Profile Header with Photo */}
      <header style={{ textAlign: 'center', marginBottom: '35px' }}>
        <img 
          src={profilePhoto} 
          alt="Profile" 
          style={{ width: '130px', height: '130px', borderRadius: '50%', objectFit: 'cover', border: '4px solid #3498db', boxShadow: '0 4px 8px rgba(0,0,0,0.15)', marginBottom: '15px' }} 
        />
        <h1 style={{ color: '#2c3e50', marginBottom: '15px 0 5px 0' }}>My Portfolio</h1>
        <h2 style={{ color: '#3498db', fontSize: '22px', marginTop: '10px',marginBottom:'10px' }}>Hello, I am CHHAMANA SULTANA</h2>
        <p style={{ color: '#666', fontSize: '16px' }}>Front-End Developer & React Learner</p>
      </header>

      {/* About Me Section */}
      <section style={{ marginBottom: '25px', background: '#fff', padding: '25px', borderRadius: '10px', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>
        <h3 style={{ color: '#2c3e50', borderBottom: '2px solid #3498db', paddingBottom: '8px', marginTop: '0' }}>About Me</h3>
        <p style={{ color: '#555', lineHeight: '1.7', fontSize: '15px' }}>
          I am an enthusiastic front-end development student. I love creating clean, user-friendly websites and currently expanding my skills in React and modern web technologies.
        </p>
      </section>

      {/* Skills Section */}
      <section style={{ marginBottom: '25px', background: '#fff', padding: '25px', borderRadius: '10px', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>
        <h3 style={{ color: '#2c3e50', borderBottom: '2px solid #3498db', paddingBottom: '8px', marginTop: '0' }}>Skills</h3>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '15px' }}>
          {['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Git & GitHub'].map((skill, index) => (
            <span key={index} style={{ backgroundColor: '#ebf5fb', color: '#2980b9', padding: '8px 15px', borderRadius: '20px', fontSize: '14px', fontWeight: '600' }}>
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section style={{ background: '#fff', padding: '25px', borderRadius: '10px', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>
        <h3 style={{ color: '#2c3e50', borderBottom: '2px solid #3498db', paddingBottom: '8px', marginTop: '0' }}>Contact</h3>
        <p style={{ color: '#555', margin: '8px 0' }}>📧 Email: chhamanasultana231001102221@technoindiaeducation.com</p>
        <p style={{ color: '#555', margin: '8px 0' }}>💻 GitHub: github.com/Sultana</p>
      </section>

    </div>
  );
}

export default App;