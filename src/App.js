// frontend/src/App.js
import React, { useState } from 'react';
import Login from './Components/Login';
import PolicySelection from './Components/SelectPolicy';
import FormPage from './Components/FormPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [location, setLocation] = useState('');
  const [selectedPolicy, setSelectedPolicy] = useState('');

  const handleLogin = (location) => {
    setLocation(location);
    setIsLoggedIn(true);
  };

  const handlePolicySelect = (policy) => {
    setSelectedPolicy(policy);
  };

  return (
    <div className="App">
      {!isLoggedIn ? (
        <Login onLogin={handleLogin} />
      ) : selectedPolicy ? (
        <FormPage policy={selectedPolicy} />
      ) : (
        <PolicySelection location={location} onPolicySelect={handlePolicySelect} />
      )}
    </div>
  );
}

export default App;
