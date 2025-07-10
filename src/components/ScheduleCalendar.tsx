'use client';

import React from 'react';
import { WeeklySchedule } from '@/types/teacher';

interface Props {
    schedule: WeeklySchedule[];
}

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

export const ScheduleCalendar: React.FC<Props> = ({ schedule }) => {
    return (
        <div className="overflow-auto rounded-2xl shadow-lg p-6 bg-gradient-to-br from-white via-gray-50 to-gray-100 border border-gray-200">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Weekly Schedule</h2>
            <div className="grid grid-cols-7 text-center text-sm font-medium text-gray-600">
                {days.map((day) => (
                    <div key={day} className="py-2 border-b border-gray-300">
                        {day}
                    </div>
                ))}
            </div>
            <div className="grid grid-cols-7 gap-4 mt-4">
                {days.map((day) => (
                    <div key={day} className="border border-gray-300 rounded-lg p-2 min-h-[120px] bg-white/80">
                        {schedule
                            .filter((s) => s.day === day)
                            .map((s, idx) => (
                                <div
                                    key={idx}
                                    className="bg-green-200/70 text-xs rounded-md p-1 mb-2 font-medium text-green-800 shadow-inner"
                                >
                                    {s.startTime} - {s.endTime}
                                </div>
                            ))}
                    </div>
                ))}
            </div>
        </div>
    );
};
