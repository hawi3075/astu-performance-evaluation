import Sidebar from '@/components/Sidebar1';
import TeamsDashboard from '@/components/TeamsDashboard';

export default function TeamsPage() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <main className="flex-1 p-6 md:p-8">
        <TeamsDashboard />
      </main>
    </div>
  );
}
