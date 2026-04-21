import React from 'react';
import styles from './Scoreboard.module.css';

const StudentRow = ({ student, onUpdateScore }) => {
  const isPassing = student.score >= 50;

  return (
    <tr>
      <td>{student.name}</td>
      <td>{student.score}</td>
      <td className={isPassing ? styles.pass : styles.fail}>
        {isPassing ? 'Pass' : 'Fail'}
      </td>
      <td className={styles.buttonGroup}>
        <button onClick={() => onUpdateScore(student.id, 5)}>+5</button>
        <button onClick={() => onUpdateScore(student.id, -5)}>-5</button>
      </td>
    </tr>
  );
};

export default StudentRow;
