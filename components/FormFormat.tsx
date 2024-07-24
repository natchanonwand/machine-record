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
  
    const apiUrls = [
      `https://jb-api-1.onrender.com/api/inlet_gate?machine_name=SG-PS-1301&record_date=${formattedDate}&record_time=${formattedTime}`,
      `https://jb-api-1.onrender.com/api/inlet_gate?machine_name=SG-BY-1301&record_date=${formattedDate}&record_time=${formattedTime}`,
      `https://jb-api-1.onrender.com/api/coarse_screen?machine_name=SC-CS-1101&record_date=${formattedDate}&record_time=${formattedTime}`,
      `https://jb-api-1.onrender.com/api/coarse_screen?machine_name=SC-CS-1102&record_date=${formattedDate}&record_time=${formattedTime}`,
      `https://jb-api-1.onrender.com/api/Inlet_Pumping?machine_name=P-PS-1201(VFD)&record_date=${formattedDate}&record_time=${formattedTime}`,
      `https://jb-api-1.onrender.com/api/Inlet_Pumping?machine_name=P-PS-1202(VFD)&record_date=${formattedDate}&record_time=${formattedTime}`,
      `https://jb-api-1.onrender.com/api/Inlet_Pumping?machine_name=P-PS-1203&record_date=${formattedDate}&record_time=${formattedTime}`,
      `https://jb-api-1.onrender.com/api/Inlet_Pumping?machine_name=P-PS-1204&record_date=${formattedDate}&record_time=${formattedTime}`,
      `https://jb-api-1.onrender.com/api/Inlet_Pumping?machine_name=P-PS-1205&record_date=${formattedDate}&record_time=${formattedTime}`,
      `https://jb-api-1.onrender.com/api/Inlet_Pumping?machine_name=P-PS-1206(VFD)&record_date=${formattedDate}&record_time=${formattedTime}`,
      `https://jb-api-1.onrender.com/api/Inlet_Pumping?machine_name=P-PS-1207(VFD)&record_date=${formattedDate}&record_time=${formattedTime}`,
      `https://jb-api-1.onrender.com/api/Inlet_Pumping?machine_name=P-PS-1208&record_date=${formattedDate}&record_time=${formattedTime}`,
      `https://jb-api-1.onrender.com/api/Inlet_Pumping?machine_name=P-PS-1209&record_date=${formattedDate}&record_time=${formattedTime}`,
      `https://jb-api-1.onrender.com/api/Inlet_Pumping?machine_name=P-PS-1210&record_date=${formattedDate}&record_time=${formattedTime}`,
      `https://jb-api-1.onrender.com/api/fine_screen?machine_name=SC-FS-2501&record_date=${formattedDate}&record_time=${formattedTime}`,
      `https://jb-api-1.onrender.com/api/fine_screen?machine_name=SC-FS-2502&record_date=${formattedDate}&record_time=${formattedTime}`,
      `https://jb-api-1.onrender.com/api/fine_screen?machine_name=SC-FS-2503&record_date=${formattedDate}&record_time=${formattedTime}`,
      `https://jb-api-1.onrender.com/api/fine_screen?machine_name=SC-FS-2504&record_date=${formattedDate}&record_time=${formattedTime}`,
      `https://jb-api-1.onrender.com/api/fine_screen?machine_name=SC-FS-2505&record_date=${formattedDate}&record_time=${formattedTime}`,
      `https://jb-api-1.onrender.com/api/Anoxic_Mixer?machine_name=MX-BIO-3101A&record_date=${formattedDate}&record_time=${formattedTime}`,
      `https://jb-api-1.onrender.com/api/Anoxic_Mixer?machine_name=MX-BIO-3101B&record_date=${formattedDate}&record_time=${formattedTime}`,
      `https://jb-api-1.onrender.com/api/Anoxic_Mixer?machine_name=MX-BIO-3101C&record_date=${formattedDate}&record_time=${formattedTime}`,
      `https://jb-api-1.onrender.com/api/Anoxic_Mixer?machine_name=MX-BIO-3101D&record_date=${formattedDate}&record_time=${formattedTime}`,
      `https://jb-api-1.onrender.com/api/Anoxic_Mixer?machine_name=MX-BIO-3102A&record_date=${formattedDate}&record_time=${formattedTime}`,
      `https://jb-api-1.onrender.com/api/Anoxic_Mixer?machine_name=MX-BIO-3102B&record_date=${formattedDate}&record_time=${formattedTime}`,
      `https://jb-api-1.onrender.com/api/Anoxic_Mixer?machine_name=MX-BIO-3102C&record_date=${formattedDate}&record_time=${formattedTime}`,
      `https://jb-api-1.onrender.com/api/Anoxic_Mixer?machine_name=MX-BIO-3102D&record_date=${formattedDate}&record_time=${formattedTime}`,
      `https://jb-api-1.onrender.com/api/Anoxic_Mixer?machine_name=MX-BIO-3103A&record_date=${formattedDate}&record_time=${formattedTime}`,
      `https://jb-api-1.onrender.com/api/Anoxic_Mixer?machine_name=MX-BIO-3103B&record_date=${formattedDate}&record_time=${formattedTime}`,
      `https://jb-api-1.onrender.com/api/Anoxic_Mixer?machine_name=MX-BIO-3103C&record_date=${formattedDate}&record_time=${formattedTime}`,
      `https://jb-api-1.onrender.com/api/Anoxic_Mixer?machine_name=MX-BIO-3103D&record_date=${formattedDate}&record_time=${formattedTime}`,
      `https://jb-api-1.onrender.com/api/Anoxic_Mixer?machine_name=MX-BIO-3104A&record_date=${formattedDate}&record_time=${formattedTime}`,
      `https://jb-api-1.onrender.com/api/Anoxic_Mixer?machine_name=MX-BIO-3104B&record_date=${formattedDate}&record_time=${formattedTime}`,
      `https://jb-api-1.onrender.com/api/Anoxic_Mixer?machine_name=MX-BIO-3104C&record_date=${formattedDate}&record_time=${formattedTime}`,
      `https://jb-api-1.onrender.com/api/Anoxic_Mixer?machine_name=MX-BIO-3104D&record_date=${formattedDate}&record_time=${formattedTime}`,
      `https://jb-api-1.onrender.com/api/Effluent_Pump?machine_name=P-EF-5301(VFD)&record_date=${formattedDate}&record_time=${formattedTime}`,
      `https://jb-api-1.onrender.com/api/Effluent_Pump?machine_name=P-EF-5302(VFD)&record_date=${formattedDate}&record_time=${formattedTime}`,
      `https://jb-api-1.onrender.com/api/Effluent_Pump?machine_name=P-EF-5303&record_date=${formattedDate}&record_time=${formattedTime}`,
      `https://jb-api-1.onrender.com/api/Effluent_Pump?machine_name=P-EF-5304&record_date=${formattedDate}&record_time=${formattedTime}`,
      `https://jb-api-1.onrender.com/api/Effluent_Pump?machine_name=P-EF-5305&record_date=${formattedDate}&record_time=${formattedTime}`,
      `https://jb-api-1.onrender.com/api/Effluent_Pump?machine_name=P-EF-5306&record_date=${formattedDate}&record_time=${formattedTime}`,
      `https://jb-api-1.onrender.com/api/Ventilation_Inlet_Pumping_Station?machine_name=EF-PS-01&record_date=${formattedDate}&record_time=${formattedTime}`,
      `https://jb-api-1.onrender.com/api/Ventilation_Inlet_Pumping_Station?machine_name=EF-PS-02&record_date=${formattedDate}&record_time=${formattedTime}`,
      `https://jb-api-1.onrender.com/api/Ventilation_Fan_Room1?machine_name=EF-BRR-01&record_date=${formattedDate}&record_time=${formattedTime}`,
      `https://jb-api-1.onrender.com/api/Ventilation_Fan_Room2?machine_name=EF-VFD-01&record_date=${formattedDate}&record_time=${formattedTime}`,
      `https://jb-api-1.onrender.com/api/Ventilation_Fan_Room2?machine_name=EF-BRR-02&record_date=${formattedDate}&record_time=${formattedTime}`,
      `https://jb-api-1.onrender.com/api/Ventilation_Fan_Room3?machine_name=SF-BRR-01&record_date=${formattedDate}&record_time=${formattedTime}`,
      `https://jb-api-1.onrender.com/api/Ventilation_Fan_Room3?machine_name=SF-BRR-02&record_date=${formattedDate}&record_time=${formattedTime}`,
      `https://jb-api-1.onrender.com/api/Ventilation_Fan_Room3?machine_name=SF-STR-01&record_date=${formattedDate}&record_time=${formattedTime}`,
      `https://jb-api-1.onrender.com/api/Ventilation_Fan_Room3?machine_name=SMEF-STR-01&record_date=${formattedDate}&record_time=${formattedTime}`,
      `https://jb-api-1.onrender.com/api/Ventilation_Fan_Room4?machine_name=EF-ABR-01&record_date=${formattedDate}&record_time=${formattedTime}`,
      `https://jb-api-1.onrender.com/api/Ventilation_Fan_Room4?machine_name=EF-ABR-02&record_date=${formattedDate}&record_time=${formattedTime}`,
      `https://jb-api-1.onrender.com/api/Ventilation_Fan_Room4?machine_name=SF-CRP-01&record_date=${formattedDate}&record_time=${formattedTime}`,
      `https://jb-api-1.onrender.com/api/Ventilation_Fan_Room4?machine_name=SF-CRP-02&record_date=${formattedDate}&record_time=${formattedTime}`,
      `https://jb-api-1.onrender.com/api/Ventilation_Fan_Room5?machine_name=EF-BR-01 (เครื่องจักร)&record_date=${formattedDate}&record_time=${formattedTime}`,
      `https://jb-api-1.onrender.com/api/Ventilation_Fan_Room5?machine_name=EF-BR-02 (เครื่องจักร)&record_date=${formattedDate}&record_time=${formattedTime}`,
      `https://jb-api-1.onrender.com/api/Ventilation_Fan_Room5?machine_name=EF-BR-03 (เครื่องจักร)&record_date=${formattedDate}&record_time=${formattedTime}`,
      `https://jb-api-1.onrender.com/api/Ventilation_Fan_Room5?machine_name=SMEF-TTR-01 (เครื่องจักร)&record_date=${formattedDate}&record_time=${formattedTime}`,
      `https://jb-api-1.onrender.com/api/Ventilation_Fan_Room5?machine_name=SMEF-TTR-02 (เครื่องจักร)&record_date=${formattedDate}&record_time=${formattedTime}`,
      `https://jb-api-1.onrender.com/api/Ventilation_Fan_Room5?machine_name=EF-BSM-01 (เครื่องจักร)&record_date=${formattedDate}&record_time=${formattedTime}`,
      `https://jb-api-1.onrender.com/api/Ventilation_Fan_Room5?machine_name=EF-CL-01 (เครื่องจักร)&record_date=${formattedDate}&record_time=${formattedTime}`,
      `https://jb-api-1.onrender.com/api/Ventilation_Fan_Room5?machine_name=EF-CL-02 (เครื่องจักร)&record_date=${formattedDate}&record_time=${formattedTime}`,
      `https://jb-api-1.onrender.com/api/Ventilation_Fan_Room5?machine_name=EF-CL-03 (เครื่องจักร)&record_date=${formattedDate}&record_time=${formattedTime}`,
      `https://jb-api-1.onrender.com/api/Ventilation_Fan_Room5?machine_name=EF-CL-04 (เครื่องจักร)&record_date=${formattedDate}&record_time=${formattedTime}`,
      `https://jb-api-1.onrender.com/api/Ventilation_Fan_Room5?machine_name=SF-CL-01 (เครื่องจักร)&record_date=${formattedDate}&record_time=${formattedTime}`,
      `https://jb-api-1.onrender.com/api/Ventilation_Fan_Room5?machine_name=SF-CL-02 (เครื่องจักร)&record_date=${formattedDate}&record_time=${formattedTime}`,
      `https://jb-api-1.onrender.com/api/Ventilation_Fan_Room5?machine_name=SF-CL-03 (เครื่องจักร)&record_date=${formattedDate}&record_time=${formattedTime}`,
      `https://jb-api-1.onrender.com/api/Ventilation_Fan_Room5?machine_name=SF-CL-04 (เครื่องจักร)&record_date=${formattedDate}&record_time=${formattedTime}`,
      `https://jb-api-1.onrender.com/api/Ventilation_Fan_Room5?machine_name=EF-BR-01 (ตู้ไฟ)&record_date=${formattedDate}&record_time=${formattedTime}`,
      `https://jb-api-1.onrender.com/api/Ventilation_Fan_Room5?machine_name=EF-BR-02 (ตู้ไฟ)&record_date=${formattedDate}&record_time=${formattedTime}`,
      `https://jb-api-1.onrender.com/api/Ventilation_Fan_Room5?machine_name=EF-BR-03 (ตู้ไฟ)&record_date=${formattedDate}&record_time=${formattedTime}`,
      `https://jb-api-1.onrender.com/api/Ventilation_Fan_Room5?machine_name=SMEF-TTR-01 (ตู้ไฟ)&record_date=${formattedDate}&record_time=${formattedTime}`,
      `https://jb-api-1.onrender.com/api/Ventilation_Fan_Room5?machine_name=SMEF-TTR-02 (ตู้ไฟ)&record_date=${formattedDate}&record_time=${formattedTime}`,
      `https://jb-api-1.onrender.com/api/Ventilation_Fan_Room5?machine_name=EF-BSM-01 (ตู้ไฟ)&record_date=${formattedDate}&record_time=${formattedTime}`,
      `https://jb-api-1.onrender.com/api/Ventilation_Fan_Room5?machine_name=EF-CL-01 (ตู้ไฟ)&record_date=${formattedDate}&record_time=${formattedTime}`,
      `https://jb-api-1.onrender.com/api/Ventilation_Fan_Room5?machine_name=EF-CL-02 (ตู้ไฟ)&record_date=${formattedDate}&record_time=${formattedTime}`,
      `https://jb-api-1.onrender.com/api/Ventilation_Fan_Room5?machine_name=EF-CL-03 (ตู้ไฟ)&record_date=${formattedDate}&record_time=${formattedTime}`,
      `https://jb-api-1.onrender.com/api/Ventilation_Fan_Room5?machine_name=EF-CL-04 (ตู้ไฟ)&record_date=${formattedDate}&record_time=${formattedTime}`,
      `https://jb-api-1.onrender.com/api/Ventilation_Fan_Room5?machine_name=SF-CL-01 (ตู้ไฟ)&record_date=${formattedDate}&record_time=${formattedTime}`,
      `https://jb-api-1.onrender.com/api/Ventilation_Fan_Room5?machine_name=SF-CL-02 (ตู้ไฟ)&record_date=${formattedDate}&record_time=${formattedTime}`,
      `https://jb-api-1.onrender.com/api/Ventilation_Fan_Room5?machine_name=SF-CL-03 (ตู้ไฟ)&record_date=${formattedDate}&record_time=${formattedTime}`,
      `https://jb-api-1.onrender.com/api/Ventilation_Fan_Room5?machine_name=SF-CL-04 (ตู้ไฟ)&record_date=${formattedDate}&record_time=${formattedTime}`,
      `https://jb-api-1.onrender.com/api/Ventilation_Fan_Room6?machine_name=EF-BF-01&record_date=${formattedDate}&record_time=${formattedTime}`,
      `https://jb-api-1.onrender.com/api/Ventilation_Fan_Room6?machine_name=EF-BF-02&record_date=${formattedDate}&record_time=${formattedTime}`,
      `https://jb-api-1.onrender.com/api/Ventilation_Fan_Room6?machine_name=EF-BF-03&record_date=${formattedDate}&record_time=${formattedTime}`,
      `https://jb-api-1.onrender.com/api/Scum_Pump_Fan_Room6?machine_name=P-SC-4201&record_date=${formattedDate}&record_time=${formattedTime}`,
      `https://jb-api-1.onrender.com/api/Scum_Pump_Fan_Room6?machine_name=P-SC-4202&record_date=${formattedDate}&record_time=${formattedTime}`,
      `https://jb-api-1.onrender.com/api/clarifier?machine_name=SCP-CL-4101&record_date=${formattedDate}&record_time=${formattedTime}`,
      `https://jb-api-1.onrender.com/api/clarifier?machine_name=SCP-CL-4102&record_date=${formattedDate}&record_time=${formattedTime}`,
      `https://jb-api-1.onrender.com/api/clarifier?machine_name=SCP-CL-4103&record_date=${formattedDate}&record_time=${formattedTime}`,
      `https://jb-api-1.onrender.com/api/clarifier?machine_name=SCP-CL-4104&record_date=${formattedDate}&record_time=${formattedTime}`,
      `https://jb-api-1.onrender.com/api/clarifier?machine_name=SCP-CL-4105&record_date=${formattedDate}&record_time=${formattedTime}`,
      `https://jb-api-1.onrender.com/api/clarifier?machine_name=SCP-CL-4106&record_date=${formattedDate}&record_time=${formattedTime}`,
      `https://jb-api-1.onrender.com/api/clarifier?machine_name=SCP-CL-4107&record_date=${formattedDate}&record_time=${formattedTime}`,
      `https://jb-api-1.onrender.com/api/clarifier?machine_name=SCP-CL-4108&record_date=${formattedDate}&record_time=${formattedTime}`,
      `https://jb-api-1.onrender.com/api/clarifier?machine_name=SCP-CL-4109&record_date=${formattedDate}&record_time=${formattedTime}`,
      `https://jb-api-1.onrender.com/api/clarifier?machine_name=SCP-CL-4110&record_date=${formattedDate}&record_time=${formattedTime}`,
      `https://jb-api-1.onrender.com/api/clarifier?machine_name=SCP-CL-4111&record_date=${formattedDate}&record_time=${formattedTime}`,
      `https://jb-api-1.onrender.com/api/clarifier?machine_name=SCP-CL-4112&record_date=${formattedDate}&record_time=${formattedTime}`,
      `https://jb-api-1.onrender.com/api/clarifier?machine_name=SCP-CL-4113&record_date=${formattedDate}&record_time=${formattedTime}`,
      `https://jb-api-1.onrender.com/api/clarifier?machine_name=SCP-CL-4114&record_date=${formattedDate}&record_time=${formattedTime}`,
      `https://jb-api-1.onrender.com/api/water_pump?machine_name=P-HPPW-A201 ถึง P-HPPW-A203&record_date=${formattedDate}&record_time=${formattedTime}`,
      `https://jb-api-1.onrender.com/api/water_pump?machine_name=P-PW-A301 ถึง P-PW-A302&record_date=${formattedDate}&record_time=${formattedTime}`,
      `https://jb-api-1.onrender.com/api/water_pump?machine_name=P-CW-A001 ถึง P-CW-A002&record_date=${formattedDate}&record_time=${formattedTime}`,
      `https://jb-api-1.onrender.com/api/water_pump?machine_name=P-RW-A101 ถึง P-RW-A102&record_date=${formattedDate}&record_time=${formattedTime}`,
      `https://jb-api-1.onrender.com/api/auto_sampler?machine_name=SP-G-2201&record_date=${formattedDate}&record_time=${formattedTime}`,
      `https://jb-api-1.onrender.com/api/auto_sampler?machine_name=SP-EF-5201&record_date=${formattedDate}&record_time=${formattedTime}`,
      `https://jb-api-1.onrender.com/api/air-blower?machine_name=AB-AT-3801&record_date=${formattedDate}&record_time=${formattedTime}`,
      `https://jb-api-1.onrender.com/api/air-blower?machine_name=AB-AT-3802&record_date=${formattedDate}&record_time=${formattedTime}`,
      `https://jb-api-1.onrender.com/api/air-blower?machine_name=AB-AT-3803&record_date=${formattedDate}&record_time=${formattedTime}`,
      `https://jb-api-1.onrender.com/api/air-blower?machine_name=AB-AT-3804&record_date=${formattedDate}&record_time=${formattedTime}`,
      `https://jb-api-1.onrender.com/api/air-blower?machine_name=AB-RE-3901&record_date=${formattedDate}&record_time=${formattedTime}`,
      `https://jb-api-1.onrender.com/api/air-blower?machine_name=AB-RE-3902&record_date=${formattedDate}&record_time=${formattedTime}`,
      `https://jb-api-1.onrender.com/api/air-blower?machine_name=AB-RE-3903&record_date=${formattedDate}&record_time=${formattedTime}`,
      `https://jb-api-1.onrender.com/api/air-blower?machine_name=AB-RE-3904&record_date=${formattedDate}&record_time=${formattedTime}`,
      `https://jb-api-1.onrender.com/api/Drainage_Pump?machine_name=P-D-5501&record_date=${formattedDate}&record_time=${formattedTime}`,
      `https://jb-api-1.onrender.com/api/Drainage_Pump?machine_name=P-D-5502&record_date=${formattedDate}&record_time=${formattedTime}`,
      `https://jb-api-1.onrender.com/api/Drainage_Pump?machine_name=P-D-5503&record_date=${formattedDate}&record_time=${formattedTime}`,
      `https://jb-api-1.onrender.com/api/Drainage_Pump?machine_name=P-D-5504&record_date=${formattedDate}&record_time=${formattedTime}`,
      `https://jb-api-1.onrender.com/api/Drainage_Pump?machine_name=P-D-5505&record_date=${formattedDate}&record_time=${formattedTime}`,
      `https://jb-api-1.onrender.com/api/Drainage_Pump?machine_name=P-D-5506&record_date=${formattedDate}&record_time=${formattedTime}`,
      `https://jb-api-1.onrender.com/api/Chiller_Water_Pump?machine_name=PCHP-01&record_date=${formattedDate}&record_time=${formattedTime}`,
      `https://jb-api-1.onrender.com/api/Chiller_Water_Pump?machine_name=PCHP-02&record_date=${formattedDate}&record_time=${formattedTime}`,
      `https://jb-api-1.onrender.com/api/Chiller_Water_Pump?machine_name=PCHP-03&record_date=${formattedDate}&record_time=${formattedTime}`,
      `https://jb-api-1.onrender.com/api/Chiller_Water_Pump?machine_name=PCHP-04&record_date=${formattedDate}&record_time=${formattedTime}`,
      `https://jb-api-1.onrender.com/api/air_flow?machine_name=FIT-3611&record_date=${formattedDate}&record_time=${formattedTime}`,
      `https://jb-api-1.onrender.com/api/air_flow?machine_name=FIT-3612&record_date=${formattedDate}&record_time=${formattedTime}`,
      `https://jb-api-1.onrender.com/api/air_flow?machine_name=FIT-3613&record_date=${formattedDate}&record_time=${formattedTime}`,
      `https://jb-api-1.onrender.com/api/air_flow?machine_name=FIT-3614&record_date=${formattedDate}&record_time=${formattedTime}`,
      `https://jb-api-1.onrender.com/api/biofilter?machine_name=PM-01A&record_date=${formattedDate}&record_time=${formattedTime}`,
      `https://jb-api-1.onrender.com/api/biofilter?machine_name=PM-01B&record_date=${formattedDate}&record_time=${formattedTime}`,
      `https://jb-api-1.onrender.com/api/biofilter?machine_name=PM-02A&record_date=${formattedDate}&record_time=${formattedTime}`,
      `https://jb-api-1.onrender.com/api/biofilter?machine_name=PM-02B&record_date=${formattedDate}&record_time=${formattedTime}`,
      `https://jb-api-1.onrender.com/api/vortex_grit?machine_name=MX-G-2101&record_date=${formattedDate}&record_time=${formattedTime}`,
      `https://jb-api-1.onrender.com/api/vortex_grit?machine_name=P-G-2101&record_date=${formattedDate}&record_time=${formattedTime}`,
      `https://jb-api-1.onrender.com/api/vortex_grit?machine_name=MX-G-2102&record_date=${formattedDate}&record_time=${formattedTime}`,
      `https://jb-api-1.onrender.com/api/vortex_grit?machine_name=P-G-2102&record_date=${formattedDate}&record_time=${formattedTime}`,
      `https://jb-api-1.onrender.com/api/vortex_grit?machine_name=MX-G-2103&record_date=${formattedDate}&record_time=${formattedTime}`,
      `https://jb-api-1.onrender.com/api/vortex_grit?machine_name=P-G-2103&record_date=${formattedDate}&record_time=${formattedTime}`,
      `https://jb-api-1.onrender.com/api/vortex_grit?machine_name=MX-G-2104&record_date=${formattedDate}&record_time=${formattedTime}`,
      `https://jb-api-1.onrender.com/api/vortex_grit?machine_name=P-G-2104&record_date=${formattedDate}&record_time=${formattedTime}`,
      `https://jb-api-1.onrender.com/api/garden_pump?machine_name=P-RP-A101&record_date=${formattedDate}&record_time=${formattedTime}`,
      `https://jb-api-1.onrender.com/api/garden_pump?machine_name=P-RP-A102&record_date=${formattedDate}&record_time=${formattedTime}`,
      `https://jb-api-1.onrender.com/api/chiller?machine_name=CH-01&record_date=${formattedDate}&record_time=${formattedTime}`,
      `https://jb-api-1.onrender.com/api/chiller?machine_name=CH-02&record_date=${formattedDate}&record_time=${formattedTime}`,
      `https://jb-api-1.onrender.com/api/chiller?machine_name=CH-03&record_date=${formattedDate}&record_time=${formattedTime}`,
      `https://jb-api-1.onrender.com/api/chiller?machine_name=CH-04&record_date=${formattedDate}&record_time=${formattedTime}`,
      `https://jb-api-1.onrender.com/api/chiller?machine_name=CH-04&record_date=${formattedDate}&record_time=${formattedTime}`,
    ];
    
    try {
      const responses = await Promise.all(apiUrls.map(url => axios.get(url)));
      
      const combinedData: Record[] = responses.map(response => {
        const data: Record[] = response.data;
        if (data.length > 0) {
          // Find the record with the highest record_id
          return data.reduce((maxRecord, currentRecord) => {
            return currentRecord.record_id > maxRecord.record_id ? currentRecord : maxRecord;
          });
        }
        return null;
      }).filter(record => record !== null) as Record[];
  
      console.log(combinedData); // Log the combined data
      console.log(record); // Log the selected record
      console.log(apiUrls)
      overlayDataOnPDF(combinedData, formattedDate, formattedTime);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const formatDate = (date: string): string => {
    if (!date) {
      return '';
    }
    const dateParts = date.split('T')[0].split('-');
    const year = dateParts[0].slice(-2); // Get last two digits of the year
    const month = dateParts[1];
    const day = dateParts[2];
    return `${day}/${month}/${year}`;
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
  
      // Get the first and second pages
      const pages = pdfDoc.getPages();
      const firstPage = pages[0];
      const secondPage = pages[1];

      const machineNames = [
        'SCP-CL-4101', 
        'SCP-CL-4102', 
        'SCP-CL-4103', 
        'SCP-CL-4104', 
        'SCP-CL-4105', 
        'SCP-CL-4106', 
        'SCP-CL-4107'
      ];

      const machineNames_2 = [
        'SCP-CL-4108', 
        'SCP-CL-4109', 
        'SCP-CL-4110', 
        'SCP-CL-4111', 
        'SCP-CL-4112', 
        'SCP-CL-4113', 
        'SCP-CL-4114'
      ];
  
      const yOffset = 739;
  
      data.forEach((record, index) => {
        let text: string;
        let xOffset = 132;
        let step = 20;

        if (!date || !time) {
          throw new Error('Date or time is undefined');
        }
    
        // Format date and time
        const formattedDate = formatDate(date);
    
        // Define the position for the date and time
        const dateX = 110;
        const dateY = 780;
        const timeX = 400;
        const timeY = 780;
    
        // Overlay the date and time on the PDF
        drawTextOnPage(firstPage, `${formattedDate}`, customFont, dateX, dateY, 10); // Smaller font size
        drawTextOnPage(firstPage, `${time}`, customFont, timeX, timeY, 10); // Smaller font size
    
  
        if (record.machine_name === 'SG-PS-1301' || record.machine_name === 'SG-BY-1301') {
          text = Object.entries(record)
            .filter(([key]) => !['record_id', 'machine_name', 'record_date', 'record_time', 'note'].includes(key))
            .map(([key, value]) => `${value}    `)
            .join('                        '); 
          xOffset += 0;
          drawTextOnPage(firstPage, text, customFont, xOffset, yOffset - step * index + (record.machine_name === 'SG-BY-1301' ? 4 : 1), 7);
        } else if (record.machine_name === 'SC-CS-1101' || record.machine_name === 'SC-CS-1102') {
          text = Object.entries(record)
            .filter(([key]) => !['record_id', 'machine_name', 'record_date', 'record_time', 'note'].includes(key))
            .map(([key, value]) => {
              let formattedValue = '';

            if (value !== null && value !== undefined) {
                if (typeof value === 'number') {
                    // Format the number to two decimal places
                    formattedValue = value.toFixed(2);
                    // Ensure the number fits within 6 characters
                    if (formattedValue.length > 6) {
                        // Trim or adjust if longer than 6 characters
                        formattedValue = formattedValue.slice(0, 6);
                    }
                } else {
                    // Trim other values to 6 characters
                    formattedValue = value.toString().slice(0, 6);
                }
            }


              if (key === 'status') {
                return `${formattedValue}        `;
              } else if (key === 'T1' || key === 'T2') {
                return `${formattedValue}             `;
              }
            })
            .join('             '); // 5 spaces
          xOffset += 0;
          drawTextOnPage(firstPage, text, customFont, xOffset, yOffset - step * index + (record.machine_name === 'SC-CS-1101' ? -6 : 0), 7);
        } else if (record.machine_name.startsWith('P-PS-12')) {
          step = 15.5;
          text = Object.entries(record)
            .filter(([key]) => !['record_id', 'machine_name', 'record_date', 'record_time', 'note'].includes(key))
            .map(([key, value]) => {
              let formattedValue = '';

            if (value !== null && value !== undefined) {
                if (typeof value === 'number') {
                    // Format the number to two decimal places
                    formattedValue = value.toFixed(2);
                    // Ensure the number fits within 6 characters
                    if (formattedValue.length > 6) {
                        // Trim or adjust if longer than 6 characters
                        formattedValue = formattedValue.slice(0, 6);
                    }
                } else {
                    // Trim other values to 6 characters
                    formattedValue = value.toString().slice(0, 6);
                }
            }
            if (key === 'status') {
              return `${formattedValue}         `; 
            } else if (key === 'A1' || key === 'A2') {
              return `${formattedValue}       `; 
            } else if (key === 'A3') {
              return `${formattedValue}`; 
            } else if (key === 'T'){
              return `                     ${formattedValue}   `; 
            }
            })
            .join(''); 
          drawTextOnPage(firstPage, text, customFont, xOffset, yOffset - step * index - 30, 7);
        } else if (record.machine_name.startsWith('SC-FS-25')) {
          step = 15.5;
          text = Object.entries(record)
            .filter(([key]) => !['record_id', 'machine_name', 'record_date', 'record_time', 'note'].includes(key))
            .map(([key, value]) => {
              let formattedValue = '';

            if (value !== null && value !== undefined) {
                if (typeof value === 'number') {
                    // Format the number to two decimal places
                    formattedValue = value.toFixed(2);
                    // Ensure the number fits within 6 characters
                    if (formattedValue.length > 6) {
                        // Trim or adjust if longer than 6 characters
                        formattedValue = formattedValue.slice(0, 6);
                    }
                } else {
                    // Trim other values to 6 characters
                    formattedValue = value.toString().slice(0, 6);
                }
            }
              if (key === 'status') {
                return `${formattedValue}       `; 
              } else if (key === 'A1') {
                return `             ${formattedValue}`;
              }
            })
            .join(''); 
          drawTextOnPage(firstPage, text, customFont, xOffset, yOffset - step * index - 43, 7);
        } else if (record.machine_name.startsWith('MX-BIO-31')) {
          step = 15.5;
          text = Object.entries(record)
              .filter(([key]) => !['record_id', 'machine_name', 'record_date', 'record_time', 'note'].includes(key))
              .map(([key, value]) => {
                  let formattedValue = '';
      
                  if (value !== null && value !== undefined) {
                      if (typeof value === 'number') {
                          // Format the number to two decimal places
                          formattedValue = value.toFixed(2);
                          // Ensure the number fits within 6 characters
                          if (formattedValue.length > 6) {
                              // Trim or adjust if longer than 6 characters
                              formattedValue = formattedValue.slice(0, 6);
                          }
                      } else {
                          // Trim other values to 6 characters
                          formattedValue = value.toString().slice(0, 6);
                      }
                  }
      
                  if (key === 'status') {
                      return `${formattedValue}         `; // 9 spaces
                  } else if (key === 'A1' || key === 'A2') {
                      return `${formattedValue}       `; // 7 spaces
                  } else if (key === 'A3') {
                      return `${formattedValue}`; // No additional spaces
                  } else if (key === 'T') {
                      return `                     ${formattedValue}   `; // 21 spaces before and 3 spaces after
                  }
              })
              .join(''); // No spaces between 'status', 'A1', 'A2', 'A3', and 'T'
      
          drawTextOnPage(firstPage, text, customFont, xOffset, yOffset - step * index - 57, 7);
      }
       else if (record.machine_name.startsWith('P-EF-53')) {
          step = 15.5;
          text = Object.entries(record)
            .filter(([key]) => !['record_id', 'machine_name', 'record_date', 'record_time', 'note'].includes(key))
            .map(([key, value]) => {

              let formattedValue = '';

              if (value !== null && value !== undefined) {
                  if (typeof value === 'number') {
                      // Format the number to two decimal places
                      formattedValue = value.toFixed(2);
                      // Ensure the number fits within 6 characters
                      if (formattedValue.length > 6) {
                          // Trim or adjust if longer than 6 characters
                          formattedValue = formattedValue.slice(0, 6);
                      }
                      // Ensure that whole numbers have two decimal places (i.e., .00)
                      if (!formattedValue.includes('.')) {
                        formattedValue += '.00';
                      }
                  } else {
                      // Trim other values to 6 characters
                      formattedValue = value.toString().slice(0, 6);
                  }
              }

              if (key === 'status') {
                return `${formattedValue}         `; 
              } else if (key === 'A1' || key === 'A2') {
                return `${formattedValue}       `; 
              } else if (key === 'A3') {
                return `${formattedValue}`; 
              } else if (key === 'T'){
                return `                     ${formattedValue}   `; 
              }
            })
            .join(''); // 0 spaces between 'Status', 'A1', 'A2', 'A3', and 6 spaces after 'T'
          drawTextOnPage(firstPage, text, customFont, xOffset, yOffset - step * index - 72, 7);
        } else if (record.machine_name.startsWith('EF-PS-')) {
          step = 15.5;
          text = Object.entries(record)
            .filter(([key]) => !['record_id', 'machine_name', 'record_date', 'record_time', 'note'].includes(key))
            .map(([key, value]) => {

              let formattedValue = '';

              if (value !== null && value !== undefined) {
                  if (typeof value === 'number') {
                      // Format the number to two decimal places
                      formattedValue = value.toFixed(2);
                      // Ensure the number fits within 6 characters
                      if (formattedValue.length > 6) {
                          // Trim or adjust if longer than 6 characters
                          formattedValue = formattedValue.slice(0, 6);
                      }
                      // Ensure that whole numbers have two decimal places (i.e., .00)
                      if (!formattedValue.includes('.')) {
                        formattedValue += '.00';
                      }
                  } else {
                      // Trim other values to 6 characters
                      formattedValue = value.toString().slice(0, 6);
                  }
              }

              if (key === 'status') {
                return `${formattedValue}             `; 
              } else if (key === 'A1' || key === 'A2') {
                return `${formattedValue}   `; 
              } else if (key === 'A3') {
                return `${formattedValue}`; 
              } else if (key === 'T'){
                return `              ${formattedValue}   `; 
              }
            })
            .join(''); // 0 spaces between 'Status', 'A1', 'A2', 'A3', and 6 spaces after 'T'
          drawTextOnPage(firstPage, text, customFont, xOffset + 240, yOffset - step * index + 620, 7);
        } else if (record.machine_name.startsWith('EF-BRR-01')) {
          step = 15.5;
          text = Object.entries(record)
            .filter(([key]) => !['record_id', 'machine_name', 'record_date', 'record_time', 'note'].includes(key))
            .map(([key, value]) => {

              let formattedValue = '';
  
              if (value !== null && value !== undefined) {
                  if (typeof value === 'number') {
                      // Ensure the number fits within 6 characters
                      formattedValue = value.toFixed(2); // Two decimal places
                      if (formattedValue.length > 6) {
                          // Trim or adjust if longer than 6 characters
                          formattedValue = formattedValue.slice(0, 6);
                      }
                  } else {
                      formattedValue = value.toString().slice(0, 6); // Trim to 6 characters
                  }
              }

              if (key === 'status') {
                return `${formattedValue}             `; 
              } else if (key === 'A1' || key === 'A2') {
                return `${formattedValue}   `; 
              } else if (key === 'A3') {
                return `${formattedValue}`; 
              } else if (key === 'T'){
                return `              ${formattedValue}   `; 
              }
            })
            .join(''); // 0 spaces between 'Status', 'A1', 'A2', 'A3', and 6 spaces after 'T'
          drawTextOnPage(firstPage, text, customFont, xOffset + 240, yOffset - step * index + 590, 7);
        } else if (record.machine_name === 'EF-VFD-01' || record.machine_name === 'EF-BRR-02') {
          step = 15.5;
          text = Object.entries(record)
            .filter(([key]) => !['record_id', 'machine_name', 'record_date', 'record_time', 'note'].includes(key))
            .map(([key, value]) => {

              let formattedValue = '';

              if (value !== null && value !== undefined) {
                  if (typeof value === 'number') {
                      // Format the number to two decimal places
                      formattedValue = value.toFixed(2);
                      // Ensure the number fits within 6 characters
                      if (formattedValue.length > 6) {
                          // Trim or adjust if longer than 6 characters
                          formattedValue = formattedValue.slice(0, 6);
                      }
                      // Ensure that whole numbers have two decimal places (i.e., .00)
                      if (!formattedValue.includes('.')) {
                        formattedValue += '.00';
                      }
                  } else {
                      // Trim other values to 6 characters
                      formattedValue = value.toString().slice(0, 6);
                  }
              }

              if (key === 'status') {
                return `${formattedValue}             `; 
              } else if (key === 'A1' || key === 'A2') {
                return `${formattedValue}   `; 
              } else if (key === 'A3') {
                return `${formattedValue}`; 
              } else if (key === 'T'){
                return `              ${formattedValue}   `; 
              }
            })
            .join(''); // 0 spaces between 'Status', 'A1', 'A2', 'A3', and 6 spaces after 'T'
          drawTextOnPage(firstPage, text, customFont, xOffset + 240, yOffset - step * index + 560, 7);
        } else if (record.machine_name === 'SF-BRR-01' || record.machine_name === 'SF-BRR-02' || record.machine_name === 'SF-STR-01' || record.machine_name === 'SMEF-STR-01') {
          step = 15.5;
          text = Object.entries(record)
            .filter(([key]) => !['record_id', 'machine_name', 'record_date', 'record_time', 'note'].includes(key))
            .map(([key, value]) => {

              let formattedValue = '';

              if (value !== null && value !== undefined) {
                  if (typeof value === 'number') {
                      // Format the number to two decimal places
                      formattedValue = value.toFixed(2);
                      // Ensure the number fits within 6 characters
                      if (formattedValue.length > 6) {
                          // Trim or adjust if longer than 6 characters
                          formattedValue = formattedValue.slice(0, 6);
                      }
                      // Ensure that whole numbers have two decimal places (i.e., .00)
                      if (!formattedValue.includes('.')) {
                        formattedValue += '.00';
                      }
                  } else {
                      // Trim other values to 6 characters
                      formattedValue = value.toString().slice(0, 6);
                  }
              }

              if (key === 'status') {
                return `${formattedValue}             `; 
              } else if (key === 'A1' || key === 'A2') {
                return `${formattedValue}   `; 
              } else if (key === 'A3') {
                return `${formattedValue}`; 
              } else if (key === 'T'){
                return `              ${formattedValue}   `; 
              }
            })
            .join(''); // 0 spaces between 'Status', 'A1', 'A2', 'A3', and 6 spaces after 'T'
          drawTextOnPage(firstPage, text, customFont, xOffset + 240, yOffset - step * index + 530, 7);
        } else if (record.machine_name === 'EF-ABR-01' || record.machine_name === 'EF-ABR-02' || record.machine_name === 'SF-CRP-01' || record.machine_name === 'SF-CRP-02') {
          step = 15.5;
          text = Object.entries(record)
            .filter(([key]) => !['record_id', 'machine_name', 'record_date', 'record_time', 'note'].includes(key))
            .map(([key, value]) => {
              
              let formattedValue = '';

              if (value !== null && value !== undefined) {
                  if (typeof value === 'number') {
                      // Format the number to two decimal places
                      formattedValue = value.toFixed(2);
                      // Ensure the number fits within 6 characters
                      if (formattedValue.length > 6) {
                          // Trim or adjust if longer than 6 characters
                          formattedValue = formattedValue.slice(0, 6);
                      }
                      // Ensure that whole numbers have two decimal places (i.e., .00)
                      if (!formattedValue.includes('.')) {
                        formattedValue += '.00';
                      }
                  } else {
                      // Trim other values to 6 characters
                      formattedValue = value.toString().slice(0, 6);
                  }
              }

              if (key === 'status') {
                return `${formattedValue}             `; 
              } else if (key === 'A1' || key === 'A2') {
                return `${formattedValue}   `; 
              } else if (key === 'A3') {
                return `${formattedValue}`; 
              } else if (key === 'T'){
                return `              ${formattedValue}   `; 
              }
            })
            .join(''); // 0 spaces between 'Status', 'A1', 'A2', 'A3', and 6 spaces after 'T'
          drawTextOnPage(firstPage, text, customFont, xOffset + 240, yOffset - step * index + 500, 7);
        } else if  //แยกเครื่องจักรกับตู้ไฟ!!!
          (
          record.machine_name === 'EF-BR-01 (เครื่องจักร)' || 
          record.machine_name === 'EF-BR-02 (เครื่องจักร)' || 
          record.machine_name === 'EF-BR-03 (เครื่องจักร)' || 
          record.machine_name === 'SMEF-TTR-01 (เครื่องจักร)' || 
          record.machine_name === 'SMEF-TTR-02 (เครื่องจักร)' || 
          record.machine_name ==='EF-BSM-01 (เครื่องจักร)' || 
          record.machine_name === 'EF-CL-01 (เครื่องจักร)' || 
          record.machine_name === 'EF-CL-02 (เครื่องจักร)' || 
          record.machine_name === 'EF-CL-03 (เครื่องจักร)' ||
          record.machine_name === 'EF-CL-04 (เครื่องจักร)' ||
          record.machine_name === 'SF-CL-01 (เครื่องจักร)' ||
          record.machine_name === 'SF-CL-02 (เครื่องจักร)' || 
          record.machine_name === 'SF-CL-03 (เครื่องจักร)' ||
          record.machine_name === 'SF-CL-04 (เครื่องจักร)' 
          ) 
        {
          step = 15.5;
          text = Object.entries(record)
            .filter(([key]) => !['record_id', 'machine_name', 'record_date', 'record_time', 'A1', 'A2', 'A3', 'T', 'note'].includes(key))
            .map(([key, value]) => {
              
              let formattedValue = '';

              if (value !== null && value !== undefined) {
                  if (typeof value === 'number') {
                      // Format the number to two decimal places
                      formattedValue = value.toFixed(2);
                      // Ensure the number fits within 6 characters
                      if (formattedValue.length > 6) {
                          // Trim or adjust if longer than 6 characters
                          formattedValue = formattedValue.slice(0, 6);
                      }
                      // Ensure that whole numbers have two decimal places (i.e., .00)
                      if (!formattedValue.includes('.')) {
                        formattedValue += '.00';
                      }
                  } else {
                      // Trim other values to 6 characters
                      formattedValue = value.toString().slice(0, 6);
                  }
              }

              if (key === 'status') {
                return `${formattedValue}             `; 
              } 
            })
            .join(''); // 0 spaces between 'Status', 'A1', 'A2', 'A3', and 6 spaces after 'T'
          drawTextOnPage(firstPage, text, customFont, xOffset + 235, yOffset - step * index + 470, 7);
        } else if 
            (
            record.machine_name === 'EF-BR-01 (ตู้ไฟ)' || 
            record.machine_name === 'EF-BR-02 (ตู้ไฟ)' || 
            record.machine_name === 'EF-BR-03 (ตู้ไฟ)' || 
            record.machine_name === 'SMEF-TTR-01 (ตู้ไฟ)' || 
            record.machine_name === 'SMEF-TTR-02 (ตู้ไฟ)' || 
            record.machine_name ==='EF-BSM-01 (ตู้ไฟ)' || 
            record.machine_name === 'EF-CL-01 (ตู้ไฟ)' || 
            record.machine_name === 'EF-CL-02 (ตู้ไฟ)' || 
            record.machine_name === 'EF-CL-03 (ตู้ไฟ)' ||
            record.machine_name === 'EF-CL-04 (ตู้ไฟ)' ||
            record.machine_name === 'SF-CL-01 (ตู้ไฟ)' ||
            record.machine_name === 'SF-CL-02 (ตู้ไฟ)' || 
            record.machine_name === 'SF-CL-03 (ตู้ไฟ)' ||
            record.machine_name === 'SF-CL-04 (ตู้ไฟ)' 
            )
          {
          step = 15.5;
          text = Object.entries(record)
            .filter(([key]) => !['record_id', 'machine_name', 'record_date', 'record_time', 'note'].includes(key))
            .map(([key, value]) => {
              
              let formattedValue = '';

              if (value !== null && value !== undefined) {
                  if (typeof value === 'number') {
                      // Format the number to two decimal places
                      formattedValue = value.toFixed(2);
                      // Ensure the number fits within 6 characters
                      if (formattedValue.length > 6) {
                          // Trim or adjust if longer than 6 characters
                          formattedValue = formattedValue.slice(0, 6);
                      }
                      // Ensure that whole numbers have two decimal places (i.e., .00)
                      if (!formattedValue.includes('.')) {
                        formattedValue += '.00';
                      }
                  } else {
                      // Trim other values to 6 characters
                      formattedValue = value.toString().slice(0, 6);
                  }
              }

              if (key === 'status') {
                return `${formattedValue}     `; 
              } else if (key === 'A1' || key === 'A2') {
                return `${formattedValue}   `; 
              } else if (key === 'A3') {
                return `${formattedValue}`; 
              } else if (key === 'T'){
                return `              ${formattedValue}   `; 
              }
            })
            .join(''); // 0 spaces between 'Status', 'A1', 'A2', 'A3', and 6 spaces after 'T'
          drawTextOnPage(firstPage, text, customFont, xOffset + 255, yOffset - step * index + 687, 7);
        } else if (record.machine_name === 'EF-BF-01' || record.machine_name === 'EF-BF-02' || record.machine_name === 'EF-BF-03') {
          step = 15.5;
          text = Object.entries(record)
              .filter(([key]) => !['record_id', 'machine_name', 'record_date', 'record_time', 'note'].includes(key))
              .map(([key, value]) => {
      
                  let formattedValue = '';
      
                  if (value !== null && value !== undefined) {
                      if (typeof value === 'number') {
                          // Format the number to two decimal places
                          formattedValue = value.toFixed(2);
                          // Ensure the number fits within 6 characters
                          if (formattedValue.length > 6) {
                              // Trim or adjust if longer than 6 characters
                              formattedValue = formattedValue.slice(0, 6);
                          }
                      } else {
                          // Trim other values to 6 characters
                          formattedValue = value.toString().slice(0, 6);
                      }
                  }
      
                  if (key === 'status') {
                      return `${formattedValue}             `; 
                  } else if (key === 'A1' || key === 'A2') {
                      return `${formattedValue}   `; 
                  } else if (key === 'A3') {
                      return `${formattedValue}`; 
                  } else if (key === 'T') {
                      return `              ${formattedValue}   `; 
                  }
              })
              .join(''); // 0 spaces between 'status', 'A1', 'A2', 'A3', and 6 spaces after 'T'
          drawTextOnPage(firstPage, text, customFont, xOffset + 240, yOffset - step * index + 657, 7);
      }  else if (record.machine_name === 'P-SC-4201' || record.machine_name === 'P-SC-4202') {
          step = 15.5;
          text = Object.entries(record)
            .filter(([key]) => !['record_id', 'machine_name', 'record_date', 'record_time', 'note'].includes(key))
            .map(([key, value]) => {
              
              let formattedValue = '';

              if (value !== null && value !== undefined) {
                  if (typeof value === 'number') {
                      // Format the number to two decimal places
                      formattedValue = value.toFixed(2);
                      // Ensure the number fits within 6 characters
                      if (formattedValue.length > 6) {
                          // Trim or adjust if longer than 6 characters
                          formattedValue = formattedValue.slice(0, 6);
                      }
                      // Ensure that whole numbers have two decimal places (i.e., .00)
                      if (!formattedValue.includes('.')) {
                        formattedValue += '.00';
                      }
                  } else {
                      // Trim other values to 6 characters
                      formattedValue = value.toString().slice(0, 6);
                  }
              }

              if (key === 'status') {
                return `${formattedValue}             `; 
              } else if (key === 'A1' || key === 'A2') {
                return `${formattedValue}   `; 
              } else if (key === 'A3') {
                return `${formattedValue}`; 
              } else if (key === 'T'){
                return `              ${formattedValue}   `; 
              }
            })
            .join(''); // 0 spaces between 'Status', 'A1', 'A2', 'A3', and 6 spaces after 'T'
          drawTextOnPage(firstPage, text, customFont, xOffset + 240, yOffset - step * index + 643, 7);
        } else if (machineNames.includes(record.machine_name)) {
          const step = 34.4;
          let yOffsetAdjustment = 10; // Variable to adjust yOffset dynamically
        
          // Define the coordinates for each key
          const coordinates: { [key: string]: { x: number; y: number } } = {
            status: { x: xOffset, y: yOffset - step * index + 2995 - yOffsetAdjustment },
            A_motor1: { x: xOffset + 25, y: yOffset - step * index + 3000 - yOffsetAdjustment },
            A_motor2: { x: xOffset + 50, y: yOffset - step * index + 3000 - yOffsetAdjustment },
            A_scum: { x: xOffset + 90, y: yOffset - step * index + 3000 - yOffsetAdjustment },
            A_pump: { x: xOffset + 137, y: yOffset - step * index + 3000 - yOffsetAdjustment },
            T_motor: { x: xOffset + 35, y: yOffset - step * index + 2985 - yOffsetAdjustment },
            T_scum: { x: xOffset + 90, y: yOffset - step * index + 2985 - yOffsetAdjustment},
            T_pump: { x: xOffset + 137, y: yOffset - step * index + 2985 - yOffsetAdjustment},
          };
                // Draw each key if it exists in the record
          Object.entries(coordinates).forEach(([key, { x, y }]) => {
            if (record[key as keyof typeof record]) {
              const text = record[key as keyof typeof record] as string;
              drawTextOnPage(secondPage, text, customFont, x, y, 7);
            }
          });
        } else if (machineNames_2.includes(record.machine_name)) {
          const step = 34.38;
          let yOffsetAdjustment = 10; // Variable to adjust yOffset dynamically
        
          // Define the coordinates for each key
          const coordinates: { [key: string]: { x: number; y: number } } = {
            status: { x: xOffset, y: yOffset - step * index + 2995 - yOffsetAdjustment },
            A_motor1: { x: xOffset + 25, y: yOffset - step * index + 3000 - yOffsetAdjustment },
            A_motor2: { x: xOffset + 50, y: yOffset - step * index + 3000 - yOffsetAdjustment },
            A_scum: { x: xOffset + 90, y: yOffset - step * index + 3000 - yOffsetAdjustment },
            A_pump: { x: xOffset + 137, y: yOffset - step * index + 3000 - yOffsetAdjustment },
            T_motor: { x: xOffset + 35, y: yOffset - step * index + 2985 - yOffsetAdjustment },
            T_scum: { x: xOffset + 90, y: yOffset - step * index + 2985 - yOffsetAdjustment},
            T_pump: { x: xOffset + 137, y: yOffset - step * index + 2985 - yOffsetAdjustment},
          };
                // Draw each key if it exists in the record
          Object.entries(coordinates).forEach(([key, { x, y }]) => {
            if (record[key as keyof typeof record]) {
              const text = record[key as keyof typeof record] as string;
              drawTextOnPage(secondPage, text, customFont, x, y, 7);
            }
          });
        } else if (record.machine_name === 'P-HPPW-A201 ถึง P-HPPW-A203') {
          step = 15.5;
          let yOffsetAdjustment = 10; // Variable to adjust yOffset dynamically
          text = Object.entries(record)
            .filter(([key]) => !['record_id', 'machine_name', 'record_date', 'record_time', 'note'].includes(key))
            .map(([key, value]) => {
              if (key === 'status') {
                return `${value}`;
              }
            })
            .join(''); 
          drawTextOnPage(secondPage, text, customFont, xOffset + 15, 243 , 7);
        } else if (record.machine_name === 'P-PW-A301 ถึง P-PW-A302') {
          step = 15.5;
          let yOffsetAdjustment = 10; // Variable to adjust yOffset dynamically
          text = Object.entries(record)
            .filter(([key]) => !['record_id', 'machine_name', 'record_date', 'record_time', 'note'].includes(key))
            .map(([key, value]) => {
              if (key === 'status') {
                return `${value}`;
              }
            })
            .join(''); 
          drawTextOnPage(secondPage, text, customFont, xOffset + 15, 225 , 7);
        } else if (record.machine_name === 'P-CW-A001 ถึง P-CW-A002') {
          step = 15.5;
          let yOffsetAdjustment = 10; // Variable to adjust yOffset dynamically
          text = Object.entries(record)
            .filter(([key]) => !['record_id', 'machine_name', 'record_date', 'record_time', 'note'].includes(key))
            .map(([key, value]) => {
              if (key === 'status') {
                return `${value}`;
              }
            })
            .join(''); 
          drawTextOnPage(secondPage, text, customFont, xOffset + 15, 207 , 7);
        } else if (record.machine_name === 'P-RW-A101 ถึง P-RW-A102') {
          step = 15.5;
          let yOffsetAdjustment = 10; // Variable to adjust yOffset dynamically
          text = Object.entries(record)
            .filter(([key]) => !['record_id', 'machine_name', 'record_date', 'record_time', 'note'].includes(key))
            .map(([key, value]) => {
              if (key === 'status') {
                return `${value}`;
              }
            })
            .join(''); 
          drawTextOnPage(secondPage, text, customFont, xOffset + 15, 191 , 7);
        } else if (record.machine_name === 'SP-G-2201') {
          step = 15.5;
          text = Object.entries(record)
            .filter(([key]) => !['record_id', 'machine_name', 'record_date', 'record_time', 'note'].includes(key))
            .map(([key, value]) => {
              if (key === 'status') {
                return `${value}`;
              } else if (key === 'T'){
                return `        ${value}   `; 
              }
            })
            .join(''); 
          drawTextOnPage(secondPage, text, customFont, xOffset + 105, 243 , 7); 
        } else if (record.machine_name === 'SP-EF-5201') {
          step = 15.5;
          text = Object.entries(record)
            .filter(([key]) => !['record_id', 'machine_name', 'record_date', 'record_time', 'note'].includes(key))
            .map(([key, value]) => {
              if (key === 'status') {
                return `${value}`;
              } else if (key === 'T'){
                return `        ${value}   `; 
              }
            })
            .join(''); 
          drawTextOnPage(secondPage, text, customFont, xOffset + 105, 225 , 7); 
        } else if (record.machine_name.startsWith('AB-')) {
          step = 16.5; // Set the step for spacing
          const baseYOffset = 225; // Set base Y offset to 225
          const baseXOffset = 375; // Set base X offset to 370
      
          text = Object.entries(record)
              .filter(([key]) => !['record_id', 'machine_name', 'record_date', 'record_time', 'note'].includes(key))
              .map(([key, value]) => {
                  let formattedValue = '';
      
                  if (value !== null && value !== undefined) {
                      if (typeof value === 'number') {
                          // Ensure the number fits within 6 characters
                          formattedValue = value.toFixed(2); // Two decimal places
                          if (formattedValue.length > 6) {
                              // Trim or adjust if longer than 6 characters
                              formattedValue = formattedValue.slice(0, 6);
                          }
                      } else {
                          formattedValue = value.toString().slice(0, 6); // Trim to 6 characters
                      }
                  }
      
                  if (key === 'status') {
                      return `${formattedValue}           `; 
                  } else if (key === 'A1' || key === 'A2') {
                      return `${formattedValue}  `; 
                  } else if (key === 'A3') {
                      return `${formattedValue}`; 
                  } else if (key === 'T') {
                      return `          ${formattedValue}   `; 
                  }
              })
              .join(''); // 0 spaces between 'Status', 'A1', 'A2', 'A3', and 6 spaces after 'T'
      
          const yOffset = baseYOffset + (index * step);
      
          // Log the value to the console
          console.log(`Record ${index + 1}: yOffset = ${yOffset}`);
      
          // Draw the text on the second page with spacing between each record
          drawTextOnPage(secondPage, text, customFont, baseXOffset, yOffset - 1335, 7);
      } else if (record.machine_name.startsWith('P-D-55')) {
        step = 16.5; // Set the step for spacing
        const baseYOffset = 125; // Set base Y offset to 225
        const baseXOffset = 375; // Set base X offset to 370
    
        text = Object.entries(record)
            .filter(([key]) => !['record_id', 'machine_name', 'record_date', 'record_time', 'note'].includes(key))
            .map(([key, value]) => {
                let formattedValue = '';
    
                if (value !== null && value !== undefined) {
                    if (typeof value === 'number') {
                        // Ensure the number fits within 6 characters
                        formattedValue = value.toFixed(2); // Two decimal places
                        if (formattedValue.length > 6) {
                            // Trim or adjust if longer than 6 characters
                            formattedValue = formattedValue.slice(0, 6);
                        }
                    } else {
                        formattedValue = value.toString().slice(0, 6); // Trim to 6 characters
                    }
                }
    
                if (key === 'status') {
                    return `${formattedValue}            `; 
                } else if (key === 'A1' || key === 'A2') {
                    return `${formattedValue}  `; 
                } else if (key === 'A3') {
                    return `${formattedValue}`; 
                } else if (key === 'T') {
                    return `          ${formattedValue}   `; 
                }
            })
            .join(''); // 0 spaces between 'Status', 'A1', 'A2', 'A3', and 6 spaces after 'T'
    
        const yOffset = baseYOffset + (index * step);
    
        // Log the value to the console
        console.log(`Record ${index + 1}: yOffset = ${yOffset}`);
    
        // Draw the text on the second page with spacing between each record
        drawTextOnPage(secondPage, text, customFont, baseXOffset, yOffset - 1490, 7);
    } else if (record.machine_name.startsWith('PCHP-')) {
      step = 16.5; // Set the step for spacing
      const baseYOffset = 125; // Set base Y offset to 225
      const baseXOffset = 375; // Set base X offset to 370
  
      text = Object.entries(record)
          .filter(([key]) => !['record_id', 'machine_name', 'record_date', 'record_time', 'note'].includes(key))
          .map(([key, value]) => {
              let formattedValue = '';
  
              if (value !== null && value !== undefined) {
                  if (typeof value === 'number') {
                      // Ensure the number fits within 6 characters
                      formattedValue = value.toFixed(2); // Two decimal places
                      if (formattedValue.length > 6) {
                          // Trim or adjust if longer than 6 characters
                          formattedValue = formattedValue.slice(0, 6);
                      }
                  } else {
                      formattedValue = value.toString().slice(0, 6); // Trim to 6 characters
                  }
              }
  
              if (key === 'status') {
                  return `${formattedValue}            `; 
              } else if (key === 'A1' || key === 'A2') {
                  return `${formattedValue}  `; 
              } else if (key === 'A3') {
                  return `${formattedValue}`; 
              } else if (key === 'T') {
                  return `          ${formattedValue}   `; 
              }
          })
          .join(''); // 0 spaces between 'Status', 'A1', 'A2', 'A3', and 6 spaces after 'T'
  
      const yOffset = baseYOffset + (index * step);
  
      // Log the value to the console
      console.log(`Record ${index + 1}: yOffset = ${yOffset}`);
  
      // Draw the text on the second page with spacing between each record
      drawTextOnPage(secondPage, text, customFont, baseXOffset, yOffset - 1670, 7);
    } else if (record.machine_name.startsWith('FIT-3')) {
      step = 16.5; // Set the step for spacing
      const baseYOffset = 125; // Set base Y offset to 225
      const baseXOffset = 375; // Set base X offset to 370
  
      text = Object.entries(record)
          .filter(([key]) => !['record_id', 'machine_name', 'record_date', 'record_time', 'note'].includes(key))
          .map(([key, value]) => {
              let formattedValue = '';
  
              if (value !== null && value !== undefined) {
                  if (typeof value === 'number') {
                      // Ensure the number fits within 6 characters
                      formattedValue = value.toFixed(2); // Two decimal places
                      if (formattedValue.length > 6) {
                          // Trim or adjust if longer than 6 characters
                          formattedValue = formattedValue.slice(0, 6);
                      }
                  } else {
                      formattedValue = value.toString().slice(0, 6); // Trim to 6 characters
                  }
              }
  
              if (key === 'Flow') {
                  return `${formattedValue}            `; 
              } else if (key === 'valve_percentage') {
                  return `          ${formattedValue}  `; 
              } 
          })
          .join(''); // 0 spaces between 'Status', 'A1', 'A2', 'A3', and 6 spaces after 'T'
  
      const yOffset = baseYOffset + (index * step);
  
      // Draw the text on the second page with spacing between each record
      drawTextOnPage(secondPage, text, customFont, baseXOffset, yOffset - 1823, 7);
    } else if (record.machine_name.startsWith('PM-0')) {
      step = 16.5; // Set the step for spacing
      const baseYOffset = 125; // Set base Y offset to 225
      const baseXOffset = 533; // Set base X offset to 370
  
      text = Object.entries(record)
          .filter(([key]) => !['record_id', 'machine_name', 'record_date', 'record_time', 'note'].includes(key))
          .map(([key, value]) => {
              let formattedValue = '';
  
              if (value !== null && value !== undefined) {
                  if (typeof value === 'number') {
                      // Ensure the number fits within 6 characters
                      formattedValue = value.toFixed(2); // Two decimal places
                      if (formattedValue.length > 6) {
                          // Trim or adjust if longer than 6 characters
                          formattedValue = formattedValue.slice(0, 6);
                      }
                  } else {
                      formattedValue = value.toString().slice(0, 6); // Trim to 6 characters
                  }
              }
  
              if (key === 'status') {
                  return `${formattedValue}            `; 
              } 
          })
          .join(''); // 0 spaces between 'Status', 'A1', 'A2', 'A3', and 6 spaces after 'T'
  
      const yOffset = baseYOffset + (index * step);
  
      // Draw the text on the second page with spacing between each record
      drawTextOnPage(secondPage, text, customFont, baseXOffset, yOffset - 1889, 7);
    } else if (record.machine_name === 'MX-G-2101') {
      step = 16.5; // Set the step for spacing
      const baseYOffset = 125; // Adjust base Y offset as needed
      const baseXOffset = 375; // Adjust base X offset as needed
  
      text = Object.entries(record)
          .filter(([key]) => !['record_id', 'machine_name', 'record_date', 'record_time', 'note'].includes(key))
          .map(([key, value]) => {
              let formattedValue = '';
  
              if (value !== null && value !== undefined) {
                  if (typeof value === 'number') {
                      // Ensure the number fits within 6 characters
                      formattedValue = value.toFixed(2); // Two decimal places
                      if (formattedValue.length > 6) {
                          // Trim or adjust if longer than 6 characters
                          formattedValue = formattedValue.slice(0, 6);
                      }
                  } else {
                      formattedValue = value.toString().slice(0, 6); // Trim to 6 characters
                  }
              }
  
              if (key === 'status') {
                  return `${formattedValue}            `; 
              } else if(key === 'T') {
                  return `     ${formattedValue} `; 
              }
          })
          .join(''); // 0 spaces between 'Status', 'A1', 'A2', 'A3', and 6 spaces after 'T'
  
      const yOffset = baseYOffset + (index * step);
  
      // Draw the text on the second page with spacing between each record
      drawTextOnPage(secondPage, text, customFont, baseXOffset, yOffset - 1990, 7);
    } else if (record.machine_name === 'P-G-2101') {
      step = 16.5; // Set the step for spacing
      const baseYOffset = 125; // Adjust base Y offset as needed
      const baseXOffset = 375; // Adjust base X offset as needed
  
      text = Object.entries(record)
          .filter(([key]) => !['record_id', 'machine_name', 'record_date', 'record_time', 'note'].includes(key))
          .map(([key, value]) => {
              let formattedValue = '';
  
              if (value !== null && value !== undefined) {
                  if (typeof value === 'number') {
                      // Ensure the number fits within 6 characters
                      formattedValue = value.toFixed(2); // Two decimal places
                      if (formattedValue.length > 6) {
                          // Trim or adjust if longer than 6 characters
                          formattedValue = formattedValue.slice(0, 6);
                      }
                  } else {
                      formattedValue = value.toString().slice(0, 6); // Trim to 6 characters
                  }
              }
  
              if (key === 'status') {
                  return `${formattedValue}            `; 
              } else if(key === 'T') {
                  return `     ${formattedValue} `; 
              }
          })
          .join(''); // 0 spaces between 'Status', 'A1', 'A2', 'A3', and 6 spaces after 'T'
  
      const yOffset = baseYOffset + (index * step);
  
      // Draw the text on the second page with spacing between each record
      drawTextOnPage(secondPage, text, customFont, baseXOffset, yOffset - 2025, 7);
    } else if (record.machine_name === 'MX-G-2102') {
      step = 16.5; // Set the step for spacing
      const baseYOffset = 125; // Adjust base Y offset as needed
      const baseXOffset = 375; // Adjust base X offset as needed
  
      text = Object.entries(record)
          .filter(([key]) => !['record_id', 'machine_name', 'record_date', 'record_time', 'note'].includes(key))
          .map(([key, value]) => {
              let formattedValue = '';
  
              if (value !== null && value !== undefined) {
                  if (typeof value === 'number') {
                      // Ensure the number fits within 6 characters
                      formattedValue = value.toFixed(2); // Two decimal places
                      if (formattedValue.length > 6) {
                          // Trim or adjust if longer than 6 characters
                          formattedValue = formattedValue.slice(0, 6);
                      }
                  } else {
                      formattedValue = value.toString().slice(0, 6); // Trim to 6 characters
                  }
              }
  
              if (key === 'status') {
                  return `${formattedValue}            `; 
              } else if(key === 'T') {
                  return `     ${formattedValue} `; 
              }
          })
          .join(''); // 0 spaces between 'Status', 'A1', 'A2', 'A3', and 6 spaces after 'T'
  
      const yOffset = baseYOffset + (index * step);
  
      // Draw the text on the second page with spacing between each record
      drawTextOnPage(secondPage, text, customFont, baseXOffset, yOffset - 2057, 7);
    }  else if (record.machine_name === 'P-G-2102') {
      step = 16.5; // Set the step for spacing
      const baseYOffset = 125; // Adjust base Y offset as needed
      const baseXOffset = 375; // Adjust base X offset as needed
  
      text = Object.entries(record)
          .filter(([key]) => !['record_id', 'machine_name', 'record_date', 'record_time', 'note'].includes(key))
          .map(([key, value]) => {
              let formattedValue = '';
  
              if (value !== null && value !== undefined) {
                  if (typeof value === 'number') {
                      // Ensure the number fits within 6 characters
                      formattedValue = value.toFixed(2); // Two decimal places
                      if (formattedValue.length > 6) {
                          // Trim or adjust if longer than 6 characters
                          formattedValue = formattedValue.slice(0, 6);
                      }
                  } else {
                      formattedValue = value.toString().slice(0, 6); // Trim to 6 characters
                  }
              }
  
              if (key === 'status') {
                  return `${formattedValue}            `; 
              } else if(key === 'T') {
                  return `     ${formattedValue} `; 
              }
          })
          .join(''); // 0 spaces between 'Status', 'A1', 'A2', 'A3', and 6 spaces after 'T'
  
      const yOffset = baseYOffset + (index * step);
  
      // Draw the text on the second page with spacing between each record
      drawTextOnPage(secondPage, text, customFont, baseXOffset, yOffset - 2089, 7);
    }  else if (record.machine_name === 'MX-G-2103') {
      step = 16.5; // Set the step for spacing
      const baseYOffset = 125; // Adjust base Y offset as needed
      const baseXOffset = 375; // Adjust base X offset as needed
  
      text = Object.entries(record)
          .filter(([key]) => !['record_id', 'machine_name', 'record_date', 'record_time', 'note'].includes(key))
          .map(([key, value]) => {
              let formattedValue = '';
  
              if (value !== null && value !== undefined) {
                  if (typeof value === 'number') {
                      // Ensure the number fits within 6 characters
                      formattedValue = value.toFixed(2); // Two decimal places
                      if (formattedValue.length > 6) {
                          // Trim or adjust if longer than 6 characters
                          formattedValue = formattedValue.slice(0, 6);
                      }
                  } else {
                      formattedValue = value.toString().slice(0, 6); // Trim to 6 characters
                  }
              }
  
              if (key === 'status') {
                  return `${formattedValue}            `; 
              } else if(key === 'T') {
                  return `     ${formattedValue} `; 
              }
          })
          .join(''); // 0 spaces between 'Status', 'A1', 'A2', 'A3', and 6 spaces after 'T'
  
      const yOffset = baseYOffset + (index * step);
  
      // Draw the text on the second page with spacing between each record
      drawTextOnPage(secondPage, text, customFont, baseXOffset, yOffset - 2123, 7);
    }  else if (record.machine_name === 'P-G-2103') {
      step = 16.5; // Set the step for spacing
      const baseYOffset = 125; // Adjust base Y offset as needed
      const baseXOffset = 375; // Adjust base X offset as needed
  
      text = Object.entries(record)
          .filter(([key]) => !['record_id', 'machine_name', 'record_date', 'record_time', 'note'].includes(key))
          .map(([key, value]) => {
              let formattedValue = '';
  
              if (value !== null && value !== undefined) {
                  if (typeof value === 'number') {
                      // Ensure the number fits within 6 characters
                      formattedValue = value.toFixed(2); // Two decimal places
                      if (formattedValue.length > 6) {
                          // Trim or adjust if longer than 6 characters
                          formattedValue = formattedValue.slice(0, 6);
                      }
                  } else {
                      formattedValue = value.toString().slice(0, 6); // Trim to 6 characters
                  }
              }
  
              if (key === 'status') {
                  return `${formattedValue}            `; 
              } else if(key === 'T') {
                  return `     ${formattedValue} `; 
              }
          })
          .join(''); // 0 spaces between 'Status', 'A1', 'A2', 'A3', and 6 spaces after 'T'
  
      const yOffset = baseYOffset + (index * step);
  
      // Draw the text on the second page with spacing between each record
      drawTextOnPage(secondPage, text, customFont, baseXOffset, yOffset - 2158, 7);
    }   else if (record.machine_name === 'MX-G-2104') {
      step = 16.5; // Set the step for spacing
      const baseYOffset = 125; // Adjust base Y offset as needed
      const baseXOffset = 375; // Adjust base X offset as needed
  
      text = Object.entries(record)
          .filter(([key]) => !['record_id', 'machine_name', 'record_date', 'record_time', 'note'].includes(key))
          .map(([key, value]) => {
              let formattedValue = '';
  
              if (value !== null && value !== undefined) {
                  if (typeof value === 'number') {
                      // Ensure the number fits within 6 characters
                      formattedValue = value.toFixed(2); // Two decimal places
                      if (formattedValue.length > 6) {
                          // Trim or adjust if longer than 6 characters
                          formattedValue = formattedValue.slice(0, 6);
                      }
                  } else {
                      formattedValue = value.toString().slice(0, 6); // Trim to 6 characters
                  }
              }
  
              if (key === 'status') {
                  return `${formattedValue}            `; 
              } else if(key === 'T') {
                  return `     ${formattedValue} `; 
              }
          })
          .join(''); // 0 spaces between 'Status', 'A1', 'A2', 'A3', and 6 spaces after 'T'
  
      const yOffset = baseYOffset + (index * step);
  
      // Draw the text on the second page with spacing between each record
      drawTextOnPage(secondPage, text, customFont, baseXOffset, yOffset - 2192, 7);
    }   else if (record.machine_name === 'P-G-2104') {
      step = 16.5; // Set the step for spacing
      const baseYOffset = 125; // Adjust base Y offset as needed
      const baseXOffset = 375; // Adjust base X offset as needed
  
      text = Object.entries(record)
          .filter(([key]) => !['record_id', 'machine_name', 'record_date', 'record_time', 'note'].includes(key))
          .map(([key, value]) => {
              let formattedValue = '';
  
              if (value !== null && value !== undefined) {
                  if (typeof value === 'number') {
                      // Ensure the number fits within 6 characters
                      formattedValue = value.toFixed(2); // Two decimal places
                      if (formattedValue.length > 6) {
                          // Trim or adjust if longer than 6 characters
                          formattedValue = formattedValue.slice(0, 6);
                      }
                  } else {
                      formattedValue = value.toString().slice(0, 6); // Trim to 6 characters
                  }
              }
  
              if (key === 'status') {
                  return `${formattedValue}            `; 
              } else if(key === 'T') {
                  return `     ${formattedValue} `; 
              }
          })
          .join(''); // 0 spaces between 'Status', 'A1', 'A2', 'A3', and 6 spaces after 'T'
  
      const yOffset = baseYOffset + (index * step);
  
      // Draw the text on the second page with spacing between each record
      drawTextOnPage(secondPage, text, customFont, baseXOffset, yOffset - 2223, 7);
    }    else if (record.machine_name.startsWith('P-RP-A')) {
      step = 16.5; // Set the step for spacing
      const baseYOffset = 125; // Adjust base Y offset as needed
      const baseXOffset = 520; // Adjust base X offset as needed
  
      text = Object.entries(record)
          .filter(([key]) => !['record_id', 'machine_name', 'record_date', 'record_time', 'note'].includes(key))
          .map(([key, value]) => {
              let formattedValue = '';
  
              if (value !== null && value !== undefined) {
                  if (typeof value === 'number') {
                      // Ensure the number fits within 6 characters
                      formattedValue = value.toFixed(2); // Two decimal places
                      if (formattedValue.length > 6) {
                          // Trim or adjust if longer than 6 characters
                          formattedValue = formattedValue.slice(0, 6);
                      }
                  } else {
                      formattedValue = value.toString().slice(0, 6); // Trim to 6 characters
                  }
              }
  
              if (key === 'status') {
                  return `${formattedValue}            `; 
              }
          })
          .join(''); // 0 spaces between 'Status', 'A1', 'A2', 'A3', and 6 spaces after 'T'
  
      const yOffset = baseYOffset + (index * step);
  
      // Draw the text on the second page with spacing between each record
      drawTextOnPage(secondPage, text, customFont, baseXOffset, yOffset - 2138, 7);
    }     else if (record.machine_name.startsWith('CH-')) {
      step = 16.5; // Set the step for spacing
      const baseYOffset = 125; // Adjust base Y offset as needed
      const baseXOffset = 520; // Adjust base X offset as needed
  
      text = Object.entries(record)
          .filter(([key]) => !['record_id', 'machine_name', 'record_date', 'record_time', 'note'].includes(key))
          .map(([key, value]) => {
              let formattedValue = '';
  
              if (value !== null && value !== undefined) {
                  if (typeof value === 'number') {
                      // Ensure the number fits within 6 characters
                      formattedValue = value.toFixed(2); // Two decimal places
                      if (formattedValue.length > 6) {
                          // Trim or adjust if longer than 6 characters
                          formattedValue = formattedValue.slice(0, 6);
                      }
                  } else {
                      formattedValue = value.toString().slice(0, 6); // Trim to 6 characters
                  }
              }
  
              if (key === 'status') {
                  return `${formattedValue}            `; 
              }
          })
          .join(''); // 0 spaces between 'Status', 'A1', 'A2', 'A3', and 6 spaces after 'T'
  
      const yOffset = baseYOffset + (index * step);
  
      // Draw the text on the second page with spacing between each record
      drawTextOnPage(secondPage, text, customFont, baseXOffset, yOffset - 2255, 7);
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
  
  const drawTextOnPage = (page: PDFPage, text: string, font: PDFFont, x: number, y: number, size: number): void => {
    page.drawText(text, {
      x,
      y,
      size,
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
