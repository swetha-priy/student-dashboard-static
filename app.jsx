import React, { useState, useEffect } from "react";
import Header from "./components/header";
import Navigation from "./components/navigation";
import Sidebar from "./components/sidebax";
import MainContent from "./components/maincontent";
import Footer from "./components/footer";

function App() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [notifications, setNotifications] = useState([
    { id: 1, text: 'New assignment posted: React Project', time: '2h ago', read: false },
    { id: 2, text: 'Course "Database" graded', time: '1d ago', read: false },
    { id: 3, text: 'Upcoming: Attendance review', time: '3d ago', read: false },
  ]);
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleSidebar = () => setSidebarCollapsed((s) => !s);
  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));
  const toggleNotifications = () => setNotificationOpen((v) => !v);
  const markAllNotificationsRead = () => setNotifications((n) => n.map(x => ({...x, read: true})));
  const unreadCount = notifications.filter(n => !n.read).length;

  // Welcome modal shown once
  const [showWelcome, setShowWelcome] = useState(() => localStorage.getItem("seenWelcome") !== "1");
  const closeWelcome = () => {
    setShowWelcome(false);
    localStorage.setItem("seenWelcome", "1");
  };

  return (
    <>
      {/* Header */}
      <Header />

      {/* Navigation */}
      <Navigation
        onToggleSidebar={toggleSidebar}
        notificationCount={unreadCount}
        onToggleTheme={toggleTheme}
        onToggleNotifications={toggleNotifications}
        notificationOpen={notificationOpen}
        notifications={notifications}
        onMarkAllRead={markAllNotificationsRead}
      />

      {/* Main Content Area */}
      <main className="container-fluid mt-3">

        <div className="row">

          {/* Sidebar */}
          <aside className={`col-md-3 mb-3 ${sidebarCollapsed ? "collapsed" : ""}`}>
            <Sidebar collapsed={sidebarCollapsed} />
          </aside>

          {/* Main Section */}
          <section className="col-md-9">
            <MainContent />
          </section>

        </div>

      </main>

      {/* Footer */}
      <Footer />

      {/* Welcome Modal */}
      {showWelcome && (
        <div className="welcome-modal">
          <div className="welcome-card shadow-sm">
            <h2>Welcome to Student Dashboard</h2>
            <p>Get started by exploring your courses and assignments. Use the sidebar to navigate.</p>
            <div className="d-flex gap-2 justify-content-end">
              <button className="btn btn-outline-secondary" onClick={closeWelcome}>Dismiss</button>
              <button className="btn btn-primary" onClick={closeWelcome}>Let's go</button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Help Button */}
      <button className="help-fab" title="Help">💬</button>
    </>
  );
}

export default App;
