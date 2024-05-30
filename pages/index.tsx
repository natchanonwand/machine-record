// pages/index.tsx
import { useEffect } from 'react';
import { useRouter } from 'next/router';

interface HomeProps {
  isAuthenticated: boolean;
}

const Home = ({ isAuthenticated }: HomeProps) => {
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, router]);

  return (
    <div style={{ marginTop: '10px'}}>
      <h1>Welcome to the Machine Status Record and Report</h1>
      <p>Here you will see the status of various machines...</p>
    </div>
  );
};

export default Home;
