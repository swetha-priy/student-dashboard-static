function Sidebar({ collapsed = false }) {
  return (
    <aside className={`sidebar ${collapsed ? "collapsed" : ""}`}>

      <div className={`card shadow-sm ${collapsed ? "collapsed-card" : ""}`}>

        <div className="card-header bg-success text-white">
          <h5 className="mb-0">Dashboard Menu</h5>
        </div>

        <div className="list-group list-group-flush">

          <a href="#" className="list-group-item list-group-item-action active">
            <span className="d-inline-block nav-emoji">🏠</span>
            <span className="nav-label">Dashboard</span>
          </a>

          <a href="#" className="list-group-item list-group-item-action">
            <span className="d-inline-block nav-emoji">📚</span>
            <span className="nav-label">Courses</span>
          </a>

          <a href="#" className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
            <span>
              <span className="d-inline-block nav-emoji">📝</span>
              <span className="nav-label">Assignments</span>
            </span>
            <span className="badge bg-danger rounded-pill">3</span>
          </a>

          <a href="#" className="list-group-item list-group-item-action">
            <span className="d-inline-block nav-emoji">📊</span>
            <span className="nav-label">Results</span>
          </a>

          <a href="#" className="list-group-item list-group-item-action">
            <span className="d-inline-block nav-emoji">⚙</span>
            <span className="nav-label">Settings</span>
          </a>

          <a href="#" className="list-group-item list-group-item-action text-danger">
            <span className="d-inline-block nav-emoji">🚪</span>
            <span className="nav-label">Logout</span>
          </a>

        </div>

      </div>

    </aside>
  );
}

export default Sidebar;
