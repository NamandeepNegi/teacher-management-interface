'use client';

import React from 'react';
import { Qualification } from '@/types/teacher';

interface Props {
    title: string;
    qualifications: Qualification[];
}

export const QualificationCard: React.FC<Props> = ({ title, qualifications }) => {
    return (
        <div className="rounded-2xl shadow-lg p-6 bg-gradient-to-br from-white via-gray-50 to-gray-100 border border-gray-200">
            <h2 className="text-xl font-bold text-gray-800 mb-4">{title}</h2>
            {qualifications.length ? (
                <ul className="space-y-2">
                    {qualifications.map((q, index) => (
                        <li key={index} className="flex items-center justify-between text-gray-700">
                            <span>{q.name}</span>
                            <span className="font-semibold">${q.rate}/hr</span>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="text-gray-500 italic">No qualifications listed.</p>
            )}
        </div>
    );
};
