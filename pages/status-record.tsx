import { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { AiOutlineCalendar } from 'react-icons/ai';
import styles from './StatusRecordForm.module.css';

const StatusRecordForm = () => {
    const [showSections1, setShowSections1] = useState(false); 
    const [showSections2, setShowSections2] = useState(false);
    const [showSections3, setShowSections3] = useState(false); 
    const [showSections4, setShowSections4] = useState(false);
    const [showSections5, setShowSections5] = useState(false); 
    const [showSections6, setShowSections6] = useState(false);
    const [showSections7, setShowSections7] = useState(false);
    const [recorderName, setRecorderName] = useState('');
    const [recordDate, setRecordDate] = useState<Date | null>(null);
    const [recordTime, setRecordTime] = useState('');
    const [isDataSent, setIsDataSent] = useState(false);
  const [chStatuses, setChStatuses] = useState<{ machine_name: string; record_date: string; record_time: string; status: string; note: string }[]>([
      { machine_name: 'CH-01', record_date: '', record_time: '', status: '', note: '' },
      { machine_name: 'CH-02', record_date: '', record_time: '', status: '', note: '' },
      { machine_name: 'CH-03', record_date: '', record_time: '', status: '', note: '' },
      { machine_name: 'CH-04', record_date: '', record_time: '', status: '', note: '' },
  ])
  const [isChillerDataSent, setIsChillerDataSent] = useState(false);
  const [chillerWaterPumpStatuses, setChillerWaterPumpStatuses] = useState([
      { machine_name: 'PCHP-01',record_date: '', record_time: '', status: '', A1: '', A2: '', A3: '', T: '', note: '' },
      { machine_name: 'PCHP-02',record_date: '', record_time: '', status: '', A1: '', A2: '', A3: '', T: '', note: '' },
      { machine_name: 'PCHP-03',record_date: '', record_time: '', status: '', A1: '', A2: '', A3: '', T: '', note: '' },
      { machine_name: 'PCHP-04',record_date: '', record_time: '', status: '', A1: '', A2: '', A3: '', T: '', note: '' },
  ])
  const [isChillerWaterPumpDataSent, setIsChillerWaterPumpDataSent] = useState(false);
  const [fan6Statuses, setFan6Statuses] = useState([
      { machine_name: 'EF-BF-01',record_date: '', record_time: '', status: '', A1: '', A2: '', A3: '', T: '', note: '' },
      { machine_name: 'EF-BF-02',record_date: '', record_time: '', status: '', A1: '', A2: '', A3: '', T: '', note: '' },
      { machine_name: 'EF-BF-03',record_date: '', record_time: '', status: '', A1: '', A2: '', A3: '', T: '', note: '' },
  ])
  const [isVentilationFan6DataSent, setIsVentilationFan6DataSent] = useState(false);
  const [biofilterStatuses, setBiofilterStatuses] = useState([
      { machine_name: 'PM-01A',record_date: '', record_time: '', status: '', note: '' },
      { machine_name: 'PM-01B',record_date: '', record_time: '', status: '', note: '' },
      { machine_name: 'PM-02A',record_date: '', record_time: '', status: '', note: '' },
      { machine_name: 'PM-02B',record_date: '', record_time: '', status: '', note: '' },
  ])
  const [isBiofilterDataSent, setIsBiofilterDataSent] = useState(false);
  const [gardenPumpStatuses, setGardenPumpStatuses] = useState([
    { machine_name: 'P-RP-A101',record_date: '', record_time: '', status: '', note: '' },
    { machine_name: 'P-RP-A102',record_date: '', record_time: '', status: '', note: '' },
  ])
  const [isGardenPumpDataSent, setIsGardenPumpDataSent] = useState(false);
  const [inletPumpingStatuses, setInletPumpingStatuses] = useState([
    { machine_name: 'P-PS-1203',record_date: '', record_time: '', status: '', A1: '', A2: '', A3: '', T: '', note: '' },
    { machine_name: 'P-PS-1204',record_date: '', record_time: '', status: '', A1: '', A2: '', A3: '', T: '', note: '' },
    { machine_name: 'P-PS-1205',record_date: '', record_time: '', status: '', A1: '', A2: '', A3: '', T: '', note: '' },
    { machine_name: 'P-PS-1206',record_date: '', record_time: '', status: '', A1: '', A2: '', A3: '', T: '', note: '' },
    { machine_name: 'P-PS-1207',record_date: '', record_time: '', status: '', A1: '', A2: '', A3: '', T: '', note: '' },
    { machine_name: 'P-PS-1208',record_date: '', record_time: '', status: '', A1: '', A2: '', A3: '', T: '', note: '' },
    { machine_name: 'P-PS-1209',record_date: '', record_time: '', status: '', A1: '', A2: '', A3: '', T: '', note: '' },
    { machine_name: 'P-PS-1210',record_date: '', record_time: '', status: '', A1: '', A2: '', A3: '', T: '', note: '' },
    { machine_name: 'P-PS-1201(VFD)',record_date: '', record_time: '', status: '', A1: '', A2: '', A3: '', T: '', note: '' },
    { machine_name: 'P-PS-1202(VFD)',record_date: '', record_time: '', status: '', A1: '', A2: '', A3: '', T: '', note: '' },
    { machine_name: 'P-PS-1206(VFD)',record_date: '', record_time: '', status: '', A1: '', A2: '', A3: '', T: '', note: '' },
    { machine_name: 'P-PS-1207(VFD)',record_date: '', record_time: '', status: '', A1: '', A2: '', A3: '', T: '', note: '' },

  ])
  const [isInletPumpingDataSent, setIsInletPumpingDataSent] = useState(false);
  const [ventilationInletPumpingStatuses, setVentilationInletPumpingStatuses] = useState([
    { machine_name: 'EF-PS-01',record_date: '', record_time: '', status: '', A1: '', A2: '', A3: '', T: '', note: '' },
    { machine_name: 'EF-PS-02',record_date: '', record_time: '', status: '', A1: '', A2: '', A3: '', T: '', note: '' },
  ])
  const [isVentilationInletPumpingDataSent, setIsVentilationInletPumpingDataSent] = useState(false);
  const [inletGateStatuses, setInletGateStatuses] = useState([
    { machine_name: 'SG-PS-1301',record_date: '', record_time: '', status: '', gate_percentage:'', note: '' },
    { machine_name: 'SG-BY-1301',record_date: '', record_time: '', status: '', gate_percentage:'', note: '' },
  ])
  const [isInletGateDataSent, setIsInletGateDataSent] = useState(false);
  const [coarseScreenStatuses, setCoarseScreenStatuses] = useState([
    { machine_name: 'SC-CS-1101',record_date: '', record_time: '', status: '',T_1: '', T_2:'',  note: '' },
    { machine_name: 'SC-CS-1102',record_date: '', record_time: '', status: '',T_1: '', T_2:'',  note: '' },
  ])
  const [isCoarseScreenDataSent, setIsCoarseScreenDataSent] = useState(false);
  const [fan3Statuses, setFan3Statuses] = useState([
    { machine_name: 'SF-BRR-01',record_date: '', record_time: '', status: '', A1: '', A2: '', A3: '', T: '', note: '' },
    { machine_name: 'SF-BRR-02',record_date: '', record_time: '', status: '', A1: '', A2: '', A3: '', T: '', note: '' },
  ])
  const [isVentilationFan3DataSent, setIsVentilationFan3DataSent] = useState(false);
  const [fan2Statuses, setFan2Statuses] = useState([
    { machine_name: 'EF-VFD-01',record_date: '', record_time: '', status: '', A1: '', A2: '', A3: '', T: '', note: '' },
    { machine_name: 'EF-VFD-02',record_date: '', record_time: '', status: '', A1: '', A2: '', A3: '', T: '', note: '' },
  ])
  const [isVentilationFan2DataSent, setIsVentilationFan2DataSent] = useState(false);
  const [fan1Statuses, setFan1Statuses] = useState([
    { machine_name: 'EF-BRR-01',record_date: '', record_time: '', status: '', A1: '', A2: '', A3: '', T: '', note: '' },
  ])
  const [isVentilationFan1DataSent, setIsVentilationFan1DataSent] = useState(false);
  const [autoSamplerStatuses, setAutoSamplerStatuses] = useState([
    { machine_name: 'SP-G-2201',record_date: '', record_time: '', status: '', T:'', note: '' },
  ])
  const [isAutoSamplerDataSent, setIsAutoSamplerDataSent] = useState(false);
  const [vortexGritStatuses, setVortexGridStatuses] = useState([
    { machine_name: 'MX-G-2101',record_date: '', record_time: '', status: '', T:'', note: '' },
    { machine_name: 'P-G-2101',record_date: '', record_time: '', status: '', T:'', note: '' },
    { machine_name: 'MX-G-2102',record_date: '', record_time: '', status: '', T:'', note: '' },
    { machine_name: 'P-G-2102',record_date: '', record_time: '', status: '', T:'', note: '' },
    { machine_name: 'MX-G-2103',record_date: '', record_time: '', status: '', T:'', note: '' },
    { machine_name: 'P-G-2103',record_date: '', record_time: '', status: '', T:'', note: '' },
    { machine_name: 'MX-G-2104',record_date: '', record_time: '', status: '', T:'', note: '' },
    { machine_name: 'P-G-2104',record_date: '', record_time: '', status: '', T:'', note: '' },
  ])
  const [isVortexGridDataSent, setIsVortexGridDataSent] = useState(false);
  const [fineScreenStatuses, setFineScreenStatuses] = useState([
    { machine_name: 'SC-FS-2505',record_date: '', record_time: '', status: '', A1:'', note: '' },
    { machine_name: 'SC-FS-2504',record_date: '', record_time: '', status: '', A1:'', note: '' },
    { machine_name: 'SC-FS-2503',record_date: '', record_time: '', status: '', A1:'', note: '' },
    { machine_name: 'SC-FS-2502',record_date: '', record_time: '', status: '', A1:'', note: '' },
    { machine_name: 'SC-FS-2501',record_date: '', record_time: '', status: '', A1:'', note: '' },
  ])
  const [isFineScreenDataSent, setIsFineScreenDataSent] = useState(false); 
  const [drainagePump3Statuses, setDrainagePump3Statuses] = useState([
    { machine_name: 'P-D-5505',record_date: '', record_time: '', status: '', A1: '', A2: '', A3: '', T: '', note: '' },
    { machine_name: 'P-D-5506',record_date: '', record_time: '', status: '', A1: '', A2: '', A3: '', T: '', note: '' },
  ])
  const [isDrainagePump3DataSent, setIsDrainagePump3DataSent] = useState(false);
  const [fan4Statuses, setFan4Statuses] = useState([
    { machine_name: 'EF-ABR-01',record_date: '', record_time: '', status: '', A1: '', A2: '', A3: '', T: '', note: '' },
    { machine_name: 'EF-ABR-02',record_date: '', record_time: '', status: '', A1: '', A2: '', A3: '', T: '', note: '' },
    { machine_name: 'SF-CRP-01',record_date: '', record_time: '', status: '', A1: '', A2: '', A3: '', T: '', note: '' },
    { machine_name: 'SF-CRP-02',record_date: '', record_time: '', status: '', A1: '', A2: '', A3: '', T: '', note: '' },
  ])
  const [isVentilationFan4DataSent, setIsVentilationFan4DataSent] = useState(false);
  const [anoxicMixer1Statuses, setAnoxicMixer1Statuses] = useState([
    { machine_name: 'MX-BIO-3101A',record_date: '', record_time: '', status: '', A1: '', A2: '', A3: '', T: '', note: '' },
    { machine_name: 'MX-BIO-3101B',record_date: '', record_time: '', status: '', A1: '', A2: '', A3: '', T: '', note: '' },
    { machine_name: 'MX-BIO-3101C',record_date: '', record_time: '', status: '', A1: '', A2: '', A3: '', T: '', note: '' },
    { machine_name: 'MX-BIO-3101D',record_date: '', record_time: '', status: '', A1: '', A2: '', A3: '', T: '', note: '' },
  ])
  const [isAnoxicMixer1DataSent, setIsAnoxicMixer1DataSent] = useState(false);
  const [anoxicMixer2Statuses, setAnoxicMixer2Statuses] = useState([
    { machine_name: 'MX-BIO-3102A',record_date: '', record_time: '', status: '', A1: '', A2: '', A3: '', T: '', note: '' },
    { machine_name: 'MX-BIO-3102B',record_date: '', record_time: '', status: '', A1: '', A2: '', A3: '', T: '', note: '' },
    { machine_name: 'MX-BIO-3102C',record_date: '', record_time: '', status: '', A1: '', A2: '', A3: '', T: '', note: '' },
    { machine_name: 'MX-BIO-3102D',record_date: '', record_time: '', status: '', A1: '', A2: '', A3: '', T: '', note: '' },
  ])
  const [isAnoxicMixer2DataSent, setIsAnoxicMixer2DataSent] = useState(false);
  const [anoxicMixer3Statuses, setAnoxicMixer3Statuses] = useState([
    { machine_name: 'MX-BIO-3103A',record_date: '', record_time: '', status: '', A1: '', A2: '', A3: '', T: '', note: '' },
    { machine_name: 'MX-BIO-3103B',record_date: '', record_time: '', status: '', A1: '', A2: '', A3: '', T: '', note: '' },
    { machine_name: 'MX-BIO-3103C',record_date: '', record_time: '', status: '', A1: '', A2: '', A3: '', T: '', note: '' },
    { machine_name: 'MX-BIO-3103D',record_date: '', record_time: '', status: '', A1: '', A2: '', A3: '', T: '', note: '' },
  ])
  const [isAnoxicMixer3DataSent, setIsAnoxicMixer3DataSent] = useState(false);
  const [anoxicMixer4Statuses, setAnoxicMixer4Statuses] = useState([
    { machine_name: 'MX-BIO-3104A',record_date: '', record_time: '', status: '', A1: '', A2: '', A3: '', T: '', note: '' },
    { machine_name: 'MX-BIO-3104B',record_date: '', record_time: '', status: '', A1: '', A2: '', A3: '', T: '', note: '' },
    { machine_name: 'MX-BIO-3104C',record_date: '', record_time: '', status: '', A1: '', A2: '', A3: '', T: '', note: '' },
    { machine_name: 'MX-BIO-3104D',record_date: '', record_time: '', status: '', A1: '', A2: '', A3: '', T: '', note: '' },
  ])
  const [isAnoxicMixer4DataSent, setIsAnoxicMixer4DataSent] = useState(false);
  const [singleAirBlowerStatuses, setSingleAirBlowerStatuses] = useState([
    { machine_name: 'AB-AT-3801',record_date: '', record_time: '', status: '', A1: '', A2: '', A3: '', T: '', note: '' },
    { machine_name: 'AB-AT-3802',record_date: '', record_time: '', status: '', A1: '', A2: '', A3: '', T: '', note: '' },
    { machine_name: 'AB-AT-3803',record_date: '', record_time: '', status: '', A1: '', A2: '', A3: '', T: '', note: '' },
    { machine_name: 'AB-AT-3804',record_date: '', record_time: '', status: '', A1: '', A2: '', A3: '', T: '', note: '' },
  ])
  const [isSingleAirBlowerDataSent, setIsSingleAirBlowerDataSent] = useState(false);
  const [positiveAirBlowerStatuses, setPositiveAirBlowerStatuses] = useState([
    { machine_name: 'AB-RE-3901',record_date: '', record_time: '', status: '', A1: '', A2: '', A3: '', T: '', note: '' },
    { machine_name: 'AB-RE-3902',record_date: '', record_time: '', status: '', A1: '', A2: '', A3: '', T: '', note: '' },
    { machine_name: 'AB-RE-3903',record_date: '', record_time: '', status: '', A1: '', A2: '', A3: '', T: '', note: '' },
    { machine_name: 'AB-RE-3904',record_date: '', record_time: '', status: '', A1: '', A2: '', A3: '', T: '', note: '' },
  ])
  const [isPositiveAirBlowerDataSent, setIsPositiveAirBlowerDataSent] = useState(false);
  const [clarifier1Statuses, setClarifier1Statuses] = useState([
    { machine_name: 'SCP-CL-4114',record_date: '', record_time: '', status: '', A_motor1: '',	A_motor2: '',	A_scum: '',	A_pump: '',	T_motor: '',	T_scum: '',	T_pump: '',	note: ''},
    { machine_name: 'SCP-CL-4113',record_date: '', record_time: '', status: '', A_motor1: '',	A_motor2: '',	A_scum: '',	A_pump: '',	T_motor: '',	T_scum: '',	T_pump: '',	note: ''},
    { machine_name: 'SCP-CL-4107',record_date: '', record_time: '', status: '', A_motor1: '',	A_motor2: '',	A_scum: '',	A_pump: '',	T_motor: '',	T_scum: '',	T_pump: '',	note: ''},
    { machine_name: 'SCP-CL-4106',record_date: '', record_time: '', status: '', A_motor1: '',	A_motor2: '',	A_scum: '',	A_pump: '',	T_motor: '',	T_scum: '',	T_pump: '',	note: ''},
  ])
  const [isClarifier1DataSent, setIsClarifier1DataSent] = useState(false);
  const [clarifier2Statuses, setClarifier2Statuses] = useState([
    { machine_name: 'SCP-CL-4112',record_date: '', record_time: '', status: '', A_motor1: '',	A_motor2: '',	A_scum: '',	A_pump: '',	T_motor: '',	T_scum: '',	T_pump: '',	note: ''},
    { machine_name: 'SCP-CL-4111',record_date: '', record_time: '', status: '', A_motor1: '',	A_motor2: '',	A_scum: '',	A_pump: '',	T_motor: '',	T_scum: '',	T_pump: '',	note: ''},
    { machine_name: 'SCP-CL-4105',record_date: '', record_time: '', status: '', A_motor1: '',	A_motor2: '',	A_scum: '',	A_pump: '',	T_motor: '',	T_scum: '',	T_pump: '',	note: ''},
    { machine_name: 'SCP-CL-4104',record_date: '', record_time: '', status: '', A_motor1: '',	A_motor2: '',	A_scum: '',	A_pump: '',	T_motor: '',	T_scum: '',	T_pump: '',	note: ''},
  ])
  const [isClarifier2DataSent, setIsClarifier2DataSent] = useState(false);
  const [clarifier3Statuses, setClarifier3Statuses] = useState([
    { machine_name: 'SCP-CL-4110',record_date: '', record_time: '', status: '', A_motor1: '',	A_motor2: '',	A_scum: '',	A_pump: '',	T_motor: '',	T_scum: '',	T_pump: '',	note: ''},
    { machine_name: 'SCP-CL-4109',record_date: '', record_time: '', status: '', A_motor1: '',	A_motor2: '',	A_scum: '',	A_pump: '',	T_motor: '',	T_scum: '',	T_pump: '',	note: ''},
    { machine_name: 'SCP-CL-4103',record_date: '', record_time: '', status: '', A_motor1: '',	A_motor2: '',	A_scum: '',	A_pump: '',	T_motor: '',	T_scum: '',	T_pump: '',	note: ''},
    { machine_name: 'SCP-CL-4102',record_date: '', record_time: '', status: '', A_motor1: '',	A_motor2: '',	A_scum: '',	A_pump: '',	T_motor: '',	T_scum: '',	T_pump: '',	note: ''},
  ])
  const [isClarifier3DataSent, setIsClarifier3DataSent] = useState(false);
  const [clarifier4Statuses, setClarifier4Statuses] = useState([
    { machine_name: 'SCP-CL-4108',record_date: '', record_time: '', status: '', A_motor1: '',	A_motor2: '',	A_scum: '',	A_pump: '',	T_motor: '',	T_scum: '',	T_pump: '',	note: ''},
    { machine_name: 'SCP-CL-4101',record_date: '', record_time: '', status: '', A_motor1: '',	A_motor2: '',	A_scum: '',	A_pump: '',	T_motor: '',	T_scum: '',	T_pump: '',	note: ''},
  ])
  const [isClarifier4DataSent, setIsClarifier4DataSent] = useState(false);
  const [autoSampler2Statuses, setAutoSampler2Statuses] = useState([
    { machine_name: 'SP-G-2201',record_date: '', record_time: '', status: '', T:'', note: '' },
  ])
  const [isAutoSampler2DataSent, setIsAutoSampler2DataSent] = useState(false);
  const [fan5Statuses, setFan5Statuses] = useState([
    { machine_name: 'EF-BR-01',record_date: '', record_time: '', status: '', note: '' },
    { machine_name: 'EF-BR-02',record_date: '', record_time: '', status: '', note: '' },
    { machine_name: 'EF-BR-03',record_date: '', record_time: '', status: '', note: '' },
  ])
  const [isVentilationFan5DataSent, setIsVentilationFan5DataSent] = useState(false);
  const [fan5_2Statuses, setFan5_2Statuses] = useState([
    { machine_name: 'SMEF-TTR-01',record_date: '', record_time: '', status: '', note: '' },
    { machine_name: 'SMEF-TTR-02',record_date: '', record_time: '', status: '', note: '' },
    { machine_name: 'EF-BSM-01',record_date: '', record_time: '', status: '', note: '' },
  ])
  const [isVentilationFan5_2DataSent, setIsVentilationFan5_2DataSent] = useState(false);
  const [fan5_3Statuses, setFan5_3Statuses] = useState([
    { machine_name: 'EF-CL-01',record_date: '', record_time: '', status: '', note: '' },
    { machine_name: 'EF-CL-02',record_date: '', record_time: '', status: '', note: '' },
    { machine_name: 'EF-CL-03',record_date: '', record_time: '', status: '', note: '' },
    { machine_name: 'EF-CL-04',record_date: '', record_time: '', status: '', note: '' },
    { machine_name: 'SF-CL-01',record_date: '', record_time: '', status: '', note: '' },
    { machine_name: 'SF-CL-02',record_date: '', record_time: '', status: '', note: '' },
    { machine_name: 'SF-CL-03',record_date: '', record_time: '', status: '', note: '' },
    { machine_name: 'SF-CL-04',record_date: '', record_time: '', status: '', note: '' },
  ])
  const [isVentilationFan5_3DataSent, setIsVentilationFan5_3DataSent] = useState(false);
  // ตู้ไฟ
  const [fan5_4Statuses, setFan5_4Statuses] = useState([                                
    { machine_name: 'EF-BR-01',record_date: '', record_time: '', status: '', note: '' },
    { machine_name: 'EF-BR-02',record_date: '', record_time: '', status: '', note: '' },
    { machine_name: 'EF-BR-03',record_date: '', record_time: '', status: '', note: '' },
  ])
  const [isVentilationFan5_4DataSent, setIsVentilationFan5_4DataSent] = useState(false);
  const [fan5_5Statuses, setFan5_5Statuses] = useState([                                
    { machine_name: 'SMEF-TTR-01',record_date: '', record_time: '', status: '', note: '' },
    { machine_name: 'SMEF-TTR-02',record_date: '', record_time: '', status: '', note: '' },
  ])
  const [isVentilationFan5_5DataSent, setIsVentilationFan5_5DataSent] = useState(false);
  const [fan5_6Statuses, setFan5_6Statuses] = useState([                                
    { machine_name: 'EF-BSM-01',record_date: '', record_time: '', status: '', note: '' },
  ])
  const [isVentilationFan5_6DataSent, setIsVentilationFan5_6DataSent] = useState(false);
  const [fan5_7Statuses, setFan5_7Statuses] = useState([                                
    { machine_name: 'EF-BSM-01',record_date: '', record_time: '', status: '', note: '' },
    { machine_name: 'EF-BSM-02',record_date: '', record_time: '', status: '', note: '' },
    { machine_name: 'EF-BSM-03',record_date: '', record_time: '', status: '', note: '' },
    { machine_name: 'EF-BSM-04',record_date: '', record_time: '', status: '', note: '' },
    { machine_name: 'SF-CL-01',record_date: '', record_time: '', status: '', note: '' },
    { machine_name: 'SF-CL-02',record_date: '', record_time: '', status: '', note: '' },
    { machine_name: 'SF-CL-03',record_date: '', record_time: '', status: '', note: '' },
    { machine_name: 'SF-CL-04',record_date: '', record_time: '', status: '', note: '' },
  ])
  const [isVentilationFan5_7DataSent, setIsVentilationFan5_7DataSent] = useState(false);
  const [drainagePump2Statuses, setDrainagePump2Statuses] = useState([
    { machine_name: 'P-D-5503',record_date: '', record_time: '', status: '', A1: '', A2: '', A3: '', T: '', note: '' },
    { machine_name: 'P-D-5504',record_date: '', record_time: '', status: '', A1: '', A2: '', A3: '', T: '', note: '' },
  ])
  const [isDrainagePump2DataSent, setIsDrainagePump2DataSent] = useState(false);
  const [scrumPumpStatuses, setScrumPumpStatuses] = useState([
    { machine_name: 'P-SC-4201',record_date: '', record_time: '', status: '', A1: '', A2: '', A3: '', T: '', note: '' },
    { machine_name: 'P-SC-4202',record_date: '', record_time: '', status: '', A1: '', A2: '', A3: '', T: '', note: '' },
  ])
  const [isScrumPumpDataSent, setIsScrumPumpDataSent] = useState(false);
  const [hiLowWaterPumpStatuses, setHiLowWaterPumpStatuses] = useState([                                
    { machine_name: 'P-PW-A301 ถึง P-PW-A302',record_date: '', record_time: '', status: '', note: '' },
    { machine_name: 'P-HPPW-A201 ถึง P-HPPW-A203',record_date: '', record_time: '', status: '', note: '' },
  ])
  const [isHiLowWaterPumpDataSent, setIsHiLowWaterPumpDataSent] = useState(false);
  const [cWRWWaterPumpStatuses, setCWRWWaterPumpStatuses] = useState([                                
    { machine_name: 'P-CW-A001 ถึง P-CW-A002',record_date: '', record_time: '', status: '', note: '' },
    { machine_name: 'P-RW-A101 ถึง P-RW-A102',record_date: '', record_time: '', status: '', note: '' },
  ])
  const [isCWRWWaterPumpDataSent, setIsCWRWWaterPumpDataSent] = useState(false);
  const [drainagePump1Statuses, setDrainagePump1Statuses] = useState([
    { machine_name: 'P-D-5501',record_date: '', record_time: '', status: '', A1: '', A2: '', A3: '', T: '', note: '' },
    { machine_name: 'P-D-5502',record_date: '', record_time: '', status: '', A1: '', A2: '', A3: '', T: '', note: '' },
  ])
  const [isDrainagePump1DataSent, setIsDrainagePump1DataSent] = useState(false);
  const [effluentPumpStatuses, setEffluentPumpStatuses] = useState([
    { machine_name: 'P-EF-5303',record_date: '', record_time: '', status: '', A1: '', A2: '', A3: '', T: '', note: '' },
    { machine_name: 'P-EF-5304',record_date: '', record_time: '', status: '', A1: '', A2: '', A3: '', T: '', note: '' },
    { machine_name: 'P-EF-5305',record_date: '', record_time: '', status: '', A1: '', A2: '', A3: '', T: '', note: '' },
    { machine_name: 'P-EF-5306',record_date: '', record_time: '', status: '', A1: '', A2: '', A3: '', T: '', note: '' },
    { machine_name: 'P-EF-5301(VFD)',record_date: '', record_time: '', status: '', A1: '', A2: '', A3: '', T: '', note: '' },
    { machine_name: 'P-EF-5302(VFD)',record_date: '', record_time: '', status: '', A1: '', A2: '', A3: '', T: '', note: '' },
  ])
  const [isEffluentPumpDataSent, setIsEffluentPumpDataSent] = useState(false);

    useEffect(() => {
        // Load form data from localStorage
        const storedData = localStorage.getItem('statusRecordFormData');
        if (storedData) {
            const { recorderName: storedName, recordDate: storedDate, recordTime: storedTime } = JSON.parse(storedData);
            setRecorderName(storedName);
            setRecordDate(new Date(storedDate));
            setRecordTime(storedTime);
        }
    }, []);

    
    useEffect(() => {

      const savedChStatuses = localStorage.getItem('chStatuses');
      const savedChillerWaterPumpStatuses = localStorage.getItem('chillerWaterPumpStatuses');
      const savedFan6Statuses = localStorage.getItem('fan6Statuses');
      const savedBiofilterStatuses = localStorage.getItem('biofilterStatuses');
      const savedGardenPumpStatuses = localStorage.getItem('gardenPumpStatuses');
      const savedInletPumpingStatuses = localStorage.getItem('inletPumpingStatuses');
      const savedVentilationInletPumpingStatuses = localStorage.getItem('ventilationInletPumpingStatuses')
      const savedInletGateStatuses = localStorage.getItem('inletGateStatuses')
      const savedCoarseScreenStatuses = localStorage.getItem('coarseScreenStatuses')
      const savedFan3Statuses = localStorage.getItem('fan3Statuses')
      const savedFan2Statuses = localStorage.getItem('fan2Statuses')
      const savedFan1Statuses = localStorage.getItem('fan1Statuses')
      const savedAutoSamplerStatuses = localStorage.getItem('autoSamplerStatuses')
      const savedVortexGridStatuses = localStorage.getItem('vortexGridStatuses')
      const savedFineScreenStatuses = localStorage.getItem('fineScreenStatuses')
      const savedDrainagePump3Statuses = localStorage.getItem('drainagePump3Statuses')
      const savedFan4Statuses = localStorage.getItem('fan4Statuses')
      const savedAnoxicMixer1Statuses = localStorage.getItem('anoxicMixer1Statuses')
      const savedAnoxicMixer2Statuses = localStorage.getItem('anoxicMixer2Statuses')
      const savedAnoxicMixer3Statuses = localStorage.getItem('anoxicMixer3Statuses')
      const savedAnoxicMixer4Statuses = localStorage.getItem('anoxicMixer4Statuses')
      const savedSingleAirBlowerStatuses = localStorage.getItem('singleAirBlowerStatuses')
      const savedPositiveAirBlowerStatuses = localStorage.getItem('positiveAirBlowerStatuses')
      const savedClarifier1Statuses = localStorage.getItem('clarifier1Statuses')
      const savedClarifier2Statuses = localStorage.getItem('clarifier2Statuses')
      const savedClarifier3Statuses = localStorage.getItem('clarifier3Statuses')
      const savedClarifier4Statuses = localStorage.getItem('clarifier4Statuses')
      const savedAutoSampler2Statuses = localStorage.getItem('autoSampler2Statuses')
      const savedfan5Statuses = localStorage.getItem('savedfan5Statuses')
      const savedfan5_2Statuses = localStorage.getItem('savedfan5_2Statuses')
      const savedfan5_3Statuses = localStorage.getItem('savedfan5_3Statuses')
      const savedfan5_4Statuses = localStorage.getItem('savedfan5_4Statuses')
      const savedfan5_5Statuses = localStorage.getItem('savedfan5_5Statuses')
      const savedfan5_6Statuses = localStorage.getItem('savedfan5_6Statuses')
      const savedfan5_7Statuses = localStorage.getItem('savedfan5_7Statuses')
      const savedDrainagePump2Statuses = localStorage.getItem('drainagePump2Statuses')
      const savedHiLowWaterPumpStatuses = localStorage.getItem('hiLowWaterPumpStatuses')
      const savedCWRWWaterPumpStatuses = localStorage.getItem('cWRWWaterPumpStatuses')
      const savedDrainagePump1Statuses = localStorage.getItem('drainagePump1Statuses')
      const savedEffluentPumpStatuses = localStorage.getItem('effluentPumpStatuses')

      if (savedChStatuses) setChStatuses(JSON.parse(savedChStatuses));
      if (savedChillerWaterPumpStatuses) setChillerWaterPumpStatuses(JSON.parse(savedChillerWaterPumpStatuses));
      if (savedFan6Statuses) setFan6Statuses(JSON.parse(savedFan6Statuses));
      if (savedBiofilterStatuses) setBiofilterStatuses(JSON.parse(savedBiofilterStatuses));
      if (savedGardenPumpStatuses) setGardenPumpStatuses(JSON.parse(savedGardenPumpStatuses));
      if (savedInletPumpingStatuses) setInletPumpingStatuses(JSON.parse(savedInletPumpingStatuses));
      if (savedVentilationInletPumpingStatuses) setVentilationInletPumpingStatuses(JSON.parse(savedVentilationInletPumpingStatuses));
      if (savedInletGateStatuses) setInletGateStatuses(JSON.parse(savedInletGateStatuses))
      if (savedCoarseScreenStatuses) setCoarseScreenStatuses(JSON.parse(savedCoarseScreenStatuses))
      if (savedFan3Statuses) setFan3Statuses(JSON.parse(savedFan3Statuses));
      if (savedFan2Statuses) setFan2Statuses(JSON.parse(savedFan2Statuses));
      if (savedFan1Statuses) setFan1Statuses(JSON.parse(savedFan1Statuses));
      if (savedAutoSamplerStatuses) setAutoSamplerStatuses(JSON.parse(savedAutoSamplerStatuses));
      if (savedVortexGridStatuses) setVortexGridStatuses(JSON.parse(savedVortexGridStatuses));
      if (savedFineScreenStatuses) {setFineScreenStatuses(JSON.parse(savedFineScreenStatuses));}
      if (savedDrainagePump3Statuses) { setDrainagePump3Statuses(JSON.parse(savedDrainagePump3Statuses));}
      if (savedFan4Statuses) {setFan4Statuses(JSON.parse(savedFan4Statuses));}
      if (savedAnoxicMixer1Statuses) {setAnoxicMixer1Statuses(JSON.parse(savedAnoxicMixer1Statuses));}
      if (savedAnoxicMixer2Statuses) {setAnoxicMixer2Statuses(JSON.parse(savedAnoxicMixer2Statuses));}
      if (savedAnoxicMixer3Statuses) {setAnoxicMixer3Statuses(JSON.parse(savedAnoxicMixer3Statuses));}
      if (savedAnoxicMixer4Statuses) {setAnoxicMixer4Statuses(JSON.parse(savedAnoxicMixer4Statuses));}
      if (savedSingleAirBlowerStatuses) {setSingleAirBlowerStatuses(JSON.parse(savedSingleAirBlowerStatuses));}
      if (savedPositiveAirBlowerStatuses) {setPositiveAirBlowerStatuses(JSON.parse(savedPositiveAirBlowerStatuses));}
      if (savedClarifier1Statuses) {setClarifier1Statuses(JSON.parse(savedClarifier1Statuses));}
      if (savedClarifier2Statuses) {setClarifier2Statuses(JSON.parse(savedClarifier2Statuses));}
      if (savedClarifier3Statuses) {setClarifier3Statuses(JSON.parse(savedClarifier3Statuses));}
      if (savedClarifier4Statuses) {setClarifier4Statuses(JSON.parse(savedClarifier4Statuses));}
      if (savedAutoSampler2Statuses) {setAutoSampler2Statuses(JSON.parse(savedAutoSampler2Statuses));}
      if (savedfan5Statuses) setFan5Statuses(JSON.parse(savedfan5Statuses));
      if (savedfan5_2Statuses) setFan5_2Statuses(JSON.parse(savedfan5_2Statuses));
      if (savedfan5_3Statuses) setFan5_3Statuses(JSON.parse(savedfan5_3Statuses));
      if (savedfan5_4Statuses) setFan5_4Statuses(JSON.parse(savedfan5_4Statuses));
      if (savedfan5_5Statuses) setFan5_5Statuses(JSON.parse(savedfan5_5Statuses));
      if (savedfan5_6Statuses) setFan5_6Statuses(JSON.parse(savedfan5_6Statuses));
      if (savedfan5_7Statuses) setFan5_7Statuses(JSON.parse(savedfan5_7Statuses));
      if (savedDrainagePump2Statuses) setDrainagePump2Statuses(JSON.parse(savedDrainagePump2Statuses));
      if (savedHiLowWaterPumpStatuses) setHiLowWaterPumpStatuses(JSON.parse(savedHiLowWaterPumpStatuses));
      if (savedCWRWWaterPumpStatuses) setCWRWWaterPumpStatuses(JSON.parse(savedCWRWWaterPumpStatuses));
      if (savedDrainagePump1Statuses) setDrainagePump1Statuses(JSON.parse(savedDrainagePump1Statuses));
      if (savedEffluentPumpStatuses) setEffluentPumpStatuses(JSON.parse(savedEffluentPumpStatuses));
  }, []);


useEffect(() => {
  localStorage.setItem('chStatuses', JSON.stringify(chStatuses));
  }, [chStatuses]);

useEffect(() => {
  localStorage.setItem('chillerWaterPumpStatuses', JSON.stringify(chillerWaterPumpStatuses));
  }, [chillerWaterPumpStatuses]);

useEffect(() => {
  localStorage.setItem('fanStatuses', JSON.stringify(fan6Statuses));
  }, [fan6Statuses]);

useEffect(() => {
  localStorage.setItem('biofilterStatuses', JSON.stringify(biofilterStatuses));
  }, [biofilterStatuses]);

useEffect(() => {
  localStorage.setItem('gardenPumpStatuses', JSON.stringify(gardenPumpStatuses));
}, [gardenPumpStatuses]);

useEffect(() => {
  localStorage.setItem('inletPumpingStatuses', JSON.stringify(inletPumpingStatuses));
}, [inletPumpingStatuses]);

useEffect(() => {
  localStorage.setItem('ventilationInletPumpingStatuses', JSON.stringify(ventilationInletPumpingStatuses));
}, [ventilationInletPumpingStatuses]);

useEffect(() => {
  localStorage.setItem('inletGateStatuses', JSON.stringify(inletGateStatuses));
}, [inletGateStatuses]);

useEffect(() => {
  localStorage.setItem('coarseScreenStatuses', JSON.stringify(coarseScreenStatuses));
}, [coarseScreenStatuses]);

useEffect(() => {
  localStorage.setItem('fan3Statuses', JSON.stringify(fan3Statuses));
}, [fan3Statuses]);

useEffect(() => {
  localStorage.setItem('fan2Statuses', JSON.stringify(fan2Statuses));
}, [fan2Statuses]);

useEffect(() => {
  localStorage.setItem('fan1Statuses', JSON.stringify(fan1Statuses));
}, [fan1Statuses]);

useEffect(() => {
  localStorage.setItem('autoSamplerStatuses', JSON.stringify(autoSamplerStatuses));
}, [autoSamplerStatuses]);

useEffect(() => {
  localStorage.setItem('vortexGritStatuses', JSON.stringify(vortexGritStatuses));
}, [vortexGritStatuses]);

useEffect(() => {
  localStorage.setItem('fineScreenStatuses', JSON.stringify(fineScreenStatuses));
}, [fineScreenStatuses]);

useEffect(() => {
  localStorage.setItem('drainagePump3Statuses', JSON.stringify(drainagePump3Statuses));
}, [drainagePump3Statuses]);

useEffect(() => {
  localStorage.setItem('fan4Statuses', JSON.stringify(fan4Statuses));
}, [fan4Statuses]);

useEffect(() => {
  localStorage.setItem('anoxicMixer1Statuses', JSON.stringify(anoxicMixer1Statuses));
}, [anoxicMixer1Statuses]);

useEffect(() => {
  localStorage.setItem('anoxicMixer2Statuses', JSON.stringify(anoxicMixer2Statuses));
}, [anoxicMixer2Statuses]);

useEffect(() => {
  localStorage.setItem('anoxicMixer3Statuses', JSON.stringify(anoxicMixer3Statuses));
}, [anoxicMixer3Statuses]);

useEffect(() => {
  localStorage.setItem('anoxicMixer4Statuses', JSON.stringify(anoxicMixer4Statuses));
}, [anoxicMixer4Statuses]);

useEffect(() => {
  localStorage.setItem('singleAirBlowerStatuses', JSON.stringify(singleAirBlowerStatuses));
}, [singleAirBlowerStatuses]);

useEffect(() => {
  localStorage.setItem('positiveAirBlowerStatuses', JSON.stringify(positiveAirBlowerStatuses));
}, [positiveAirBlowerStatuses]);

useEffect(() => {
  localStorage.setItem('clarifier1Statuses', JSON.stringify(clarifier1Statuses));
}, [clarifier1Statuses]);

useEffect(() => {
  localStorage.setItem('clarifier2Statuses', JSON.stringify(clarifier2Statuses));
}, [clarifier2Statuses]);

useEffect(() => {
  localStorage.setItem('clarifier3Statuses', JSON.stringify(clarifier3Statuses));
}, [clarifier3Statuses]);

useEffect(() => {
  localStorage.setItem('clarifier4Statuses', JSON.stringify(clarifier4Statuses));
}, [clarifier4Statuses]);

useEffect(() => {
  localStorage.setItem('autoSampler2Statuses', JSON.stringify(autoSampler2Statuses));
}, [autoSampler2Statuses]);

useEffect(() => {
  localStorage.setItem('fan5Statuses', JSON.stringify(fan5Statuses));
}, [fan5Statuses]);

useEffect(() => {
  localStorage.setItem('fan5_2Statuses', JSON.stringify(fan5_2Statuses));
}, [fan5_2Statuses]);

useEffect(() => {
  localStorage.setItem('fan5_3Statuses', JSON.stringify(fan5_3Statuses));
}, [fan5_3Statuses]);

useEffect(() => {
  localStorage.setItem('fan5_4Statuses', JSON.stringify(fan5_4Statuses));
}, [fan5_4Statuses]);

useEffect(() => {
  localStorage.setItem('fan5_5Statuses', JSON.stringify(fan5_5Statuses));
}, [fan5_5Statuses]);

useEffect(() => {
  localStorage.setItem('fan5_6Statuses', JSON.stringify(fan5_6Statuses));
}, [fan5_6Statuses]);

useEffect(() => {
  localStorage.setItem('fan5_7Statuses', JSON.stringify(fan5_7Statuses));
}, [fan5_7Statuses]);

useEffect(() => {
  localStorage.setItem('drainagePump2Statuses', JSON.stringify(drainagePump2Statuses));
}, [drainagePump2Statuses]);

useEffect(() => {
  localStorage.setItem('hiLowWaterPumpStatuses', JSON.stringify(hiLowWaterPumpStatuses));
}, [hiLowWaterPumpStatuses]);

useEffect(() => {
  localStorage.setItem('cWRWWaterPumpStatuses', JSON.stringify(cWRWWaterPumpStatuses));
}, [cWRWWaterPumpStatuses]);

useEffect(() => {
  localStorage.setItem('drainagePump1Statuses', JSON.stringify(drainagePump1Statuses));
}, [drainagePump1Statuses]);

useEffect(() => {
  localStorage.setItem('effluentPumpStatuses', JSON.stringify(effluentPumpStatuses));
}, [effluentPumpStatuses]);

    useEffect(() => {
        // Save form data to localStorage
        localStorage.setItem('statusRecordFormData', JSON.stringify({ recorderName, recordDate, recordTime }));
    }, [recorderName, recordDate, recordTime]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const formattedDate = recordDate ? recordDate.toISOString().split('T')[0] : null;
            const response = await fetch('https://jb-api-1.onrender.com/api/recorder', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ recorder_name: recorderName, record_date: formattedDate, record_time: recordTime }),
            });

            if (response.ok) {
                console.log('Record added successfully');
                setIsDataSent(true);
            } else {
                console.error('Failed to add record');
            }
        } catch (error) {
            console.error('Error adding record:', error);
        }
    };

    const handleSubmitChillerData = async () => {
        try {
            for (const ch of chStatuses) {
                const formattedDate = recordDate ? recordDate.toISOString().split('T')[0] : null;
                const response = await fetch('https://jb-api-1.onrender.com/api/chiller', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ machine_name: ch.machine_name, record_date: formattedDate, record_time: recordTime, status: ch.status, note: ch.note }),
                });

                if (!response.ok) {
                    console.error('Failed to add record');
                    return;
                }
            }

            console.log('All records added successfully');
            setChStatuses(chStatuses.map((ch) => ({ ...ch, status: '', note: '' })));
            setIsChillerDataSent(true);
        } catch (error) {
            console.error('Error adding record:', error);
        }
    };

    const handleSubmitChillerWaterPumpData = async () => {
      try {
          for (const chwp of chillerWaterPumpStatuses) {
              const formattedDate = recordDate ? recordDate.toISOString().split('T')[0] : null;
              const response = await fetch('https://jb-api-1.onrender.com/api/Chiller_Water_Pump', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({ machine_name: chwp.machine_name, record_date: formattedDate, record_time: recordTime, status: chwp.status, A1: chwp.A1, A2: chwp.A2, A3: chwp.A3, T: chwp.T, note: chwp.note }),
              });
  
              if (!response.ok) {
                  console.error('Failed to add record');
                  return;
              }
          }
  
          console.log('All Chiller Water Pump records added successfully');
          setChillerWaterPumpStatuses(chillerWaterPumpStatuses.map((chwp) => ({ ...chwp, status: '', A1: '', A2: '', A3: '', T: '', note: '' })));
          setIsChillerWaterPumpDataSent(true);
      } catch (error) {
          console.error('Error adding Chiller Water Pump records:', error);
      }
  };
  
  const handleSubmitFan6Data = async () => {
      try {
          for (const fan of fan6Statuses) {
              const formattedDate = recordDate ? recordDate.toISOString().split('T')[0] : null;
              const response = await fetch('https://jb-api-1.onrender.com/api/Ventilation_Fan_Room6', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({ machine_name: fan.machine_name, record_date: formattedDate, record_time: recordTime, status: fan.status, A1: fan.A1, A2: fan.A2, A3: fan.A3, T: fan.T, note: fan.note }),
              });
  
              if (!response.ok) {
                  console.error('Failed to add record');
                  return;
              }
          }
  
          console.log('All Ventilation Fan Room 6 records added successfully');
          setFan6Statuses(fan6Statuses.map((fan) => ({ ...fan, status: '', A1: '', A2: '', A3: '', T: '', note: '' })));
          setIsVentilationFan6DataSent(true);
      } catch (error) {
          console.error('Error adding Ventilation Fan Room 6 records:', error);
      }
  };
  
  const handleSubmitBiofilterData = async () => {
      try {
          for (const biofilter of biofilterStatuses) {
              const formattedDate = recordDate ? recordDate.toISOString().split('T')[0] : null;
              const response = await fetch('https://jb-api-1.onrender.com/api/biofilter', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({ machine_name: biofilter.machine_name, record_date: formattedDate, record_time: recordTime, status: biofilter.status, note: biofilter.note }),
              });
  
              if (!response.ok) {
                  console.error('Failed to add record');
                  return;
              }
          }
  
          console.log('All Biofilter records added successfully');
          setBiofilterStatuses(biofilterStatuses.map((biofilter) => ({ ...biofilter, status: '', note: '' })));
          setIsBiofilterDataSent(true);
      } catch (error) {
          console.error('Error adding Biofilter records:', error);
      }
  };
  const handleSubmitGardenPump = async () => {
    try {
        for (const gardenPump of gardenPumpStatuses) {
            const formattedDate = recordDate ? recordDate.toISOString().split('T')[0] : null;
            const response = await fetch('https://jb-api-1.onrender.com/api/garden_pump', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    machine_name: gardenPump.machine_name,
                    record_date: formattedDate,
                    record_time: recordTime,
                    status: gardenPump.status,
                    note: gardenPump.note,
                }),
            });

            if (!response.ok) {
                console.error('Failed to add record');
                return;
            }
        }

        console.log('All GardenPump records added successfully');
        setGardenPumpStatuses(gardenPumpStatuses.map((gardenPump) => ({
            ...gardenPump,
            status: '',
            note: ''
        })));
        setIsGardenPumpDataSent(true);
    } catch (error) {
        console.error('Error adding GardenPump records:', error);
    }
};
const handleSubmitInletPumping = async () => {
  try {
      for (const inletPumping of inletPumpingStatuses) {
          const formattedDate = recordDate ? recordDate.toISOString().split('T')[0] : null;
          const response = await fetch('https://jb-api-1.onrender.com/api/Inlet_Pumping', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                machine_name: inletPumping.machine_name,
                record_date: formattedDate,
                record_time: recordTime,
                status: inletPumping.status,
                A1: inletPumping.A1, 
                A2: inletPumping.A2, 
                A3: inletPumping.A3, 
                T: inletPumping.T,
                note: inletPumping.note, 
                }),
          });

          if (!response.ok) {
              console.error('Failed to add Inlet Pumping record');
              return;
          }
      }
      console.log('All Inlet Pumping records added successfully');
      setInletPumpingStatuses(inletPumpingStatuses.map((inletPumping) => ({
          ...inletPumping,
          status: '',
          note: ''
      })));
      setIsInletPumpingDataSent(true);
  } catch (error) {
      console.error('Error adding Inlet Pumping records:', error);
  }
};

