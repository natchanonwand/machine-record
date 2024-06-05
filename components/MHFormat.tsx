import React, { useState } from 'react';
import TablesDisplay from './MachineTable';
import styles from './Font.module.css';

const MachineHistoryFormat = () => {
    const [selectedTable, setSelectedTable] = useState<string | null>(null); 

    // Mapping between button names and corresponding table names
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

    // Function to handle button click
    const handleButtonClick = (buttonName: string) => { // Explicitly specify the type as string
        const tableName = buttonTableMap[buttonName]; // Get the corresponding table name from the mapping
        setSelectedTable(tableName);
    };

    // Function to go back to the list of buttons
    const goBackToList = () => {
        setSelectedTable(null);
    };

    return (
        <div>
            <h1 className={styles.responsiveH1} style={{color: 'blue', marginBottom: '10px'}}>Machine History Format</h1>
            {selectedTable ? (
                <TablesDisplay tableName={selectedTable} goBack={goBackToList} />
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
                    gap: 10px; /* Adjust spacing between buttons */
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

export default MachineHistoryFormat;
