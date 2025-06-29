import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import {signup} from "../services/api.js";

export default function Signup() {
    const [form, setForm] = useState({ name: "", email: "", password: "" });
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleChange = e => setForm(
        {
            ...form, [e.target.name]: e.target.value
        });

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const res = await signup(form);
            setMessage("Signup successful!");
            navigate("/login");
        } catch (err) {
            setMessage(err.response?.data?.message || "Signup failed");
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
            <form className="bg-white p-6 rounded shadow-md w-80" onSubmit={handleSubmit}>
                <input
                    name="name" type="text"
                    placeholder="Name"
                    onChange={handleChange}
                    className="w-full p-2 mb-3 border rounded" />
                <input
                    name="email" type="email"
                    placeholder="Email"
                    onChange={handleChange}
                    className="w-full p-2 mb-3 border rounded" />
                <input
                    name="password" type="password"
                    placeholder="Password"
                    onChange={handleChange}
                    className="w-full p-2 mb-4 border rounded" />

                <button
                    className="bg-blue-500 text-white w-full p-2 rounded">
                    Signup</button>
                <p className="mt-2 text-green-600">{message}</p>
            </form>
        </div>
    );
}
