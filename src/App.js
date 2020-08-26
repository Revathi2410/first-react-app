import React from 'react';
import './examples/examples-css.css';
import Login from './examples/LoginPage';
import ValidationError from './examples/ValidationError';

function App() {
  return (
    <div className="Login-background Login-header">
    <ValidationError>
       <Login />
    </ValidationError>
    </div>
  );
}

export default App;
