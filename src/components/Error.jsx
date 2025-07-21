import { useEffect } from "react";
import "../styles/Error.scss";

export default function Error({ message, redirectFN }) {
  useEffect(() => {
    const timeout = setTimeout(redirectFN, 4000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <main className="error-container">
      <div className="error-box">
        {message.split("\n").map((line, index) => (
          <span key={index}>
            {line}
            <br />
          </span>
        ))}
      </div>
    </main>
  );
}
