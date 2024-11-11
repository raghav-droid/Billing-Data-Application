// frontend/src/components/Login.js
import React, { useState } from 'react';
import './Login.css';
import './SelectPolicyStyles.css'


function Login({ onLogin }) {
  const [location, setLocation] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Mock credentials based on location
  const credentials = {
    Bengaluru: { username: '3130', password: '9060778899@123' },
    Aligarh: { username: 'user2', password: 'pass2' },
    Aurangabad: { username: 'user3', password: 'pass3' },
    Bikaner: { username: 'user4', password: 'pass4' },
    Cochin: { username: 'user5', password: 'pass5' },
    Goa: { username: 'user6', password: 'pass6' },
    Jalandhar: { username: 'user7', password: 'pass7' },
    Kadapa: { username: 'user8', password: 'pass8' },
    Kolhapur: { username: 'user9', password: 'pass9' },
    Ludhiana: { username: 'user10', password: 'pass10' },
    Machilipatnam: { username: 'user11', password: 'pass11' },
    Nagpur: { username: 'user12', password: 'pass12' },
    Nanded: { username: 'user13', password: 'pass13' },
    Rajahmundry: { username: 'user14', password: 'pass14' },
    Rohtak: { username: 'user15', password: 'pass15' },
    Thrissur: { username: 'user16', password: 'pass16' },



    // Add more location-based credentials
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      credentials[location] &&
      credentials[location].username === username &&
      credentials[location].password === password
    ) {
      onLogin(location);  // Log in if credentials match
    } else {
      setError('Invalid username or password for this location');
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Billing Data Application</h2>
        <h2>Login</h2>
        <select onChange={(e) => setLocation(e.target.value)} required>
          <option value="">Select Location</option>
          <option value="Bengaluru">Bengaluru</option>
          <option value="Aligarh">Aligarh</option>
          <option value="Aurangabad">Aurangabad</option>
          <option value="Bikaner">Bikaner</option>
          <option value="Cochin">Cochin</option>
          <option value="Goa">Goa</option>
          <option value="Jalandhar">Jalandhar</option>
          <option value="Kadapa">Kadapa</option>
          <option value="Kolhapur">Kolhapur</option>
          <option value="Ludhiana">Ludhiana</option>
          <option value="Machilipatnam">Machilipatnam</option>
          <option value="Nagpur">Nagpur</option>
          <option value="Nanded">Nanded</option>
          <option value="Rajahmundry">Rajahmundry</option>
          <option value="Rohtak">Rohtak</option>
          <option value="Thrissur">Thrissur</option>

          {/* Add more locations as needed */}
        </select>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
}

export default Login;
