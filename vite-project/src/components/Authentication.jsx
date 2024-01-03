import { useState } from "react";
import "../Authentication.css";

export default function Authenticate({ token }) {
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [user, setUser] = useState(null);

  async function handleClick() {
    try {
      if (error) setError(null);
      const response = await fetch(
        "https://fsa-jwt-practice.herokuapp.com/authenticate",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const result = await response.json();
      setSuccessMessage(result.message);
      setUser(result.data.username);
      console.log(result);
    } catch (error) {
      setError(error.message);
    }
  }
  return (
    <div className="authentication section">
      <h2>Complete Authentication</h2>
      {error && (
        <p>{error}. Please submit the signup form before authenticating.</p>
      )}
      {successMessage && <p>{successMessage}</p>}
      <button className="button" onClick={handleClick}>
        Authenticate
      </button>
      {user && <h3>You are successfully authenticated {user}!</h3>}
    </div>
  );
}