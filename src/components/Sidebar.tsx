'use client';

import React from 'react';

export const Sidebar: React.FC = () => {
    return (
        <aside className="min-h-screen bg-indigo-50 w-64 h-full p-6 border-r border-gray-200">
            <nav className="flex flex-col space-y-4">
                <a href="#" className="text-indigo-700 font-semibold hover:underline">Dashboard</a>
                <a href="#" className="text-gray-700 hover:underline">Teachers</a>
                <a href="#" className="text-gray-700 hover:underline">Students</a>
                <a href="#" className="text-gray-700 hover:underline">Reports</a>
                <a href="#" className="text-gray-700 hover:underline">Settings</a>
            </nav>
        </aside>
    );
};
