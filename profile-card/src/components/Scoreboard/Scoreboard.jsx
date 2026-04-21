import React, { useState } from 'react';
import Header from './Header';
import ScoreCard from './ScoreCard';
import StudentRow from './StudentRow';
import styles from './Scoreboard.module.css';

const Scoreboard = () => {
  const [students, setStudents] = useState([
    { id: 1, name: 'Aman Rawat', score: 85 },
    { id: 2, name: 'Rahul Sharma', score: 45 },
    { id: 3, name: 'Anita Verma', score: 90 },
    { id: 4, name: 'Priya Singh', score: 35 },
  ]);

  const handleUpdateScore = (id, change) => {
    setStudents(prevStudents =>
      prevStudents.map(student =>
        student.id === id
          ? { ...student, score: Math.max(0, Math.min(100, student.score + change)) }
          : student
      )
    );
  };

  const totalStudents = students.length;
  const passedCount = students.filter(s => s.score >= 50).length;
  const averageScore = Math.round(
    students.reduce((acc, curr) => acc + curr.score, 0) / (totalStudents || 1)
  );

  return (
    <div className={styles.container}>
      <Header title="React Student Scoreboard" />
      
      <ScoreCard 
        totalStudents={totalStudents} 
        passedCount={passedCount} 
        averageScore={averageScore} 
      />

      <table className={styles.table}>
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Score</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <StudentRow 
              key={student.id} 
              student={student} 
              onUpdateScore={handleUpdateScore} 
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Scoreboard;