const handleSubmitVentilationInletPumping = async () => {
  try {
      for (const ventilationInletPumping of ventilationInletPumpingStatuses) {
          const formattedDate = recordDate ? recordDate.toISOString().split('T')[0] : null;
          const response = await fetch('https://jb-api-1.onrender.com/api/Ventilation_Inlet_Pumping_Station', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                machine_name: ventilationInletPumping.machine_name,
                record_date: formattedDate,
                record_time: recordTime,
                status: ventilationInletPumping.status,
                A1: ventilationInletPumping.A1, 
                A2: ventilationInletPumping.A2, 
                A3: ventilationInletPumping.A3, 
                T: ventilationInletPumping.T,
                note: ventilationInletPumping.note,  
                }),
          });

          if (!response.ok) {
              console.error('Failed to add Ventilation Inlet Pumping record');
              return;
          }
      }
      console.log('All Ventilation Inlet Pumping records added successfully');
      setIsVentilationInletPumpingDataSent(true);
  } catch (error) {
      console.error('Error adding Ventilation Inlet Pumping records:', error);
  }
};

const handleSubmitInletGate = async () => {
  try {
      for (const inletGate of inletGateStatuses) {
          const formattedDate = recordDate ? recordDate.toISOString().split('T')[0] : null;
          const response = await fetch('https://jb-api-1.onrender.com/api/inlet_gate', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ 
                machine_name: inletGate.machine_name,
                record_date: formattedDate,
                record_time: recordTime,
                status: inletGate.status,
                gate_percentage: inletGate.gate_percentage,
                note: inletGate.note,   
              }),
          });

          if (!response.ok) {
              console.error('Failed to add Inlet Gate record');
              return;
          }
      }
      console.log('All Inlet Gate records added successfully');
      setIsInletGateDataSent(true);
  } catch (error) {
      console.error('Error adding Inlet Gate records:', error);
  }
};

