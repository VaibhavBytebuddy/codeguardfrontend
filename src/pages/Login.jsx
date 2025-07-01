import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {login} from "../services/api.js";
// import { login } from "../services/api"; // Uncomment and create your API logic

export default function Login() {
    const [form, setForm] = useState({ email: "", password: "" });
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await login(form); // Uncomment this when your backend is ready
            localStorage.setItem("token", res.data.token);

            navigate("/editor");
        } catch (err) {
            setMessage("Invalid credentials",err);
        }
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white overflow-hidden relative flex items-center justify-center">
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-20 w-16 h-16 bg-blue-600 rounded-lg opacity-20 animate-pulse"></div>
                <div className="absolute top-40 right-32 w-12 h-12 bg-purple-500 rounded-full opacity-30"></div>
                <div className="absolute bottom-32 left-40 w-20 h-20 bg-teal-500 rounded-lg opacity-25"></div>
                <div className="absolute bottom-20 right-20 w-14 h-14 bg-red-500 rounded-full opacity-20"></div>

                {/* Tree */}
                <div className="absolute top-32 right-40 opacity-10">
                    <div className="w-8 h-8 bg-teal-400 rounded-full absolute top-0 left-8"></div>
                    <div className="w-6 h-6 bg-blue-400 rounded-full absolute top-12 left-2"></div>
                    <div className="w-6 h-6 bg-purple-400 rounded-full absolute top-12 right-2"></div>
                    <div className="absolute top-8 left-10 w-px h-4 bg-gray-500"></div>
                    <div className="absolute top-8 left-6 w-8 h-px bg-gray-500"></div>
                </div>

                <div className="absolute bottom-40 left-20 text-6xl text-gray-700 font-mono opacity-10">{'{ }'}</div>
            </div>

            {/* Header */}
            <header className="absolute top-0 left-0 right-0 flex justify-between items-center p-6 z-20">
                <button
                    onClick={() => navigate("/")}
                    className="text-xl font-semibold hover:text-blue-400 transition-colors"
                >
                    Vaibhav Bhadane
                </button>
                <div className="flex items-center space-x-6">
                    <button
                        onClick={() => navigate("/signup")}
                        className="text-gray-300 hover:text-white transition-colors"
                    >
                        Sign Up
                    </button>
                    <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                        <div className="w-4 h-4 bg-yellow-300 rounded-full"></div>
                    </div>
                </div>
            </header>

            {/* Login Card */}
            <div className="bg-gray-800 rounded-2xl shadow-2xl p-8 w-full max-w-md border border-gray-700 backdrop-blur-sm bg-opacity-90 z-10">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold mb-2">Welcome Back</h2>
                    <p className="text-gray-400">Continue your DSA journey</p>
                    {message && <p className="text-red-500 mt-2">{message}</p>}
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                        <input
                            name="email"
                            type="email"
                            value={form.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400"
                            placeholder="your.email@example.com"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Password</label>
                        <input
                            name="password"
                            type="password"
                            value={form.password}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400"
                            placeholder="••••••••"
                            required
                        />
                    </div>

                    <div className="flex items-center justify-between">
                        <label className="flex items-center text-sm text-gray-300">
                            <input type="checkbox" className="mr-2" />
                            Remember me
                        </label>
                        <button type="button" className="text-sm text-blue-400 hover:text-blue-300">
                            Forgot password?
                        </button>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition transform hover:scale-105"
                    >
                        Sign In
                    </button>
                </form>

                <div className="mt-6 text-center text-gray-400">
                    Don't have an account?{" "}
                    <button
                        onClick={() => navigate("/signup")}
                        className="text-blue-400 hover:text-blue-300 font-medium"
                    >
                        Sign up
                    </button>
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
                            {/* Google Logo */}
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                            </svg>
                            <span className="ml-2">Google</span>
                        </button>

                        <button className="w-full inline-flex justify-center py-2 px-4 border border-gray-600 rounded-lg bg-gray-700 text-sm font-medium text-gray-300 hover:bg-gray-600 transition-colors">
                            {/* GitHub Logo */}
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
}
