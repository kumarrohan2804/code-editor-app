import { useState } from 'react';
import Editor from '@monaco-editor/react';

const CodeEditor = () => {
  const [code, setCode] = useState('\n// Write your code here...');
  const [output, setOutput] = useState('');
  const [message, setMessage] = useState('');
    const [darkMode, setDarkMode] = useState(true);
    const [error, setError] = useState('');

    const handleRun = () => {
        try {
            setOutput(`Mock output:  ${eval(code)}`);
            setError('');
        } catch (err) {
            console.log(err.toString());
            setError(err.toString());
      }
    
  };

  const handleSubmit = () => {
      setMessage('Mock submission: Code submitted successfully!');
      setTimeout(() => {
          setMessage('');
      }, 1300);
  };

  return (
    <div className={`flex flex-col h-full ${darkMode ? 'dark' : ''}`}>
      <div className="flex items-center mb-2">
              <span className="mr-2">{ darkMode ? "Dark": "Light"}</span>
        <label className="switch">
          <input type="checkbox" checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
          <span className="slider round"></span>
        </label>
      </div>
      <div className={`flex-1 ${!darkMode ? 'editor-shadow':''}`}>
        <Editor
          height="500px"
          language="javascript"
          theme={darkMode ? 'vs-dark' : 'vs-light'}
          value={code}
          onChange={(value) => setCode(value)}
        />
      </div>
      <div className="flex space-x-4 mt-2">
        <button onClick={handleRun} className="btn-primary">
          Run
        </button>
        <button onClick={handleSubmit} className="btn-secondary">
          Submit
        </button>
      </div>
      {output && <div className="output mt-4">{output}</div>}
          {message && <div className="message mt-4">{message}</div>}
          {error && <div className="message mt-4 error">{error}</div>}
    </div>
  );
};

export default CodeEditor;
