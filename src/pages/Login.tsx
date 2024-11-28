import React, { useState } from 'react';
import { login } from '../services/AuthService';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import background from '../assets/login.png';

const Login: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { login: authLogin } = useAuth();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        try {
            const token = await login(username, password);
            console.log('Received token:', token);

            if (!token) {
                setError('Failed to login');
                return;
            }

            authLogin(token);

            const tokenParts = token.split('.');
const payload = JSON.parse(atob(tokenParts[1]));
const userRole = payload.roles?.[0] || payload.role || payload.authorities?.[0];

        if (userRole?.includes('ROLE_WORKER')) {
            console.log('Redirecting to worker');
            navigate('/worker', { replace: true });
        } else if (userRole?.includes('ROLE_USER')) {
            console.log('Redirecting to user');
            navigate('/user', { replace: true });
        } else {
            console.log('No role found, redirecting to home');
            navigate('/', { replace: true });
        }
        } catch (err) {
            console.error('Login error:', err);
            setError('An error occurred during login. Please check the console for details.');
        }
    };

    return (
        <div className="min-h-screen w-full relative">
            {/* Background Image */}
            <div
                className="absolute inset-0 w-full h-full"
                style={{
                    backgroundImage: `url(${background})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
            />

            {/* Content Container */}
            <div className="relative min-h-screen w-full flex flex-col items-center justify-center px-4">
                {/* Main Card */}
                <div className="bg-white/10 backdrop-blur-md border border-white/50 rounded-3xl w-full max-w-md p-10 shadow-2xl">
                    {/* Header Section */}
                    <div className="text-center mb-8">
                        <h1 className="text-4xl font-bold text-white mb-2">SkyFly</h1>
                        <p className="text-lg text-blue-100">Welcome aboard</p>
                    </div>

                    {/* Divider */}
                    <div className="border-b border-white/20 w-3/4 mx-auto mb-8"></div>

                    {/* Login Form Section */}
                    {error && (
                        <div className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-xl">
                            <p className="text-red-200 text-center text-sm">{error}</p>
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <label htmlFor="username" className="block text-white text-sm font-medium pl-1">
                                Username
                            </label>
                            <input
                                id="username"
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="w-full px-4 py-3 rounded-xl border border-white/30 bg-white/10 placeholder-white/50 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-200"
                                placeholder="Enter your username"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="password" className="block text-white text-sm font-medium pl-1">
                                Password
                            </label>
                            <input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-4 py-3 rounded-xl border border-white/30 bg-white/10 placeholder-white/50 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-200"
                                placeholder="Enter your password"
                            />
                        </div>

                        {/* Remember Me & Forgot Password */}
                        <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center">
                                <input
                                    id="remember-me"
                                    type="checkbox"
                                    className="h-4 w-4 rounded border-white/30 bg-white/10 text-blue-500 focus:ring-blue-400"
                                />
                                <label htmlFor="remember-me" className="ml-2 text-white">
                                    Remember me
                                </label>
                            </div>
                            <a href="#" className="text-blue-100 hover:text-white transition-colors duration-200">
                                Forgot password?
                            </a>
                        </div>

                        <button
                            type="submit"
                            className="w-full py-4 px-4 text-base font-semibold rounded-xl text-white bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-200 shadow-lg"
                        >
                            Continue your journey
                        </button>
                    </form>

                    {/* Footer */}
                    <p className="mt-6 text-center text-white/60 text-sm">
                        Don't have an account?{' '}
                        <a href="/signup" className="text-blue-100 hover:text-white font-medium transition-colors duration-200">
                            Join SkyFly
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;