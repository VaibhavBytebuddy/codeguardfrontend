import { Link } from 'react-router-dom';

export default function Navbar({ user }) {
    return (
        <nav className="bg-gray-800 text-white p-4 flex justify-between">
            <Link to="/" className="font-bold text-xl">CodeGuard</Link>
            <div className="space-x-4">
                {user ? (
                    <>
                        <Link to="/dashboard">Home</Link>
                        <Link to="/categories">Categories</Link>
                        <Link to="/editor">Editor</Link>
                        <Link to="/profile">{user.name}</Link>
                    </>
                ) : (
                    <>
                        <Link to="/login">Login</Link>
                        <Link to="/signup">Sign Up</Link>
                    </>
                )}
            </div>
        </nav>
    );
}
