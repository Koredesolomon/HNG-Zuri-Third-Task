import { useAuth0 } from "@auth0/auth0-react";
import classes from './login.module.css';
import { useState } from "react";

export default function Login() {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  const [errorMessage, setErrorMessage] = useState("");
  
  const handleLogin = async () => {
    try {
      await loginWithRedirect();
    } catch (error) {
      // Set an error message for display
      setErrorMessage("An error occurred during login. Please try again.");
    }
  };

  return (
    <div>
      {!isAuthenticated ? (
        <button className={classes.button} onClick={handleLogin}>
          Sign In
        </button>
      ) : (
        <p>Welcome</p>
      )}

      {errorMessage && (
        <p className={classes.error}>{errorMessage}</p>
      )}
    </div>
  );
}
