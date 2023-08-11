import React, { useState } from 'react';
import './style.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function LoginForm() {
  const navigate=useNavigate();
  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const handleInput = event => {
    const { name, value } = event.target;
    setValues(prevValues => ({ ...prevValues, [name]: value }));
  };

  const handleApi = () => {
    console.log({ email: values.email, password: values.password });
    axios
      .post('https://ismmart-dd9fd21491a7.herokuapp.com/Login', {
        email: values.email,
        password: values.password,
      })
      .then(result => {
        console.log(result.data);
        alert('Sign up success');
        navigate('/home');
      })
      .catch(error => {
        alert('Service error');
        console.log(error);
      });
  };

  return (
    <>
      <div className="p-5 component-below-nav">
        <form>
          <div className="form-group">
        <h2 className="text-center text-white pb-2">Login</h2>
            <label htmlFor="email">Enter Email address</label>
            <div className="input-group w-100">
          <div class="input-group-prepend">
          <span class="input-group-text"><i class="fas fa-envelope"></i></span>
        </div>
            <input
              type="email"
              placeholder="Email"
              className="form-control"
              id="email"
              name="email"
              value={values.email}
              onChange={handleInput}
              required
            />
          </div>
          </div>
          <div className="form-group">
            <label htmlFor="password">Enter Password</label>
            <div className="input-group w-100">
          <div class="input-group-prepend">
          <span class="input-group-text"><i class="fas fa-lock"></i></span>
        </div>
            <input
              type="password"
              placeholder="Password"
              className="form-control"
              id="password"
              name="password"
              value={values.password}
              onChange={handleInput}
              required
            />
          </div></div>
          <button type="button" className="btn btn-info btn-block mt-4" onClick={handleApi}>
            Login
          </button>
          <Link to="/home">
            <input className="btn btn-success btn-block mt-2" type="button" value="Logout" />
          </Link>
        </form>
      </div>
    </>
  );
}

export default LoginForm;
