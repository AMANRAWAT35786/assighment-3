import './App.css';
import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import CourseCard from './components/CourseCard';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const courses = [
    { id: 1, title: "React Fundamentals", instructor: "Gyan", progress: 58 },
    { id: 2, title: "JavaScript", instructor: "Amit", progress: 67 }
  ];

  const assignments = [
    { id: 1, title: "React Components Assignment", dueDate: "2026-05-05", status: "Pending" },
    { id: 2, title: "JavaScript Functions Task", dueDate: "2026-05-10", status: "Completed" }
  ];

  const grades = [
    { subject: "React Fundamentals", grade: "A", score: 95 },
    { subject: "JavaScript", grade: "B+", score: 87 }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <>
            <h2 className="section-title">Dashboard Overview</h2>
            <div className="courses-grid">
              {courses.map((course) => (
                <CourseCard
                  key={course.id}
                  title={course.title}
                  instructor={course.instructor}
                  progress={course.progress}
                />
              ))}
            </div>
          </>
        );
      case 'courses':
        return (
          <>
            <h2 className="section-title">My Courses</h2>
            <div className="courses-grid">
              {courses.map((course) => (
                <CourseCard
                  key={course.id}
                  title={course.title}
                  instructor={course.instructor}
                  progress={course.progress}
                />
              ))}
            </div>
          </>
        );
      case 'assignments':
        return (
          <>
            <h2 className="section-title">Assignments</h2>
            <ul className="assignments-list">
              {assignments.map((assignment) => (
                <li key={assignment.id} className="assignment-item">
                  <h3>{assignment.title}</h3>
                  <p>Due: {assignment.dueDate}</p>
                  <span className={`status ${assignment.status.toLowerCase()}`}>{assignment.status}</span>
                </li>
              ))}
            </ul>
          </>
        );
      case 'grades':
        return (
          <>
            <h2 className="section-title">Grades</h2>
            <table className="grades-table">
              <thead>
                <tr>
                  <th>Subject</th>
                  <th>Grade</th>
                  <th>Score</th>
                </tr>
              </thead>
              <tbody>
                {grades.map((grade, index) => (
                  <tr key={index}>
                    <td>{grade.subject}</td>
                    <td>{grade.grade}</td>
                    <td>{grade.score}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        );
      default:
        return <h2 className="section-title">Dashboard</h2>;
    }
  };

  return (
    <div className="app-layout">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="main-content">
        <Header date="Monday, April 21th" />

        {renderContent()}
      </main>
    </div>
  );
}

export default App;