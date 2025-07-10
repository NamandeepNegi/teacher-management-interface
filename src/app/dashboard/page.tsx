import { Navbar } from '@/components/Navbar';
import { Sidebar } from '@/components/Sidebar';
import { Footer } from '@/components/Footer';
import { TeacherDetailsCard } from '@/components/TeacherDetailsCard';
import { QualificationCard } from '@/components/QualificationCard';
import { ScheduleCalendar } from '@/components/ScheduleCalendar';
import { Teacher } from '@/types/teacher';

const teacherData: Teacher = {
    id: 't1',
    name: 'Namandeep Negi',
    role: 'Teacher',
    email: 'namandeep@example.com',
    phone: '999-999-9999',
    address: 'Noida, Uttar Pradesh, India',
    privateQualifications: [
        { name: 'Science', rate: 28 },
        { name: 'Mathematics', rate: 28 },
        { name: 'Hindi', rate: 28 },
        { name: 'Computer Application', rate: 28 },
    ],
    groupQualifications: [
        { name: 'Badminton', rate: 18 },
        { name: 'Cricket', rate: 20 },
    ],
    schedule: [
        { day: 'Monday', startTime: '9:00 AM', endTime: '11:00 AM' },
        { day: 'Tuesday', startTime: '2:00 PM', endTime: '3:00 PM' },
        { day: 'Thursday', startTime: '3:00 PM', endTime: '4:00 PM' },
        { day: 'Friday', startTime: '1:00 PM', endTime: '2:30 PM' },
    ],
};

export default function DashboardPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <div className="flex flex-1">
                <Sidebar />
                <main className="flex-1 p-8 space-y-8 bg-gradient-to-b from-white to-gray-50">
                    <TeacherDetailsCard teacher={teacherData} />
                    <div className="grid md:grid-cols-2 gap-6">
                        <QualificationCard
                            title="Private Qualifications"
                            qualifications={teacherData.privateQualifications}
                        />
                        <QualificationCard
                            title="Group Qualifications"
                            qualifications={teacherData.groupQualifications}
                        />
                    </div>
                    <ScheduleCalendar schedule={teacherData.schedule} />
                </main>
            </div>
            <Footer />
        </div>
    );
}