const handleSubmitCoarseScreen = async () => {
  try {
      for (const coarseScreen of coarseScreenStatuses) {
          const formattedDate = recordDate ? recordDate.toISOString().split('T')[0] : null;
          const response = await fetch('https://jb-api-1.onrender.com/api/coarse_screen', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                machine_name: coarseScreen.machine_name,
                record_date: formattedDate,
                record_time: recordTime,
                status: coarseScreen.status,
                T_1: coarseScreen.T_1,
                T_2: coarseScreen.T_2,
                note: coarseScreen.note,    
                }),
          });

          if (!response.ok) {
              console.error('Failed to add Coarse Screen record');
              return;
          }
      }
      console.log('All Coarse Screen records added successfully');
      setIsCoarseScreenDataSent(true);
  } catch (error) {
      console.error('Error adding Coarse Screen records:', error);
  }
};

const handleSubmitFan3 = async () => {
  try {
    for (const fan3 of fan3Statuses) {
      const formattedDate = recordDate ? recordDate.toISOString().split('T')[0] : null;
      const response = await fetch('https://jb-api-1.onrender.com/api/Ventilation_Fan_Room3', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          machine_name: fan3.machine_name,
          record_date: formattedDate,
          record_time: recordTime,
          status: fan3.status,
          A1: fan3.A1,
          A2: fan3.A2,
          A3: fan3.A3,
          T: fan3.T,
          note: fan3.note,
        }),
      });

      if (!response.ok) {
        console.error('Failed to add Fan 3 record');
        return;
      }
    }
    console.log('All Fan 3 records added successfully');
    setIsVentilationFan3DataSent(true);
  } catch (error) {
    console.error('Error adding Fan 3 records:', error);
  }
};

const handleSubmitFan2 = async () => {
  try {
    for (const fan2 of fan2Statuses) {
      const formattedDate = recordDate ? recordDate.toISOString().split('T')[0] : null;
      const response = await fetch('https://jb-api-1.onrender.com/api/Ventilation_Fan_Room2', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          machine_name: fan2.machine_name,
          record_date: formattedDate,
          record_time: recordTime,
          status: fan2.status,
          A1: fan2.A1,
          A2: fan2.A2,
          A3: fan2.A3,
          T: fan2.T,
          note: fan2.note,
        }),
      });

      if (!response.ok) {
        console.error('Failed to add Fan 2 record');
        return;
      }
    }
    console.log('All Fan 2 records added successfully');
    setIsVentilationFan2DataSent(true);
  } catch (error) {
    console.error('Error adding Fan 2 records:', error);
  }
};

const handleSubmitFan1 = async () => {
  try {
    for (const fan1 of fan1Statuses) {
      const formattedDate = recordDate ? recordDate.toISOString().split('T')[0] : null;
      const response = await fetch('https://jb-api-1.onrender.com/api/Ventilation_Fan_Room1', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          machine_name: fan1.machine_name,
          record_date: formattedDate,
          record_time: recordTime,
          status: fan1.status,
          A1: fan1.A1,
          A2: fan1.A2,
          A3: fan1.A3,
          T: fan1.T,
          note: fan1.note,
        }),
      });

      if (!response.ok) {
        console.error('Failed to add Fan 1 record');
        return;
      }
    }
    console.log('All Fan 1 records added successfully');
    setIsVentilationFan1DataSent(true);
  } catch (error) {
    console.error('Error adding Fan 1 records:', error);
  }
};

const handleSubmitAutoSampler = async () => {
  try {
    for (const autoSampler of autoSamplerStatuses) {
      const formattedDate = recordDate ? recordDate.toISOString().split('T')[0] : null;
      const response = await fetch('https://jb-api-1.onrender.com/api/auto_sampler', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          machine_name: autoSampler.machine_name,
          record_date: formattedDate,
          record_time: recordTime,
          status: autoSampler.status,
          T: autoSampler.T,
          note: autoSampler.note,
        }),
      });

      if (!response.ok) {
        console.error('Failed to add Auto Sampler record');
        return;
      }
    }
    console.log('All Auto Sampler records added successfully');
    setIsAutoSamplerDataSent(true);
  } catch (error) {
    console.error('Error adding Auto Sampler records:', error);
  }
};

const handleSubmitVortexGrit = async () => {
  try {
    for (const vortexGrit of vortexGritStatuses) {
      const formattedDate = recordDate ? recordDate.toISOString().split('T')[0] : null;
      const response = await fetch('https://jb-api-1.onrender.com/api/vortex_grit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          machine_name: vortexGrit.machine_name,
          record_date: formattedDate,
          record_time: recordTime,
          status: vortexGrit.status,
          T: vortexGrit.T,
          note: vortexGrit.note,
        }),
      });

      if (!response.ok) {
        console.error('Failed to add Vortex Grit record');
        return;
      }
    }
    console.log('All Vortex Grit records added successfully');
    setIsVortexGridDataSent(true);
  } catch (error) {
    console.error('Error adding Vortex Grit records:', error);
  }
};

const handleSubmitFineScreen = async () => {
  try {
    for (const fineScreen of fineScreenStatuses) {
      const formattedDate = recordDate ? recordDate.toISOString().split('T')[0] : null;
      const response = await fetch('https://jb-api-1.onrender.com/api/fine_screen', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          machine_name: fineScreen.machine_name,
          record_date: formattedDate,
          record_time: recordTime,
          status: fineScreen.status,
          A1: fineScreen.A1,
          note: fineScreen.note,
        }),
      });

      if (!response.ok) {
        console.error('Failed to add Fine Screen record');
        return;
      }
    }
    console.log('All Fine Screen records added successfully');
    setIsFineScreenDataSent(true);
  } catch (error) {
    console.error('Error adding Fine Screen records:', error);
  }
};

const handleSubmitDrainagePump3 = async () => {
  try {
    for (const drainagePump3 of drainagePump3Statuses) {
      const formattedDate = recordDate ? recordDate.toISOString().split('T')[0] : null;
      const response = await fetch('https://jb-api-1.onrender.com/api/Drainage_Pump', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          machine_name: drainagePump3.machine_name,
          record_date: formattedDate,
          record_time: recordTime,
          status: drainagePump3.status,
          A1: drainagePump3.A1,
          A2: drainagePump3.A2,
          A3: drainagePump3.A3,
          T: drainagePump3.T,
          note: drainagePump3.note,
        }),
      });

      if (!response.ok) {
        console.error('Failed to add Drainage Pump 3 record');
        return;
      }
    }
    console.log('All Drainage Pump 3 records added successfully');
    setIsDrainagePump3DataSent(true);
  } catch (error) {
    console.error('Error adding Drainage Pump 3 records:', error);
  }
};

const handleSubmitFan4 = async () => {
  try {
    for (const fan4 of fan4Statuses) {
      const formattedDate = recordDate ? recordDate.toISOString().split('T')[0] : null;
      const response = await fetch('https://jb-api-1.onrender.com/api/Ventilation_Fan_Room4', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          machine_name: fan4.machine_name,
          record_date: formattedDate,
          record_time: recordTime,
          status: fan4.status,
          A1: fan4.A1,
          A2: fan4.A2,
          A3: fan4.A3,
          T: fan4.T,
          note: fan4.note,
        }),
      });

      if (!response.ok) {
        console.error('Failed to add Fan 4 record');
        return;
      }
    }
    console.log('All Fan 4 records added successfully');
    setIsVentilationFan4DataSent(true);
  } catch (error) {
    console.error('Error adding Fan 4 records:', error);
  }
};

const handleSubmitAnoxicMixer1 = async () => {
  try {
    for (const anoxicMixer1 of anoxicMixer1Statuses) {
      const formattedDate = recordDate ? recordDate.toISOString().split('T')[0] : null;
      const response = await fetch('https://jb-api-1.onrender.com/api/Anoxic_Mixer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          machine_name: anoxicMixer1.machine_name,
          record_date: formattedDate,
          record_time: recordTime,
          status: anoxicMixer1.status,
          A1: anoxicMixer1.A1,
          A2: anoxicMixer1.A2,
          A3: anoxicMixer1.A3,
          T: anoxicMixer1.T,
          note: anoxicMixer1.note,
        }),
      });

      if (!response.ok) {
        console.error('Failed to add Anoxic Mixer 1 record');
        return;
      }
    }
    console.log('All Anoxic Mixer 1 records added successfully');
    setIsAnoxicMixer1DataSent(true);
  } catch (error) {
    console.error('Error adding Anoxic Mixer 1 records:', error);
  }
};

const handleSubmitAnoxicMixer2 = async () => {
  try {
    for (const anoxicMixer2 of anoxicMixer2Statuses) {
      const formattedDate = recordDate ? recordDate.toISOString().split('T')[0] : null;
      const response = await fetch('https://jb-api-1.onrender.com/api/Anoxic_Mixer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          machine_name: anoxicMixer2.machine_name,
          record_date: formattedDate,
          record_time: recordTime,
          status: anoxicMixer2.status,
          A1: anoxicMixer2.A1,
          A2: anoxicMixer2.A2,
          A3: anoxicMixer2.A3,
          T: anoxicMixer2.T,
          note: anoxicMixer2.note,
        }),
      });

      if (!response.ok) {
        console.error('Failed to add Anoxic Mixer 2 record');
        return;
      }
    }
    console.log('All Anoxic Mixer 2 records added successfully');
    setIsAnoxicMixer2DataSent(true);
  } catch (error) {
    console.error('Error adding Anoxic Mixer 2 records:', error);
  }
};

const handleSubmitAnoxicMixer3 = async () => {
  try {
    for (const anoxicMixer3 of anoxicMixer3Statuses) {
      const formattedDate = recordDate ? recordDate.toISOString().split('T')[0] : null;
      const response = await fetch('https://jb-api-1.onrender.com/api/Anoxic_Mixer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          machine_name: anoxicMixer3.machine_name,
          record_date: formattedDate,
          record_time: recordTime,
          status: anoxicMixer3.status,
          A1: anoxicMixer3.A1,
          A2: anoxicMixer3.A2,
          A3: anoxicMixer3.A3,
          T: anoxicMixer3.T,
          note: anoxicMixer3.note,
        }),
      });

      if (!response.ok) {
        console.error('Failed to add Anoxic Mixer 3 record');
        return;
      }
    }
    console.log('All Anoxic Mixer 3 records added successfully');
    setIsAnoxicMixer3DataSent(true);
  } catch (error) {
    console.error('Error adding Anoxic Mixer 3 records:', error);
  }
};

const handleSubmitAnoxicMixer4 = async () => {
  try {
    for (const anoxicMixer4 of anoxicMixer4Statuses) {
      const formattedDate = recordDate ? recordDate.toISOString().split('T')[0] : null;
      const response = await fetch('https://jb-api-1.onrender.com/api/Anoxic_Mixer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          machine_name: anoxicMixer4.machine_name,
          record_date: formattedDate,
          record_time: recordTime,
          status: anoxicMixer4.status,
          A1: anoxicMixer4.A1,
          A2: anoxicMixer4.A2,
          A3: anoxicMixer4.A3,
          T: anoxicMixer4.T,
          note: anoxicMixer4.note,
        }),
      });

      if (!response.ok) {
        console.error('Failed to add Anoxic Mixer 4 record');
        return;
      }
    }
    console.log('All Anoxic Mixer 4 records added successfully');
    setIsAnoxicMixer4DataSent(true);
  } catch (error) {
    console.error('Error adding Anoxic Mixer 4 records:', error);
  }
};

const handleSubmitSingleAirBlower = async () => {
  try {
    for (const singleAirBlower of singleAirBlowerStatuses) {
      const formattedDate = recordDate ? recordDate.toISOString().split('T')[0] : null;
      const response = await fetch('https://jb-api-1.onrender.com/api/air-blower', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          machine_name: singleAirBlower.machine_name,
          record_date: formattedDate,
          record_time: recordTime,
          status: singleAirBlower.status,
          A1: singleAirBlower.A1,
          A2: singleAirBlower.A2,
          A3: singleAirBlower.A3,
          T: singleAirBlower.T,
          note: singleAirBlower.note,
        }),
      });

      if (!response.ok) {
        console.error('Failed to add Single Air Blower record');
        return;
      }
    }
    console.log('All Single Air Blower records added successfully');
    setIsSingleAirBlowerDataSent(true);
  } catch (error) {
    console.error('Error adding Single Air Blower records:', error);
  }
};

const handleSubmitPositiveAirBlower = async () => {
  try {
    for (const positiveAirBlower of positiveAirBlowerStatuses) {
      const formattedDate = recordDate ? recordDate.toISOString().split('T')[0] : null;
      const response = await fetch('https://jb-api-1.onrender.com/api/air-blower', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          machine_name: positiveAirBlower.machine_name,
          record_date: formattedDate,
          record_time: recordTime,
          status: positiveAirBlower.status,
          A1: positiveAirBlower.A1,
          A2: positiveAirBlower.A2,
          A3: positiveAirBlower.A3,
          T: positiveAirBlower.T,
          note: positiveAirBlower.note,
        }),
      });

      if (!response.ok) {
        console.error('Failed to add Positive Air Blower record');
        return;
      }
    }
    console.log('All Positive Air Blower records added successfully');
    setIsPositiveAirBlowerDataSent(true);
  } catch (error) {
    console.error('Error adding Positive Air Blower records:', error);
  }
};

const handleSubmitClarifier = async () => {
  try {
    for (const clarifier of clarifier1Statuses) {
      const formattedDate = recordDate ? recordDate.toISOString().split('T')[0] : null;
      const response = await fetch('https://jb-api-1.onrender.com/api/clarifier', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          machine_name: clarifier.machine_name,
          record_date: formattedDate,
          record_time: recordTime,
          status: clarifier.status,
          A_motor1: clarifier.A_motor1,
          A_motor2: clarifier.A_motor2,
          A_scum: clarifier.A_scum,
          A_pump: clarifier.A_pump,
          T_motor: clarifier.T_motor,
          T_scum: clarifier.T_scum,
          T_pump: clarifier.T_pump,
          note: clarifier.note,
        }),
      });

      if (!response.ok) {
        console.error('Failed to add Clarifier record');
        return;
      }
    }
    console.log('All Clarifier records added successfully');
    setIsClarifier1DataSent(true);
  } catch (error) {
    console.error('Error adding Clarifier records:', error);
  }
};

const handleSubmitClarifier2 = async () => {
  try {
    for (const clarifier2 of clarifier2Statuses) {
      const formattedDate = recordDate ? recordDate.toISOString().split('T')[0] : null;
      const response = await fetch('https://jb-api-1.onrender.com/api/clarifier', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          machine_name: clarifier2.machine_name,
          record_date: formattedDate,
          record_time: recordTime,
          status: clarifier2.status,
          A_motor1: clarifier2.A_motor1,
          A_motor2: clarifier2.A_motor2,
          A_scum: clarifier2.A_scum,
          A_pump: clarifier2.A_pump,
          T_motor: clarifier2.T_motor,
          T_scum: clarifier2.T_scum,
          T_pump: clarifier2.T_pump,
          note: clarifier2.note,
        }),
      });

      if (!response.ok) {
        console.error('Failed to add Clarifier record');
        return;
      }
    }
    console.log('All Clarifier2 records added successfully');
    setIsClarifier2DataSent(true);
  } catch (error) {
    console.error('Error adding Clarifier records:', error);
  }
};

const handleSubmitClarifier3 = async () => {
  try {
    for (const clarifier3 of clarifier3Statuses) {
      const formattedDate = recordDate ? recordDate.toISOString().split('T')[0] : null;
      const response = await fetch('https://jb-api-1.onrender.com/api/clarifier', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          machine_name: clarifier3.machine_name,
          record_date: formattedDate,
          record_time: recordTime,
          status: clarifier3.status,
          A_motor1: clarifier3.A_motor1,
          A_motor2: clarifier3.A_motor2,
          A_scum: clarifier3.A_scum,
          A_pump: clarifier3.A_pump,
          T_motor: clarifier3.T_motor,
          T_scum: clarifier3.T_scum,
          T_pump: clarifier3.T_pump,
          note: clarifier3.note,
        }),
      });

      if (!response.ok) {
        console.error('Failed to add Clarifier record');
        return;
      }
    }
    console.log('All Clarifier3 records added successfully');
    setIsClarifier3DataSent(true);
  } catch (error) {
    console.error('Error adding Clarifier records:', error);
  }
};

const handleSubmitClarifier4 = async () => {
  try {
    for (const clarifier4 of clarifier4Statuses) {
      const formattedDate = recordDate ? recordDate.toISOString().split('T')[0] : null;
      const response = await fetch('https://jb-api-1.onrender.com/api/clarifier', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          machine_name: clarifier4.machine_name,
          record_date: formattedDate,
          record_time: recordTime,
          status: clarifier4.status,
          A_motor1: clarifier4.A_motor1,
          A_motor2: clarifier4.A_motor2,
          A_scum: clarifier4.A_scum,
          A_pump: clarifier4.A_pump,
          T_motor: clarifier4.T_motor,
          T_scum: clarifier4.T_scum,
          T_pump: clarifier4.T_pump,
          note: clarifier4.note,
        }),
      });

      if (!response.ok) {
        console.error('Failed to add Clarifier record');
        return;
      }
    }
    console.log('All Clarifier3 records added successfully');
    setIsClarifier4DataSent(true);
  } catch (error) {
    console.error('Error adding Clarifier records:', error);
  }
};
  
const handleSubmitAutoSampler2 = async () => {
  try {
    for (const autoSampler2 of autoSampler2Statuses) {
      const formattedDate = recordDate ? recordDate.toISOString().split('T')[0] : null;
      const response = await fetch('https://jb-api-1.onrender.com/api/auto_sampler', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          machine_name: autoSampler2.machine_name,
          record_date: formattedDate,
          record_time: recordTime,
          status: autoSampler2.status,
          T: autoSampler2.T,
          note: autoSampler2.note,
        }),
      });

      if (!response.ok) {
        console.error('Failed to add AutoSampler2 record');
        return;
      }
    }
    console.log('All AutoSampler2 records added successfully');
    setIsAutoSampler2DataSent(true);
  } catch (error) {
    console.error('Error adding AutoSampler2 records:', error);
  }
};

const handleSubmitFan5 = async () => {
  try {
    for (const fan5 of fan5Statuses) {
      const formattedDate = recordDate ? recordDate.toISOString().split('T')[0] : null;
      const response = await fetch('https://jb-api-1.onrender.com/api/Ventilation_Fan_Room5', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          machine_name: fan5.machine_name,
          record_date: formattedDate,
          record_time: recordTime,
          status: fan5.status,
          note: fan5.note,
        }),
      });

      if (!response.ok) {
        console.error('Failed to add Fan5 record');
        return;
      }
    }
    console.log('All Fan5 records added successfully');
    setIsVentilationFan5DataSent(true);
  } catch (error) {
    console.error('Error adding Fan5 records:', error);
  }
};

const handleSubmitFan5_2 = async () => {
  try {
    for (const fan5_2 of fan5_2Statuses) {
      const formattedDate = recordDate ? recordDate.toISOString().split('T')[0] : null;
      const response = await fetch('https://jb-api-1.onrender.com/api/Ventilation_Fan_Room5', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          machine_name: fan5_2.machine_name,
          record_date: formattedDate,
          record_time: recordTime,
          status: fan5_2.status,
          note: fan5_2.note,
        }),
      });

      if (!response.ok) {
        console.error('Failed to add Fan5_2 record');
        return;
      }
    }
    console.log('All Fan5_2 records added successfully');
    setIsVentilationFan5_2DataSent(true);
  } catch (error) {
    console.error('Error adding Fan5_2 records:', error);
  }
};

const handleSubmitFan5_3 = async () => {
  try {
    for (const fan5_3 of fan5_3Statuses) {
      const formattedDate = recordDate ? recordDate.toISOString().split('T')[0] : null;
      const response = await fetch('https://jb-api-1.onrender.com/api/Ventilation_Fan_Room5', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          machine_name: fan5_3.machine_name,
          record_date: formattedDate,
          record_time: recordTime,
          status: fan5_3.status,
          note: fan5_3.note,
        }),
      });

      if (!response.ok) {
        console.error('Failed to add Fan5_3 record');
        return;
      }
    }
    console.log('All Fan5_3 records added successfully');
    setIsVentilationFan5_3DataSent(true);
  } catch (error) {
    console.error('Error adding Fan5_3 records:', error);
  }
};

const handleSubmitFan5_4 = async () => {
  try {
    for (const fan5_4 of fan5_4Statuses) {
      const formattedDate = recordDate ? recordDate.toISOString().split('T')[0] : null;
      const response = await fetch('https://jb-api-1.onrender.com/api/Ventilation_Fan_Room5', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          machine_name: fan5_4.machine_name,
          record_date: formattedDate,
          record_time: recordTime,
          status: fan5_4.status,
          note: fan5_4.note,
        }),
      });

      if (!response.ok) {
        console.error('Failed to add Fan5_4 record');
        return;
      }
    }
    console.log('All Fan5_4 records added successfully');
    setIsVentilationFan5_4DataSent(true);
  } catch (error) {
    console.error('Error adding Fan5_4 records:', error);
  }
};

const handleSubmitFan5_5 = async () => {
  try {
    for (const fan5_5 of fan5_5Statuses) {
      const formattedDate = recordDate ? recordDate.toISOString().split('T')[0] : null;
      const response = await fetch('https://jb-api-1.onrender.com/api/Ventilation_Fan_Room5', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          machine_name: fan5_5.machine_name,
          record_date: formattedDate,
          record_time: recordTime,
          status: fan5_5.status,
          note: fan5_5.note,
        }),
      });

      if (!response.ok) {
        console.error('Failed to add Fan5_5 record');
        return;
      }
    }
    console.log('All Fan5_5 records added successfully');
    setIsVentilationFan5_5DataSent(true);
  } catch (error) {
    console.error('Error adding Fan5_5 records:', error);
  }
};

