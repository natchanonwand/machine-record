// pages/index.tsx
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from './Home.module.css';

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
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to the Machine Status Record and Report</h1>
      <p className={styles.description}>
        This web application allows you to keep track of the status of various machines.
      </p>
      <p className={styles.description}>
        <strong>Status Record Page:</strong> Record the machine status in a form.
      </p>
      <p className={styles.description}>
        <strong>History Page:</strong> View the history of records in two formats:
      </p>
      <ul className={styles.list}>
        <li>Daily Sheet Format</li>
        <li>Machine History Format</li>
      </ul>
    </div>
  );
};

export default Home;
