import { useNavigate } from "react-router-dom";
import "../styles.css"; // Import CSS file

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1>Welcome to Dog Gait Analysis</h1>
      <p className="description1">
        This project analyzes the movement patterns of dogs to detect abnormalities
        and provide insights for veterinarians and pet owners. Using advanced
        tracking techniques, we aim to improve canine health assessments.
      </p>
      <button className="action-button" onClick={() => navigate("/analysis")}>
        Get Started
      </button>
    </div>
  );
}
