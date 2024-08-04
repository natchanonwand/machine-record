// pages/admin.tsx
import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Admin.module.css';
import AdminTablesDisplay from '../components/AdminTablesDisplay';

interface Record {
  record_id: number;
  machine_name: string;
  record_date: string;
  record_time: string;
  status: string;
  note: string;
  A1: number;
  A2: number;
  A3: number;
  T: number;
}

interface AdminProps {
  isAuthenticated: boolean;
  username: string;
}

const Admin = ({ isAuthenticated, username }: AdminProps) => {
  const [selectedTable, setSelectedTable] = useState<string | null>(null);
  const [machineNames, setMachineNames] = useState<string[]>([]);
  const [selectedMachine, setSelectedMachine] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const buttonTableMap: { [key: string]: string } = {
    'Air Blower': 'air-blower',
    'Air Flow': 'air_flow',
    'Anoxic Mixer': 'Anoxic_Mixer',
    'Auto Sampler': 'auto_sampler',
    'Biofilter': 'biofilter',
    'Chiller': 'chiller',
    'Chiller Water Pump': 'Chiller_Water_Pump',
    'Clarifier': 'clarifier',
    'Coarse Screen': 'coarse_screen',
    'Drainage Pump': 'Drainage_Pump',
    'Effluent Pump': 'Effluent_Pump',
    'Fine Screen': 'fine_screen',
    'Garden Pump': 'garden_pump',
    'Inlet Pumping': 'Inlet_Pumping',
    'Scum Pump Fan Room6': 'Scum_Pump_Fan_Room6',
    'Ventilation Fan Room1': 'Ventilation_Fan_Room1',
    'Ventilation Fan Room2': 'Ventilation_Fan_Room2',
    'Ventilation Fan Room3': 'Ventilation_Fan_Room3',
    'Ventilation Fan Room4': 'Ventilation_Fan_Room4',
    'Ventilation Fan Room5': 'Ventilation_Fan_Room5',
    'Ventilation Fan Room6': 'Ventilation_Fan_Room6',
    'Ventilation Inlet Pumping Station': 'Ventilation_Inlet_Pumping_Station',
    'Vortex Grit': 'vortex_grit',
    'Water Pump': 'water_pump',
    'Inlet Gate': 'inlet_gate'
  };

  const handleButtonClick = async (buttonName: string) => {
    const tableName = buttonTableMap[buttonName];
    setSelectedTable(tableName);
    setLoading(true);

    try {
      const response = await axios.get<Record[]>(`https://jb-api-1.onrender.com/api/${tableName}`);
      const machineNames = Array.from(new Set(response.data.map((record) => record.machine_name)));
      setMachineNames(machineNames);
    } catch (error) {
      console.error(`Error fetching machine names from ${tableName}:`, error);
    } finally {
      setLoading(false);
    }
  };

  const handleMachineClick = (machineName: string) => {
    setSelectedMachine(machineName);
  };

  const goBackToList = () => {
    setSelectedTable(null);
    setSelectedMachine(null);
    setMachineNames([]);
  };

  if (!isAuthenticated || username !== 'admin') {
    return <div>You are not authorized to view this page.</div>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.responsiveH1} style={{ color: '#003049', marginBottom: '10px' }}>Select to edit</h1>
      {loading ? (
        <div>Loading...</div>
      ) : selectedTable ? (
        selectedMachine ? (
          <AdminTablesDisplay tableName={selectedTable} machineName={selectedMachine} goBack={goBackToList} />
        ) : (
          <div className="button-list">
            {machineNames.map((machineName, index) => (
              <button key={index} onClick={() => handleMachineClick(machineName)}>{machineName}</button>
            ))}
            <button style={{ marginTop: '10px', backgroundColor: "green" }} onClick={goBackToList}>
              <span>Back to Tables</span>
            </button>
          </div>
        )
      ) : (
        <div className="button-list">
          {Object.keys(buttonTableMap).map((buttonName, index) => (
            <button key={index} onClick={() => handleButtonClick(buttonName)}>{buttonName}</button>
          ))}
        </div>
      )}
      <style jsx>{`
        .button-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        button {
          padding: 10px;
          background-color: #007bff;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }
        button:hover {
          background-color: #0056b3;
        }
      `}</style>
    </div>
  );
};

export default Admin;
