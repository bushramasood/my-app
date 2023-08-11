import React, { useState } from 'react';
import './style.css';
import { Link , useNavigate} from 'react-router-dom';
import axios from 'axios';

function RegistrationForm() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  function handleInput(event) {
    const newObj = { ...values, [event.target.name]: event.target.value };
    setValues(newObj);
  }

  const [errors, setErrors] = useState({});

  function handleValidation(event) {
    event.preventDefault();
    setErrors(Validation(values));
  }

  function Validation(values) {
    const errors = {};
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[.!@#$%^&*()\-_=+{}[\]:;<>,.?/~])[a-zA-Z0-9.!@#$%^&*()\-_=+{}[\]:;<>,.?/~]{8,}$/;
    if (values.name === '') {
      errors.name = 'Name is Required!';
    }
    if (values.email === '') {
      errors.email = 'Email is required';
    } else if (!email_pattern.test(values.email)) {
      errors.email = "Email didn't match the pattern";
    }

    if (values.password === '') {
      errors.password = 'Password required';
    } else if (!password_pattern.test(values.password)) {
      errors.password =
        'Password must contain at least 8 characters, one lowercase, one uppercase, and one digit';
    }

    if (values.confirmPassword === '') {
      errors.confirmPassword = 'Confirm Password is required';
    } else if (values.confirmPassword !== values.password) {
      errors.confirmPassword = 'Passwords do not match';
    }

    return errors;
  }

  
  const handleApi = () => {
    console.log({ email: values.email, password: values.password });
    axios.post('https://ismmart-dd9fd21491a7.herokuapp.com/Signup', {
      name: values.name,
       email: values.email,
        password: values.password,
        confirmPassword: values.confirmPassword
      }).then((result) => {
        console.log(result.data);
        alert('Sign up success');
         // Navigate to the loginForm route
         navigate('/loginForm');
      })
      .catch((error) => {
        alert('Service error');
        console.log(error);
      });
    };
    
  return (
    <>
      <div className="p-5 component-below-nav">
        <form onSubmit={handleValidation}>
        <h2 className="text-center text-white pb-2">Sign up</h2>
          <div className="form-group">
            <label htmlFor="name">Enter Name</label>
            <div className="input-group w-100">
          <div class="input-group-prepend">
          <span class="input-group-text"><i class="fas fa-user"></i></span>
        </div>
            <input
              type="text"
              placeholder="Name"
              className="form-control"
              id="name"
              name="name"
              onChange={handleInput}
            />
            {errors.name && <p className="validation">{errors.name}</p>}
          </div></div>
          <div className="form-group">
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
              onChange={handleInput}
            />
            {errors.email && <p className="validation">{errors.email}</p>}
          </div></div>
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
              onChange={handleInput}
              required
            />
            {errors.password && <p className="validation">{errors.password}</p>}
          </div></div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <div className="input-group w-100">
          <div class="input-group-prepend">
          <span class="input-group-text"><i class="fas fa-lock"></i></span>
        </div>
            <input
              type="password"
              placeholder="Confirm Password"
              className="form-control"
              id="confirmPassword"
              name="confirmPassword"
              onChange={handleInput}
              required
            />
            {errors.confirmPassword && (
              <p className="validation">{errors.confirmPassword}</p>
            )}
          </div>
          </div>
            <button type="submit" className="btn btn-info btn-block mt-4" onClick={handleApi}>
              Sign up
            </button>
              <Link to="/home">
                <input className="btn btn-success btn-block mt-2" type="button" value="Back" />
              </Link>
           
        </form>
      </div>
    </>
  );
}

export default RegistrationForm;
