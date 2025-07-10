// src/types/teacher.d.ts
export interface Teacher {
    id: string;
    name: string;
    role: string;
    email: string;
    phone: string;
    address: string;
    privateQualifications: Qualification[];
    groupQualifications: Qualification[];
    schedule: WeeklySchedule[];
}

export interface Qualification {
    name: string;
    rate: number;
}

export interface WeeklySchedule {
    day: string;
    startTime: string;
    endTime: string;
}
