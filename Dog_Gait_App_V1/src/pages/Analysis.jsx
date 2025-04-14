import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles.css";
import dogExample from "../assets/dogExample.jpg";

function Analysis() {
  const navigate = useNavigate();
  const [breed, setBreed] = useState("");
  const [gaitSpeed, setGaitSpeed] = useState("walk");

  return (
    <div className="analysis-container">
      {/* Back Button */}
      <button className="analysis-button" onClick={() => navigate("/")}>
        Back to Home
      </button>

      <h1>Dog Gait Analysis</h1>

      <div className="content-flex">
        {/* Left Panel - Input Fields */}
        <div className="left-panel">
          <label className="panel-label">Insert Dog Breed:</label>
          <input
            type="text"
            placeholder="e.g. Labrador"
            className="input-box"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
          />

          <label className="panel-label">Choose Gait Speed:</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                value="walk"
                checked={gaitSpeed === "walk"}
                onChange={(e) => setGaitSpeed(e.target.value)}
              />
              Walk
            </label>
            <label>
              <input
                type="radio"
                value="gallop"
                checked={gaitSpeed === "gallop"}
                onChange={(e) => setGaitSpeed(e.target.value)}
              />
              Gallop
            </label>
            <label>
              <input
                type="radio"
                value="run"
                checked={gaitSpeed === "run"}
                onChange={(e) => setGaitSpeed(e.target.value)}
              />
              Run
            </label>
          </div>
        </div>

        {/* Center - Image */}
        <img src={dogExample} alt="Dog Analysis" className="analysis-image" />

        {/* Right Panel - Always Visible Diagnosis */}
        <div className="diagnosis-panel">
          <h3>AI Diagnosis</h3>
          <p>
            The AI analysis will apear here
          </p>
        </div>
      </div>

      {/* Buttons Below */}
      <div className="button-container">
        <button className="analysis-button">Upload Video</button>
        <button className="analysis-button">Play Video with AI Overlay</button>
        <button className="analysis-button">Get AI Diagnosis</button>
      </div>

      <p className="description">
        The AI model analyzes the dog's gait by detecting key points and
        comparing movement against standard gait patterns.
      </p>
    </div>
  );
}

export default Analysis;
