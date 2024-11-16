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
    Aligarh: { username: '12329', password: 'Aibc@123' },
    Aurangabad: { username: '19060', password: 'Aibc@123' },
    Bikaner: { username: '18599', password: 'Aibc@123' },
    Cochin: { username: '19974', password: 'Aibc@123' },
    Goa: { username: '19644', password: 'Aibc@123' },
    Jalandhar: { username: '17973', password: 'Aibc@123' },
    Kadapa: { username: 'user8', password: 'Aibc@123' },
    Kolhapur: { username: '17914', password: 'Aibc@123' },
    Ludhiana: { username: '17962', password: 'Aibc@123' },
    Machilipatnam: { username: '2968', password: 'Aibc@123' },
    Nagpur: { username: '17915', password: 'Aibc@123' },
    Nanded: { username: '17895', password: 'Aibc@123' },
    Rajahmundry: { username: '16541', password: 'Aibc@123' },
    Rohtak: { username: '12313', password: 'Aibc@123' },
    Thrissur: { username: '17085', password: 'Aibc@123' },



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
