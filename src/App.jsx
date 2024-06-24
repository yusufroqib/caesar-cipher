import React, { useState } from 'react';
import InputForm from './components/InputForm';
import OutputDisplay from './components/OutputDisplay';
import { encrypt, decrypt } from './lib/caesarCipher';

function App() {
  const [result, setResult] = useState('');

  const handleSubmit = (text, key, mode) => {
    try {
      const processedText = mode === 'encrypt' ? encrypt(text, key) : decrypt(text, key);
      setResult(processedText);
    } catch (error) {
      setResult(`Error: ${error.message}`);
    }
  };

  return (
    <div className="App">
      <h1>Caesar Cipher Encryption/Decryption</h1>
      <InputForm onSubmit={handleSubmit} />
      <OutputDisplay result={result} />
    </div>
  );
}

export default App;