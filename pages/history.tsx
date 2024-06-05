import React, { useState } from 'react';
import MachineHistoryFormat from '../components/MHFormat';

const styles = {
  container: {
    padding: '20px',
    margin: '20px auto',
    maxWidth: '600px',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'column' as 'column',
    justifyContent: 'space-between',
    marginBottom: '10px',
  },
  button: {
    border: 'none',
    backgroundColor: 'rgba(223, 255, 222, 0.5)',
    backdropFilter: 'blur(7px)',
    borderRadius: '10px',
    height: '80px',
    cursor: 'pointer',
    marginBottom: '5px',
  },
  toggleButton: {
    // Style your toggle button here (optional)
  },
};

const History = () => {
  const [showMachineHistory, setShowMachineHistory] = useState(false);
  const [showHistoryOption, setShowHistoryOption] = useState(true);

  const handleHistoryOptionClick = () => {
    setShowHistoryOption(!showHistoryOption); // Toggle state on click
  };

  const handleMachineHistoryClick = () => {
    setShowMachineHistory(true); // Update state on button click
    setShowHistoryOption(false)
  };

  const handleMachineHistoryClose = () => {
    setShowMachineHistory(false); // Update state on button click
    setShowHistoryOption(true)
  };

  return (
    <div style={styles.container}>
      <h1 style = {{fontSize: '30px'}}>History of Status Record</h1>

      <button style={styles.toggleButton} onClick={handleHistoryOptionClick}>
        {showHistoryOption ? 'Hide Options' : 'Show Options'}
      </button>

      {showHistoryOption && ( // Conditionally render the button section
        <div>
          <div style={styles.buttonContainer}>
            <button style={styles.button} >   
            {/* <button style={styles.button} onClick={handleMachineHistoryClick}> */}
              Daily Check Sheet Format
            </button>
            <p>Shows history data in current format with .pdf exportation</p>
          </div>
          <div style={styles.buttonContainer}>
            <button style={styles.button} onClick={handleMachineHistoryClick}>
              Machine History Format
            </button>
            <p>Shows history data by arranging every machine history record with excel exportation</p>
          </div>
        </div>
      )}
      {showMachineHistory && (
        <div>
          <button style={styles.toggleButton} onClick={handleMachineHistoryClose}>
            close
          </button>
          <MachineHistoryFormat />
        </div>
        
      )} {/* Conditionally render MachineHistoryFormat */}
    </div>
  );
};

export default History;
