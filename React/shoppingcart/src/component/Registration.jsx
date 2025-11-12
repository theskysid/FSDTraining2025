import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Registration({regData}) {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function getData(e) {
    e.preventDefault(); // prevent page reload
    //alert(`Name: ${name}\nEmail: ${email}\nPassword: ${password}`);
    const data = {
      name,
      email,
      password
    };
    regData(data);
    //console.log('Registration Data:', data);
  }

  return (
    <div className="container mt-5" style={{ maxWidth: "400px" }}>
      <h2 className="mb-4 text-center">Registration</h2>
      <form onSubmit={getData}>
        <div className="form-group mb-3">
          <label htmlFor="nameInput">Name</label>
          <input 
            type="text" 
            className="form-control" 
            id="nameInput"
            value={name}
            onChange={(e) => setName(e.target.value)} 
            required
          />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="emailInput">Email address</label>
          <input 
            type="email" 
            className="form-control" 
            id="emailInput"
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
            required
          />
          <small className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>

        <div className="form-group mb-4">
          <label htmlFor="passwordInput">Password</label>
          <input 
            type="password" 
            className="form-control" 
            id="passwordInput"
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
            required
          />
        </div>

        <div className="form-check mb-3">
          <input type="checkbox" className="form-check-input" id="checkBox" />
          <label className="form-check-label" htmlFor="checkBox">Check me out</label>
        </div>

        <button type="submit" className="btn btn-primary w-100">Submit</button>
      </form>
    </div>
  );
}

export default Registration;
