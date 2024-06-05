import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ExcelExport from './ExcelExport';

interface TablesDisplayProps {
  tableName: string;
  goBack: () => void;
}

const TablesDisplay: React.FC<TablesDisplayProps> = ({ tableName, goBack }) => {
  const [records, setRecords] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://jb-api-1.onrender.com/api/${tableName}`);
        setRecords(response.data);
        console.log(records)
      } catch (error) {
        console.error(`Error fetching records from ${tableName}:`, error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [tableName]);

  // Mapping object to replace original header texts
  const headerMapping: { [key: string]: string } = {
    machine_name: 'Machine',
    record_date: 'Date',
    record_time: 'Time',
    status: 'Status',
    note: 'Note',
  };

  return (
    <div style={{ marginTop: '10px' }}>
      <div style={{ display: 'flex', marginBottom: '10px'}}>
        <h2 style={{ marginRight:'20px',fontSize: '30px'}}>{tableName}</h2>
        <ExcelExport records={records} />
      </div>

      {loading ? (
        <div>Loading...</div>
      ) : (
        <table style={{ borderSpacing: '10px', borderRadius: '10px', boxShadow: 'inset 20px 20px 60px #bebebe,inset -20px -20px 60px #ffffff' }}>
          <thead>
            <tr>
              {/* Render table headers based on record keys, excluding 'record_id' */}
              {records.length > 0 &&
                Object.keys(records[0])
                  .filter((key) => key !== 'record_id')
                  .map((key, index) => (
                    <th key={index}>{headerMapping[key]}</th>
                  ))}
            </tr>
          </thead>
          <tbody>
            {/* Render table rows */}
            {records.map((record, rowIndex) => (
              <tr key={rowIndex}>
                {/* Render table cells, excluding 'record_id' and formatting 'record_date' */}
                {Object.entries(record)
                  .filter(([key]) => key !== 'record_id')
                  .map(([key, value], cellIndex) => (
                    <td key={cellIndex} style={{ textAlign: 'center', padding: '5px' }}>
                      {value === '' ? '-' : key === 'record_date' ? new Date(value as string).toLocaleDateString() : String(value)}
                    </td>
                  ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <button onClick={goBack}>Go Back</button>
    </div>
  );
};

export default TablesDisplay;
