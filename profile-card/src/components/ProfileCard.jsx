import './ProfileCard.css';
import { FaRegUser } from "react-icons/fa";

function ProfileCard() {
  return (
    <div className="profile-card">
      <h1 className="title">Student Profile Card</h1>
      <div className="students-container">
        <div className="first-student student">
          <div className="first student-info">
            <div className="ring">
              <FaRegUser size={80} />
            </div>
            <h3>Ritik</h3>
          </div>
          <div className="first-student-info info">
            <p>Freshman student with a passion for. <br />
              Excited to dive into campus life, meet <br />
              new people, and develop my skills in <br />
              Frontend Devlopment. Let’s connect!</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileCard;
