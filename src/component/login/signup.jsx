import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import PasswordInput from './PasswordInput';
import { Link, useNavigate } from 'react-router-dom';
import { setCredentials } from '../../redux/slices/authSlice';
import { useSignupMutation } from '../../redux/apiSlice';

const Signup = () => {
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const dispatch = useDispatch();
    const [signup, { isLoading, isError, isSuccess }] = useSignupMutation();
    

    const onSubmit = async (data) => {
        if (data.password !== data.confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        const payload = {
            name: data.fullName,
            email: data.email,
            password: data.password,
        };

        try {
            const response = await signup(payload).unwrap();
            dispatch(setCredentials({ token: response.token, user: response.user }));
            console.log('Signup successful', response);
            navigate("/login")
            
        } catch (err) {
            console.error('Failed to signup', err);
          
        }
    };

    return (
        <div className='loginpage signup py-4'>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="card col-12 col-lg-6 p-0">
                        <div className="row g-0 justify-content-center">
                            <div className="col-12">
                                <div className="card-body">
                                    <h3 className="card-title mb-0">Signup</h3>
                                    <p className="card-text mb-0">
                                        Already Have An Account, <Link to="/login" className='text-dark'>Login</Link>
                                    </p>
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <div className="row mt-3">
                                            <div className="col-12">
                                                <div className="mb-3">
                                                    <label htmlFor="fullname" className="form-label mb-2">
                                                        Full name
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="form-control px-3"
                                                        id="fullname"
                                                        placeholder="Full Name"
                                                        {...register('fullName', {
                                                            required: 'Full name is required',
                                                        })}
                                                    />
                                                    {errors.fullName && <p className='text-danger'>{errors.fullName.message}</p>}
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="mb-3">
                                                    <label htmlFor="emailid" className="form-label mb-2">
                                                        Email
                                                    </label>
                                                    <input
                                                        type="email"
                                                        className="form-control px-3"
                                                        id="emailid"
                                                        placeholder="name@example.com"
                                                        {...register('email', {
                                                            required: 'Email is required',
                                                            pattern: {
                                                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                                                message: 'Invalid email address',
                                                            },
                                                        })}
                                                    />
                                                    {errors.email && <p className='text-danger'>{errors.email.message}</p>}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row mt-3">
                                            <div className="col-12">
                                                <div className="mb-3">
                                                    <PasswordInput register={register} errors={errors} itsConfirm={false} />
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="mb-3">
                                                    <PasswordInput register={register} errors={errors} itsConfirm={true} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="main-collection">
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    id="flexCheckDefault"
                                                    {...register('terms', {
                                                        required: 'You must agree to the terms and conditions',
                                                    })}
                                                />
                                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                                    I have read and agreed to the Terms of Service and Privacy Policy
                                                </label>
                                                {errors.terms && <p className='text-danger'>{errors.terms.message}</p>}
                                            </div>
                                        </div>
                                        <button type="submit" className="mt-3 btn submitbtn text-white w-100" disabled={isLoading}>
                                            {isLoading ? 'Creating Account...' : 'Create Account'}
                                        </button>
                                        {isError && <p className='text-danger mt-3'>Failed to signup. Please try again.</p>}
                                        {isSuccess && <p className='text-success mt-3'>Signup successful! Please login.</p>}
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup
