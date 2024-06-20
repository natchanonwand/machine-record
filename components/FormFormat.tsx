import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { PDFDocument, rgb } from 'pdf-lib';
import fontkit from '@pdf-lib/fontkit';
import styles from './Font.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const FormFormat: React.FC = () => {
  const [records, setRecords] = useState<string[]>([]);
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');
  const [selectedRecord, setSelectedRecord] = useState<string | null>(null);

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
        const date = record.split(' ')[1];
        return date >= startDate && date <= endDate;
      });
      setRecords(filteredRecords);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleRecordClick = async (record: string) => {
    setSelectedRecord(record);
  
    // Extract date and time from the record
    const datePart = record.split(' ')[1];
    const timePart = record.split(' ')[3];
  
    // Format the date and time
    const formattedDate = `${datePart}T00:00:00.000Z`;
    const formattedTime = timePart;
  
    const apiUrlPS = `https://jb-api-1.onrender.com/api/inlet_gate?machine_name=SG-PS-1301&record_date=${formattedDate}&record_time=${formattedTime}`;
    const apiUrlBY = `https://jb-api-1.onrender.com/api/inlet_gate?machine_name=SG-BY-1301&record_date=${formattedDate}&record_time=${formattedTime}`;
    const apiUrlCS_1101 = `https://jb-api-1.onrender.com/api/coarse_screen?machine_name=SC-CS-1101&record_date=${formattedDate}&record_time=${formattedTime}`;
    const apiUrlCS_1102 = `https://jb-api-1.onrender.com/api/coarse_screen?machine_name=SC-CS-1102&record_date=${formattedDate}&record_time=${formattedTime}`;
  
    console.log(apiUrlPS); // Log the constructed URL for PS to check if it's correct
    console.log(apiUrlBY); // Log the constructed URL for BY to check if it's correct
    console.log(apiUrlCS_1101); // Log the constructed URL for CS_1101 to check if it's correct
    console.log(apiUrlCS_1102); // Log the constructed URL for CS_1102 to check if it's correct
  
    try {
      const [responsePS, responseBY, responseCS1, responseCS2] = await Promise.all([
        axios.get(apiUrlPS),
        axios.get(apiUrlBY),
        axios.get(apiUrlCS_1101),
        axios.get(apiUrlCS_1102)
      ]);
  
      const dataPS = responsePS.data;
      const dataBY = responseBY.data;
      const dataCS1 = responseCS1.data;
      const dataCS2 = responseCS2.data;
  
      // Combine the data from all API responses
      const combinedData = [...dataPS, ...dataBY, ...dataCS1, ...dataCS2];
  
      console.log(combinedData); // Log the combined data
      console.log(record); // Log the selected record
      overlayDataOnPDF(combinedData, formattedDate, formattedTime);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  
  const overlayDataOnPDF = async (data: any[], date: string, time: string) => {
    try {
      const existingPdfBytes = await fetch('/DailyCheckSheet.pdf').then(res => res.arrayBuffer());
      const pdfDoc = await PDFDocument.load(existingPdfBytes);
  
      // Register fontkit
      pdfDoc.registerFontkit(fontkit);
  
      // Load custom font
      const fontUrl = '/NotoSansThai.ttf';
      const fontBytes = await fetch(fontUrl).then(res => res.arrayBuffer());
      const customFont = await pdfDoc.embedFont(fontBytes);
  
      const page = pdfDoc.getPages()[0];
  
      let yOffset = 739;
      const step = 20;
  
      data.forEach((record, index) => {
        const text = Object.entries(record)
          .filter(([key]) => !['record_id', 'machine_name', 'record_date', 'record_time', 'note'].includes(key))
          .map(([key, value]) => `${value}`)
          .join('              ');
  
        let xOffset = 132;
        if (record.machine_name === 'SG-BY-1301') {
          page.drawText(text, {
            x: xOffset,
            y: yOffset - step * index + 5, // Move text higher for SG-BY-1301
            size: 12,
            font: customFont,
            color: rgb(0, 0, 0),
          });
        } else if (record.machine_name === 'SC-CS-1101' || record.machine_name === 'SC-CS-1102') {
          xOffset += 50; // Adjust x position for CS records
          page.drawText(text, {
            x: xOffset,
            y: yOffset - step * index,
            size: 12,
            font: customFont,
            color: rgb(0, 0, 0),
          });
        } else {
          page.drawText(text, {
            x: xOffset,
            y: yOffset - step * index,
            size: 12,
            font: customFont,
            color: rgb(0, 0, 0),
          });
        }
      });
  
      const pdfBytes = await pdfDoc.save();
      const pdfBlob = new Blob([pdfBytes], { type: 'application/pdf' });
      const pdfUrl = URL.createObjectURL(pdfBlob);
      window.open(pdfUrl, '_blank');
    } catch (error) {
      console.error('Error overlaying data on PDF:', error);
    }
  };
  

  return (
    <div>
      <h1 className={styles.responsiveH1} style={{color: 'blue', marginBottom: '10px'}}>Daily Check Sheet Format</h1>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '10px' }}>
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
              borderRadius: '50%',
              width: '5vh',
              height: '5vh',
              background: '#00fa60',
              padding: '4px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: '10px',
            }}
          >
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>

        <div style={{ padding: '20px', borderRadius: '10px', boxShadow: 'inset 20px 20px 60px #bebebe,inset -20px -20px 60px #ffffff' }}>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {records.map((record, index) => (
              <li
                key={index}
                style={{
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
                  cursor: 'pointer',
                }}
                onClick={() => handleRecordClick(record)}
              >
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
