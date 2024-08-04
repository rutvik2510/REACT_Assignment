import React, { useState } from 'react';
import './App.css';
import Hellomsg from './components/assignment-1/HelloWorld';
import PersonalGreeting from './components/assignment-1/Personal-Greeting';
import SimpleCalculator from './components/assignment-1/SimpleCalculator';
import StyledText from './components/assignment-1/StyledText';
import DynamicMessage from './components/assignment-1/DynamicMessage';

function App() {
  const [status, setStatus] = useState('success');

  
  const handleChange = (event) => {
    setStatus(event.target.value);
  };
  
  return (
    <>
    <Hellomsg/>
    <PersonalGreeting name={"Rutvik"}/>
    <SimpleCalculator a={10} b={5}/>
    <StyledText/>
    <DynamicMessage/>
    <div>
    <h2>Select a Status</h2>
      <select value={status} onChange={handleChange}>
        <option value="success">Success</option>
        <option value="error">Error</option>
        <option value="warning">Warning</option>
        <option value="unknown">Unknown</option>
      </select>

      <DynamicMessage status={status} />
    </div>
    </>
  )
}

export default App;
