import React, { useEffect, useState } from 'react';
import { loadProgress } from '../services/progressService';

const Progress = () => {
  const [progress, setProgress] = useState([]);

  useEffect(() => {
    setProgress(loadProgress());
  }, []);

  return (
    <div>
      <h2>Your Progress</h2>
      <ul>
        {progress.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Progress;