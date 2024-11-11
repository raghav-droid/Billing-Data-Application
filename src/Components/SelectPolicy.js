// frontend/src/Components/SelectPolicy.js
import React, { useState } from 'react';
import './SelectPolicyStyles.css';

function PolicySelection({ location, onPolicySelect }) {
  const [selectedPolicy, setSelectedPolicy] = useState('');

  const handlePolicySelection = () => {
    if (selectedPolicy) {
      onPolicySelect(selectedPolicy); // Pass the selected policy to App.js
    } else {
      alert("Please select a policy before proceeding.");
    }
  };

  return (
    <div className="policy-container">
      <div className="policy-form">
        <h2>Select Policy</h2>
        <p>Location: {location}</p>
        <select
          value={selectedPolicy}
          onChange={(e) => setSelectedPolicy(e.target.value)}
        >
          <option value="">-- Select a Policy --</option>
          <option value="PD">PD</option>
          <option value="INC">INC</option>
          <option value="PS">PS</option>
          <option value="NB">NB</option>
          <option value="Legal">Legal</option>
          <option value="H-INC&PD">H-INC&PD</option>
          <option value="PL">PL</option>
          <option value="Pension">Pension</option>
        </select>
        <button onClick={handlePolicySelection}>Proceed</button>
      </div>
    </div>
  );
}

export default PolicySelection;
