import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import {login} from "../services/api.js";

export default function Login() {
    const [form, setForm] = useState({ email: "", password: "" });
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleChange = e => setForm(
        {
            ...form, [e.target.name]: e.target.value });

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const res = await login(form);
            localStorage.setItem("token", res.data.token);

            navigate("/dashboard");
        } catch (err) {
            setMessage("Invalid credentials");
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <h1 className="text-2xl font-bold mb-4">Login</h1>
            <form className="bg-white p-6 rounded shadow-md w-80" onSubmit={handleSubmit}>
                <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    onChange={handleChange}
                    className="w-full p-2 mb-3 border rounded" />
                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    onChange={handleChange}
                    className="w-full p-2 mb-4 border rounded" />

                <button
                    className="bg-green-600 text-white w-full p-2 rounded"
                >Login</button>
                <p className="mt-2 text-red-600">{message}</p>
            </form>
        </div>
    );
}
