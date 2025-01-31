// src/components/Login.js
import React from 'react';
import { useForm } from 'react-hook-form';
import { useLoginMutation } from '../../redux/apiSlice';
import { useDispatch } from 'react-redux';
import { setCredentials } from '../../redux/slices/authSlice';
import PasswordInput from './PasswordInput';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import loginImg from '../../assets/login.png';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
    
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [login, { isLoading }] = useLoginMutation();

    // const onSubmit = async (data) => {
    //     try {
    //         const response = await login(data).unwrap();
    //         dispatch(setCredentials({
    //             token: response.token,
    //             user: response.user,
    //         }));
    //         toast.success('Login successful!');
    //         // navigate('/');
    //         navigate(from, { replace: true });
    //         const redirectAction = localStorage.getItem("redirectAfterLogin"); // Check stored intent

    //         localStorage.removeItem("redirectAfterLogin"); // Clear stored action

    //         if (redirectAction === "buyNow") {
    //             navigate(from, { replace: true, state: { showBuyNow: true } }); // Pass state for modal
    //         } else {
    //             navigate(from, { replace: true }); // Normal redirect
    //         }

    //     } catch (err) {
    //         toast.error('Login failed. Please check your credentials.');
    //     }
    // };
    const onSubmit = async (data) => {
        try {
            const response = await login(data).unwrap();
            dispatch(setCredentials({
                token: response.token,
                user: response.user,
            }));
            toast.success('Login successful!');

            // Retrieve the stored page to redirect after login
            const redirectPath = localStorage.getItem("redirectAfterLogin") || "/";
            localStorage.removeItem("redirectAfterLogin"); // Remove stored path

            navigate(redirectPath, { replace: true, state: { showBuyNow: redirectPath.includes("product") } });

        } catch (err) {
            toast.error('Login failed. Please check your credentials.');
        }
    };




    return (
        <div className='loginpage py-4'>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="card col-11 col-lg-6 p-0">
                        <div className="row g-0 justify-content-center">
                            <div className="col-12">
                                <div className="card-body">
                                    <h3 className="card-title mb-0">Login</h3>
                                    <p className="card-text">
                                        Do not have an account, <Link to="/signuppage" className='text-dark'> create a new one.</Link>
                                    </p>
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <div className="mb-3">
                                            <label htmlFor="emailid" className='mb-2'>Enter Your Email or Phone</label>
                                            <input
                                                type="email"
                                                className="form-control"
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
                                        <div className="mb-3">
                                            <PasswordInput register={register} errors={errors} />
                                        </div>
                                        <button
                                            type="submit"
                                            className="mt-3 btn submitbtn text-white w-100"
                                            // disabled={isLoading}
                                        >
                                            {isLoading ? 'Logging in...' : 'Login'}
                                        </button>
                                        <a href="" className='text-center w-100 d-block mt-3 text-dark'>Forgot Your Password</a>
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

export default Login;
