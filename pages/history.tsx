import React, { useEffect, useState } from 'react';
import MachineHistoryFormat from '../components/MHFormat';
import FormFormat from '../components/FormFormat';
import styles from './History.module.css'; // Import the CSS module for styling

const History = () => {
  const [showFormHistory, setShowFormHistory] = useState(false);
  const [showMachineHistory, setShowMachineHistory] = useState(false);
  const [showHistoryOption, setShowHistoryOption] = useState(true);

  const handleHistoryOptionClick = () => {
    setShowHistoryOption(!showHistoryOption); // Toggle state on click
  };

  const handleFomHistoryClick = () => {
    setShowFormHistory(true); // Update state on button click
    setShowHistoryOption(false);
  };

  const handleMachineHistoryClick = () => {
    setShowMachineHistory(true); // Update state on button click
    setShowHistoryOption(false);
  };

  const handleFormHistoryClose = () => {
    setShowFormHistory(false); // Update state on button click
    setShowHistoryOption(true);
  };

  const handleMachineHistoryClose = () => {
    setShowMachineHistory(false); // Update state on button click
    setShowHistoryOption(true);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>History of Status Record</h1>

      <button
        className={styles.toggleButton}
        onClick={handleHistoryOptionClick}
      >
        {showHistoryOption ? 'Hide Options ▲' : 'Show Options ▼'}
      </button>

      {showHistoryOption && ( // Conditionally render the button section
        <div>
          <div className={styles.buttonContainer}>
            <button
              className={styles.button}
              onClick={handleFomHistoryClick}
            >
              Daily Check Sheet Format
            </button>
            <p className={styles.buttonText}>Shows history data in current format with .pdf exportation</p>
          </div>
          <div className={styles.buttonContainer}>
            <button
              className={styles.button}
              onClick={handleMachineHistoryClick}
            >
              Machine History Format
            </button>
            <p className={styles.buttonText}>Shows history data by arranging every machine history record with excel exportation</p>
          </div>
        </div>
      )}
      {showMachineHistory && (
        <div>
          <button
            className={styles.toggleButton}
            onClick={handleMachineHistoryClose}
          >
            Close
          </button>
          <MachineHistoryFormat />
        </div>
      )} {/* Conditionally render MachineHistoryFormat */}
      {showFormHistory && (
        <div>
          <button
            className={styles.toggleButton}
            onClick={handleFormHistoryClose}
          >
            Close
          </button>
          <FormFormat />
        </div>
      )}
    </div>
  );
};

export default History;