const handleSubmitFan5_6 = async () => {
  try {
    for (const fan5_6 of fan5_6Statuses) {
      const formattedDate = recordDate ? recordDate.toISOString().split('T')[0] : null;
      const response = await fetch('https://jb-api-1.onrender.com/api/Ventilation_Fan_Room5', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          machine_name: fan5_6.machine_name,
          record_date: formattedDate,
          record_time: recordTime,
          status: fan5_6.status,
          note: fan5_6.note,
        }),
      });

      if (!response.ok) {
        console.error('Failed to add Fan5_6 record');
        return;
      }
    }
    console.log('All Fan5_6 records added successfully');
    setIsVentilationFan5_6DataSent(true);
  } catch (error) {
    console.error('Error adding Fan5_6 records:', error);
  }
};
const handleSubmitFan5_7 = async () => {
  try {
    for (const fan5_7 of fan5_7Statuses) {
      const formattedDate = recordDate ? recordDate.toISOString().split('T')[0] : null;
      const response = await fetch('https://jb-api-1.onrender.com/api/Ventilation_Fan_Room5', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          machine_name: fan5_7.machine_name,
          record_date: formattedDate,
          record_time: recordTime,
          status: fan5_7.status,
          note: fan5_7.note,
        }),
      });

      if (!response.ok) {
        console.error('Failed to add Fan5_7 record');
        return;
      }
    }
    console.log('All Fan5_7 records added successfully');
    setIsVentilationFan5_7DataSent(true);
  } catch (error) {
    console.error('Error adding Fan5_7 records:', error);
  }
};

const handleSubmitDrainagePump2 = async () => {
  try {
    for (const drainagePump2 of drainagePump2Statuses) {
      const formattedDate = recordDate ? recordDate.toISOString().split('T')[0] : null;
      const response = await fetch('https://jb-api-1.onrender.com/api/Drainage_Pump', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          machine_name: drainagePump2.machine_name,
          record_date: formattedDate,
          record_time: recordTime,
          status: drainagePump2.status,
          A1: drainagePump2.A1,
          A2: drainagePump2.A2,
          A3: drainagePump2.A3,
          T: drainagePump2.T,
          note: drainagePump2.note,
        }),
      });

      if (!response.ok) {
        console.error('Failed to add DrainagePump2 record');
        return;
      }
    }
    console.log('All DrainagePump2 records added successfully');
    setIsDrainagePump2DataSent(true);
  } catch (error) {
    console.error('Error adding DrainagePump2 records:', error);
  }
};

const handleSubmitScrumPump = async () => {
  try {
    for (const scrumPump of scrumPumpStatuses) {
      const formattedDate = recordDate ? recordDate.toISOString().split('T')[0] : null;
      const response = await fetch('https://jb-api-1.onrender.com/api/Scum_Pump_Fan_Room6', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          machine_name: scrumPump.machine_name,
          record_date: formattedDate,
          record_time: recordTime,
          status: scrumPump.status,
          A1: scrumPump.A1,
          A2: scrumPump.A2,
          A3: scrumPump.A3,
          T: scrumPump.T,
          note: scrumPump.note,
        }),
      });

      if (!response.ok) {
        console.error('Failed to add ScrumPump record');
        return;
      }
    }
    console.log('All ScrumPump records added successfully');
    setIsScrumPumpDataSent(true);
  } catch (error) {
    console.error('Error adding ScrumPump records:', error);
  }
};

const handleSubmitHiLowWaterPump = async () => {
  try {
    for (const hiLowWaterPump of hiLowWaterPumpStatuses) {
      const formattedDate = recordDate ? recordDate.toISOString().split('T')[0] : null;
      const response = await fetch('https://jb-api-1.onrender.com/api/water_pump', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          machine_name: hiLowWaterPump.machine_name,
          record_date: formattedDate,
          record_time: recordTime,
          status: hiLowWaterPump.status,
          note: hiLowWaterPump.note,
        }),
      });

      if (!response.ok) {
        console.error('Failed to add HiLowWaterPump record');
        return;
      }
    }
    console.log('All HiLowWaterPump records added successfully');
    setIsHiLowWaterPumpDataSent(true);
  } catch (error) {
    console.error('Error adding HiLowWaterPump records:', error);
  }
};

const handleSubmitCWRWWaterPump = async () => {
  try {
    for (const cWRWWaterPump of cWRWWaterPumpStatuses) {
      const formattedDate = recordDate ? recordDate.toISOString().split('T')[0] : null;
      const response = await fetch('https://jb-api-1.onrender.com/api/water_pump', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          machine_name: cWRWWaterPump.machine_name,
          record_date: formattedDate,
          record_time: recordTime,
          status: cWRWWaterPump.status,
          note: cWRWWaterPump.note,
        }),
      });

      if (!response.ok) {
        console.error('Failed to add CWRWWaterPump record');
        return;
      }
    }
    console.log('All CWRWWaterPump records added successfully');
    setIsCWRWWaterPumpDataSent(true);
  } catch (error) {
    console.error('Error adding CWRWWaterPump records:', error);
  }
};

const handleSubmitDrainagePump1 = async () => {
  try {
    for (const drainagePump1 of drainagePump1Statuses) {
      const formattedDate = recordDate ? recordDate.toISOString().split('T')[0] : null;
      const response = await fetch('https://jb-api-1.onrender.com/api/Drainage_Pump', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          machine_name: drainagePump1.machine_name,
          record_date: formattedDate,
          record_time: recordTime,
          status: drainagePump1.status,
          A1: drainagePump1.A1,
          A2: drainagePump1.A2,
          A3: drainagePump1.A3,
          T: drainagePump1.T,
          note: drainagePump1.note,
        }),
      });

      if (!response.ok) {
        console.error('Failed to add DrainagePump1 record');
        return;
      }
    }
    console.log('All DrainagePump1 records added successfully');
    setIsDrainagePump1DataSent(true);
  } catch (error) {
    console.error('Error adding DrainagePump1 records:', error);
  }
};

const handleSubmitEffluentPump = async () => {
  try {
    for (const effluentPump of effluentPumpStatuses) {
      const formattedDate = recordDate ? recordDate.toISOString().split('T')[0] : null;
      const response = await fetch('https://jb-api-1.onrender.com/api/Effluent_Pump', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          machine_name: effluentPump.machine_name,
          record_date: formattedDate,
          record_time: recordTime,
          status: effluentPump.status,
          A1: effluentPump.A1,
          A2: effluentPump.A2,
          A3: effluentPump.A3,
          T: effluentPump.T,
          note: effluentPump.note,
        }),
      });

      if (!response.ok) {
        console.error('Failed to add EffluentPump record');
        return;
      }
    }
    console.log('All EffluentPump records added successfully');
    setIsEffluentPumpDataSent(true);
  } catch (error) {
    console.error('Error adding EffluentPump records:', error);
  }
};



