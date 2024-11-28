import React from 'react';
import { Link } from 'react-router-dom';
import background from '../assets/background.png';

const Index: React.FC = () => {
    return (
        <div className="min-h-screen bg-cover bg-center bg-no-repeat text-white relative" 
             style={{ backgroundImage: `url(${background})` }}>
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent"></div>

            {/* Content wrapper */}
            <div className="relative z-10">
                {/* Header */}
                <header className="container mx-auto px-6 py-8">
                    <nav className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
                        <div className="flex items-center justify-between">
                            <div className="text-3xl font-bold tracking-wider">
                                Sky<span className="text-blue-400">Connect</span>
                            </div>
                            {/* Mobile menu button would go here */}
                        </div>
                        
                        <ul className="hidden md:flex items-center space-x-12">
                            <li><Link to="/" className="text-blue-400 font-medium">Flights</Link></li>
                            <li><Link to="/destinations" className="hover:text-blue-400 transition-colors duration-300">Destinations</Link></li>
                            <li><Link to="/contact" className="hover:text-blue-400 transition-colors duration-300">Contact</Link></li>
                        </ul>

                        <div className="flex items-center space-x-6">
                            <Link to="/login">
                                <button className="px-6 py-2.5 text-sm font-medium hover:text-blue-400 transition-colors duration-300">
                                    Sign In
                                </button>
                            </Link>
                            <Link to="/signup">
                                <button className="bg-blue-500 px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-blue-600 transition-all duration-300 shadow-lg shadow-blue-500/30">
                                    Join Now
                                </button>
                            </Link>
                        </div>
                    </nav>
                </header>

                {/* Main Content - Split into two columns on larger screens */}
                <main className="container mx-auto px-6">
                    <div className="min-h-[calc(100vh-8rem)] grid md:grid-cols-2 gap-12 items-center">
                        {/* Left Column - Main Content */}
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-blue-400 text-lg font-medium mb-3">Welcome to SkyConnect</h2>
                                <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                                    Your gateway to the
                                    <span className="text-blue-400 block mt-2">world</span>
                                </h1>
                            </div>
                            
                            <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
                                Experience seamless travel with our award-winning service. 
                                Connecting you to over 150 destinations worldwide.
                            </p>

                            {/* Action Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <Link to="/book" className="flex-1 sm:flex-none">
                                    <button className="w-full sm:w-auto bg-blue-500 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-blue-600 transition-all duration-300 shadow-lg shadow-blue-500/30">
                                        Book Your Flight
                                    </button>
                                </Link>
                                <Link to="/offers" className="flex-1 sm:flex-none">
                                    <button className="w-full sm:w-auto bg-white/10 backdrop-blur-sm border border-white/20 px-8 py-4 rounded-lg text-lg font-medium hover:bg-white/20 transition-all duration-300">
                                        Special Offers
                                    </button>
                                </Link>
                            </div>
                        </div>

                        {/* Right Column - Stats/Features */}
                        <div className="hidden md:grid grid-cols-2 gap-6 content-center">
                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                                <div className="text-4xl font-bold text-blue-400">150+</div>
                                <div className="text-gray-300 mt-2">Destinations</div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                                <div className="text-4xl font-bold text-blue-400">5★</div>
                                <div className="text-gray-300 mt-2">Rated Service</div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                                <div className="text-4xl font-bold text-blue-400">24/7</div>
                                <div className="text-gray-300 mt-2">Support</div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                                <div className="text-4xl font-bold text-blue-400">1M+</div>
                                <div className="text-gray-300 mt-2">Happy Travelers</div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Index;