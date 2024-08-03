import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ExcelExport from './ExcelExport';
import EditModal from './EditModal';

interface Record {
  [key: string]: any;
  record_id: number;
  machine_name: string;
  record_date: string;
  record_time: string;
  status: string;
  note: string;
}

interface AdminTablesDisplayProps {
  tableName: string;
  machineName: string;
  goBack: () => void;
}

const AdminTablesDisplay: React.FC<AdminTablesDisplayProps> = ({ tableName, machineName, goBack }) => {
  const [records, setRecords] = useState<Record[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [editingRecord, setEditingRecord] = useState<Record | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<Record[]>(`https://jb-api-1.onrender.com/api/${tableName}?machine_name=${machineName}`);
        setRecords(response.data);
      } catch (error) {
        console.error(`Error fetching records for ${machineName} from ${tableName}:`, error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [tableName, machineName]);

  const handleEditClick = (record: Record) => {
    setEditingRecord(record);
  };

  const handleSave = async (updatedRecord: Record) => {
    try {
      await axios.put(`https://jb-api-1.onrender.com/api/${tableName}/${updatedRecord.record_id}`, updatedRecord);
      setRecords((prevRecords) =>
        prevRecords.map((rec) => (rec.record_id === updatedRecord.record_id ? updatedRecord : rec))
      );
      setEditingRecord(null);
    } catch (error) {
      console.error(`Error updating record:`, error);
    }
  };

  const headerMapping: { [key: string]: string } = {
    record_date: 'Date',
    record_time: 'Time',
    status: 'Status',
    note: 'Note',
  };

  return (
    <div style={{ marginTop: '10px' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', marginBottom: '10px' }}>
        <h2 style={{ marginRight: '20px', fontSize: '30px' }}>{machineName}</h2>
        <ExcelExport records={records} />
      </div>

      {loading ? (
        <div>Loading...</div>
      ) : (
        <div
          style={{
            overflow: 'auto',
            maxHeight: '400px',
            maxWidth: '100%',
            borderRadius: '10px',
            boxShadow: 'inset 20px 20px 60px #bebebe, inset -20px -20px 60px #ffffff',
            padding: '10px',
          }}
        >
          <table style={{ borderSpacing: '10px', width: '100%' }}>
            <thead>
              <tr>
                {records.length > 0 &&
                  Object.keys(records[0])
                    .filter((key) => key !== 'record_id' && key !== 'machine_name')
                    .map((key, index) => (
                      <th key={index}>{headerMapping[key] || key}</th>
                    ))}
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {records.map((record, rowIndex) => (
                <tr key={rowIndex}>
                  {Object.entries(record)
                    .filter(([key]) => key !== 'record_id' && key !== 'machine_name')
                    .map(([key, value], cellIndex) => (
                      <td key={cellIndex} style={{ textAlign: 'center', padding: '5px' }}>
                        {value === ''
                          ? '-'
                          : key === 'record_date'
                          ? new Date(value as string).toLocaleDateString()
                          : String(value)}
                      </td>
                    ))}
                  <td>
                    <button onClick={() => handleEditClick(record)}>Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {editingRecord && (
        <EditModal
          record={editingRecord}
          onSave={handleSave}
          onClose={() => setEditingRecord(null)}
        />
      )}
      <button
        style={{
          border: 'none',
          borderRadius: '10px',
          height: '25px',
          background: '#e6e6e6',
          boxShadow: '4px 4px 9px #c4c4c4, -4px -4px 9px #ffffff',
          padding: '5px',
          marginTop: '10px',
          marginBottom: '10px',
        }}
        onClick={goBack}
      >
        Go Back
      </button>
    </div>
  );
};

export default AdminTablesDisplay;
