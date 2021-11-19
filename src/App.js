import './App.css';
import React from 'react';
import { useState } from 'react';

function App() {


  const [name, setName] = useState({});
  const [password, setPasswred] = useState({});
  function checkName(e) {
    setName(e.target.value)
  };

  function checkPassword(e) {
    setPasswred(e.target.value)
  };


  function submitResult(e) {
    e.preventDefault();
    console.log('name ', name.toUpperCase());
    if (name.toUpperCase() == 'ADMIN' && password == '123')
      alert('Hello admin')
    else
      alert('Validation Error')
  }
  console.log(name);
  console.log(password);

  return (
    <>
      <form onSubmit={submitResult}>
        <input type="text" required  onChange={checkName} />
        <input type="password" required onChange={checkPassword} />
        <button type="submit" >
          Submit
        </button>
      </form>
   

    </>
  );
}

export default App;
