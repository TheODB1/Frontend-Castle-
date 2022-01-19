/*import { getSpaceUntilMaxLength } from '@testing-library/user-event/dist/utils';*/
import React from "react";
// import "./LogIn.css";
import { useForm } from 'react-hook-form';
import { useLocation, Link, Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const LogIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/protected';

  const { isAuthenticated, loading, signin } = useAuth();

  const onSubmit = formData => signin(formData);
  if (loading) return 'Loading...';
  if (isAuthenticated) return <Navigate to={from} replace />;
  return (
    <div className='row mt-5 justify-content-center'>
      <div className='col-md-4'>
        <form onSubmit={handleSubmit(onSubmit)} autoComplete='off'>
          <div>
            <label htmlFor='email' className='form-label'>
              Email:
            </label>
            <input
              className={errors.email ? 'form-control is-invalid' : 'form-control'}
              type='email'
              {...register('email', { required: true })}
            />
            {errors.email && <div className='invalid-feedback'>Email is required</div>}
          </div>
          <div>
            <label htmlFor='password' className='form-label'>
              Password:
            </label>
            <input
              className={errors.password ? 'form-control is-invalid' : 'form-control'}
              type='password'
              {...register('password', { required: true })}
            />
            {errors.password && <div className='invalid-feedback'>Password is required</div>}
          </div>
          <div>
            <small>
              Don't have an account? <Link to='/register'>Register</Link> instead
            </small>
          </div>
          <button type='submit' className='mt-3 btn btn-success'>
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
