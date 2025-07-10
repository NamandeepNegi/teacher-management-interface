'use client';

import React from 'react';
import { Teacher } from '@/types/teacher';

interface Props {
    teacher: Teacher;
}

export const TeacherDetailsCard: React.FC<Props> = ({ teacher }) => {
    return (
        <div className="rounded-2xl shadow-lg p-6 bg-gradient-to-br from-white via-gray-50 to-gray-100 border border-gray-200">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Teacher Details</h2>
            <div className="space-y-2 text-gray-700">
                <p><span className="font-medium">Name:</span> {teacher.name}</p>
                <p><span className="font-medium">Role:</span> {teacher.role}</p>
                <p><span className="font-medium">Email:</span> {teacher.email}</p>
                <p><span className="font-medium">Phone:</span> {teacher.phone}</p>
                <p><span className="font-medium">Address:</span> {teacher.address}</p>
            </div>
        </div>
    );
};
