import React, { useState } from 'react';

export default function AuthPage() {
    const [currentPage, setCurrentPage] = useState('login');

    const LoginPage = () => (
        <div className="min-h-screen bg-gray-900 text-white overflow-hidden relative flex items-center justify-center">
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Floating Code Elements */}
                <div className="absolute top-20 left-20 w-16 h-16 bg-blue-600 rounded-lg opacity-20 animate-pulse"></div>
                <div className="absolute top-40 right-32 w-12 h-12 bg-purple-500 rounded-full opacity-30"></div>
                <div className="absolute bottom-32 left-40 w-20 h-20 bg-teal-500 rounded-lg opacity-25"></div>
                <div className="absolute bottom-20 right-20 w-14 h-14 bg-red-500 rounded-full opacity-20"></div>

                {/* Tree Structure */}
                <div className="absolute top-32 right-40 opacity-10">
                    <div className="w-8 h-8 bg-teal-400 rounded-full absolute top-0 left-8"></div>
                    <div className="w-6 h-6 bg-blue-400 rounded-full absolute top-12 left-2"></div>
                    <div className="w-6 h-6 bg-purple-400 rounded-full absolute top-12 right-2"></div>
                    <div className="absolute top-8 left-10 w-px h-4 bg-gray-500"></div>
                    <div className="absolute top-8 left-6 w-8 h-px bg-gray-500"></div>
                </div>

                {/* Code Brackets */}
                <div className="absolute bottom-40 left-20 text-6xl text-gray-700 font-mono opacity-10">
                    {'{ }'}
                </div>
            </div>

            {/* Header */}
            <header className="absolute top-0 left-0 right-0 flex justify-between items-center p-6 z-20">
                <button
                    onClick={() => setCurrentPage('home')}
                    className="text-xl font-semibold hover:text-blue-400 transition-colors"
                >
                    Vaibhav Bhadane
                </button>
                <div className="flex items-center space-x-6">
                    <button
                        onClick={() => setCurrentPage('signup')}
                        className="text-gray-300 hover:text-white transition-colors"
                    >
                        Sign Up
                    </button>
                    <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                        <div className="w-4 h-4 bg-yellow-300 rounded-full"></div>
                    </div>
                </div>
            </header>

            {/* Login Form */}
            <div className="bg-gray-800 rounded-2xl shadow-2xl p-8 w-full max-w-md border border-gray-700 backdrop-blur-sm bg-opacity-90 z-10">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold mb-2">Welcome Back</h2>
                    <p className="text-gray-400">Continue your DSA journey</p>
                </div>

                <form className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                            Email Address
                        </label>
                        <input
                            type="email"
                            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                            placeholder="your.email@example.com"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                            placeholder="••••••••"
                        />
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                className="h-4 w-4 text-blue-600 bg-gray-700 border-gray-600 rounded focus:ring-blue-500"
                            />
                            <label className="ml-2 text-sm text-gray-300">Remember me</label>
                        </div>
                        <button type="button" className="text-sm text-blue-400 hover:text-blue-300">
                            Forgot password?
                        </button>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors duration-200 transform hover:scale-105"
                    >
                        Sign In
                    </button>
                </form>

                <div className="mt-6 text-center">
                    <p className="text-gray-400">
                        Don't have an account?{' '}
                        <button
                            onClick={() => setCurrentPage('signup')}
                            className="text-blue-400 hover:text-blue-300 font-medium"
                        >
                            Sign up
                        </button>
                    </p>
                </div>

                {/* Social Login */}
                <div className="mt-8">
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-600"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-2 bg-gray-800 text-gray-400">Or continue with</span>
                        </div>
                    </div>

                    <div className="mt-6 grid grid-cols-2 gap-3">
                        <button className="w-full inline-flex justify-center py-2 px-4 border border-gray-600 rounded-lg bg-gray-700 text-sm font-medium text-gray-300 hover:bg-gray-600 transition-colors">
                            <svg className="w-5 h-5" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                                <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                                <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                                <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                            </svg>
                            <span className="ml-2">Google</span>
                        </button>

                        <button className="w-full inline-flex justify-center py-2 px-4 border border-gray-600 rounded-lg bg-gray-700 text-sm font-medium text-gray-300 hover:bg-gray-600 transition-colors">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.024-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.347-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.162-1.499-.698-2.436-2.888-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.357-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
                            </svg>
                            <span className="ml-2">GitHub</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );

    const SignupPage = () => (
        <div className="min-h-screen bg-gray-900 text-white overflow-hidden relative flex items-center justify-center">
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Animated Algorithm Visualization */}
                <div className="absolute top-20 left-20 opacity-15">
                    <div className="flex space-x-2">
                        <div className="w-8 h-16 bg-blue-500 rounded animate-pulse"></div>
                        <div className="w-8 h-24 bg-purple-500 rounded animate-pulse delay-100"></div>
                        <div className="w-8 h-12 bg-teal-500 rounded animate-pulse delay-200"></div>
                        <div className="w-8 h-20 bg-red-500 rounded animate-pulse delay-300"></div>
                    </div>
                </div>

                {/* Binary Tree */}
                <div className="absolute bottom-20 right-20 opacity-10">
                    <div className="w-10 h-10 bg-teal-400 rounded-full absolute top-0 left-12"></div>
                    <div className="w-8 h-8 bg-blue-400 rounded-full absolute top-16 left-4"></div>
                    <div className="w-8 h-8 bg-purple-400 rounded-full absolute top-16 right-4"></div>
                    <div className="w-6 h-6 bg-red-400 rounded-full absolute top-28 left-0"></div>
                    <div className="w-6 h-6 bg-yellow-400 rounded-full absolute top-28 left-8"></div>
                    <div className="w-6 h-6 bg-green-400 rounded-full absolute top-28 right-8"></div>
                    <div className="w-6 h-6 bg-pink-400 rounded-full absolute top-28 right-0"></div>
                </div>

                {/* Code Symbols */}
                <div className="absolute top-40 right-40 text-4xl text-gray-700 font-mono opacity-10">
                    {'</>'}
                </div>
            </div>

            {/* Header */}
            <header className="absolute top-0 left-0 right-0 flex justify-between items-center p-6 z-20">
                <button
                    onClick={() => setCurrentPage('home')}
                    className="text-xl font-semibold hover:text-blue-400 transition-colors"
                >
                    Vaibhav Bhadane
                </button>
                <div className="flex items-center space-x-6">
                    <button
                        onClick={() => setCurrentPage('login')}
                        className="text-gray-300 hover:text-white transition-colors"
                    >
                        Login
                    </button>
                    <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                        <div className="w-4 h-4 bg-yellow-300 rounded-full"></div>
                    </div>
                </div>
            </header>

            {/* Signup Form */}
            <div className="bg-gray-800 rounded-2xl shadow-2xl p-8 w-full max-w-md border border-gray-700 backdrop-blur-sm bg-opacity-90 z-10">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold mb-2">Join the Journey</h2>
                    <p className="text-gray-400">Start mastering DSA today</p>
                </div>

                <form className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                                First Name
                            </label>
                            <input
                                type="text"
                                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                                placeholder="John"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                                Last Name
                            </label>
                            <input
                                type="text"
                                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                                placeholder="Doe"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                            Email Address
                        </label>
                        <input
                            type="email"
                            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                            placeholder="your.email@example.com"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                            placeholder="••••••••"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                            placeholder="••••••••"
                        />
                    </div>

                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            className="h-4 w-4 text-blue-600 bg-gray-700 border-gray-600 rounded focus:ring-blue-500"
                        />
                        <label className="ml-2 text-sm text-gray-300">
                            I agree to the{' '}
                            <button type="button" className="text-blue-400 hover:text-blue-300">
                                Terms of Service
                            </button>
                            {' '}and{' '}
                            <button type="button" className="text-blue-400 hover:text-blue-300">
                                Privacy Policy
                            </button>
                        </label>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors duration-200 transform hover:scale-105"
                    >
                        Create Account
                    </button>
                </form>

                <div className="mt-6 text-center">
                    <p className="text-gray-400">
                        Already have an account?{' '}
                        <button
                            onClick={() => setCurrentPage('login')}
                            className="text-blue-400 hover:text-blue-300 font-medium"
                        >
                            Sign in
                        </button>
                    </p>
                </div>

                {/* Social Login */}
                <div className="mt-8">
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-600"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-2 bg-gray-800 text-gray-400">Or sign up with</span>
                        </div>
                    </div>

                    <div className="mt-6 grid grid-cols-2 gap-3">
                        <button className="w-full inline-flex justify-center py-2 px-4 border border-gray-600 rounded-lg bg-gray-700 text-sm font-medium text-gray-300 hover:bg-gray-600 transition-colors">
                            <svg className="w-5 h-5" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                                <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                                <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                                <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                            </svg>
                            <span className="ml-2">Google</span>
                        </button>

                        <button className="w-full inline-flex justify-center py-2 px-4 border border-gray-600 rounded-lg bg-gray-700 text-sm font-medium text-gray-300 hover:bg-gray-600 transition-colors">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.024-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.347-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.162-1.499-.698-2.436-2.888-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.357-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
                            </svg>
                            <span className="ml-2">GitHub</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );

    const HomePage = () => (
        <div className="min-h-screen bg-gray-900 text-white overflow-hidden relative">
            {/* Header */}
            <header className="flex justify-between items-center p-6 relative z-10">
                <h1 className="text-xl font-semibold">Vaibhav Bhadane</h1>
                <div className="flex items-center space-x-6">
                    <button
                        onClick={() => setCurrentPage('login')}
                        className="text-gray-300 hover:text-white transition-colors"
                    >
                        Login
                    </button>
                    <button
                        onClick={() => setCurrentPage('signup')}
                        className="text-gray-300 hover:text-white transition-colors"
                    >
                        Sign Up
                    </button>
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
                    <button
                        onClick={() => setCurrentPage('signup')}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
                    >
                        Get Started
                    </button>
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

                    {/* Floating Elements */}
                    <div className="w-8 h-8 bg-blue-600 rounded absolute top-20 left-64"></div>
                    <div className="w-6 h-6 bg-teal-500 rounded absolute bottom-48 right-64"></div>
                    <div className="w-10 h-10 bg-red-500 rounded-full absolute bottom-24 left-48"></div>
                </div>
            </div>
        </div>
    );

    // Main render logic
    if (currentPage === 'login') {
        return <LoginPage />;
    } else if (currentPage === 'signup') {
        return <SignupPage />;
    } else {
        return <HomePage />;
    }
}