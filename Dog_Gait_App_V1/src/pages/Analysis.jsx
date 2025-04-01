import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles.css"; // Import CSS file
import dogExample from "../assets/dogExample.jpg"; // Import the image

export default function Analysis() {
  const navigate = useNavigate();
  const [showDiagnosis, setShowDiagnosis] = useState(false);

  return (
    <div className="analysis-container">
      {/* Back to Home Button */}
      <button className="back-button" onClick={() => navigate("/")}>
        Back to Home
      </button>

      {/* Title */}
      <h1>Dog Gait Analysis</h1>

      <div className="content-wrapper">
        {/* Dog Image */}
        <img className="analysis-image" src={dogExample} alt="Dog gait analysis" />

        {/* Diagnosis Panel (Hidden by Default) */}
        {showDiagnosis && (
          <div className="diagnosis-panel">
            <h2>Diagnosis Report</h2>
            <p>
              The AI analysis indicates that the dog's gait exhibits slight irregularities 
              in its hind leg movement. This could suggest mild joint stiffness or early 
              signs of arthritis. Further observation is recommended.
            </p>
          </div>
        )}
      </div>

      {/* Upload Button (on its own line) */}
      <button className="upload-button action-button">Upload Video</button>

      {/* Video Control Buttons in a Row */}
      <div className="button-container">
        <button className="action-button">Play Video</button>
        <button className="action-button">Play Video with AI Overlay</button>
        <button className="action-button" onClick={() => setShowDiagnosis(true)}>
          Get AI Diagnosis
        </button>
      </div>

      {/* Placeholder Description */}
      <p className="description">
        The AI model analyzes the dog's gait by detecting key points on its legs
        and body. By comparing these movements to a database of normal and
        abnormal gaits, the system can provide insights on potential mobility
        issues.
      </p>
    </div>
  );
}
