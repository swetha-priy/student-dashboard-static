function MainContent() {
  return (
    <section>

      {/* Welcome Card */}
      <div className="card card-hero shadow-sm mb-4">

        <div className="card-body d-flex flex-column flex-md-row align-items-center justify-content-between gap-3">

          <div>
            <h2 className="card-title mb-2">Welcome to Student Dashboard</h2>
            <p className="card-text text-muted mb-0">Manage your courses, assignments, attendance and results from one place.</p>
          </div>

          <div>
            <button className="btn btn-primary btn-lg">Explore Dashboard</button>
          </div>

        </div>

      </div>

      {/* Statistics Cards */}
      <div className="row">

        <div className="col-md-4 mb-3">

          <div className="card stat-card text-center border-primary shadow-sm">

            <div className="card-body">

              <h5 className="text-muted">Courses</h5>

              <h2 className="display-6">6</h2>
              <div className="progress mt-2" style={{height: "8px"}}>
                <div className="progress-bar" role="progressbar" style={{width: "80%", backgroundColor: '#000'}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <small className="text-muted">80% courses completed</small>

            </div>

          </div>

        </div>

        <div className="col-md-4 mb-3">

          <div className="card stat-card text-center border-success shadow-sm">

            <div className="card-body">

              <h5 className="text-muted">Assignments</h5>

              <h2 className="display-6">3</h2>
              <div className="progress mt-2" style={{height: "8px"}}>
                <div className="progress-bar" role="progressbar" style={{width: "50%", backgroundColor: '#000'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <small className="text-muted">50% assignments submitted</small>

            </div>

          </div>

        </div>

        <div className="col-md-4 mb-3">

          <div className="card stat-card text-center border-warning shadow-sm">

            <div className="card-body">

              <h5 className="text-muted">Attendance</h5>

              <h2 className="display-6">95%</h2>
              <div className="progress mt-2" style={{height: "8px"}}>
                <div className="progress-bar" role="progressbar" style={{width: "95%", backgroundColor: '#000'}} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <small className="text-muted">Overall attendance</small>

            </div>

          </div>

        </div>

      </div>

      {/* Recent Activities */}
      <div className="card shadow-sm mt-4">

        <div className="card-header bg-secondary text-white">

          <h5 className="mb-0">
            Recent Activities
          </h5>

        </div>

        <div className="card-body">

          <table className="table table-striped table-hover">

            <thead>

              <tr>

                <th>Course</th>
                <th>Status</th>
                <th>Marks</th>

              </tr>

            </thead>

            <tbody>

              <tr>

                <td>React JS</td>
                <td>Completed</td>
                <td>92</td>

              </tr>

              <tr>

                <td>Java</td>
                <td>In Progress</td>
                <td>88</td>

              </tr>

              <tr>

                <td>Database</td>
                <td>Completed</td>
                <td>90</td>

              </tr>

            </tbody>

          </table>

        </div>

      </div>

    </section>
  );
}
