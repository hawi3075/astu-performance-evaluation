import React, { ReactNode } from 'react';
import Link from 'next/link';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-blue-800 text-white p-4 shadow-md flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img src="/astu-logo.png" alt="ASTU Logo" className="h-10 w-10 object-contain" />
          <span className="font-semibold text-lg">Adama Science and Technology University</span>
        </div>
        <nav className="space-x-4 text-sm">
          <Link href="/dashboard" className="hover:underline">Dashboard</Link>
          <Link href="/employees" className="hover:underline">Employees</Link>
          <Link href="/evaluation" className="hover:underline">Evaluation</Link>
        </nav>
      </header>

      {/* Page Content */}
      <main className="p-6">{children}</main>
    </div>
  );
};

export default Layout;
