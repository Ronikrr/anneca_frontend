import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

const PasswordInput = ({ register, errors, itsConfirm }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="form-group position-relative">
      <label htmlFor={itsConfirm ? 'confirmPassword' : 'password'} className='mb-2'>
        {itsConfirm ? 'Confirm Password' : 'Password'}
      </label>
      <input
        type={showPassword ? 'text' : 'password'}
        className="form-control px-3"
        id={itsConfirm ? 'confirmPassword' : 'password'}
        placeholder="***********"
        {...register(itsConfirm ? 'confirmPassword' : 'password', {
          required: 'Password is required',
          minLength: {
            value: 8,
            message: 'Password must be at least 8 characters long',
          },
        })}
      />
      <span
        onClick={togglePasswordVisibility}
        style={{
          position: 'absolute',
          right: '10px',
          top: '43px',
          cursor: 'pointer',
        }}
      >
        {!showPassword ? <FaEyeSlash /> : <FaEye />}
      </span>
      {errors[itsConfirm ? 'confirmPassword' : 'password'] && (
        <p className='text-danger'>{errors[itsConfirm ? 'confirmPassword' : 'password'].message}</p>
      )}
    </div>
  );
};

export default PasswordInput;
