'use client';

import React from 'react';

export const Navbar: React.FC = () => {
    return (
        <nav className="bg-indigo-600 text-white px-6 py-4 shadow-md">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <h1 className="text-2xl font-bold">Teacher Dashboard</h1>
                <div className="flex space-x-4">
                    <button className="hover:bg-indigo-500 px-3 py-2 rounded transition">Home</button>
                    <button className="hover:bg-indigo-500 px-3 py-2 rounded transition">Settings</button>
                    <button className="hover:bg-indigo-500 px-3 py-2 rounded transition">Logout</button>
                </div>
            </div>
        </nav>
    );
};
