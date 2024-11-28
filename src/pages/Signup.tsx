import React, { useState } from 'react';
import { signup } from '../services/AuthService';
import { useNavigate } from 'react-router-dom';
import background from '../assets/background.png';

const Signup: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [rh, setRh] = useState(''); // estos parametros se deben modificar según su back
    const [weight, setWeight] = useState(0);  // y no es aquí lo importante, sino en los métodos de /src/services/AuthService.ts
    const [message, setMessage] = useState(''); //ahí también es donde manejo el login y la decodificación del token para
    const [error, setError] = useState(''); // re dirigir en el login según su role. Yo solo tengo ROLE_ADMIN y ROLE_USER
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setMessage('');

        try {
            const result = await signup(username, password, email, phone, rh, weight);

            if (!result) {
                setError('Failed to register');
                return;
            }

            setMessage(result);
            navigate('/login');
        } catch (err) {
            setError('An error occurred during signup. Please try again.');
        }
    };

    return (
        <div className="min-h-screen w-full relative">
            {/* Background */}
            <div
                className="absolute inset-0 w-full h-full"
                style={{
                    backgroundImage: `url(${background})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
            />
            
            {/* Content */}
            <div className="relative min-h-screen w-full flex items-center justify-center px-4">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl w-full max-w-xl p-8 md:p-12 shadow-2xl">
                    {/* Header */}
                    <div className="text-center mb-10">
                        <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">Join SkyConnect</h1>
                        <p className="text-blue-100">Start your journey with us</p>
                    </div>

                    {/* Alerts */}
                    {error && (
                        <div className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-xl">
                            <p className="text-red-200 text-center text-sm">{error}</p>
                        </div>
                    )}
                    {message && (
                        <div className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-xl">
                            <p className="text-green-200 text-center text-sm">{message}</p>
                        </div>
                    )}

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            {/* Left column */}
                            <div className="space-y-6">
                                <div>
                                    <label className="block text-white text-sm font-medium mb-2">Username</label>
                                    <input
                                        type="text"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        className="w-full px-4 py-3 rounded-xl border border-white/30 bg-white/10 placeholder-white/50 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-200"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-white text-sm font-medium mb-2">Email</label>
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full px-4 py-3 rounded-xl border border-white/30 bg-white/10 placeholder-white/50 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-200"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-white text-sm font-medium mb-2">Password</label>
                                    <input
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="w-full px-4 py-3 rounded-xl border border-white/30 bg-white/10 placeholder-white/50 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-200"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Right column */}
                            <div className="space-y-6">
                                <div>
                                    <label className="block text-white text-sm font-medium mb-2">Phone</label>
                                    <input
                                        type="text"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        className="w-full px-4 py-3 rounded-xl border border-white/30 bg-white/10 placeholder-white/50 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-200"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-white text-sm font-medium mb-2">Blood Type (RH)</label>
                                    <input
                                        type="text"
                                        value={rh}
                                        onChange={(e) => setRh(e.target.value)}
                                        className="w-full px-4 py-3 rounded-xl border border-white/30 bg-white/10 placeholder-white/50 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-200"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-white text-sm font-medium mb-2">Weight (kg)</label>
                                    <input
                                        type="number"
                                        value={weight}
                                        onChange={(e) => setWeight(parseFloat(e.target.value))}
                                        className="w-full px-4 py-3 rounded-xl border border-white/30 bg-white/10 placeholder-white/50 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-200"
                                        required
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Terms */}
                        <div className="flex items-center mt-6">
                            <input
                                type="checkbox"
                                id="terms"
                                className="h-4 w-4 rounded border-white/30 bg-white/10 text-blue-500 focus:ring-blue-400"
                                required
                            />
                            <label htmlFor="terms" className="ml-2 block text-sm text-white">
                                I agree to the <a href="#" className="text-blue-400 hover:text-blue-300">Terms and Conditions</a>
                            </label>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full py-4 px-4 text-base font-semibold rounded-xl text-white bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-200 shadow-lg"
                        >
                            Create Account
                        </button>
                    </form>

                    {/* Footer */}
                    <p className="mt-8 text-center text-sm text-white/60">
                        Already have an account?{' '}
                        <a href="/login" className="text-blue-400 hover:text-blue-300 font-medium">
                            Sign in
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Signup;