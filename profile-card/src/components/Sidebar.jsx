function Sidebar({ activeTab, setActiveTab }) {
  return (
    <nav className="sidebar">
      <h2>Student Dashboard</h2>
      <ul className="nav-links">
        <li className={activeTab === 'dashboard' ? 'active' : ''} onClick={() => setActiveTab('dashboard')}>Dashboard</li>
        <li className={activeTab === 'courses' ? 'active' : ''} onClick={() => setActiveTab('courses')}>My Courses</li>
        <li className={activeTab === 'assignments' ? 'active' : ''} onClick={() => setActiveTab('assignments')}>Assignments</li>
        <li className={activeTab === 'grades' ? 'active' : ''} onClick={() => setActiveTab('grades')}>Grades</li>
      </ul>
    </nav>
  );
}

export default Sidebar;