import React from 'react';
import { Link } from 'react-router-dom';

export default function DSALandingPage() {
    return (
        <div className="min-h-screen bg-gray-900 text-white overflow-hidden relative">
            {/* Header */}
            <header className="flex justify-between items-center p-6 relative z-10">
                <h1 className="text-xl font-semibold">Vaibhav Bhadane</h1>
                <div className="flex items-center space-x-6">
                    <Link
                        to="/login"
                        className="text-gray-300 hover:text-white transition-colors"
                    >
                        Login
                    </Link>
                    <Link
                        to="/signup"
                        className="text-gray-300 hover:text-white transition-colors"
                    >
                        Sign Up
                    </Link>
                    <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                        <div className="w-4 h-4 bg-yellow-300 rounded-full"></div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <div className="flex items-center justify-between px-6 py-12 relative z-10 max-w-7xl mx-auto">
                {/* Left Side - Text Content */}
                <div className="flex-1 max-w-2xl">
                    <h2 className="text-6xl font-bold leading-tight mb-6">
                        Navigating My DSA Journey and Coding Challenges
                    </h2>
                    <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                        Exploring solutions in sorting, data structures, and complex coding puzzles.
                    </p>
                    <Link
                        to="/signup"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
                    >
                        Get Started
                    </Link>
                </div>

                {/* Right Side - Decorative Elements */}
                <div className="flex-1 relative">
                    {/* Browser Window */}
                    <div className="absolute top-0 right-32 w-64 h-48 bg-gray-800 rounded-lg border-2 border-teal-400 shadow-lg">
                        <div className="flex items-center space-x-2 p-3 border-b border-gray-700">
                            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        </div>
                        <div className="p-4 space-y-3">
                            <div className="h-6 bg-gray-700 rounded"></div>
                            <div className="h-6 bg-teal-400 rounded"></div>
                            <div className="h-6 bg-purple-500 rounded"></div>
                            <div className="h-6 bg-red-500 rounded"></div>
                        </div>
                    </div>

                    {/* Code Block */}
                    <div className="absolute bottom-0 right-0 w-48 h-32 bg-gray-800 rounded-lg border-2 border-teal-400 shadow-lg flex items-center justify-center">
                        <div className="text-4xl text-red-500 font-mono">
                            &lt;/&gt;
                        </div>
                    </div>

                    {/* Color Palette */}
                    <div className="absolute top-12 right-0 bg-gray-700 rounded-lg p-2 shadow-lg">
                        <div className="flex space-x-1">
                            <div className="w-6 h-6 bg-blue-500 rounded"></div>
                            <div className="w-6 h-6 bg-purple-500 rounded"></div>
                            <div className="w-6 h-6 bg-red-500 rounded"></div>
                        </div>
                    </div>

                    {/* Tree Structure */}
                    <div className="absolute top-32 left-32">
                        <div className="w-12 h-12 bg-teal-500 rounded-full absolute top-0 left-16"></div>
                        <div className="w-10 h-10 bg-blue-500 rounded-full absolute top-16 left-4"></div>
                        <div className="w-10 h-10 bg-purple-500 rounded-full absolute top-16 right-4"></div>
                        <div className="w-8 h-8 bg-teal-400 rounded-full absolute top-28 left-0"></div>
                        <div className="w-8 h-8 bg-purple-400 rounded-full absolute top-28 left-8"></div>
                        <div className="absolute top-12 left-20 w-px h-4 bg-gray-500"></div>
                        <div className="absolute top-12 left-8 w-12 h-px bg-gray-500"></div>
                        <div className="absolute top-12 right-8 w-12 h-px bg-gray-500"></div>
                        <div className="absolute top-20 left-8 w-px h-8 bg-gray-500"></div>
                        <div className="absolute top-20 right-8 w-px h-8 bg-gray-500"></div>
                        <div className="absolute top-28 left-4 w-4 h-px bg-gray-500"></div>
                    </div>

                    {/* Binary Tree Structure */}
                    <div className="absolute bottom-32 left-0">
                        <div className="w-12 h-12 bg-blue-500 rounded-full absolute top-0 left-16"></div>
                        <div className="w-8 h-8 bg-teal-400 rounded-square absolute top-16 left-4"></div>
                        <div className="w-10 h-10 bg-purple-500 rounded-full absolute top-16 right-4"></div>
                        <div className="w-6 h-6 bg-red-500 rounded-full absolute top-28 left-0"></div>
                        <div className="w-6 h-6 bg-purple-600 rounded-square absolute top-28 left-12"></div>
                        <div className="w-6 h-6 bg-blue-600 rounded-square absolute top-28 right-8"></div>
                        <div className="w-6 h-6 bg-purple-400 rounded-full absolute top-28 right-0"></div>
                        <div className="absolute top-12 left-20 w-px h-4 bg-gray-500"></div>
                        <div className="absolute top-12 left-8 w-12 h-px bg-gray-500"></div>
                        <div className="absolute top-12 right-8 w-12 h-px bg-gray-500"></div>
                        <div className="absolute top-20 left-8 w-px h-8 bg-gray-500"></div>
                        <div className="absolute top-20 right-8 w-px h-8 bg-gray-500"></div>
                        <div className="absolute top-28 left-2 w-10 h-px bg-gray-500"></div>
                        <div className="absolute top-28 right-4 w-4 h-px bg-gray-500"></div>
                    </div>

                    {/* Floating Elements */}
                    <div className="w-8 h-8 bg-blue-600 rounded absolute top-20 left-64"></div>
                    <div className="w-6 h-6 bg-teal-500 rounded absolute bottom-48 right-64"></div>
                    <div className="w-10 h-10 bg-red-500 rounded-full absolute bottom-24 left-48"></div>
                </div>
            </div>
        </div>
    );
}