const handleComplete = () => {

  setRecorderName('');
  setRecordDate(null);
  setRecordTime('');  

  setChStatuses(chStatuses.map(status => ({ ...status, record_date: '', record_time: '', status: '', note: '' })));
  setIsChillerDataSent(false);

  setChillerWaterPumpStatuses(chillerWaterPumpStatuses.map(status => ({ ...status, record_date: '', record_time: '', status: '', A1: '', A2: '', A3: '', T: '', note: '' })));
  setIsChillerWaterPumpDataSent(false);

  setFan6Statuses(fan6Statuses.map(status => ({ ...status, record_date: '', record_time: '', status: '', A1: '', A2: '', A3: '', T: '', note: '' })));
  setIsVentilationFan6DataSent(false);

  setBiofilterStatuses(biofilterStatuses.map(status => ({ ...status, record_date: '', record_time: '', status: '', note: '' })));
  setIsBiofilterDataSent(false);

  setGardenPumpStatuses(gardenPumpStatuses.map(status => ({ ...status, record_date: '', record_time: '', status: '', note: '' })));
  setIsGardenPumpDataSent(false);

  setInletPumpingStatuses(inletPumpingStatuses.map(status => ({ ...status, record_date: '', record_time: '', status: '', A1: '', A2: '', A3: '', T: '', note: '' })));
  setIsInletPumpingDataSent(false);

  setVentilationInletPumpingStatuses(ventilationInletPumpingStatuses.map(status => ({ ...status, record_date: '', record_time: '', status: '', A1: '', A2: '', A3: '', T: '', note: '' })));
  setIsVentilationInletPumpingDataSent(false);

  setInletGateStatuses(inletGateStatuses.map(status => ({ ...status, record_date: '', record_time: '', status: '', gate_percentage: '', note: '' })));
  setIsInletGateDataSent(false);

  setCoarseScreenStatuses(coarseScreenStatuses.map(status => ({ ...status, record_date: '', record_time: '', status: '', T_1: '', T_2: '', note: '' })));
  setIsCoarseScreenDataSent(false);

  setFan3Statuses(fan3Statuses.map(status => ({ ...status, record_date: '', record_time: '', status: '', A1: '', A2: '', A3: '', T: '', note: '' })));
  setIsVentilationFan3DataSent(false);

  setFan2Statuses(fan2Statuses.map(status => ({ ...status, record_date: '', record_time: '', status: '', A1: '', A2: '', A3: '', T: '', note: '' })));
  setIsVentilationFan2DataSent(false);

  setFan1Statuses(fan1Statuses.map(status => ({ ...status, record_date: '', record_time: '', status: '', A1: '', A2: '', A3: '', T: '', note: '' })));
  setIsVentilationFan1DataSent(false);

  setAutoSamplerStatuses(autoSamplerStatuses.map(status => ({ ...status, record_date: '', record_time: '', status: '', T: '', note: '' })));
  setIsAutoSamplerDataSent(false);

  setVortexGridStatuses(vortexGritStatuses.map(status => ({ ...status, record_date: '', record_time: '', status: '', T: '', note: '' })));
  setIsVortexGridDataSent(false);

  setFineScreenStatuses(fineScreenStatuses.map(status => ({ ...status, record_date: '', record_time: '', status: '', A1: '', note: '' })));
  setIsFineScreenDataSent(false);

  setDrainagePump3Statuses(drainagePump3Statuses.map(status => ({ ...status, record_date: '', record_time: '', status: '', A1: '', A2: '', A3: '', T: '', note: '' })));
  setIsDrainagePump3DataSent(false);

  setFan4Statuses(fan4Statuses.map(status => ({ ...status, record_date: '', record_time: '', status: '', A1: '', A2: '', A3: '', T: '', note: '' })));
  setIsVentilationFan4DataSent(false);

  setAnoxicMixer1Statuses(anoxicMixer1Statuses.map(status => ({ ...status, record_date: '', record_time: '', status: '', A1: '', A2: '', A3: '', T: '', note: '' })));
  setIsAnoxicMixer1DataSent(false);

  setAnoxicMixer2Statuses(anoxicMixer2Statuses.map(status => ({ ...status, record_date: '', record_time: '', status: '', A1: '', A2: '', A3: '', T: '', note: '' })));
  setIsAnoxicMixer2DataSent(false);

  setAnoxicMixer3Statuses(anoxicMixer3Statuses.map(status => ({ ...status, record_date: '', record_time: '', status: '', A1: '', A2: '', A3: '', T: '', note: '' })));
  setIsAnoxicMixer3DataSent(false);

  setAnoxicMixer4Statuses(anoxicMixer4Statuses.map(status => ({ ...status, record_date: '', record_time: '', status: '', A1: '', A2: '', A3: '', T: '', note: '' })));
  setIsAnoxicMixer4DataSent(false);

  setSingleAirBlowerStatuses(singleAirBlowerStatuses.map(status=> ({ ...status, record_date: '', record_time: '', status: '', A1: '', A2: '', A3: '', T: '', note: '' })));
  setIsSingleAirBlowerDataSent(false);
  
  setPositiveAirBlowerStatuses(positiveAirBlowerStatuses.map(status => ({ ...status, record_date: '', record_time: '', status: '', A1: '', A2: '', A3: '', T: '', note: '' })));
  setIsPositiveAirBlowerDataSent(false);

  setClarifier1Statuses(clarifier1Statuses.map(status => ({ ...status, record_date: '', record_time: '', status: '', A_motor1: '', A_motor2: '', A_scum: '', A_pump: '', T_motor: '', T_scum: '', T_pump: '', note: '' })));
  setIsClarifier1DataSent(false);

  setClarifier2Statuses(clarifier2Statuses.map(status => ({ ...status, record_date: '', record_time: '', status: '', A_motor1: '', A_motor2: '', A_scum: '', A_pump: '', T_motor: '', T_scum: '', T_pump: '', note: '' })));
  setIsClarifier2DataSent(false);

  setClarifier3Statuses(clarifier3Statuses.map(status => ({ ...status, record_date: '', record_time: '', status: '', A_motor1: '', A_motor2: '', A_scum: '', A_pump: '', T_motor: '', T_scum: '', T_pump: '', note: '' })));
  setIsClarifier3DataSent(false);

  setClarifier4Statuses(clarifier4Statuses.map(status => ({ ...status, record_date: '', record_time: '', status: '', A_motor1: '', A_motor2: '', A_scum: '', A_pump: '', T_motor: '', T_scum: '', T_pump: '', note: '' })));
  setIsClarifier4DataSent(false);

  setAutoSampler2Statuses(autoSampler2Statuses.map(status => ({ ...status, record_date: '', record_time: '', status: '', T: '', note: '' })));
  setIsAutoSampler2DataSent(false);

  setFan5Statuses(fan5Statuses.map(status => ({ ...status, record_date: '', record_time: '', status: '', note: '' })));
  setIsVentilationFan5DataSent(false);

  setFan5_2Statuses(fan5_2Statuses.map(status => ({ ...status, record_date: '', record_time: '', status: '', note: '' })));
  setIsVentilationFan5_2DataSent(false);

  setFan5_3Statuses(fan5_3Statuses.map(status => ({ ...status, record_date: '', record_time: '', status: '', note: '' })));
  setIsVentilationFan5_3DataSent(false);

  setFan5_4Statuses(fan5_4Statuses.map(status => ({ ...status, record_date: '', record_time: '', status: '', note: '' })));
  setIsVentilationFan5_4DataSent(false);

  setFan5_5Statuses(fan5_5Statuses.map(status => ({ ...status, record_date: '', record_time: '', status: '', note: '' })));
  setIsVentilationFan5_5DataSent(false);

  setFan5_6Statuses(fan5_6Statuses.map(status => ({ ...status, record_date: '', record_time: '', status: '', note: '' })));
  setIsVentilationFan5_6DataSent(false);

  setFan5_7Statuses(fan5_7Statuses.map(status => ({ ...status, record_date: '', record_time: '', status: '', note: '' })));
  setIsVentilationFan5_7DataSent(false);

  setDrainagePump2Statuses(drainagePump2Statuses.map(status => ({ ...status, record_date: '', record_time: '', status: '', A1: '', A2: '', A3: '', T: '', note: '' })));
  setIsDrainagePump2DataSent(false);

  setScrumPumpStatuses(scrumPumpStatuses.map(status => ({ ...status, record_date: '', record_time: '', status: '', A1: '', A2: '', A3: '', T: '', note: '' })));
  setIsScrumPumpDataSent(false);

  setHiLowWaterPumpStatuses(hiLowWaterPumpStatuses.map(status => ({ ...status, record_date: '', record_time: '', status: '', note: '' })));
  setIsHiLowWaterPumpDataSent(false);

  setCWRWWaterPumpStatuses(cWRWWaterPumpStatuses.map(status => ({ ...status, record_date: '', record_time: '', status: '', note: '' })));
  setIsCWRWWaterPumpDataSent(false);

  setDrainagePump1Statuses(drainagePump1Statuses.map(status => ({ ...status, record_date: '', record_time: '', status: '', A1: '', A2: '', A3: '', T: '', note: '' })));
  setIsDrainagePump1DataSent(false);

  setEffluentPumpStatuses(effluentPumpStatuses.map(status => ({ ...status, record_date: '', record_time: '', status: '', A1: '', A2: '', A3: '', T: '', note: '' })));
  setIsEffluentPumpDataSent(false);


  // Clear localStorage
  localStorage.clear();

  console.log('All forms cleared and localStorage reset');
};

  const handleSaveSection1 = () => {
    setShowSections1(!showSections1);
  };

  const handleSaveSection2 = () => {
    setShowSections2(!showSections2)
  };

  const handleSaveSection3 = () => {
    setShowSections3(!showSections3)
  };

  const handleSaveSection4 = () => {
    setShowSections4(!showSections4)
  };

  const handleSaveSection5 = () => {
    setShowSections5(!showSections5)
  };

  const handleSaveSection6 = () => {
    setShowSections6(!showSections6)
  };

  const handleSaveSection7 = () => {
    setShowSections7(!showSections7)
  };


  return (
      <form onSubmit={handleSubmit} className={styles.form}>
          <h1 className={styles.title}>แบบบันทึกการเดินระบบประจำวัน - ตรวจเช็คสภาพทั่วไปของเครื่องจักร (Daily Check Sheet)</h1>
          <h2 className={styles.subtitle}>FM-OP-01-06.REV 06</h2>

          <div className={styles.fieldGroup}>
              <label className={styles.label} htmlFor="recorderName">ผู้บันทึก (ชื่อ-นามสกุล)</label>
              <input
                  type="text"
                  id="recorderName"
                  value={recorderName}
                  onChange={(e) => setRecorderName(e.target.value)}
                  className={styles.input}
              />
          </div>

          <div className={styles.fieldGroup}>
              <label className={styles.label} htmlFor="recordDate">วัน/เดือน/ปี</label>
              <div className={styles.datePickerWrapper}>
                <DatePicker
                      selected={recordDate}
                      onChange={(date: Date) => setRecordDate(date)}
                      dateFormat="dd/MM/yyyy"
                      className={styles.datePicker}
                      popperPlacement="right" // Set popperPlacement to "right"
                  />
                  <AiOutlineCalendar className={styles.calendarIcon} />
              </div>
          </div>

          <div className={styles.fieldGroup}>
              <label className={styles.label} htmlFor="recordTime">เวลา</label>
              <input
                  type="text"
                  id="recordTime"
                  value={recordTime}
                  onChange={(e) => setRecordTime(e.target.value)}
                  className={styles.input}
              />
          </div>

          <button type="submit" className={styles.button} disabled={isDataSent}>Submit</button>
          {isDataSent && <div className={styles.alert}>Recorder data sent successfully</div>}


          {showSections1 && (
          <>

          {/* Chiller field */}
          <h3>Chiller Table</h3>
          {chStatuses.map((ch, index) => (
              <div key={index} className={styles.fieldGroup}>
                  <label className={styles.label} htmlFor={`status-${ch.machine_name}`}>{ch.machine_name}</label>
                  <select
                      id={`status-${ch.machine_name}`}
                      className={styles.input}
                      value={ch.status}
                      onChange={(e) => {
                          const newStatuses = [...chStatuses];
                          newStatuses[index] = { ...ch, status: e.target.value };
                          setChStatuses(newStatuses);
                      }}
                      disabled={isDataSent}
                  >
                      <option value="" disabled>Select Status</option>
                      <option value="R">R</option>
                      <option value="N">N</option>
                      <option value="E">E</option>
                      <option value="F">F</option>
                  </select>
                  <input
                      type="text"
                      value={ch.note}
                      onChange={(e) => {
                          const newStatuses = [...chStatuses];
                          newStatuses[index].note = e.target.value;
                          setChStatuses(newStatuses);
                      }}
                      className={styles.input}
                      placeholder="Note"
                  />
              </div>
          ))}
          <button type="button" className={styles.button} onClick={handleSubmitChillerData} disabled={isChillerDataSent}>Submit Chiller Data</button>
          {isChillerDataSent && <div className={styles.alert}>Chiller data sent successfully</div>}

          {/* Chiller Water Pump field */}
          <h3>Chiller Water Pump Table</h3>
          {chillerWaterPumpStatuses.map((chwp, index) => (
                <div key={index} className={styles.fieldGroup}>
                    <p className={styles.machineText}>{chwp.machine_name}</p>
                    <label className={styles.label} htmlFor={`chwp${index + 1}Status`}>Status</label>
                    <select
                        id={`chwp${index + 1}Status`}
                        className={styles.input}
                        value={chwp.status}
                        onChange={(e) => {
                            const newStatuses = [...chillerWaterPumpStatuses];
                            newStatuses[index] = { ...chwp, status: e.target.value };
                            setChillerWaterPumpStatuses(newStatuses);
                        }}
                        disabled={isDataSent}
                    >
                        <option value="" disabled>Select Status</option>
                        <option value="R">R</option>
                        <option value="N">N</option>
                        <option value="E">E</option>
                        <option value="F">F</option>
                    </select>
                    <input
                        type="text"
                        value={chwp.A1}
                        onChange={(e) => {
                            const newStatuses = [...chillerWaterPumpStatuses];
                            newStatuses[index].A1 = e.target.value;
                            setChillerWaterPumpStatuses(newStatuses);
                        }}
                        className={styles.input}
                        placeholder="A1"
                    />
                    <input
                        type="text"
                        value={chwp.A2}
                        onChange={(e) => {
                            const newStatuses = [...chillerWaterPumpStatuses];
                            newStatuses[index].A2 = e.target.value;
                            setChillerWaterPumpStatuses(newStatuses);
                        }}
                        className={styles.input}
                        placeholder="A2"
                    />
                    <input
                        type="text"
                        value={chwp.A3}
                        onChange={(e) => {
                            const newStatuses = [...chillerWaterPumpStatuses];
                            newStatuses[index].A3 = e.target.value;
                            setChillerWaterPumpStatuses(newStatuses);
                        }}
                        className={styles.input}
                        placeholder="A3"
                    />
                    <input
                        type="text"
                        value={chwp.T}
                        onChange={(e) => {
                            const newStatuses = [...chillerWaterPumpStatuses];
                            newStatuses[index].T = e.target.value;
                            setChillerWaterPumpStatuses(newStatuses);
                        }}
                        className={styles.input}
                        placeholder="T"
                    />
                    <input
                        type="text"
                        value={chwp.note}
                        onChange={(e) => {
                            const newStatuses = [...chillerWaterPumpStatuses];
                            newStatuses[index].note = e.target.value;
                            setChillerWaterPumpStatuses(newStatuses);
                        }}
                        className={styles.input}
                        placeholder="Note"
                    />
                </div>
            ))}

          <button type="button" className={styles.button} onClick={handleSubmitChillerWaterPumpData} disabled={isChillerWaterPumpDataSent}>Submit Chiller Water Pump Data</button>
          {isChillerWaterPumpDataSent && <div className={styles.alert}>Chiller Water Pump data sent successfully</div>}

          {/* Ventilation Fan Room 6 field */}
          <h3>Ventilation Fan Room 6 Table</h3>
          {fan6Statuses.map((fan, index) => (
                <div key={index} className={styles.fieldGroup}>
                    <p className={styles.machineText}>{fan.machine_name}</p>
                    <label className={styles.label} htmlFor={`fan${index + 1}Status`}>Status</label>
                    <select
                        id={`fan${index + 1}Status`}
                        className={styles.input}
                        value={fan.status}
                        onChange={(e) => {
                            const newStatuses = [...fan6Statuses];
                            newStatuses[index] = { ...fan, status: e.target.value };
                            setFan6Statuses(newStatuses);
                        }}
                        disabled={isDataSent}
                    >
                        <option value="" disabled>Select Status</option>
                        <option value="R">R</option>
                        <option value="N">N</option>
                        <option value="E">E</option>
                        <option value="F">F</option>
                    </select>
                    <input
                        type="text"
                        value={fan.A1}
                        onChange={(e) => {
                            const newStatuses = [...fan6Statuses];
                            newStatuses[index].A1 = e.target.value;
                            setFan6Statuses(newStatuses);
                        }}
                        className={styles.input}
                        placeholder="A1"
                    />
                    <input
                        type="text"
                        value={fan.A2}
                        onChange={(e) => {
                            const newStatuses = [...fan6Statuses];
                            newStatuses[index].A2 = e.target.value;
                            setFan6Statuses(newStatuses);
                        }}
                        className={styles.input}
                        placeholder="A2"
                    />
                    <input
                        type="text"
                        value={fan.A3}
                        onChange={(e) => {
                            const newStatuses = [...fan6Statuses];
                            newStatuses[index].A3 = e.target.value;
                            setFan6Statuses(newStatuses);
                        }}
                        className={styles.input}
                        placeholder="A3"
                    />
                    <input
                        type="text"
                        value={fan.T}
                        onChange={(e) => {
                            const newStatuses = [...fan6Statuses];
                            newStatuses[index].T = e.target.value;
                            setFan6Statuses(newStatuses);
                        }}
                        className={styles.input}
                        placeholder="T"
                    />
                    <input
                        type="text"
                        value={fan.note}
                        onChange={(e) => {
                            const newStatuses = [...fan6Statuses];
                            newStatuses[index].note = e.target.value;
                            setFan6Statuses(newStatuses);
                        }}
                        className={styles.input}
                        placeholder="Note"
                    />
                </div>
            ))}

          <button type="button" className={styles.button} onClick={handleSubmitFan6Data} disabled={isVentilationFan6DataSent}>Submit Ventilation Fan Room 6 Data</button>
          {isVentilationFan6DataSent && <div className={styles.alert}>Ventilation Fan data sent successfully</div>}

          {/* Biofilter field */}
          <h3>Biofilter Table</h3>
          {biofilterStatuses.map((biofilter, index) => (
                <div key={index} className={styles.fieldGroup}>
                    <p className={styles.machineText}>{biofilter.machine_name}</p>
                    <label className={styles.label} htmlFor={`biofilter${index + 1}Status`}>Status</label>
                    <select
                        id={`biofilter${index + 1}Status`}
                        className={styles.input}
                        value={biofilter.status}
                        onChange={(e) => {
                            const newStatuses = [...biofilterStatuses];
                            newStatuses[index] = { ...biofilter, status: e.target.value };
                            setBiofilterStatuses(newStatuses);
                        }}
                        disabled={isDataSent}
                    >
                        <option value="" disabled>Select Status</option>
                        <option value="R">R</option>
                        <option value="N">N</option>
                        <option value="E">E</option>
                        <option value="F">F</option>
                    </select>
                    <input
                        type="text"
                        value={biofilter.note}
                        onChange={(e) => {
                            const newStatuses = [...biofilterStatuses];
                            newStatuses[index].note = e.target.value;
                            setBiofilterStatuses(newStatuses);
                        }}
                        className={styles.input}
                        placeholder="Note"
                    />
                </div>
            ))}

          <button type="button" className={styles.button} onClick={handleSubmitBiofilterData} disabled={isBiofilterDataSent}>Submit Biofilter Data</button>
          {isBiofilterDataSent && <div className={styles.alert}>Biofilter data sent successfully</div>}

          </>
          )}

          <button type="button" className={styles.button} style={{backgroundColor: 'green'}} onClick={handleSaveSection1}>
                {showSections1 ? 'Hide Section 1' : 'Show Section 1'}
          </button>
          
          {showSections2 && (
            <>
              {/* Garden Pump field */}
                <h3>Garden Pump Table</h3>
                {gardenPumpStatuses.map((gp, index) => (
                    <div key={index} className={styles.fieldGroup}>
                        <label className={styles.label} htmlFor={`status-${gp.machine_name}`}>{gp.machine_name}</label>
                        <select
                            id={`status-${gp.machine_name}`}
                            className={styles.input}
                            value={gp.status}
                            onChange={(e) => {
                                const newStatuses = [...gardenPumpStatuses];
                                newStatuses[index] = { ...gp, status: e.target.value };
                                setGardenPumpStatuses(newStatuses);
                            }}
                            disabled={isGardenPumpDataSent}
                        >
                            <option value="" disabled>Select Status</option>
                            <option value="R">R</option>
                            <option value="N">N</option>
                            <option value="E">E</option>
                            <option value="F">F</option>
                        </select>
                        <input
                            type="text"
                            value={gp.note}
                            onChange={(e) => {
                                const newStatuses = [...gardenPumpStatuses];
                                newStatuses[index].note = e.target.value;
                                setGardenPumpStatuses(newStatuses);
                            }}
                            className={styles.input}
                            placeholder="Note"
                        />
                       
                    </div>
                ))}
                <button type="button" className={styles.button} onClick={handleSubmitGardenPump} disabled={isGardenPumpDataSent}>Submit Garden Pump Data</button>
                {isGardenPumpDataSent && <div className={styles.alert}>Garden Pump data sent successfully</div>}
              {/* Inlet Pumping field */}
                <h3>Inlet Pumping Table</h3>
                {inletPumpingStatuses.map((ip, index) => (
                    <div key={index} className={styles.fieldGroup}>
                        <label className={styles.label} htmlFor={`status-${ip.machine_name}`}>{ip.machine_name}</label>
                        <select
                            id={`status-${ip.machine_name}`}
                            className={styles.input}
                            value={ip.status}
                            onChange={(e) => {
                                const newStatuses = [...inletPumpingStatuses];
                                newStatuses[index] = { ...ip, status: e.target.value };
                                setInletPumpingStatuses(newStatuses);
                            }}
                            disabled={isInletPumpingDataSent}
                        >
                            <option value="" disabled>Select Status</option>
                            <option value="R">R</option>
                            <option value="N">N</option>
                            <option value="E">E</option>
                            <option value="F">F</option>
                        </select>
                        <input
                            type="text"
                            value={ip.A1}
                            onChange={(e) => {
                                const newStatuses = [...inletPumpingStatuses];
                                newStatuses[index].A1 = e.target.value;
                                setInletPumpingStatuses(newStatuses);
                            }}
                            className={styles.input}
                            placeholder="A1"
                        />
                        <input
                            type="text"
                            value={ip.A2}
                            onChange={(e) => {
                                const newStatuses = [...inletPumpingStatuses];
                                newStatuses[index].A2 = e.target.value;
                                setInletPumpingStatuses(newStatuses);
                            }}
                            className={styles.input}
                            placeholder="A2"
                        />
                        <input
                            type="text"
                            value={ip.A3}
                            onChange={(e) => {
                                const newStatuses = [...inletPumpingStatuses];
                                newStatuses[index].A3 = e.target.value;
                                setInletPumpingStatuses(newStatuses);
                            }}
                            className={styles.input}
                            placeholder="A3"
                        />
                        <input
                            type="text"
                            value={ip.T}
                            onChange={(e) => {
                                const newStatuses = [...inletPumpingStatuses];
                                newStatuses[index].T = e.target.value;
                                setInletPumpingStatuses(newStatuses);
                            }}
                            className={styles.input}
                            placeholder="T"
                        />
                        <input
                            type="text"
                            value={ip.note}
                            onChange={(e) => {
                                const newStatuses = [...inletPumpingStatuses];
                                newStatuses[index].note = e.target.value;
                                setInletPumpingStatuses(newStatuses);
                            }}
                            className={styles.input}
                            placeholder="Note"
                        />
                    </div>
                ))}
                <button type="button" className={styles.button} onClick={handleSubmitInletPumping} disabled={isInletPumpingDataSent}>Submit Inlet Pumping Data</button>
                {isInletPumpingDataSent && <div className={styles.alert}>Inlet Pumping data sent successfully</div>}
              {/* Ventilation Inlet Pumping field */}
                <h3>Ventilation Inlet Pumping Table</h3>
                {ventilationInletPumpingStatuses.map((vip, index) => (
                    <div key={index} className={styles.fieldGroup}>
                        <label className={styles.label} htmlFor={`status-${vip.machine_name}`}>{vip.machine_name}</label>
                        <select
                            id={`status-${vip.machine_name}`}
                            className={styles.input}
                            value={vip.status}
                            onChange={(e) => {
                                const newStatuses = [...ventilationInletPumpingStatuses];
                                newStatuses[index] = { ...vip, status: e.target.value };
                                setVentilationInletPumpingStatuses(newStatuses);
                            }}
                            disabled={isVentilationInletPumpingDataSent}
                        >
                            <option value="" disabled>Select Status</option>
                            <option value="R">R</option>
                            <option value="N">N</option>
                            <option value="E">E</option>
                            <option value="F">F</option>
                        </select>
                        <input
                            type="text"
                            value={vip.A1}
                            onChange={(e) => {
                                const newStatuses = [...ventilationInletPumpingStatuses];
                                newStatuses[index].A1 = e.target.value;
                                setVentilationInletPumpingStatuses(newStatuses);
                            }}
                            className={styles.input}
                            placeholder="A1"
                        />
                        <input
                            type="text"
                            value={vip.A2}
                            onChange={(e) => {
                                const newStatuses = [...ventilationInletPumpingStatuses];
                                newStatuses[index].A2 = e.target.value;
                                setVentilationInletPumpingStatuses(newStatuses);
                            }}
                            className={styles.input}
                            placeholder="A2"
                        />
                        <input
                            type="text"
                            value={vip.A3}
                            onChange={(e) => {
                                const newStatuses = [...ventilationInletPumpingStatuses];
                                newStatuses[index].A3 = e.target.value;
                                setVentilationInletPumpingStatuses(newStatuses);
                            }}
                            className={styles.input}
                            placeholder="A3"
                        />
                        <input
                            type="text"
                            value={vip.T}
                            onChange={(e) => {
                                const newStatuses = [...ventilationInletPumpingStatuses];
                                newStatuses[index].T = e.target.value;
                                setVentilationInletPumpingStatuses(newStatuses);
                            }}
                            className={styles.input}
                            placeholder="T"
                        />
                        <input
                            type="text"
                            value={vip.note}
                            onChange={(e) => {
                                const newStatuses = [...ventilationInletPumpingStatuses];
                                newStatuses[index].note = e.target.value;
                                setVentilationInletPumpingStatuses(newStatuses);
                            }}
                            className={styles.input}
                            placeholder="Note"
                        />
                    </div>
                ))}
                <button type="button" className={styles.button} onClick={handleSubmitVentilationInletPumping} disabled={isVentilationInletPumpingDataSent}>Submit Ventilation Inlet Pumping Data</button>
                {isVentilationInletPumpingDataSent && <div className={styles.alert}>Ventilation Inlet Pumping data sent successfully</div>}
              {/* Inlet Gate field */}
                <h3>Inlet Gate Table</h3>
                {inletGateStatuses.map((ig, index) => (
                    <div key={index} className={styles.fieldGroup}>
                        <label className={styles.label} htmlFor={`status-${ig.machine_name}`}>{ig.machine_name}</label>
                        <select
                            id={`status-${ig.machine_name}`}
                            className={styles.input}
                            value={ig.status}
                            onChange={(e) => {
                                const newStatuses = [...inletGateStatuses];
                                newStatuses[index] = { ...ig, status: e.target.value };
                                setInletGateStatuses(newStatuses);
                            }}
                            disabled={isInletGateDataSent}
                        >
                            <option value="" disabled>Select Status</option>
                            <option value="R">R</option>
                            <option value="N">N</option>
                            <option value="E">E</option>
                            <option value="F">F</option>
                        </select>
                        <input
                            type="text"
                            value={ig.gate_percentage}
                            onChange={(e) => {
                                const newStatuses = [...inletGateStatuses];
                                newStatuses[index].gate_percentage = e.target.value;
                                setInletGateStatuses(newStatuses);
                            }}
                            className={styles.input}
                            placeholder="Gate %"
                        />
                        <input
                            type="text"
                            value={ig.note}
                            onChange={(e) => {
                                const newStatuses = [...inletGateStatuses];
                                newStatuses[index].note = e.target.value;
                                setInletGateStatuses(newStatuses);
                            }}
                            className={styles.input}
                            placeholder="Note"
                          />
                    </div>
                ))}
                <button type="button" className={styles.button} onClick={handleSubmitInletGate} disabled={isInletGateDataSent}>Submit Inlet Gate Data</button>
                {isInletGateDataSent && <div className={styles.alert}>Inlet Gate data sent successfully</div>}
              {/* Coarse Screen field */}
                <h3>Coarse Screen Table</h3>
                {coarseScreenStatuses.map((cs, index) => (
                    <div key={index} className={styles.fieldGroup}>
                        <label className={styles.label} htmlFor={`status-${cs.machine_name}`}>{cs.machine_name}</label>
                        <select
                            id={`status-${cs.machine_name}`}
                            className={styles.input}
                            value={cs.status}
                            onChange={(e) => {
                                const newStatuses = [...coarseScreenStatuses];
                                newStatuses[index] = { ...cs, status: e.target.value };
                                setCoarseScreenStatuses(newStatuses);
                            }}
                            disabled={isCoarseScreenDataSent}
                        >
                            <option value="" disabled>Select Status</option>
                            <option value="R">R</option>
                            <option value="N">N</option>
                            <option value="E">E</option>
                            <option value="F">F</option>
                        </select>
                        <input
                            type="text"
                            value={cs.T_1}
                            onChange={(e) => {
                                const newStatuses = [...coarseScreenStatuses];
                                newStatuses[index].T_1 = e.target.value;
                                setCoarseScreenStatuses(newStatuses);
                            }}
                            className={styles.input}
                            placeholder="T1"
                        />
                        <input
                            type="text"
                            value={cs.T_2}
                            onChange={(e) => {
                                const newStatuses = [...coarseScreenStatuses];
                                newStatuses[index].T_2 = e.target.value;
                                setCoarseScreenStatuses(newStatuses);
                            }}
                            className={styles.input}
                            placeholder="T2"
                        />
                        <input
                            type="text"
                            value={cs.note}
                            onChange={(e) => {
                                const newStatuses = [...coarseScreenStatuses];
                                newStatuses[index].note = e.target.value;
                                setCoarseScreenStatuses(newStatuses);
                            }}
                            className={styles.input}
                            placeholder="Note"
                        />
                    </div>
                ))}
                <button type="button" className={styles.button} onClick={handleSubmitCoarseScreen} disabled={isCoarseScreenDataSent}>Submit Coarse Screen Data</button>
                {isCoarseScreenDataSent && <div className={styles.alert}>Coarse Screen data sent successfully</div>}

            </>
          )}  
          <button type="button" className={styles.button} style={{backgroundColor: 'green'}} onClick={handleSaveSection2}>
                {showSections2 ? 'Hide Section 2' : 'Show Section 2'}
          </button>

          {showSections3 && (
            <>
            {/* fan 3 field */}
            <h3>Ventilation Fan 3 Table</h3>
            {fan3Statuses.map((fan3, index) => (
              <div key={index} className={styles.fieldGroup}>
                <label className={styles.label} htmlFor={`status-${fan3.machine_name}`}>{fan3.machine_name}</label>
                <select
                  id={`status-${fan3.machine_name}`}
                  className={styles.input}
                  value={fan3.status}
                  onChange={(e) => {
                    const newStatuses = [...fan3Statuses];
                    newStatuses[index] = { ...fan3, status: e.target.value };
                    setFan3Statuses(newStatuses);
                  }}
                  disabled={isVentilationFan3DataSent}
                >
                  <option value="" disabled>Select Status</option>
                  <option value="R">R</option>
                  <option value="N">N</option>
                  <option value="E">E</option>
                  <option value="F">F</option>
                </select>
                <input
                  type="text"
                  value={fan3.A1}
                  onChange={(e) => {
                    const newStatuses = [...fan3Statuses];
                    newStatuses[index].A1 = e.target.value;
                    setFan3Statuses(newStatuses);
                  }}
                  className={styles.input}
                  placeholder="A1"
                />
                <input
                  type="text"
                  value={fan3.A2}
                  onChange={(e) => {
                    const newStatuses = [...fan3Statuses];
                    newStatuses[index].A2 = e.target.value;
                    setFan3Statuses(newStatuses);
                  }}
                  className={styles.input}
                  placeholder="A2"
                />
                <input
                  type="text"
                  value={fan3.A3}
                  onChange={(e) => {
                    const newStatuses = [...fan3Statuses];
                    newStatuses[index].A3 = e.target.value;
                    setFan3Statuses(newStatuses);
                  }}
                  className={styles.input}
                  placeholder="A3"
                />
                <input
                  type="text"
                  value={fan3.T}
                  onChange={(e) => {
                    const newStatuses = [...fan3Statuses];
                    newStatuses[index].T = e.target.value;
                    setFan3Statuses(newStatuses);
                  }}
                  className={styles.input}
                  placeholder="T"
                />
                <input
                  type="text"
                  value={fan3.note}
                  onChange={(e) => {
                    const newStatuses = [...fan3Statuses];
                    newStatuses[index].note = e.target.value;
                    setFan3Statuses(newStatuses);
                  }}
                  className={styles.input}
                  placeholder="Note"
                />
              </div>
            ))}
            <button type="button" className={styles.button} onClick={handleSubmitFan3} disabled={isVentilationFan3DataSent}>Submit Fan 3 Data</button>
            {isVentilationFan3DataSent && <div className={styles.alert}>Fan 3 data sent successfully</div>}

            {/* fan 2 field */}
            <h3>Ventilation Fan 2 Table</h3>
            {fan2Statuses.map((fan2, index) => (
              <div key={index} className={styles.fieldGroup}>
                <label className={styles.label} htmlFor={`status-${fan2.machine_name}`}>{fan2.machine_name}</label>
                <select
                  id={`status-${fan2.machine_name}`}
                  className={styles.input}
                  value={fan2.status}
                  onChange={(e) => {
                    const newStatuses = [...fan2Statuses];
                    newStatuses[index] = { ...fan2, status: e.target.value};
                    setFan2Statuses(newStatuses);
                  }}
                  disabled={isVentilationFan2DataSent}
                >
                  <option value="" disabled>Select Status</option>
                  <option value="R">R</option>
                  <option value="N">N</option>
                  <option value="E">E</option>
                  <option value="F">F</option>
                </select>
                <input
                  type="text"
                  value={fan2.A1}
                  onChange={(e) => {
                    const newStatuses = [...fan2Statuses];
                    newStatuses[index].A1 = e.target.value;
                    setFan2Statuses(newStatuses);
                  }}
                  className={styles.input}
                  placeholder="A1"
                />
                <input
                  type="text"
                  value={fan2.A2}
                  onChange={(e) => {
                    const newStatuses = [...fan2Statuses];
                    newStatuses[index].A2 = e.target.value;
                    setFan2Statuses(newStatuses);
                  }}
                  className={styles.input}
                  placeholder="A2"
                />
                <input
                  type="text"
                  value={fan2.A3}
                  onChange={(e) => {
                    const newStatuses = [...fan2Statuses];
                    newStatuses[index].A3 = e.target.value;
                    setFan2Statuses(newStatuses);
                  }}
                  className={styles.input}
                  placeholder="A3"
                />
                <input
                  type="text"
                  value={fan2.T}
                  onChange={(e) => {
                    const newStatuses = [...fan2Statuses];
                    newStatuses[index].T = e.target.value;
                    setFan2Statuses(newStatuses);
                  }}
                  className={styles.input}
                  placeholder="T"
                />
                <input
                  type="text"
                  value={fan2.note}
                  onChange={(e) => {
                    const newStatuses = [...fan2Statuses];
                    newStatuses[index].note = e.target.value;
                    setFan2Statuses(newStatuses);
                  }}
                  className={styles.input}
                  placeholder="Note"
                />
              </div>
            ))}
            <button type="button" className={styles.button} onClick={handleSubmitFan2} disabled={isVentilationFan2DataSent}>Submit Fan 2 Data</button>
            {isVentilationFan2DataSent && <div className={styles.alert}>Fan 2 data sent successfully</div>}

            {/* fan 1 field */}
            <h3>Ventilation Fan 1 Table</h3>
            {fan1Statuses.map((fan1, index) => (
              <div key={index} className={styles.fieldGroup}>
                <label className={styles.label} htmlFor={`status-${fan1.machine_name}`}>{fan1.machine_name}</label>
                <select
                  id={`status-${fan1.machine_name}`}
                  className={styles.input}
                  value={fan1.status}
                  onChange={(e) => {
                    const newStatuses = [...fan1Statuses];
                    newStatuses[index] = { ...fan1, status: e.target.value};
                    setFan1Statuses(newStatuses);
                  }}
                  disabled={isVentilationFan1DataSent}
                >
                  <option value="" disabled>Select Status</option>
                  <option value="R">R</option>
                  <option value="N">N</option>
                  <option value="E">E</option>
                  <option value="F">F</option>
                </select>
                <input
                  type="text"
                  value={fan1.A1}
                  onChange={(e) => {
                    const newStatuses = [...fan1Statuses];
                    newStatuses[index].A1 = e.target.value;
                    setFan1Statuses(newStatuses);
                  }}
                  className={styles.input}
                  placeholder="A1"
                />
                <input
                  type="text"
                  value={fan1.A2}
                  onChange={(e) => {
                    const newStatuses = [...fan1Statuses];
                    newStatuses[index].A2 = e.target.value;
                    setFan1Statuses(newStatuses);
                  }}
                  className={styles.input}
                  placeholder="A2"
                />
                <input
                  type="text"
                  value={fan1.A3}
                  onChange={(e) => {
                    const newStatuses = [...fan1Statuses];
                    newStatuses[index].A3 = e.target.value;
                    setFan1Statuses(newStatuses);
                  }}
                  className={styles.input}
                  placeholder="A3"
                />
                <input
                  type="text"
                  value={fan1.T}
                  onChange={(e) => {
                    const newStatuses = [...fan1Statuses];
                    newStatuses[index].T = e.target.value;
                    setFan1Statuses(newStatuses);
                  }}
                  className={styles.input}
                  placeholder="T"
                />
                <input
                  type="text"
                  value={fan1.note}
                  onChange={(e) => {
                    const newStatuses = [...fan1Statuses];
                    newStatuses[index].note = e.target.value;
                    setFan1Statuses(newStatuses);
                  }}
                  className={styles.input}
                  placeholder="Note"
                />
              </div>
            ))}
            <button type="button" className={styles.button} onClick={handleSubmitFan1} disabled={isVentilationFan1DataSent}>Submit Fan 1 Data</button>
            {isVentilationFan1DataSent && <div className={styles.alert}>Fan 1 data sent successfully</div>}

            {/* Auto Sampler field */}
            <h3>Auto Sampler Table</h3>
            {autoSamplerStatuses.map((autoSampler, index) => (
              <div key={index} className={styles.fieldGroup}>
                <label className={styles.label} htmlFor={`status-${autoSampler.machine_name}`}>{autoSampler.machine_name}</label>
                <select
                  id={`status-${autoSampler.machine_name}`}
                  className={styles.input}
                  value={autoSampler.status}
                  onChange={(e) => {
                    const newStatuses = [...autoSamplerStatuses];
                    newStatuses[index] = { ...autoSampler, status: e.target.value};
                    setAutoSamplerStatuses(newStatuses);
                  }}
                  disabled={isAutoSamplerDataSent}
                >
                  <option value="" disabled>Select Status</option>
                  <option value="R">R</option>
                  <option value="N">N</option>
                  <option value="E">E</option>
                  <option value="F">F</option>
                </select>
                <input
                  type="text"
                  value={autoSampler.T}
                  onChange={(e) => {
                    const newStatuses = [...autoSamplerStatuses];
                    newStatuses[index].T = e.target.value;
                    setAutoSamplerStatuses(newStatuses);
                  }}
                  className={styles.input}
                  placeholder="T"
                />
                <input
                  type="text"
                  value={autoSampler.note}
                  onChange={(e) => {
                    const newStatuses = [...autoSamplerStatuses];
                    newStatuses[index].note = e.target.value;
                    setAutoSamplerStatuses(newStatuses);
                  }}
                  className={styles.input}
                  placeholder="Note"
                />
              </div>
            ))}
            <button type="button" className={styles.button} onClick={handleSubmitAutoSampler} disabled={isAutoSamplerDataSent}>Submit Auto Sampler Data</button>
            {isAutoSamplerDataSent && <div className={styles.alert}>Auto Sampler data sent successfully</div>}

            {/* Vortex Grit field */}
            <h3>Vortex Grit Table</h3>
            {vortexGritStatuses.map((vortexGrit, index) => (
              <div key={index} className={styles.fieldGroup}>
                <label className={styles.label} htmlFor={`status-${vortexGrit.machine_name}`}>{vortexGrit.machine_name}</label>
                <select
                  id={`status-${vortexGrit.machine_name}`}
                  className={styles.input}
                  value={vortexGrit.status}
                  onChange={(e) => {
                    const newStatuses = [...vortexGritStatuses];
                    newStatuses[index] = { ...vortexGrit, status: e.target.value};
                    setVortexGridStatuses(newStatuses);
                  }}
                  disabled={isVortexGridDataSent}
                >
                  <option value="" disabled>Select Status</option>
                  <option value="R">R</option>
                  <option value="N">N</option>
                  <option value="E">E</option>
                  <option value="F">F</option>
                </select>
                <input
                  type="text"
                  value={vortexGrit.T}
                  onChange={(e) => {
                    const newStatuses = [...vortexGritStatuses];
                    newStatuses[index].T = e.target.value;
                    setVortexGridStatuses(newStatuses);
                  }}
                  className={styles.input}
                  placeholder="T"
                />
                <input
                  type="text"
                  value={vortexGrit.note}
                  onChange={(e) => {
                    const newStatuses = [...vortexGritStatuses];
                    newStatuses[index].note = e.target.value;
                    setVortexGridStatuses(newStatuses);
                  }}
                  className={styles.input}
                  placeholder="Note"
                />
              </div>
            ))}
            <button type="button" className={styles.button} onClick={handleSubmitVortexGrit} disabled={isVortexGridDataSent}>Submit Vortex Grit Data</button>
            {isVortexGridDataSent && <div className={styles.alert}>Vortex Grit data sent successfully</div>}

            </>
          )} 
          <button type="button" className={styles.button} style={{backgroundColor: 'green'}} onClick={handleSaveSection3}>
                {showSections3 ? 'Hide Section 3' : 'Show Section 3'}
          </button>
          {showSections4 && (
            <>
            {/* Fine Screen field */}
            <h3>Fine Screen Table</h3>
            {fineScreenStatuses.map((fineScreen, index) => (
              <div key={index} className={styles.fieldGroup}>
                <label className={styles.label} htmlFor={`status-${fineScreen.machine_name}`}>{fineScreen.machine_name}</label>
                <select
                  id={`status-${fineScreen.machine_name}`}
                  className={styles.input}
                  value={fineScreen.status}
                  onChange={(e) => {
                    const newStatuses = [...fineScreenStatuses];
                    newStatuses[index] = { ...fineScreen, status: e.target.value };
                    setFineScreenStatuses(newStatuses);
                  }}
                  disabled={isFineScreenDataSent}
                >
                  <option value="" disabled>Select Status</option>
                  <option value="R">R</option>
                  <option value="N">N</option>
                  <option value="E">E</option>
                  <option value="F">F</option>
                </select>
                <input
                  type="text"
                  value={fineScreen.A1}
                  onChange={(e) => {
                    const newStatuses = [...fineScreenStatuses];
                    newStatuses[index].A1 = e.target.value;
                    setFineScreenStatuses(newStatuses);
                  }}
                  className={styles.input}
                  placeholder="A1"
                />
                <input
                  type="text"
                  value={fineScreen.note}
                  onChange={(e) => {
                    const newStatuses = [...fineScreenStatuses];
                    newStatuses[index].note = e.target.value;
                    setFineScreenStatuses(newStatuses);
                  }}
                  className={styles.input}
                  placeholder="Note"
                />
              </div>
            ))}
            <button type="button" className={styles.button} onClick={handleSubmitFineScreen} disabled={isFineScreenDataSent}>Submit Fine Screen Data</button>
            {isFineScreenDataSent && <div className={styles.alert}>Fine Screen data sent successfully</div>}
            
            {/* Drainage Pump 3 field */}
            <h3>Drainage Pump 3 Table</h3>
            {drainagePump3Statuses.map((drainagePump3, index) => (
              <div key={index} className={styles.fieldGroup}>
                <label className={styles.label} htmlFor={`status-${drainagePump3.machine_name}`}>{drainagePump3.machine_name}</label>
                <select
                  id={`status-${drainagePump3.machine_name}`}
                  className={styles.input}
                  value={drainagePump3.status}
                  onChange={(e) => {
                    const newStatuses = [...drainagePump3Statuses];
                    newStatuses[index] = { ...drainagePump3, status: e.target.value };
                    setDrainagePump3Statuses(newStatuses);
                  }}
                  disabled={isDrainagePump3DataSent}
                >
                  <option value="" disabled>Select Status</option>
                  <option value="R">R</option>
                  <option value="N">N</option>
                  <option value="E">E</option>
                  <option value="F">F</option>
                </select>
                <input
                  type="text"
                  value={drainagePump3.A1}
                  onChange={(e) => {
                    const newStatuses = [...drainagePump3Statuses];
                    newStatuses[index].A1 = e.target.value;
                    setDrainagePump3Statuses(newStatuses);
                  }}
                  className={styles.input}
                  placeholder="A1"
                />
                <input
                  type="text"
                  value={drainagePump3.A2}
                  onChange={(e) => {
                    const newStatuses = [...drainagePump3Statuses];
                    newStatuses[index].A2 = e.target.value;
                    setDrainagePump3Statuses(newStatuses);
                  }}
                  className={styles.input}
                  placeholder="A2"
                />
                <input
                  type="text"
                  value={drainagePump3.A3}
                  onChange={(e) => {
                    const newStatuses = [...drainagePump3Statuses];
                    newStatuses[index].A3 = e.target.value;
                    setDrainagePump3Statuses(newStatuses);
                  }}
                  className={styles.input}
                  placeholder="A3"
                />
                <input
                  type="text"
                  value={drainagePump3.T}
                  onChange={(e) => {
                    const newStatuses = [...drainagePump3Statuses];
                    newStatuses[index].T = e.target.value;
                    setDrainagePump3Statuses(newStatuses);
                  }}
                  className={styles.input}
                  placeholder="T"
                />
                <input
                  type="text"
                  value={drainagePump3.note}
                  onChange={(e) => {
                    const newStatuses = [...drainagePump3Statuses];
                    newStatuses[index].note = e.target.value;
                    setDrainagePump3Statuses(newStatuses);
                  }}
                  className={styles.input}
                  placeholder="Note"
                />
              </div>
            ))}
            <button type="button" className={styles.button} onClick={handleSubmitDrainagePump3} disabled={isDrainagePump3DataSent}>Submit Drainage Pump 3 Data</button>
            {isDrainagePump3DataSent && <div className={styles.alert}>Drainage Pump 3 data sent successfully</div>}
            
            {/* Fan 4 field */}
            <h3>Fan 4 Table</h3>
            {fan4Statuses.map((fan4, index) => (
              <div key={index} className={styles.fieldGroup}>
                <label className={styles.label} htmlFor={`status-${fan4.machine_name}`}>{fan4.machine_name}</label>
                <select
                  id={`status-${fan4.machine_name}`}
                  className={styles.input}
                  value={fan4.status}
                  onChange={(e) => {
                    const newStatuses = [...fan4Statuses];
                    newStatuses[index] = { ...fan4, status: e.target.value };
                    setFan4Statuses(newStatuses);
                  }}
                  disabled={isVentilationFan4DataSent}
                >
                  <option value="" disabled>Select Status</option>
                  <option value="R">R</option>
                  <option value="N">N</option>
                  <option value="E">E</option>
                  <option value="F">F</option>
                </select>
                <input
                  type="text"
                  value={fan4.A1}
                  onChange={(e) => {
                    const newStatuses = [...fan4Statuses];
                    newStatuses[index].A1 = e.target.value;
                    setFan4Statuses(newStatuses);
                  }}
                  className={styles.input}
                  placeholder="A1"
                />
                <input
                  type="text"
                  value={fan4.A2}
                  onChange={(e) => {
                    const newStatuses = [...fan4Statuses];
                    newStatuses[index].A2 = e.target.value;
                    setFan4Statuses(newStatuses);
                  }}
                  className={styles.input}
                  placeholder="A2"
                />
                <input
                  type="text"
                  value={fan4.A3}
                  onChange={(e) => {
                    const newStatuses = [...fan4Statuses];
                    newStatuses[index].A3 = e.target.value;
                    setFan4Statuses(newStatuses);
                  }}
                  className={styles.input}
                  placeholder="A3"
                />
                <input
                  type="text"
                  value={fan4.T}
                  onChange={(e) => {
                    const newStatuses = [...fan4Statuses];
                    newStatuses[index].T = e.target.value;
                    setFan4Statuses(newStatuses);
                  }}
                  className={styles.input}
                  placeholder="T"
                />
                <input
                  type="text"
                  value={fan4.note}
                  onChange={(e) => {
                    const newStatuses = [...fan4Statuses];
                    newStatuses[index].note = e.target.value;
                    setFan4Statuses(newStatuses);
                  }}
                  className={styles.input}
                  placeholder="Note"
                />
              </div>
            ))}
            <button type="button" className={styles.button} onClick={handleSubmitFan4} disabled={isVentilationFan4DataSent}>Submit Fan 4 Data</button>
            {isVentilationFan4DataSent && <div className={styles.alert}>Fan 4 data sent successfully</div>}

            {/* Anoxic Mixer 1 field */}
            <h3>Anoxic Mixer 1 Table</h3>
            {anoxicMixer1Statuses.map((anoxicMixer1, index) => (
              <div key={index} className={styles.fieldGroup}>
                <label className={styles.label} htmlFor={`status-${anoxicMixer1.machine_name}`}>{anoxicMixer1.machine_name}</label>
                <select
                  id={`status-${anoxicMixer1.machine_name}`}
                  className={styles.input}
                  value={anoxicMixer1.status}
                  onChange={(e) => {
                    const newStatuses = [...anoxicMixer1Statuses];
                    newStatuses[index] = { ...anoxicMixer1, status: e.target.value };
                    setAnoxicMixer1Statuses(newStatuses);
                  }}
                  disabled={isAnoxicMixer1DataSent}
                >
                  <option value="" disabled>Select Status</option>
                  <option value="R">R</option>
                  <option value="N">N</option>
                  <option value="E">E</option>
                  <option value="F">F</option>
                </select>
                <input
                  type="text"
                  value={anoxicMixer1.A1}
                  onChange={(e) => {
                    const newStatuses = [...anoxicMixer1Statuses];
                    newStatuses[index].A1 = e.target.value;
                    setAnoxicMixer1Statuses(newStatuses);
                  }}
                  className={styles.input}
                  placeholder="A1"
                />
                <input
                  type="text"
                  value={anoxicMixer1.A2}
                  onChange={(e) => {
                    const newStatuses = [...anoxicMixer1Statuses];
                    newStatuses[index].A2 = e.target.value;
                    setAnoxicMixer1Statuses(newStatuses);
                  }}
                  className={styles.input}
                  placeholder="A2"    />
                  <input
                    type="text"
                    value={anoxicMixer1.A3}
                    onChange={(e) => {
                      const newStatuses = [...anoxicMixer1Statuses];
                      newStatuses[index].A3 = e.target.value;
                      setAnoxicMixer1Statuses(newStatuses);
                    }}
                    className={styles.input}
                    placeholder="A3"
                  />
                  <input
                    type="text"
                    value={anoxicMixer1.T}
                    onChange={(e) => {
                      const newStatuses = [...anoxicMixer1Statuses];
                      newStatuses[index].T = e.target.value;
                      setAnoxicMixer1Statuses(newStatuses);
                    }}
                    className={styles.input}
                    placeholder="T"
                  />
                  <input
                    type="text"
                    value={anoxicMixer1.note}
                    onChange={(e) => {
                      const newStatuses = [...anoxicMixer1Statuses];
                      newStatuses[index].note = e.target.value;
                      setAnoxicMixer1Statuses(newStatuses);
                    }}
                    className={styles.input}
                    placeholder="Note"
                  />
                </div>
              ))}
              <button type="button" className={styles.button} onClick={handleSubmitAnoxicMixer1} disabled={isAnoxicMixer1DataSent}>Submit Anoxic Mixer 1 Data</button>
              {isAnoxicMixer1DataSent && <div className={styles.alert}>Anoxic Mixer 1 data sent successfully</div>}
              
              {/* Anoxic Mixer 2 field */}
              <h3>Anoxic Mixer 2 Table</h3>
              {anoxicMixer2Statuses.map((anoxicMixer2, index) => (
                <div key={index} className={styles.fieldGroup}>
                  <label className={styles.label} htmlFor={`status-${anoxicMixer2.machine_name}`}>{anoxicMixer2.machine_name}</label>
                  <select
                    id={`status-${anoxicMixer2.machine_name}`}
                    className={styles.input}
                    value={anoxicMixer2.status}
                    onChange={(e) => {
                      const newStatuses = [...anoxicMixer2Statuses];
                      newStatuses[index] = { ...anoxicMixer2, status: e.target.value};
                      setAnoxicMixer2Statuses(newStatuses);
                    }}
                    disabled={isAnoxicMixer2DataSent}
                  >
                    <option value="" disabled>Select Status</option>
                    <option value="R">R</option>
                    <option value="N">N</option>
                    <option value="E">E</option>
                    <option value="F">F</option>
                  </select>
                  <input
                    type="text"
                    value={anoxicMixer2.A1}
                    onChange={(e) => {
                      const newStatuses = [...anoxicMixer2Statuses];
                      newStatuses[index].A1 = e.target.value;
                      setAnoxicMixer2Statuses(newStatuses);
                    }}
                    className={styles.input}
                    placeholder="A1"
                  />
                  <input
                    type="text"
                    value={anoxicMixer2.A2}
                    onChange={(e) => {
                      const newStatuses = [...anoxicMixer2Statuses];
                      newStatuses[index].A2 = e.target.value;
                      setAnoxicMixer2Statuses(newStatuses);
                    }}
                    className={styles.input}
                    placeholder="A2"
                  />
                  <input
                    type="text"
                    value={anoxicMixer2.A3}
                    onChange={(e) => {
                      const newStatuses = [...anoxicMixer2Statuses];
                      newStatuses[index].A3 = e.target.value;
                      setAnoxicMixer2Statuses(newStatuses);
                    }}
                    className={styles.input}
                    placeholder="A3"
                  />
                  <input
                    type="text"
                    value={anoxicMixer2.T}
                    onChange={(e) => {
                      const newStatuses = [...anoxicMixer2Statuses];
                      newStatuses[index].T = e.target.value;
                      setAnoxicMixer2Statuses(newStatuses);
                    }}
                    className={styles.input}
                    placeholder="T"
                  />
                  <input
                    type="text"
                    value={anoxicMixer2.note}
                    onChange={(e) => {
                      const newStatuses = [...anoxicMixer2Statuses];
                      newStatuses[index].note = e.target.value;
                      setAnoxicMixer2Statuses(newStatuses);
                    }}
                    className={styles.input}
                    placeholder="Note"
                  />
                </div>
              ))}
              <button type="button" className={styles.button} onClick={handleSubmitAnoxicMixer2} disabled={isAnoxicMixer2DataSent}>Submit Anoxic Mixer 2 Data</button>
              {isAnoxicMixer2DataSent && <div className={styles.alert}>Anoxic Mixer 2 data sent successfully</div>}

              {/* Anoxic Mixer 3 field */}
              <h3>Anoxic Mixer 3 Table</h3>
              {anoxicMixer3Statuses.map((anoxicMixer3, index) => (
                <div key={index} className={styles.fieldGroup}>
                  <label className={styles.label} htmlFor={`status-${anoxicMixer3.machine_name}`}>{anoxicMixer3.machine_name}</label>
                  <select
                    id={`status-${anoxicMixer3.machine_name}`}
                    className={styles.input}
                    value={anoxicMixer3.status}
                    onChange={(e) => {
                      const newStatuses = [...anoxicMixer3Statuses];
                      newStatuses[index] = { ...anoxicMixer3, status: e.target.value};
                      setAnoxicMixer3Statuses(newStatuses);
                    }}
                    disabled={isAnoxicMixer3DataSent}
                  >
                    <option value="" disabled>Select Status</option>
                    <option value="R">R</option>
                    <option value="N">N</option>
                    <option value="E">E</option>
                    <option value="F">F</option>
                  </select>
                  <input
                    type="text"
                    value={anoxicMixer3.A1}
                    onChange={(e) => {
                      const newStatuses = [...anoxicMixer3Statuses];
                      newStatuses[index].A1 = e.target.value;
                      setAnoxicMixer3Statuses(newStatuses);
                    }}
                    className={styles.input}
                    placeholder="A1"
                  />
                  <input
                    type="text"
                    value={anoxicMixer3.A2}
                    onChange={(e) => {
                      const newStatuses = [...anoxicMixer3Statuses];
                      newStatuses[index].A2 = e.target.value;
                      setAnoxicMixer3Statuses(newStatuses);
                    }}
                    className={styles.input}
                    placeholder="A2"
                  />
                  <input
                    type="text"
                    value={anoxicMixer3.A3}
                    onChange={(e) => {
                      const newStatuses = [...anoxicMixer3Statuses];
                      newStatuses[index].A3 = e.target.value;
                      setAnoxicMixer3Statuses(newStatuses);
                    }}
                    className={styles.input}
                    placeholder="A3"
                  />
                  <input
                    type="text"
                    value={anoxicMixer3.T}
                    onChange={(e) => {
                      const newStatuses = [...anoxicMixer3Statuses];
                      newStatuses[index].T = e.target.value;
                      setAnoxicMixer3Statuses(newStatuses);
                    }}
                    className={styles.input}
                    placeholder="T"
                  />
                  <input
                    type="text"
                    value={anoxicMixer3.note}
                    onChange={(e) => {
                      const newStatuses = [...anoxicMixer3Statuses];
                      newStatuses[index].note = e.target.value;
                      setAnoxicMixer3Statuses(newStatuses);
                    }}
                    className={styles.input}
                    placeholder="Note"
                  />
                </div>
              ))}
              <button type="button" className={styles.button} onClick={handleSubmitAnoxicMixer3} disabled={isAnoxicMixer3DataSent}>Submit Anoxic Mixer 3 Data</button>
              {isAnoxicMixer3DataSent && <div className={styles.alert}>Anoxic Mixer 3 data sent successfully</div>}

              {/* Anoxic Mixer 4 field */}
              <h3>Anoxic Mixer 4 Table</h3>
              {anoxicMixer4Statuses.map((anoxicMixer4, index) => (
                <div key={index} className={styles.fieldGroup}>
                  <label className={styles.label} htmlFor={`status-${anoxicMixer4.machine_name}`}>{anoxicMixer4.machine_name}</label>
                  <select
                    id={`status-${anoxicMixer4.machine_name}`}
                    className={styles.input}
                    value={anoxicMixer4.status}
                    onChange={(e) => {
                      const newStatuses = [...anoxicMixer4Statuses];
                      newStatuses[index] = { ...anoxicMixer4, status: e.target.value};
                      setAnoxicMixer4Statuses(newStatuses);
                    }}
                    disabled={isAnoxicMixer4DataSent}
                  >
                    <option value="" disabled>Select Status</option>
                    <option value="R">R</option>
                    <option value="N">N</option>
                    <option value="E">E</option>
                    <option value="F">F</option>
                  </select>
                  <input
                    type="text"
                    value={anoxicMixer4.A1}
                    onChange={(e) => {
                      const newStatuses = [...anoxicMixer4Statuses];
                      newStatuses[index].A1 = e.target.value;
                      setAnoxicMixer4Statuses(newStatuses);
                    }}
                    className={styles.input}
                    placeholder="A1"
                  />
                  <input
                    type="text"
                    value={anoxicMixer4.A2}
                    onChange={(e) => {
                      const newStatuses = [...anoxicMixer4Statuses];
                      newStatuses[index].A2 = e.target.value;
                      setAnoxicMixer4Statuses(newStatuses);
                    }}
                    className={styles.input}
                    placeholder="A2"
                  />
                  <input
                    type="text"
                    value={anoxicMixer4.A3}
                    onChange={(e) => {
                      const newStatuses = [...anoxicMixer4Statuses];
                      newStatuses[index].A3 = e.target.value;
                      setAnoxicMixer4Statuses(newStatuses);
                    }}
                    className={styles.input}
                    placeholder="A3"
                  />
                  <input
                    type="text"
                    value={anoxicMixer4.T}
                    onChange={(e) => {
                      const newStatuses = [...anoxicMixer4Statuses];
                      newStatuses[index].T = e.target.value;
                      setAnoxicMixer4Statuses(newStatuses);
                    }}
                    className={styles.input}
                    placeholder="T"
                  />
                  <input
                    type="text"
                    value={anoxicMixer4.note}
                    onChange={(e) => {
                      const newStatuses = [...anoxicMixer4Statuses];
                      newStatuses[index].note = e.target.value;
                      setAnoxicMixer4Statuses(newStatuses);
                    }}
                    className={styles.input}
                    placeholder="Note"
                  />
                </div>
              ))}
              <button type="button" className={styles.button} onClick={handleSubmitAnoxicMixer4} disabled={isAnoxicMixer4DataSent}>Submit Anoxic Mixer 4 Data</button>
              {isAnoxicMixer4DataSent && <div className={styles.alert}>Anoxic Mixer 4 data sent successfully</div>}

              {/* Single Air Blower field */}
              <h3>Single Air Blower Table</h3>
              {singleAirBlowerStatuses.map((singleAirBlower, index) => (
                <div key={index} className={styles.fieldGroup}>
                  <label className={styles.label} htmlFor={`status-${singleAirBlower.machine_name}`}>{singleAirBlower.machine_name}</label>
                  <select
                    id={`status-${singleAirBlower.machine_name}`}
                    className={styles.input}
                    value={singleAirBlower.status}
                    onChange={(e) => {
                      const newStatuses = [...singleAirBlowerStatuses];
                      newStatuses[index] = { ...singleAirBlower, status: e.target.value};
                      setSingleAirBlowerStatuses(newStatuses);
                    }}
                    disabled={isSingleAirBlowerDataSent}
                  >
                    <option value="" disabled>Select Status</option>
                    <option value="R">R</option>
                    <option value="N">N</option>
                    <option value="E">E</option>
                    <option value="F">F</option>
                  </select>
                  <input
                    type="text"
                    value={singleAirBlower.A1}
                    onChange={(e) => {
                      const newStatuses = [...singleAirBlowerStatuses];
                      newStatuses[index].A1 = e.target.value;
                      setSingleAirBlowerStatuses(newStatuses);
                    }}
                    className={styles.input}
                    placeholder="A1"
                  />
                  <input
                    type="text"
                    value={singleAirBlower.A2}
                    onChange={(e) => {
                      const newStatuses = [...singleAirBlowerStatuses];
                      newStatuses[index].A2 = e.target.value;
                      setSingleAirBlowerStatuses(newStatuses);
                    }}
                    className={styles.input}
                    placeholder="A2"
                  />
                  <input
                    type="text"
                    value={singleAirBlower.A3}
                    onChange={(e) => {
                      const newStatuses = [...singleAirBlowerStatuses];
                      newStatuses[index].A3 = e.target.value;
                      setSingleAirBlowerStatuses(newStatuses);
                    }}
                    className={styles.input}
                    placeholder="A3"
                  />
                  <input
                    type="text"
                    value={singleAirBlower.T}
                    onChange={(e) => {
                      const newStatuses = [...singleAirBlowerStatuses];
                      newStatuses[index].T = e.target.value;
                      setSingleAirBlowerStatuses(newStatuses);
                    }}
                    className={styles.input}
                    placeholder="T"
                  />
                  <input
                    type="text"
                    value={singleAirBlower.note}
                    onChange={(e) => {
                      const newStatuses = [...singleAirBlowerStatuses];
                      newStatuses[index].note = e.target.value;
                      setSingleAirBlowerStatuses(newStatuses);
                    }}
                    className={styles.input}
                    placeholder="Note"
                  />
                </div>
              ))}
              <button type="button" className={styles.button} onClick={handleSubmitSingleAirBlower} disabled={isSingleAirBlowerDataSent}>Submit Single Air Blower Data</button>
              {isSingleAirBlowerDataSent && <div className={styles.alert}>Single Air Blower data sent successfully</div>}

              {/* Positive Air Blower field */}
              <h3>Positive Air Blower Table</h3>
              {positiveAirBlowerStatuses.map((positiveAirBlower, index) => (
                <div key={index} className={styles.fieldGroup}>
                  <label className={styles.label} htmlFor={`status-${positiveAirBlower.machine_name}`}>{positiveAirBlower.machine_name}</label>
                  <select
                    id={`status-${positiveAirBlower.machine_name}`}
                    className={styles.input}
                    value={positiveAirBlower.status}
                    onChange={(e) => {
                      const newStatuses = [...positiveAirBlowerStatuses];
                      newStatuses[index] = { ...positiveAirBlower, status: e.target.value};
                      setPositiveAirBlowerStatuses(newStatuses);
                    }}
                    disabled={isPositiveAirBlowerDataSent}
                  >
                    <option value="" disabled>Select Status</option>
                    <option value="R">R</option>
                    <option value="N">N</option>
                    <option value="E">E</option>
                    <option value="F">F</option>
                  </select>
                  <input
                    type="text"
                    value={positiveAirBlower.A1}
                    onChange={(e) => {
                      const newStatuses = [...positiveAirBlowerStatuses];
                      newStatuses[index].A1 = e.target.value;
                      setPositiveAirBlowerStatuses(newStatuses);
                    }}
                    className={styles.input}
                    placeholder="A1"
                  />
                  <input
                    type="text"
                    value={positiveAirBlower.A2}
                    onChange={(e) => {
                      const newStatuses = [...positiveAirBlowerStatuses];
                      newStatuses[index].A2 = e.target.value;
                      setPositiveAirBlowerStatuses(newStatuses);
                    }}
                    className={styles.input}
                    placeholder="A2"
                  />
                  <input      type="text"
                    value={positiveAirBlower.A3}
                    onChange={(e) => {
                      const newStatuses = [...positiveAirBlowerStatuses];
                      newStatuses[index].A3 = e.target.value;
                      setPositiveAirBlowerStatuses(newStatuses);
                    }}
                    className={styles.input}
                    placeholder="A3"
                  />
                  <input
                    type="text"
                    value={positiveAirBlower.T}
                    onChange={(e) => {
                      const newStatuses = [...positiveAirBlowerStatuses];
                      newStatuses[index].T = e.target.value;
                      setPositiveAirBlowerStatuses(newStatuses);
                    }}
                    className={styles.input}
                    placeholder="T"
                  />
                  <input
                    type="text"
                    value={positiveAirBlower.note}
                    onChange={(e) => {
                      const newStatuses = [...positiveAirBlowerStatuses];
                      newStatuses[index].note = e.target.value;
                      setPositiveAirBlowerStatuses(newStatuses);
                    }}
                    className={styles.input}
                    placeholder="Note"
                  />
                </div>
              ))}
              <button type="button" className={styles.button} onClick={handleSubmitPositiveAirBlower} disabled={isPositiveAirBlowerDataSent}>Submit Positive Air Blower Data</button>
              {isPositiveAirBlowerDataSent && <div className={styles.alert}>Positive Air Blower data sent successfully</div>}



            </>
          )}
          <button type="button" className={styles.button} style={{backgroundColor: 'green'}} onClick={handleSaveSection4}>
                {showSections4 ? 'Hide Section 4' : 'Show Section 4'}
          </button>


          {showSections5 && (
            <>

            {/* Clarifier field */}
            <h3>Clarifier Table</h3>
            {clarifier1Statuses.map((clarifier1, index) => (
              <div key={index} className={styles.fieldGroup}>
                <label className={styles.label} htmlFor={`status-${clarifier1.machine_name}`}>{clarifier1.machine_name}</label>
                <select
                  id={`status-${clarifier1.machine_name}`}
                  className={styles.input}
                  value={clarifier1.status}
                  onChange={(e) => {
                    const newStatuses = [...clarifier1Statuses];
                    newStatuses[index] = { ...clarifier1, status: e.target.value };
                    setClarifier1Statuses(newStatuses);
                  }}
                  disabled={isClarifier1DataSent}
                >
                  <option value="" disabled>Select Status</option>
                  <option value="R">R</option>
                  <option value="N">N</option>
                  <option value="E">E</option>
                  <option value="F">F</option>
                </select>
                <input
                  type="text"
                  value={clarifier1.A_motor1}
                  onChange={(e) => {
                    const newStatuses = [...clarifier1Statuses];
                    newStatuses[index].A_motor1 = e.target.value;
                    setClarifier1Statuses(newStatuses);
                  }}
                  className={styles.input}
                  placeholder="A_motor1"
                />
                <input
                  type="text"
                  value={clarifier1.A_motor2}
                  onChange={(e) => {
                    const newStatuses = [...clarifier1Statuses];
                    newStatuses[index].A_motor2 = e.target.value;
                    setClarifier1Statuses(newStatuses);
                  }}
                  className={styles.input}
                  placeholder="A_motor2"
                />
                <input
                  type="text"
                  value={clarifier1.A_scum}
                  onChange={(e) => {
                    const newStatuses = [...clarifier1Statuses];
                    newStatuses[index].A_scum = e.target.value;
                    setClarifier1Statuses(newStatuses);
                  }}
                  className={styles.input}
                  placeholder="A_scum"
                />
                <input
                  type="text"
                  value={clarifier1.A_pump}
                  onChange={(e) => {
                    const newStatuses = [...clarifier1Statuses];
                    newStatuses[index].A_pump = e.target.value;
                    setClarifier1Statuses(newStatuses);
                  }}
                  className={styles.input}
                  placeholder="A_pump"
                />
                <input
                  type="text"
                  value={clarifier1.T_motor}
                  onChange={(e) => {
                    const newStatuses = [...clarifier1Statuses];
                    newStatuses[index].T_motor = e.target.value;
                    setClarifier1Statuses(newStatuses);
                  }}
                  className={styles.input}
                  placeholder="T_motor"
                />
                <input
                  type="text"
                  value={clarifier1.T_scum}
                  onChange={(e) => {
                    const newStatuses = [...clarifier1Statuses];
                    newStatuses[index].T_scum = e.target.value;
                    setClarifier1Statuses(newStatuses);
                  }}
                  className={styles.input}
                  placeholder="T_scum"
                />
                <input
                  type="text"
                  value={clarifier1.T_pump}
                  onChange={(e) => {
                    const newStatuses = [...clarifier1Statuses];
                    newStatuses[index].T_pump = e.target.value;
                    setClarifier1Statuses(newStatuses);
                  }}
                  className={styles.input}
                  placeholder="T_pump"
                />
                <input
                  type="text"
                  value={clarifier1.note}
                  onChange={(e) => {
                    const newStatuses = [...clarifier1Statuses];
                    newStatuses[index].note = e.target.value;
                    setClarifier1Statuses(newStatuses);
                  }}
                  className={styles.input}
                  placeholder="Note"
                />
              </div>
            ))}
            <button type="button" className={styles.button} onClick={handleSubmitClarifier} disabled={isClarifier1DataSent}>Submit Clarifier Data</button>
            {isClarifier1DataSent && <div className={styles.alert}>Clarifier data sent successfully</div>}
            
            {/* Clarifier2 field */}
            <h3>Clarifier2 Table</h3>
            {clarifier2Statuses.map((clarifier2, index) => (
              <div key={index} className={styles.fieldGroup}>
                <label className={styles.label} htmlFor={`status-${clarifier2.machine_name}`}>{clarifier2.machine_name}</label>
                <select
                  id={`status-${clarifier2.machine_name}`}
                  className={styles.input}
                  value={clarifier2.status}
                  onChange={(e) => {
                    const newStatuses = [...clarifier2Statuses];
                    newStatuses[index] = { ...clarifier2, status: e.target.value };
                    setClarifier2Statuses(newStatuses);
                  }}
                  disabled={isClarifier2DataSent}
                >
                  <option value="" disabled>Select Status</option>
                  <option value="R">R</option>
                  <option value="N">N</option>
                  <option value="E">E</option>
                  <option value="F">F</option>
                </select>
                <input
                  type="text"
                  value={clarifier2.A_motor1}
                  onChange={(e) => {
                    const newStatuses = [...clarifier2Statuses];
                    newStatuses[index].A_motor1 = e.target.value;
                    setClarifier2Statuses(newStatuses);
                  }}
                  className={styles.input}
                  placeholder="A_motor1"
                />
                <input
                  type="text"
                  value={clarifier2.A_motor2}
                  onChange={(e) => {
                    const newStatuses = [...clarifier2Statuses];
                    newStatuses[index].A_motor2 = e.target.value;
                    setClarifier2Statuses(newStatuses);
                  }}
                  className={styles.input}
                  placeholder="A_motor2"
                />
                <input
                  type="text"
                  value={clarifier2.A_scum}
                  onChange={(e) => {
                    const newStatuses = [...clarifier2Statuses];
                    newStatuses[index].A_scum = e.target.value;
                    setClarifier2Statuses(newStatuses);
                  }}
                  className={styles.input}
                  placeholder="A_scum"
                />
                <input
                  type="text"
                  value={clarifier2.A_pump}
                  onChange={(e) => {
                    const newStatuses = [...clarifier2Statuses];
                    newStatuses[index].A_pump = e.target.value;
                    setClarifier2Statuses(newStatuses);
                  }}
                  className={styles.input}
                  placeholder="A_pump"
                />
                <input
                  type="text"
                  value={clarifier2.T_motor}
                  onChange={(e) => {
                    const newStatuses = [...clarifier2Statuses];
                    newStatuses[index].T_motor = e.target.value;
                    setClarifier2Statuses(newStatuses);
                  }}
                  className={styles.input}
                  placeholder="T_motor"
                />
                <input
                  type="text"
                  value={clarifier2.T_scum}
                  onChange={(e) => {
                    const newStatuses = [...clarifier2Statuses];
                    newStatuses[index].T_scum = e.target.value;
                    setClarifier2Statuses(newStatuses);
                  }}
                  className={styles.input}
                  placeholder="T_scum"
                />
                <input
                  type="text"
                  value={clarifier2.T_pump}
                  onChange={(e) => {
                    const newStatuses = [...clarifier2Statuses];
                    newStatuses[index].T_pump = e.target.value;
                    setClarifier2Statuses(newStatuses);
                  }}
                  className={styles.input}
                  placeholder="T_pump"
                />
                <input
                  type="text"
                  value={clarifier2.note}
                  onChange={(e) => {
                    const newStatuses = [...clarifier2Statuses];
                    newStatuses[index].note = e.target.value;
                    setClarifier2Statuses(newStatuses);
                  }}
                  className={styles.input}
                  placeholder="Note"
                />
              </div>
            ))}
            <button type="button" className={styles.button} onClick={handleSubmitClarifier2} disabled={isClarifier2DataSent}>Submit Clarifier2 Data</button>
            {isClarifier2DataSent && <div className={styles.alert}>Clarifier2 data sent successfully</div>}

            {/* Clarifier2 field */}
            <h3>Clarifier2 Table</h3>
            {clarifier2Statuses.map((clarifier2, index) => (
              <div key={index} className={styles.fieldGroup}>
                <label className={styles.label} htmlFor={`status-${clarifier2.machine_name}`}>{clarifier2.machine_name}</label>
                <select
                  id={`status-${clarifier2.machine_name}`}
                  className={styles.input}
                  value={clarifier2.status}
                  onChange={(e) => {
                    const newStatuses = [...clarifier2Statuses];
                    newStatuses[index] = { ...clarifier2, status: e.target.value };
                    setClarifier2Statuses(newStatuses);
                  }}
                  disabled={isClarifier2DataSent}
                >
                  <option value="" disabled>Select Status</option>
                  <option value="R">R</option>
                  <option value="N">N</option>
                  <option value="E">E</option>
                  <option value="F">F</option>
                </select>
                <input
                  type="text"
                  value={clarifier2.A_motor1}
                  onChange={(e) => {
                    const newStatuses = [...clarifier2Statuses];
                    newStatuses[index].A_motor1 = e.target.value;
                    setClarifier2Statuses(newStatuses);
                  }}
                  className={styles.input}
                  placeholder="A_motor1"
                />
                <input
                  type="text"
                  value={clarifier2.A_motor2}
                  onChange={(e) => {
                    const newStatuses = [...clarifier2Statuses];
                    newStatuses[index].A_motor2 = e.target.value;
                    setClarifier2Statuses(newStatuses);
                  }}
                  className={styles.input}
                  placeholder="A_motor2"
                />
                <input
                  type="text"
                  value={clarifier2.A_scum}
                  onChange={(e) => {
                    const newStatuses = [...clarifier2Statuses];
                    newStatuses[index].A_scum = e.target.value;
                    setClarifier2Statuses(newStatuses);
                  }}
                  className={styles.input}
                  placeholder="A_scum"
                />
                <input
                  type="text"
                  value={clarifier2.A_pump}
                  onChange={(e) => {
                    const newStatuses = [...clarifier2Statuses];
                    newStatuses[index].A_pump = e.target.value;
                    setClarifier2Statuses(newStatuses);
                  }}
                  className={styles.input}
                  placeholder="A_pump"
                />
                <input
                  type="text"
                  value={clarifier2.T_motor}
                  onChange={(e) => {
                    const newStatuses = [...clarifier2Statuses];
                    newStatuses[index].T_motor = e.target.value;
                    setClarifier2Statuses(newStatuses);
                  }}
                  className={styles.input}
                  placeholder="T_motor"
                />
                <input
                  type="text"
                  value={clarifier2.T_scum}
                  onChange={(e) => {
                    const newStatuses = [...clarifier2Statuses];
                    newStatuses[index].T_scum = e.target.value;
                    setClarifier2Statuses(newStatuses);
                  }}
                  className={styles.input}
                  placeholder="T_scum"
                />
                <input
                  type="text"
                  value={clarifier2.T_pump}
                  onChange={(e) => {
                    const newStatuses = [...clarifier2Statuses];
                    newStatuses[index].T_pump = e.target.value;
                    setClarifier2Statuses(newStatuses);
                  }}
                  className={styles.input}
                  placeholder="T_pump"
                />
                <input
                  type="text"
                  value={clarifier2.note}
                  onChange={(e) => {
                    const newStatuses = [...clarifier2Statuses];
                    newStatuses[index].note = e.target.value;
                    setClarifier2Statuses(newStatuses);
                  }}
                  className={styles.input}
                  placeholder="Note"
                />
              </div>
            ))}
            <button type="button" className={styles.button} onClick={handleSubmitClarifier2} disabled={isClarifier2DataSent}>Submit Clarifier2 Data</button>
            {isClarifier2DataSent && <div className={styles.alert}>Clarifier2 data sent successfully</div>}

            {/* Clarifier3 field */}
            <h3>Clarifier3 Table</h3>
            {clarifier3Statuses.map((clarifier3, index) => (
              <div key={index} className={styles.fieldGroup}>
                <label className={styles.label} htmlFor={`status-${clarifier3.machine_name}`}>{clarifier3.machine_name}</label>
                <select
                  id={`status-${clarifier3.machine_name}`}
                  className={styles.input}
                  value={clarifier3.status}
                  onChange={(e) => {
                    const newStatuses = [...clarifier3Statuses];
                    newStatuses[index] = { ...clarifier3, status: e.target.value };
                    setClarifier3Statuses(newStatuses);
                  }}
                  disabled={isClarifier3DataSent}
                >
                  <option value="" disabled>Select Status</option>
                  <option value="R">R</option>
                  <option value="N">N</option>
                  <option value="E">E</option>
                  <option value="F">F</option>
                </select>
                <input
                  type="text"
                  value={clarifier3.A_motor1}
                  onChange={(e) => {
                    const newStatuses = [...clarifier3Statuses];
                    newStatuses[index].A_motor1 = e.target.value;
                    setClarifier3Statuses(newStatuses);
                  }}
                  className={styles.input}
                  placeholder="A_motor1"
                />
                <input
                  type="text"
                  value={clarifier3.A_motor2}
                  onChange={(e) => {
                    const newStatuses = [...clarifier3Statuses];
                    newStatuses[index].A_motor2 = e.target.value;
                    setClarifier3Statuses(newStatuses);
                  }}
                  className={styles.input}
                  placeholder="A_motor2"
                />
                <input
                  type="text"
                  value={clarifier3.A_scum}
                  onChange={(e) => {
                    const newStatuses = [...clarifier3Statuses];
                    newStatuses[index].A_scum = e.target.value;
                    setClarifier3Statuses(newStatuses);
                  }}
                  className={styles.input}
                  placeholder="A_scum"
                />
                <input
                  type="text"
                  value={clarifier3.A_pump}
                  onChange={(e) => {
                    const newStatuses = [...clarifier3Statuses];
                    newStatuses[index].A_pump = e.target.value;
                    setClarifier3Statuses(newStatuses);
                  }}
                  className={styles.input}
                  placeholder="A_pump"
                />
                <input
                  type="text"
                  value={clarifier3.T_motor}
                  onChange={(e) => {
                    const newStatuses = [...clarifier3Statuses];
                    newStatuses[index].T_motor = e.target.value;
                    setClarifier3Statuses(newStatuses);
                  }}
                  className={styles.input}
                  placeholder="T_motor"
                />
                <input
                  type="text"
                  value={clarifier3.T_scum}
                  onChange={(e) => {
                    const newStatuses = [...clarifier3Statuses];
                    newStatuses[index].T_scum = e.target.value;
                    setClarifier3Statuses(newStatuses);
                  }}
                  className={styles.input}
                  placeholder="T_scum"
                />
                <input
                  type="text"
                  value={clarifier3.T_pump}
                  onChange={(e) => {
                    const newStatuses = [...clarifier3Statuses];
                    newStatuses[index].T_pump = e.target.value;
                    setClarifier3Statuses(newStatuses);
                  }}
                  className={styles.input}
                  placeholder="T_pump"
                />
                <input
                  type="text"
                  value={clarifier3.note}
                  onChange={(e) => {
                    const newStatuses = [...clarifier3Statuses];
                    newStatuses[index].note = e.target.value;
                    setClarifier3Statuses(newStatuses);
                  }}
                  className={styles.input}
                  placeholder="Note"
                />
              </div>
            ))}
            <button type="button" className={styles.button} onClick={handleSubmitClarifier3} disabled={isClarifier3DataSent}>Submit Clarifier3 Data</button>
            {isClarifier3DataSent && <div className={styles.alert}>Clarifier3 data sent successfully</div>}
            
            {/* Clarifier4 field */}
            <h3>Clarifier4 Table</h3>
            {clarifier4Statuses.map((clarifier4, index) => (
              <div key={index} className={styles.fieldGroup}>
                <label className={styles.label} htmlFor={`status-${clarifier4.machine_name}`}>{clarifier4.machine_name}</label>
                <select
                  id={`status-${clarifier4.machine_name}`}
                  className={styles.input}
                  value={clarifier4.status}
                  onChange={(e) => {
                    const newStatuses = [...clarifier4Statuses];
                    newStatuses[index] = { ...clarifier4, status: e.target.value };
                    setClarifier4Statuses(newStatuses);
                  }}
                  disabled={isClarifier4DataSent}
                >
                  <option value="" disabled>Select Status</option>
                  <option value="R">R</option>
                  <option value="N">N</option>
                  <option value="E">E</option>
                  <option value="F">F</option>
                </select>
                <input
                  type="text"
                  value={clarifier4.A_motor1}
                  onChange={(e) => {
                    const newStatuses = [...clarifier4Statuses];
                    newStatuses[index].A_motor1 = e.target.value;
                    setClarifier4Statuses(newStatuses);
                  }}
                  className={styles.input}
                  placeholder="A_motor1"
                />
                <input
                  type="text"
                  value={clarifier4.A_motor2}
                  onChange={(e) => {
                    const newStatuses = [...clarifier4Statuses];
                    newStatuses[index].A_motor2 = e.target.value;
                    setClarifier4Statuses(newStatuses);
                  }}
                  className={styles.input}
                  placeholder="A_motor2"
                />
                <input
                  type="text"
                  value={clarifier4.A_scum}
                  onChange={(e) => {
                    const newStatuses = [...clarifier4Statuses];
                    newStatuses[index].A_scum = e.target.value;
                    setClarifier4Statuses(newStatuses);
                  }}
                  className={styles.input}
                  placeholder="A_scum"
                />
                <input
                  type="text"
                  value={clarifier4.A_pump}
                  onChange={(e) => {
                    const newStatuses = [...clarifier4Statuses];
                    newStatuses[index].A_pump = e.target.value;
                    setClarifier4Statuses(newStatuses);
                  }}
                  className={styles.input}
                  placeholder="A_pump"
                />
                <input
                  type="text"
                  value={clarifier4.T_motor}
                  onChange={(e) => {
                    const newStatuses = [...clarifier4Statuses];
                    newStatuses[index].T_motor = e.target.value;
                    setClarifier4Statuses(newStatuses);
                  }}
                  className={styles.input}
                  placeholder="T_motor"
                />
                <input
                  type="text"
                  value={clarifier4.T_scum}
                  onChange={(e) => {
                    const newStatuses = [...clarifier4Statuses];
                    newStatuses[index].T_scum = e.target.value;
                    setClarifier4Statuses(newStatuses);
                  }}
                  className={styles.input}
                  placeholder="T_scum"
                />
                <input
                  type="text"
                  value={clarifier4.T_pump}
                  onChange={(e) => {
                    const newStatuses = [...clarifier4Statuses];
                    newStatuses[index].T_pump = e.target.value;
                    setClarifier4Statuses(newStatuses);
                  }}
                  className={styles.input}
                  placeholder="T_pump"
                />
                <input
                  type="text"
                  value={clarifier4.note}
                  onChange={(e) => {
                    const newStatuses = [...clarifier4Statuses];
                    newStatuses[index].note = e.target.value;
                    setClarifier4Statuses(newStatuses);
                  }}
                  className={styles.input}
                  placeholder="Note"
                />
              </div>
            ))}
            <button type="button" className={styles.button} onClick={handleSubmitClarifier4} disabled={isClarifier4DataSent}>Submit Clarifier4 Data</button>
            {isClarifier4DataSent && <div className={styles.alert}>Clarifier4 data sent successfully</div>}

            {/* AutoSampler2 field */}
            <h3>AutoSampler2 Table</h3>
            {autoSampler2Statuses.map((autoSampler2, index) => (
              <div key={index} className={styles.fieldGroup}>
                <label className={styles.label} htmlFor={`status-${autoSampler2.machine_name}`}>{autoSampler2.machine_name}</label>
                <select
                  id={`status-${autoSampler2.machine_name}`}
                  className={styles.input}
                  value={autoSampler2.status}
                  onChange={(e) => {
                    const newStatuses = [...autoSampler2Statuses];
                    newStatuses[index] = { ...autoSampler2, status: e.target.value };
                    setAutoSampler2Statuses(newStatuses);
                  }}
                  disabled={isAutoSampler2DataSent}
                >
                  <option value="" disabled>Select Status</option>
                  <option value="R">R</option>
                  <option value="N">N</option>
                  <option value="E">E</option>
                  <option value="F">F</option>
                </select>
                <input
                  type="text"
                  value={autoSampler2.T}
                  onChange={(e) => {
                    const newStatuses = [...autoSampler2Statuses];
                    newStatuses[index].T = e.target.value;
                    setAutoSampler2Statuses(newStatuses);
                  }}
                  className={styles.input}
                  placeholder="T"
                />
                <input
                  type="text"
                  value={autoSampler2.note}
                  onChange={(e) => {
                    const newStatuses = [...autoSampler2Statuses];
                    newStatuses[index].note = e.target.value;
                    setAutoSampler2Statuses(newStatuses);
                  }}
                  className={styles.input}
                  placeholder="Note"
                />
              </div>
            ))}
            <button type="button" className={styles.button} onClick={handleSubmitAutoSampler2} disabled={isAutoSampler2DataSent}>Submit AutoSampler2 Data</button>
            {isAutoSampler2DataSent && <div className={styles.alert}>AutoSampler2 data sent successfully</div>}


            </>
        )}

          <button type="button" className={styles.button} style={{backgroundColor: 'green'}} onClick={handleSaveSection5}>
                {showSections5 ? 'Hide Section 5' : 'Show Section 5'}
          </button>


          {showSections6 && (
            <>
            {/* Fan5 field */}
            <h3>Ventilation Fan Room 5 Table</h3>
            {fan5Statuses.map((fan5, index) => (
                <div key={index} className={styles.fieldGroup}>
                    <label className={styles.label} htmlFor={`fan5${index + 1}Status`}>{fan5.machine_name}</label>
                    <select
                        id={`fan5${index + 1}Status`}
                        className={styles.input}
                        value={fan5.status}
                        onChange={(e) => {
                            const newStatuses = [...fan5Statuses];
                            newStatuses[index] = { ...fan5, status: e.target.value };
                            setFan5Statuses(newStatuses);
                        }}
                        disabled={isVentilationFan5DataSent}
                    >
                        <option value="" disabled>Select Status</option>
                        <option value="R">R</option>
                        <option value="N">N</option>
                        <option value="E">E</option>
                        <option value="F">F</option>
                    </select>
                    <input
                        type="text"
                        value={fan5.note}
                        onChange={(e) => {
                            const newStatuses = [...fan5Statuses];
                            newStatuses[index].note = e.target.value;
                            setFan5Statuses(newStatuses);
                        }}
                        className={styles.input}
                        placeholder="Note"
                    />
                </div>
            ))}
            <button type="button" className={styles.button} onClick={handleSubmitFan5} disabled={isVentilationFan5DataSent}>Submit Ventilation Fan Room 5 Data</button>
            {isVentilationFan5DataSent && <div className={styles.alert}>Ventilation Fan Room 5 data sent successfully</div>}

            {/* Fan5_2 field */}
            
            {fan5_2Statuses.map((fan5_2, index) => (
                <div key={index} className={styles.fieldGroup}>
                    <label className={styles.label} htmlFor={`fan5_2${index + 1}Status`}>{fan5_2.machine_name}</label>
                    <select
                        id={`fan5_2${index + 1}Status`}
                        className={styles.input}
                        value={fan5_2.status}
                        onChange={(e) => {
                            const newStatuses = [...fan5_2Statuses];
                            newStatuses[index] = { ...fan5_2, status: e.target.value };
                            setFan5_2Statuses(newStatuses);
                        }}
                        disabled={isVentilationFan5_2DataSent}
                    >
                        <option value="" disabled>Select Status</option>
                        <option value="R">R</option>
                        <option value="N">N</option>
                        <option value="E">E</option>
                        <option value="F">F</option>
                    </select>
                    <input
                        type="text"
                        value={fan5_2.note}
                        onChange={(e) => {
                            const newStatuses = [...fan5_2Statuses];
                            newStatuses[index].note = e.target.value;
                            setFan5_2Statuses(newStatuses);
                        }}
                        className={styles.input}
                        placeholder="Note"
                    />
                </div>
            ))}
            <button type="button" className={styles.button} onClick={handleSubmitFan5_2} disabled={isVentilationFan5_2DataSent}>Submit Ventilation Fan Room 5_2 Data</button>
            {isVentilationFan5_2DataSent && <div className={styles.alert}>Ventilation Fan Room 5_2 data sent successfully</div>}
            
            {/* Fan5_3 field */}

            {fan5_3Statuses.map((fan5_3, index) => (
                <div key={index} className={styles.fieldGroup}>
                    <label className={styles.label} htmlFor={`fan5_3${index + 1}Status`}>{fan5_3.machine_name}</label>
                    <select
                        id={`fan5_3${index + 1}Status`}
                        className={styles.input}
                        value={fan5_3.status}
                        onChange={(e) => {
                            const newStatuses = [...fan5_3Statuses];
                            newStatuses[index] = { ...fan5_3, status: e.target.value };
                            setFan5_3Statuses(newStatuses);
                        }}
                        disabled={isVentilationFan5_3DataSent}
                    >
                        <option value="" disabled>Select Status</option>
                        <option value="R">R</option>
                        <option value="N">N</option>
                        <option value="E">E</option>
                        <option value="F">F</option>
                    </select>
                    <input
                        type="text"
                        value={fan5_3.note}
                        onChange={(e) => {
                            const newStatuses = [...fan5_3Statuses];
                            newStatuses[index].note = e.target.value;
                            setFan5_3Statuses(newStatuses);
                        }}
                        className={styles.input}
                        placeholder="Note"
                    />
                </div>
            ))}
            <button type="button" className={styles.button} onClick={handleSubmitFan5_3} disabled={isVentilationFan5_3DataSent}>Submit Ventilation Fan Room 5_3 Data</button>
            {isVentilationFan5_3DataSent && <div className={styles.alert}>Ventilation Fan Room 5_3 data sent successfully</div>}

            {/* Fan5_4 field */}

            {fan5_4Statuses.map((fan5_4, index) => (
                <div key={index} className={styles.fieldGroup}>
                    <label className={styles.label} htmlFor={`fan5_4${index + 1}Status`}>{fan5_4.machine_name}</label>
                    <select
                        id={`fan5_4${index + 1}Status`}
                        className={styles.input}
                        value={fan5_4.status}
                        onChange={(e) => {
                            const newStatuses = [...fan5_4Statuses];
                            newStatuses[index] = { ...fan5_4, status: e.target.value };
                            setFan5_4Statuses(newStatuses);
                        }}
                        disabled={isVentilationFan5_4DataSent}
                    >
                        <option value="" disabled>Select Status</option>
                        <option value="R">R</option>
                        <option value="N">N</option>
                        <option value="E">E</option>
                        <option value="F">F</option>
                    </select>
                    <input
                        type="text"
                        value={fan5_4.note}
                        onChange={(e) => {
                            const newStatuses = [...fan5_4Statuses];
                            newStatuses[index].note = e.target.value;
                            setFan5_4Statuses(newStatuses);
                        }}
                        className={styles.input}
                        placeholder="Note"
                    />
                </div>
            ))}
            <button type="button" className={styles.button} onClick={handleSubmitFan5_4} disabled={isVentilationFan5_4DataSent}>Submit Ventilation Fan Room 5_4 Data</button>
            {isVentilationFan5_4DataSent && <div className={styles.alert}>Ventilation Fan Room 5_4 data sent successfully</div>}
            
            {/* Fan5_5 field */}
            <h3>Ventilation Fan Room 5_5 Table</h3>
            {fan5_5Statuses.map((fan5_5, index) => (
                <div key={index} className={styles.fieldGroup}>
                    <label className={styles.label} htmlFor={`fan5_5${index + 1}Status`}>{fan5_5.machine_name}</label>
                    <select
                        id={`fan5_5${index + 1}Status`}
                        className={styles.input}
                        value={fan5_5.status}
                        onChange={(e) => {
                            const newStatuses = [...fan5_5Statuses];
                            newStatuses[index] = { ...fan5_5, status: e.target.value };
                            setFan5_5Statuses(newStatuses);
                        }}
                        disabled={isVentilationFan5_5DataSent}
                    >
                        <option value="" disabled>Select Status</option>
                        <option value="R">R</option>
                        <option value="N">N</option>
                        <option value="E">E</option>
                        <option value="F">F</option>
                    </select>
                    <input
                        type="text"
                        value={fan5_5.note}
                        onChange={(e) => {
                            const newStatuses = [...fan5_5Statuses];
                            newStatuses[index].note = e.target.value;
                            setFan5_5Statuses(newStatuses);
                        }}
                        className={styles.input}
                        placeholder="Note"
                    />
                </div>
            ))}
            <button type="button" className={styles.button} onClick={handleSubmitFan5_5} disabled={isVentilationFan5_5DataSent}>Submit Ventilation Fan Room 5_5 Data</button>
            {isVentilationFan5_5DataSent && <div className={styles.alert}>Ventilation Fan Room 5_5 data sent successfully</div>}
            
            {/* Fan5_6 field */}
            {fan5_6Statuses.map((fan5_6, index) => (
                <div key={index} className={styles.fieldGroup}>
                    <label className={styles.label} htmlFor={`fan5_6${index + 1}Status`}>{fan5_6.machine_name}</label>
                    <select
                        id={`fan5_6${index + 1}Status`}
                        className={styles.input}
                        value={fan5_6.status}
                        onChange={(e) => {
                            const newStatuses = [...fan5_6Statuses];
                            newStatuses[index] = { ...fan5_6, status: e.target.value };
                            setFan5_6Statuses(newStatuses);
                        }}
                        disabled={isVentilationFan5_6DataSent}
                    >
                        <option value="" disabled>Select Status</option>
                        <option value="R">R</option>
                        <option value="N">N</option>
                        <option value="E">E</option>
                        <option value="F">F</option>
                    </select>
                    <input
                        type="text"
                        value={fan5_6.note}
                        onChange={(e) => {
                            const newStatuses = [...fan5_6Statuses];
                            newStatuses[index].note = e.target.value;
                            setFan5_6Statuses(newStatuses);
                        }}
                        className={styles.input}
                        placeholder="Note"
                    />
                </div>
            ))}
            <button type="button" className={styles.button} onClick={handleSubmitFan5_6} disabled={isVentilationFan5_6DataSent}>Submit Ventilation Fan Room 5_6 Data</button>
            {isVentilationFan5_6DataSent && <div className={styles.alert}>Ventilation Fan Room 5_6 data sent successfully</div>}
            
            {/* Fan5_7 field */}
            {fan5_7Statuses.map((fan5_7, index) => (
                <div key={index} className={styles.fieldGroup}>
                    <label className={styles.label} htmlFor={`fan5_7${index + 1}Status`}>{fan5_7.machine_name}</label>
                    <select
                        id={`fan5_7${index + 1}Status`}
                        className={styles.input}
                        value={fan5_7.status}
                        onChange={(e) => {
                            const newStatuses = [...fan5_7Statuses];
                            newStatuses[index] = { ...fan5_7, status: e.target.value };
                            setFan5_7Statuses(newStatuses);
                        }}
                        disabled={isVentilationFan5_7DataSent}
                    >
                        <option value="" disabled>Select Status</option>
                        <option value="R">R</option>
                        <option value="N">N</option>
                        <option value="E">E</option>
                        <option value="F">F</option>
                    </select>
                    <input
                        type="text"
                        value={fan5_7.note}
                        onChange={(e) => {
                            const newStatuses = [...fan5_7Statuses];
                            newStatuses[index].note = e.target.value;
                            setFan5_7Statuses(newStatuses);
                        }}
                        className={styles.input}
                        placeholder="Note"
                    />
                </div>
            ))}
            <button type="button" className={styles.button} onClick={handleSubmitFan5_7} disabled={isVentilationFan5_7DataSent}>Submit Ventilation Fan Room 5_7 Data</button>
            {isVentilationFan5_7DataSent && <div className={styles.alert}>Ventilation Fan Room 5_7 data sent successfully</div>}

            {/* DrainagePump2 field */}
            <h3>Drainage Pump Table</h3>
            {drainagePump2Statuses.map((drainagePump2, index) => (
                <div key={index} className={styles.fieldGroup}>
                    <p className={styles.machineText}>{drainagePump2.machine_name}</p>
                    <label className={styles.label} htmlFor={`drainagePump2${index + 1}Status`}>Status</label>
                    <select
                        id={`drainagePump2${index + 1}Status`}
                        className={styles.input}
                        value={drainagePump2.status}
                        onChange={(e) => {
                            const newStatuses = [...drainagePump2Statuses];
                            newStatuses[index] = { ...drainagePump2, status: e.target.value };
                            setDrainagePump2Statuses(newStatuses);
                        }}
                        disabled={isDrainagePump2DataSent}
                    >
                        <option value="" disabled>Select Status</option>
                        <option value="R">R</option>
                        <option value="N">N</option>
                        <option value="E">E</option>
                        <option value="F">F</option>
                    </select>
                    <input
                        type="text"
                        value={drainagePump2.A1}
                        onChange={(e) => {
                            const newStatuses = [...drainagePump2Statuses];
                            newStatuses[index].A1 = e.target.value;
                            setDrainagePump2Statuses(newStatuses);
                        }}
                        className={styles.input}
                        placeholder="A1"
                    />
                    <input
                        type="text"
                        value={drainagePump2.A2}
                        onChange={(e) => {
                            const newStatuses = [...drainagePump2Statuses];
                            newStatuses[index].A2 = e.target.value;
                            setDrainagePump2Statuses(newStatuses);
                        }}
                        className={styles.input}
                        placeholder="A2"
                    />
                    <input
                        type="text"
                        value={drainagePump2.A3}
                        onChange={(e) => {
                            const newStatuses = [...drainagePump2Statuses];
                            newStatuses[index].A3 = e.target.value;
                            setDrainagePump2Statuses(newStatuses);
                        }}
                        className={styles.input}
                        placeholder="A3"
                    />
                    <input
                        type="text"
                        value={drainagePump2.T}
                        onChange={(e) => {
                            const newStatuses = [...drainagePump2Statuses];
                            newStatuses[index].T = e.target.value;
                            setDrainagePump2Statuses(newStatuses);
                        }}
                        className={styles.input}
                        placeholder="T"
                    />
                    <input
                        type="text"
                        value={drainagePump2.note}
                        onChange={(e) => {
                            const newStatuses = [...drainagePump2Statuses];
                            newStatuses[index].note = e.target.value;
                            setDrainagePump2Statuses(newStatuses);
                        }}
                        className={styles.input}
                        placeholder="Note"
                    />
                </div>
            ))}
            <button type="button" className={styles.button} onClick={handleSubmitDrainagePump2} disabled={isDrainagePump2DataSent}>Submit Drainage Pump Data</button>
            {isDrainagePump2DataSent && <div className={styles.alert}>Drainage Pump data sent successfully</div>}

            {/* ScrumPump field */}
            <h3>Scrum Pump Table</h3>
            {scrumPumpStatuses.map((scrumPump, index) => (
                <div key={index} className={styles.fieldGroup}>
                    <p className={styles.machineText}>{scrumPump.machine_name}</p>
                    <label className={styles.label} htmlFor={`scrumPump${index + 1}Status`}>Status</label>
                    <select
                        id={`scrumPump${index + 1}Status`}
                        className={styles.input}
                        value={scrumPump.status}
                        onChange={(e) => {
                            const newStatuses = [...scrumPumpStatuses];
                            newStatuses[index] = { ...scrumPump, status: e.target.value };
                            setScrumPumpStatuses(newStatuses);
                        }}
                        disabled={isScrumPumpDataSent}
                    >
                        <option value="" disabled>Select Status</option>
                        <option value="R">R</option>
                        <option value="N">N</option>
                        <option value="E">E</option>
                        <option value="F">F</option>
                    </select>
                    <input
                        type="text"
                        value={scrumPump.A1}
                        onChange={(e) => {
                            const newStatuses = [...scrumPumpStatuses];
                            newStatuses[index].A1 = e.target.value;
                            setScrumPumpStatuses(newStatuses);
                        }}
                        className={styles.input}
                        placeholder="A1"
                    />
                    <input
                        type="text"
                        value={scrumPump.A2}
                        onChange={(e) => {
                            const newStatuses = [...scrumPumpStatuses];
                            newStatuses[index].A2 = e.target.value;
                            setScrumPumpStatuses(newStatuses);
                        }}
                        className={styles.input}
                        placeholder="A2"
                    />
                    <input
                        type="text"
                        value={scrumPump.A3}
                        onChange={(e) => {
                            const newStatuses = [...scrumPumpStatuses];
                            newStatuses[index].A3 = e.target.value;
                            setScrumPumpStatuses(newStatuses);
                        }}
                        className={styles.input}
                        placeholder="A3"
                    />
                    <input
                        type="text"
                        value={scrumPump.T}
                        onChange={(e) => {
                            const newStatuses = [...scrumPumpStatuses];
                            newStatuses[index].T = e.target.value;
                            setScrumPumpStatuses(newStatuses);
                        }}
                        className={styles.input}
                        placeholder="T"
                    />
                    <input
                        type="text"
                        value={scrumPump.note}
                        onChange={(e) => {
                            const newStatuses = [...scrumPumpStatuses];
                            newStatuses[index].note = e.target.value;
                            setScrumPumpStatuses(newStatuses);
                        }}
                        className={styles.input}
                        placeholder="Note"
                    />
                </div>
            ))}
            <button type="button" className={styles.button} onClick={handleSubmitScrumPump} disabled={isScrumPumpDataSent}>Submit Scrum Pump Data</button>
            {isScrumPumpDataSent && <div className={styles.alert}>Scrum Pump data sent successfully</div>}

            </>
        )}

        <button type="button" className={styles.button} style={{backgroundColor: 'green'}} onClick={handleSaveSection6}>
              {showSections6 ? 'Hide Section 6' : 'Show Section 6'}
        </button>

        {showSections7 && (
          <>
          {/* HiLowWaterPump field */}
          <h3>Hi-Low Water Pump Table</h3>
          {hiLowWaterPumpStatuses.map((hiLowWaterPump, index) => (
            <div key={index} className={styles.fieldGroup}>
              <p className={styles.machineText}>{hiLowWaterPump.machine_name}</p>
              <label className={styles.label} htmlFor={`hiLowWaterPump${index + 1}Status`}>Status</label>
              <select
                id={`hiLowWaterPump${index + 1}Status`}
                className={styles.input}
                value={hiLowWaterPump.status}
                onChange={(e) => {
                  const newStatuses = [...hiLowWaterPumpStatuses];
                  newStatuses[index] = { ...hiLowWaterPump, status: e.target.value };
                  setHiLowWaterPumpStatuses(newStatuses);
                }}
                disabled={isHiLowWaterPumpDataSent}
              >
                <option value="" disabled>Select Status</option>
                <option value="R">R</option>
                <option value="N">N</option>
                <option value="E">E</option>
                <option value="F">F</option>
              </select>
              <input
                type="text"
                value={hiLowWaterPump.note}
                onChange={(e) => {
                  const newStatuses = [...hiLowWaterPumpStatuses];
                  newStatuses[index].note = e.target.value;
                  setHiLowWaterPumpStatuses(newStatuses);
                }}
                className={styles.input}
                placeholder="Note"
              />
            </div>
          ))}
          <button type="button" className={styles.button} onClick={handleSubmitHiLowWaterPump} disabled={isHiLowWaterPumpDataSent}>Submit Hi-Low Water Pump Data</button>
          {isHiLowWaterPumpDataSent && <div className={styles.alert}>Hi-Low Water Pump data sent successfully</div>}

          {/* CWRW Water Pump field */}
          <h3>CWRW Water Pump Table</h3>
          {cWRWWaterPumpStatuses.map((cWRWWaterPump, index) => (
            <div key={index} className={styles.fieldGroup}>
              <p className={styles.machineText}>{cWRWWaterPump.machine_name}</p>
              <label className={styles.label} htmlFor={`cWRWWaterPump${index + 1}Status`}>Status</label>
              <select
                id={`cWRWWaterPump${index + 1}Status`}
                className={styles.input}
                value={cWRWWaterPump.status}
                onChange={(e) => {
                  const newStatuses = [...cWRWWaterPumpStatuses];
                  newStatuses[index] = { ...cWRWWaterPump, status: e.target.value };
                  setCWRWWaterPumpStatuses(newStatuses);
                }}
                disabled={isCWRWWaterPumpDataSent}
              >
                <option value="" disabled>Select Status</option>
                <option value="R">R</option>
                <option value="N">N</option>
                <option value="E">E</option>
                <option value="F">F</option>
              </select>
              <input
                type="text"
                value={cWRWWaterPump.note}
                onChange={(e) => {
                  const newStatuses = [...cWRWWaterPumpStatuses];
                  newStatuses[index].note = e.target.value;
                  setCWRWWaterPumpStatuses(newStatuses);
                }}
                className={styles.input}
                placeholder="Note"
              />
            </div>
          ))}
          <button type="button" className={styles.button} onClick={handleSubmitCWRWWaterPump} disabled={isCWRWWaterPumpDataSent}>Submit CWRW Water Pump Data</button>
          {isCWRWWaterPumpDataSent && <div className={styles.alert}>CWRW Water Pump data sent successfully</div>}

          {/* Drainage Pump 1 field */}
          <h3>Drainage Pump 1 Table</h3>
          {drainagePump1Statuses.map((drainagePump1, index) => (
            <div key={index} className={styles.fieldGroup}>
              <p className={styles.machineText}>{drainagePump1.machine_name}</p>
              <label className={styles.label} htmlFor={`drainagePump1${index + 1}Status`}>Status</label>
              <select
                id={`drainagePump1${index + 1}Status`}
                className={styles.input}
                value={drainagePump1.status}
                onChange={(e) => {
                  const newStatuses = [...drainagePump1Statuses];
                  newStatuses[index] = { ...drainagePump1, status: e.target.value };
                  setDrainagePump1Statuses(newStatuses);
                }}
                disabled={isDrainagePump1DataSent}
              >
                <option value="" disabled>Select Status</option>
                <option value="R">R</option>
                <option value="N">N</option>
                <option value="E">E</option>
                <option value="F">F</option>
              </select>
              <input
                type="text"
                value={drainagePump1.A1}
                onChange={(e) => {
                  const newStatuses = [...drainagePump1Statuses];
                  newStatuses[index].A1 = e.target.value;
                  setDrainagePump1Statuses(newStatuses);
                }}
                className={styles.input}
                placeholder="A1"
              />
              <input
                type="text"
                value={drainagePump1.A2}
                onChange={(e) => {
                  const newStatuses = [...drainagePump1Statuses];
                  newStatuses[index].A2 = e.target.value;
                  setDrainagePump1Statuses(newStatuses);
                }}
                className={styles.input}
                placeholder="A2"
              />
              <input
                type="text"
                value={drainagePump1.A3}
                onChange={(e) => {
                  const newStatuses = [...drainagePump1Statuses];
                  newStatuses[index].A3 = e.target.value;
                  setDrainagePump1Statuses(newStatuses);
                }}
                className={styles.input}
                placeholder="A3"
              />
              <input
                type="text"
                value={drainagePump1.T}
                onChange={(e) => {
                  const newStatuses = [...drainagePump1Statuses];
                  newStatuses[index].T = e.target.value;
                  setDrainagePump1Statuses(newStatuses);
                }}
                className={styles.input}
                placeholder="T"
              />
              <input
                type="text"
                value={drainagePump1.note}
                onChange={(e) => {
                  const newStatuses = [...drainagePump1Statuses];
                  newStatuses[index].note = e.target.value;
                  setDrainagePump1Statuses(newStatuses);
                }}
                className={styles.input}
                placeholder="Note"
              />
            </div>
          ))}
          <button type="button" className={styles.button} onClick={handleSubmitDrainagePump1} disabled={isDrainagePump1DataSent}>Submit Drainage Pump 1 Data</button>
          {isDrainagePump1DataSent && <div className={styles.alert}>Drainage Pump 1 data sent successfully</div>}

          {/* EffluentPump field */}
          <h3>Effluent Pump Table</h3>
          {effluentPumpStatuses.map((effluentPump, index) => (
              <div key={index} className={styles.fieldGroup}>
                  <p className={styles.machineText}>{effluentPump.machine_name}</p>
                  <label className={styles.label} htmlFor={`effluentPump${index + 1}Status`}>Status</label>
                  <select
                      id={`effluentPump${index + 1}Status`}
                      className={styles.input}
                      value={effluentPump.status}
                      onChange={(e) => {
                          const newStatuses = [...effluentPumpStatuses];
                          newStatuses[index] = { ...effluentPump, status: e.target.value };
                          setEffluentPumpStatuses(newStatuses);
                      }}
                      disabled={isEffluentPumpDataSent}
                  >
                      <option value="" disabled>Select Status</option>
                      <option value="R">R</option>
                      <option value="N">N</option>
                      <option value="E">E</option>
                      <option value="F">F</option>
                  </select>
                  <input
                      type="text"
                      value={effluentPump.A1}
                      onChange={(e) => {
                          const newStatuses = [...effluentPumpStatuses];
                          newStatuses[index].A1 = e.target.value;
                          setEffluentPumpStatuses(newStatuses);
                      }}
                      className={styles.input}
                      placeholder="A1"
                  />
                  <input
                      type="text"
                      value={effluentPump.A2}
                      onChange={(e) => {
                          const newStatuses = [...effluentPumpStatuses];
                          newStatuses[index].A2 = e.target.value;
                          setEffluentPumpStatuses(newStatuses);
                      }}
                      className={styles.input}
                      placeholder="A2"
                  />
                  <input
                      type="text"
                      value={effluentPump.A3}
                      onChange={(e) => {
                          const newStatuses = [...effluentPumpStatuses];
                          newStatuses[index].A3 = e.target.value;
                          setEffluentPumpStatuses(newStatuses);
                      }}
                      className={styles.input}
                      placeholder="A3"
                  />
                  <input
                      type="text"
                      value={effluentPump.T}
                      onChange={(e) => {
                          const newStatuses = [...effluentPumpStatuses];
                          newStatuses[index].T = e.target.value;
                          setEffluentPumpStatuses(newStatuses);
                      }}
                      className={styles.input}
                      placeholder="T"
                  />
                  <input
                      type="text"
                      value={effluentPump.note}
                      onChange={(e) => {
                          const newStatuses = [...effluentPumpStatuses];
                          newStatuses[index].note = e.target.value;
                          setEffluentPumpStatuses(newStatuses);
                      }}
                      className={styles.input}
                      placeholder="Note"
                  />
              </div>
          ))}
          <button type="button" className={styles.button} onClick={handleSubmitEffluentPump} disabled={isEffluentPumpDataSent}>Submit Effluent Pump Data</button>
          {isEffluentPumpDataSent && <div className={styles.alert}>Effluent Pump data sent successfully</div>}


          </>
        )}
        <button type="button" className={styles.button} style={{backgroundColor: 'green'}} onClick={handleSaveSection7}>
              {showSections7 ? 'Hide Section 7' : 'Show Section 7'}
        </button>

        <button type="button" className={styles.button} onClick={handleComplete}>Complete</button>
      </form>
  );
};

export default StatusRecordForm;

