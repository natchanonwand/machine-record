import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './Sidebar.module.css';

interface SidebarProps {
  logout: () => void;
}

const CustomLink = ({ href, children, isActive }: { href: string; children: React.ReactNode; isActive: boolean }) => (
  <Link href={href} passHref>
    <div className={`${styles.link} ${isActive ? styles.active : ''}`} style={{ width: '100%', display: 'block' }}>
      {children}
    </div>
  </Link>
);

const Sidebar = ({ logout }: SidebarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activePage, setActivePage] = useState('');
  const [sidebarWidth, setSidebarWidth] = useState('45%'); // Default value for mobile
  const router = useRouter();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setSidebarWidth('15%');
      } else {
        setSidebarWidth('40%');
      }
    };

    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const openNav = () => {
    setIsOpen(true);
  };

  const closeNav = () => {
    setIsOpen(false);
  };

  const handleSetActivePage = (page: string) => {
    setActivePage(page);
  };

  const handleLogout = () => {
    logout();
    router.push('/login');
  };

  return (
    <>
      <div
        className={styles.container}
        style={{
          width: isOpen ? sidebarWidth : '0',
          height: '100vh',
          transition: 'width 0.5s',
        }}
      >
        <ul style={{ padding: 0 }}>
          <li
            className={styles.listItem}
            style={{ width: '100%', cursor: 'pointer' }}
            onClick={() => {
              router.push('/status-record');
              handleSetActivePage('/status-record');
            }}
          >
            <CustomLink href="/status-record" isActive={activePage === '/status-record'}>Status Record</CustomLink>
          </li>
          <li
            className={styles.listItem}
            style={{ width: '100%', cursor: 'pointer' }}
            onClick={() => {
              router.push('/history');
              handleSetActivePage('/history');
            }}
          >
            <CustomLink href="/history" isActive={activePage === '/history'}>History</CustomLink>
          </li>
        </ul>
        <div style={{ position: 'absolute', bottom: '20px', width: '100%' }}>
          <button onClick={handleLogout} className={styles.button}>Logout</button>
        </div>
      </div>
      <div
        style={{
          marginLeft: isOpen ? `calc(${sidebarWidth} + 5px)` : '0',
          transition: 'margin-left 0.5s',
        }}
      >
        <span
          style={{ fontSize: '30px', cursor: 'pointer' }}
          onClick={isOpen ? closeNav : openNav}
        >
          &#9776; {isOpen ? 'close' : 'open'}
        </span>
      </div>
    </>
  );
};

export default Sidebar;
