import React from 'react';
import { stringify } from 'csv-stringify'; // Assuming csv-stringify is installed

interface ExcelExportProps {
  records: any[]; // Type for records array
}

const ExcelExport: React.FC<ExcelExportProps> = ({ records }) => {
  const downloadCSV = () => {
    // Modify records: Remove 'record_id' field and time part from 'record_date'
    const modifiedRecords = records.map(record => {
      const { record_id, record_date, record_time, ...modifiedRecord } = record;
      return {
        ...modifiedRecord,
        record_date: record_date.split('T')[0], // Remove time part from record_date
        record_time
      };
    });

    // Convert modified records array to CSV format
    stringify(modifiedRecords, { header: true }, (err, output) => {
      if (err) {
        console.error('Error generating CSV:', err);
        return;
      }

      // Create a Blob object containing the CSV data
      const blob = new Blob([output], { type: 'text/csv' });

      // Create a temporary URL for the Blob
      const url = window.URL.createObjectURL(blob);

      // Create a temporary <a> element to trigger the download
      const link = document.createElement('a');
      link.href = url;
      link.download = 'records.csv';

      // Trigger the download
      link.click();

      // Clean up by revoking the temporary URL
      window.URL.revokeObjectURL(url);
    });
  };

  return (
    <button
      onClick={downloadCSV}
      style={{
        borderRadius: '10px',
        background: '#43df6a',
        border: 'none',
        padding: '10px 20px',
        cursor: 'pointer',
        color: '#fff',
        fontSize: '14px',
      }}
    >
      Download Excel file
    </button>
  );
};

export default ExcelExport;
