import React from 'react';

const OutputDisplay = ({ result }) => {
  return (
    <div>
      <h3>Result:</h3>
      <pre>{result}</pre>
    </div>
  );
};

export default OutputDisplay;