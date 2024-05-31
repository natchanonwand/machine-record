import { useRouter } from 'next/router';
import { useState } from 'react';
import styles from './Login.module.css'; // Import CSS module for styling

interface LoginProps {
  setLogin: () => void;
}

const Login = ({ setLogin }: LoginProps) => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (!email || !password) {
      alert("Both email and password are required.");
      return;
    }
  
    try {
      const response = await fetch('https://jb-api-1.onrender.com/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      
      if (response.ok) {
        const data = await response.json(); // Parse JSON only if the response was successful
        setLogin(); // This will set isAuthenticated to true
        router.push('/'); // Redirect to the home page
      } else {
        // If the response status code is not ok, handle potential parsing separately
        try {
          const errorData = await response.json(); // Attempt to parse error details from JSON
          alert(`Login failed: ${errorData.message}`); // Show error message from the server
        } catch {
          // If parsing the JSON fails, default to a generic error message
          alert('Login failed: Unable to parse error message from the response.');
        }
      }
    } catch (error) {
      // Handle errors related to the fetch operation itself (network errors, etc.)
      alert(`Login request failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  };
  
  return (
    <div className={styles.container}>
      <h1>Login</h1>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button onClick={handleLogin}>Log In</button>
    </div>
  );
};

export default Login;
