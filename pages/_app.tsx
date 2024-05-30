// pages/_app.tsx
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

  // Function to handle login
  const login = () => setIsAuthenticated(true);

  // Function to handle logout
  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('isAuthenticated');
  };

  // Check local storage for authentication state and username on initial render
  useEffect(() => {
    const storedIsAuthenticated = localStorage.getItem('isAuthenticated');
    if (storedIsAuthenticated) {
      setIsAuthenticated(true);
    }
  }, []);

  // Update local storage when authentication state changes
  useEffect(() => {
    if (isAuthenticated) {
      localStorage.setItem('isAuthenticated', 'true');
    }
  }, [isAuthenticated]);

  return (
    <div>
      {isAuthenticated && <Sidebar logout={logout} />}
      <Component {...pageProps} isAuthenticated={isAuthenticated} setLogin={login} username={username} setUsername={setUsername} />
    </div>
  );
}

export default MyApp;
