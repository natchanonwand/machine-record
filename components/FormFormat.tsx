import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Font.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { PDFDocument, rgb, PDFFont, PDFPage } from 'pdf-lib';
import fontkit from '@pdf-lib/fontkit';

interface Record {
  machine_name: string;
  record_id: number;
  record_date: string;
  record_time: string;
  status: string;
  T1?: number;
  T2?: number;
  A1?: number;
  A2?: number;
  A3?: number;
  T?: number;
  note?: string;
}

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
    const apiUrlPS_1201 = `https://jb-api-1.onrender.com/api/Inlet_Pumping?machine_name=P-PS-1201(VFD)&record_date=${formattedDate}&record_time=${formattedTime}`;
    const apiUrlPS_1202 = `https://jb-api-1.onrender.com/api/Inlet_Pumping?machine_name=P-PS-1202(VFD)&record_date=${formattedDate}&record_time=${formattedTime}`;
    const apiUrlPS_1203 = `https://jb-api-1.onrender.com/api/Inlet_Pumping?machine_name=P-PS-1203&record_date=${formattedDate}&record_time=${formattedTime}`;
    const apiUrlPS_1204 = `https://jb-api-1.onrender.com/api/Inlet_Pumping?machine_name=P-PS-1204&record_date=${formattedDate}&record_time=${formattedTime}`;
    const apiUrlPS_1205 = `https://jb-api-1.onrender.com/api/Inlet_Pumping?machine_name=P-PS-1205&record_date=${formattedDate}&record_time=${formattedTime}`;
    const apiUrlPS_1206 = `https://jb-api-1.onrender.com/api/Inlet_Pumping?machine_name=P-PS-1206(VFD)&record_date=${formattedDate}&record_time=${formattedTime}`;
    const apiUrlPS_1207 = `https://jb-api-1.onrender.com/api/Inlet_Pumping?machine_name=P-PS-1207(VFD)&record_date=${formattedDate}&record_time=${formattedTime}`;
    const apiUrlPS_1208 = `https://jb-api-1.onrender.com/api/Inlet_Pumping?machine_name=P-PS-1208&record_date=${formattedDate}&record_time=${formattedTime}`;
    const apiUrlPS_1209 = `https://jb-api-1.onrender.com/api/Inlet_Pumping?machine_name=P-PS-1209&record_date=${formattedDate}&record_time=${formattedTime}`;
    const apiUrlPS_1210 = `https://jb-api-1.onrender.com/api/Inlet_Pumping?machine_name=P-PS-1210&record_date=${formattedDate}&record_time=${formattedTime}`;
  
    console.log(apiUrlPS);
    console.log(apiUrlBY); 
    console.log(apiUrlCS_1101);
    console.log(apiUrlCS_1102); 
    console.log(apiUrlPS_1201);
    console.log(apiUrlPS_1202);
    console.log(apiUrlPS_1203);
    console.log(apiUrlPS_1204);
    console.log(apiUrlPS_1205);
    console.log(apiUrlPS_1206);
    console.log(apiUrlPS_1207);
    console.log(apiUrlPS_1208);
    console.log(apiUrlPS_1209);
    console.log(apiUrlPS_1210);
  
    try {
      const [responsePS, responseBY, responseCS1, responseCS2, responsePS1, responsePS2, responsePS3, responsePS4, responsePS5, responsePS6, responsePS7, responsePS8, responsePS9] = await Promise.all([
        axios.get(apiUrlPS),
        axios.get(apiUrlBY),
        axios.get(apiUrlCS_1101),
        axios.get(apiUrlCS_1102),
        axios.get(apiUrlPS_1201),
        axios.get(apiUrlPS_1202),
        axios.get(apiUrlPS_1203),
        axios.get(apiUrlPS_1204),
        axios.get(apiUrlPS_1205),
        axios.get(apiUrlPS_1206),
        axios.get(apiUrlPS_1207),
        axios.get(apiUrlPS_1208),
        axios.get(apiUrlPS_1209),
        axios.get(apiUrlPS_1210),
      ]);
  
      const dataPS = responsePS.data;
      const dataBY = responseBY.data;
      const dataCS1 = responseCS1.data;
      const dataCS2 = responseCS2.data;
      const dataPS1 = responsePS1.data;
      const dataPS2 = responsePS2.data;
      const dataPS3 = responsePS3.data;
      const dataPS4 = responsePS4.data;
      const dataPS5 = responsePS5.data;
      const dataPS6 = responsePS6.data;
      const dataPS7 = responsePS7.data;
      const dataPS8 = responsePS8.data;
      const dataPS9 = responsePS9.data;
  
      // Combine the data from all API responses
      const combinedData = [...dataPS, ...dataBY, ...dataCS1, ...dataCS2, ...dataPS1, ...dataPS2, ...dataPS3, ...dataPS4, ...dataPS5, ...dataPS6, ...dataPS7, ...dataPS8, ...dataPS9];
  
      console.log(combinedData); // Log the combined data
      console.log(record); // Log the selected record
      overlayDataOnPDF(combinedData, formattedDate, formattedTime);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  
  const overlayDataOnPDF = async (data: Record[], date: string, time: string): Promise<void> => {
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
  
      const yOffset = 739;
      const step = 20;
  
      data.forEach((record, index) => {
        let text: string;
        let xOffset = 132;
  
        if (record.machine_name === 'SG-PS-1301' || record.machine_name === 'SG-BY-1301') {
          text = Object.entries(record)
            .filter(([key]) => !['record_id', 'machine_name', 'record_date', 'record_time', 'note'].includes(key))
            .map(([key, value]) => `${value}`)
            .join('                 '); // 12 spaces
          xOffset += 0;
          drawTextOnPage(page, text, customFont, xOffset, yOffset - step * index + (record.machine_name === 'SG-BY-1301' ? 4 : 1));
        } else if (record.machine_name === 'SC-CS-1101' || record.machine_name === 'SC-CS-1102') {
          text = Object.entries(record)
            .filter(([key]) => !['record_id', 'machine_name', 'record_date', 'record_time', 'note'].includes(key))
            .map(([key, value]) => `${value}`)
            .join('                '); // 8 spaces
          xOffset += 0;
          drawTextOnPage(page, text, customFont, xOffset, yOffset - step * index + (record.machine_name === 'SC-CS-1101' ? -6 : 0));
        } else if (record.machine_name.startsWith('P-PS-120')) {
          text = Object.entries(record)
            .filter(([key]) => !['record_id', 'machine_name', 'record_date', 'record_time', 'note'].includes(key))
            .map(([key, value]) => {
              if (key === 'T') {
                return `         ${value}        `; // 6 spaces after 'T'
              } else {
                return `${value}    `; // 4 spaces after 'Status', 'A1', 'A2', 'A3'
              }
            })
            .join('    '); // 4 spaces between 'Status', 'A1', 'A2', 'A3', and 6 spaces after 'T'
          drawTextOnPage(page, text, customFont, xOffset, yOffset - step * index - 13);
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
  
  const drawTextOnPage = (
    page: PDFPage,
    text: string,
    font: PDFFont,
    x: number,
    y: number
  ): void => {
    page.drawText(text, {
      x,
      y,
      size: 10,
      font,
      color: rgb(0, 0, 0),
    });
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
