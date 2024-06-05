import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Font.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


const FormFormat: React.FC = () => {
  const [records, setRecords] = useState<string[]>([]);
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://jb-api-1.onrender.com/api/recorder');
      const data = response.data;
      const uniqueRecords = getUniqueRecords(data);
      setRecords(uniqueRecords);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const getUniqueRecords = (data: any[]): string[] => {
    const uniqueRecords = new Set<string>();
    data.forEach((record: any) => {
      const { record_date, record_time } = record;
      // Remove the T00:00:00.000Z part from record_date
      const formattedDate = record_date.split('T')[0];
      uniqueRecords.add(`Date ${formattedDate} Time ${record_time}`);
    });
    return Array.from(uniqueRecords);
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get('https://jb-api-1.onrender.com/api/recorder');
      const data = response.data;
      const uniqueRecords = getUniqueRecords(data);
      const filteredRecords = uniqueRecords.filter(record => {
        const date = record.split(' ')[1]; // Get the date part from the record string
        return date >= startDate && date <= endDate;
      });
      setRecords(filteredRecords);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
        <h1 className={styles.responsiveH1} style={{color: 'blue', marginBottom: '10px'}}>Daily Check Sheet Format</h1>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center',marginBottom: '10px' }}>
                <input 
                    type="date" 
                    value={startDate} 
                    onChange={e => setStartDate(e.target.value)} 
                    style={{
                        border: 'none',
                        borderRadius: '10px',
                        height: '4vh',
                        background: '#e6e6e6',
                        boxShadow: '4px 4px 9px #c4c4c4, -4px -4px 9px #ffffff',
                        padding: '5px',
                    }}
                />
                <span style={{ margin: '0 10px' }}>-</span>
                <input 
                    type="date" 
                    value={endDate} 
                    onChange={e => setEndDate(e.target.value)} 
                    style={{
                        border: 'none',
                        borderRadius: '10px',
                        height: '4vh',
                        background: '#e6e6e6',
                        boxShadow: '4px 4px 9px #c4c4c4, -4px -4px 9px #ffffff',
                        padding: '5px',
                    }}
                />
                <button 
                    onClick={handleSearch}
                    style={{
                        border: 'none',
                        borderRadius: '50%', // Makes it circular
                        width: '5vh', // Set equal width and height
                        height: '5vh',
                        background: '#00fa60',
                        padding: '4px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginLeft: '10px', // Add space between inputs and button
                    }}
                >
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </div>

            <div style={{ padding: '20px', borderRadius: '10px', boxShadow: 'inset 20px 20px 60px #bebebe,inset -20px -20px 60px #ffffff' }}>
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                    {records.map((record, index) => (
                    <li key={index} style={{ 
                        border: '1px solid rgba(209, 213, 219, 0.3)', 
                        borderRadius: '12px', 
                        height: '60px', 
                        lineHeight: '60px', 
                        marginBottom: '5px', 
                        display: 'flex', 
                        justifyContent: 'center', 
                        alignItems: 'center',
                        backdropFilter: 'blur(6px) saturate(150%)',
                        WebkitBackdropFilter: 'blur(6px) saturate(150%)',
                        backgroundColor: 'rgba(255, 255, 255, 0.14)',
                    }}>
                        {record}
                    </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
  );
};

export default FormFormat;
