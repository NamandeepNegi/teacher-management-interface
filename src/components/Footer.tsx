'use client';

import React from 'react';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-100 text-center text-gray-600 text-sm py-4 border-t">
            &copy; {new Date().getFullYear()} Teacher Dashboard. All rights reserved.
        </footer>
    );
};
