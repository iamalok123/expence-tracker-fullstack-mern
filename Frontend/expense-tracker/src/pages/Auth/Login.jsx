import React, { useState,useContext } from 'react';
import AuthLayout from '../../components/layouts/AuthLayout';
import { useNavigate, Link } from 'react-router-dom';
import Input from '../../components/Inputs/Input';
import { validateEmail } from '../../utils/helper';
import axiosInstance from '../../utils/axiosInstance';
import { API_PATHS } from '../../utils/apiPaths';
import { UserContext } from '../../context/UserContext';


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const {updateUser} = useContext(UserContext);

    const handleLogin = async (e) => {
        e.preventDefault();

        if (!validateEmail(email)) {
            setError("Please enter a valid email address");
            return;
        }

        if (!password || password.length < 8) {
            setError("Please enter a valid password (at least 8 characters)");
            return;
        }

        setError("");
        setLoading(true);

        try {
        const response = await axiosInstance.post(API_PATHS.AUTH.LOGIN, {
            email,
            password,
        });

        const { user,token } = response.data;
        if (token) {
            localStorage.setItem('token', token);
            updateUser(user) ;
            navigate('/dashboard');
        } else {
            setError("Login failed. Please try again.");
        }
        } catch (error) {
            if (error.response?.data?.message) {
                setError(error.response.data.message);
            } else {
                setError('Something went wrong. Please try again.');
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <AuthLayout>
            <div className='lg:w-[70%] h-3/4 md:h-full flex flex-col justify-center'>
                <h3 className='text-xl font-semibold text-black'>
                    Welcome Back
                </h3>
                <p className='text-xs text-slate-700 mt-[5px] mb-6'>
                    Please enter your details to login
                </p>

                <form className='flex flex-col gap-4' onSubmit={handleLogin}>
                    <Input
                        value={email}
                        onChange={({ target }) => {
                            setEmail(target.value);
                            setError("");
                        }}
                        label='Email Address'
                        placeholder='alok@gmail.com'
                        type='email'
                    />
                    <Input
                        value={password}
                        onChange={({ target }) => {
                            setPassword(target.value);
                            setError("");
                        }}
                        label='Password'
                        placeholder='Min 8 Characters'
                        type='password'
                    />

                    {error && <p className='text-red-500 text-xs pb-2.5'>{error}</p>}

                    <button type='submit' className='btn-primary' disabled={loading}>
                        {loading ? "Logging in..." : "LOGIN"}
                    </button>

                    <p className='text-[13px] text-slate-800 mt-3'>
                        Don't have an account?
                        <Link
                            className='font-medium text-primary underline pl-3'
                            to='/signup'
                        >
                            Signup
                        </Link>
                    </p>
                </form>
            </div>
        </AuthLayout>
    );
};

export default Login;
