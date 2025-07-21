// src/components/Loading.jsx
import "../styles/Loading.scss";

export default function Loading() {
  return (
    <main>
      <div className="loading-container">
        <div className="loader"></div>
        <p className="loading-text">Summoning the Questions...</p>
      </div>
    </main>
  );
}
