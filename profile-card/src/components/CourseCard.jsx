function CourseCard({ title, instructor, progress }) {
  return (
    <div className="course-card">
      <div>
        <h3>{title}</h3>
        <p className="instructor">Prof. {instructor}</p>
      </div>

      <div className="course-progress">
        <div className="progress-text">
          <span>Course Progress</span>
          <span>{progress}%</span>
        </div>
        <div className="progress-bar-bg">
          <div
            className="progress-bar-fill"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
