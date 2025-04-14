import { useNavigate } from "react-router-dom";
import "../styles.css";
import pawLogo from "../assets/pawLogo.jpg"; // import image

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      {/* Image Above Title */}
      <img src={pawLogo} alt="Dog" className="home-image" />

      <h1>Welcome to Dog Gait Analysis</h1>

      <p className="description">
        This project analyzes the movement patterns of dogs to detect abnormalities
        and provide insights for veterinarians and pet owners. Using advanced
        tracking techniques, we aim to improve canine health assessments.
      </p>

      <button className="get-started-button" onClick={() => navigate("/analysis")}>
        Get Started
      </button>
    </div>
  );
}
