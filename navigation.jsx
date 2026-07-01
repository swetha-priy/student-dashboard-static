function Navigation({ onToggleSidebar, notificationCount = 0, onToggleTheme, onToggleNotifications, notificationOpen = false, notifications = [], onMarkAllRead }) {
  const formatTime = (t) => t;
  return (
    <header className="site-hero py-4 mb-3">
      <div className="container-fluid">
        <div className="d-flex justify-content-between align-items-center">

          <div className="d-flex align-items-center">
            <div className="logo-circle bg-white text-primary d-flex align-items-center justify-content-center me-3">🎓</div>
            <div>
              <h1 className="m-0 site-title">Student Dashboard</h1>
              <small className="text-muted">Learn • Practice • Grow</small>
            </div>
          </div>

          <div className="d-flex align-items-center gap-2">
            <button className="btn btn-sm btn-outline-secondary" onClick={onToggleSidebar} title="Toggle sidebar">☰</button>
            <input className="form-control form-control-sm search-input" placeholder="Search courses, assignments..." />
            <button className="btn btn-outline-primary btn-sm">New</button>

            <div className="position-relative">
              <button className="btn btn-sm btn-light notification-bell" title="Notifications" onClick={onToggleNotifications}>
                🔔
              </button>
              {notificationCount > 0 && (
                <span className="badge rounded-pill bg-danger notification-count">{notificationCount}</span>
              )}

              {notificationOpen && (
                <div className="notifications-panel card shadow-sm">
                  <div className="card-header d-flex justify-content-between align-items-center">
                    <strong>Notifications</strong>
                    <button className="btn btn-sm btn-link" onClick={onMarkAllRead}>Mark all read</button>
                  </div>
                  <ul className="list-group list-group-flush">
                    {notifications.length === 0 && <li className="list-group-item">No notifications</li>}
                    {notifications.map(n => (
                      <li key={n.id} className={`list-group-item ${n.read ? 'text-muted' : ''}`}>
                        <div className="d-flex justify-content-between">
                          <div>{n.text}</div>
                          <small className="text-muted">{formatTime(n.time)}</small>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <button className="btn btn-sm btn-outline-dark" onClick={onToggleTheme} title="Toggle theme">🌓</button>

            <div className="dropdown ms-2">
              <button className="btn btn-sm btn-white avatar-btn dropdown-toggle" type="button" id="avatarMenu" data-bs-toggle="dropdown" aria-expanded="false">
                <span className="avatar-circle">S</span>
              </button>
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="avatarMenu">
                <li><a className="dropdown-item" href="#">Profile</a></li>
                <li><a className="dropdown-item" href="#">Settings</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item text-danger" href="#">Logout</a></li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
}

export default Navigation;
