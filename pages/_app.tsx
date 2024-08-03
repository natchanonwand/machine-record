import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Sidebar from '../components/Sidebar';
import { useState, useEffect } from 'react';

interface MyAppProps extends AppProps {
  Component: any;
  pageProps: any;
}

function MyApp({ Component, pageProps }: MyAppProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);

  // Function to handle login
  const login = (email: string) => {
    setIsAuthenticated(true);
    setUsername(email);
    if (email === 'admin') {
      setIsAdmin(true);
    }
    const expirationTime = Date.now() + 10 * 60 * 60 * 1000; // 10 hours from now
    localStorage.setItem('expirationTime', expirationTime.toString());
  };

  // Function to handle logout
  const logout = () => {
    setIsAuthenticated(false);
    setIsAdmin(false);
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('expirationTime');
  };

  // Check local storage for authentication state and expiration time on initial render
  useEffect(() => {
    const storedIsAuthenticated = localStorage.getItem('isAuthenticated');
    const expirationTime = localStorage.getItem('expirationTime');
    const storedIsAdmin = localStorage.getItem('isAdmin');

    if (storedIsAuthenticated && expirationTime && Date.now() < parseInt(expirationTime)) {
      setIsAuthenticated(true);
      if (storedIsAdmin === 'true') {
        setIsAdmin(true);
      }
    } else {
      logout(); // Automatically log out if the session has expired
    }
  }, []);

  // Update local storage when authentication state changes
  useEffect(() => {
    if (isAuthenticated) {
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('isAdmin', isAdmin.toString());
    }
  }, [isAuthenticated, isAdmin]);

  return (
    <div>
      {isAuthenticated && <Sidebar logout={logout} isAdmin={isAdmin} />}
      <Component {...pageProps} isAuthenticated={isAuthenticated} setLogin={login} username={username} setUsername={setUsername} />
    </div>
  );
}

export default MyApp;
