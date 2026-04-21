import React from 'react';
import styles from './Scoreboard.module.css';

const ScoreCard = ({ totalStudents, passedCount, averageScore }) => {
  return (
    <div className={styles.scoreCard}>
      <div className={styles.statBox}>
        <h3>Total Students</h3>
        <p>{totalStudents}</p>
      </div>
      <div className={styles.statBox}>
        <h3>Passed</h3>
        <p>{passedCount}</p>
      </div>
      <div className={styles.statBox}>
        <h3>Average Score</h3>
        <p>{averageScore}</p>
      </div>
    </div>
  );
};

export default ScoreCard;
