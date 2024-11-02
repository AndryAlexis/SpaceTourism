import Link from 'next/link'

export default function DashboardLayout({children}: {children: React.ReactNode;}) {
  return (
    <div className="dashboard-wrapper">
      {/* Sidebar */}
      <div className="dashboard-sidebar">
        <nav>
          <ul>
            <li><Link href=".">Dashboard Home</Link></li>
            <li><Link href="./profile">Profile</Link></li>
            <li><Link href="./settings">Settings</Link></li>
          </ul>
        </nav>
      </div>
      
      {/* Main Content */}
      <main className="dashboard-main">
        {children}
      </main>
    </div>
  );
}
