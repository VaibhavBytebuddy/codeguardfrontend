import React from "react";
import { Routes, Route } from "react-router-dom";

import PrivateRoute from "./router/PrivateRoute";
import Signup from "./pages/Signup.jsx";
import Login from "./pages/Login.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import FirstPage from "./pages/FirstPage.jsx";
import AuthPage from "./pages/AuthPage.jsx";
import CodeEditor from "./components/Editor.jsx";

export default function App() {
    return (
        <Routes>
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/" element={<FirstPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={
                <PrivateRoute>
                    <Dashboard />
                </PrivateRoute>
            } />

            <Route path='/editor'  element={
                <PrivateRoute>
                    <CodeEditor/>
                </PrivateRoute>
            }/>
        </Routes>
    );
}
