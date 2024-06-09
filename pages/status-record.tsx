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
    const [validationError, setValidationError] = useState<string | null>(null);
    const [validationError_2, setValidationError_2] = useState<string | null>(null);
    const [validationError_3, setValidationError_3] = useState<string | null>(null);
    const [validationError_4, setValidationError_4] = useState<string | null>(null);
    const [validationError_5, setValidationError_5] = useState<string | null>(null);
    const [validationError_6, setValidationError_6] = useState<string | null>(null);
    const [validationError_7, setValidationError_7] = useState<string | null>(null);
    const [validationError_8, setValidationError_8] = useState<string | null>(null);
    const [validationError_9, setValidationError_9] = useState<string | null>(null);
    const [validationError_10, setValidationError_10] = useState<string | null>(null);
    const [validationError_11, setValidationError_11] = useState<string | null>(null);
    const [validationError_12, setValidationError_12] = useState<string | null>(null);
    const [validationError_13, setValidationError_13] = useState<string | null>(null);
    const [validationError_14, setValidationError_14] = useState<string | null>(null);
    const [validationError_15, setValidationError_15] = useState<string | null>(null);
    const [validationError_16, setValidationError_16] = useState<string | null>(null);
    const [validationError_17, setValidationError_17] = useState<string | null>(null);
    const [validationError_18, setValidationError_18] = useState<string | null>(null);
    const [validationError_19, setValidationError_19] = useState<string | null>(null);
    const [validationError_20, setValidationError_20] = useState<string | null>(null);
    const [validationError_21, setValidationError_21] = useState<string | null>(null);
    const [validationError_22, setValidationError_22] = useState<string | null>(null);
    const [validationError_23, setValidationError_23] = useState<string | null>(null);
    const [validationError_24, setValidationError_24] = useState<string | null>(null);
    const [validationError_25, setValidationError_25] = useState<string | null>(null);
    const [validationError_26, setValidationError_26] = useState<string | null>(null);
    const [validationError_27, setValidationError_27] = useState<string | null>(null);
    const [validationError_28, setValidationError_28] = useState<string | null>(null);
    const [validationError_29, setValidationError_29] = useState<string | null>(null);
    const [validationError_30, setValidationError_30] = useState<string | null>(null);
    const [validationError_31, setValidationError_31] = useState<string | null>(null);
    const [validationError_32, setValidationError_32] = useState<string | null>(null);
    const [validationError_33, setValidationError_33] = useState<string | null>(null);
    const [validationError_34, setValidationError_34] = useState<string | null>(null);
    const [validationError_35, setValidationError_35] = useState<string | null>(null);
    const [validationError_36, setValidationError_36] = useState<string | null>(null);
    const [validationError_37, setValidationError_37] = useState<string | null>(null);
    const [validationError_38, setValidationError_38] = useState<string | null>(null);
    const [validationError_39, setValidationError_39] = useState<string | null>(null);
    const [validationError_40, setValidationError_40] = useState<string | null>(null);
    const [validationError_41, setValidationError_41] = useState<string | null>(null);
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
    // { machine_name: 'P-PS-1206',record_date: '', record_time: '', status: '', A1: '', A2: '', A3: '', T: '', note: '' },
    // { machine_name: 'P-PS-1207',record_date: '', record_time: '', status: '', A1: '', A2: '', A3: '', T: '', note: '' },
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
    { machine_name: 'SF-STR-01',record_date: '', record_time: '', status: '', A1: '', A2: '', A3: '', T: '', note: '' },
    { machine_name: 'SMEF-STR-01',record_date: '', record_time: '', status: '', A1: '', A2: '', A3: '', T: '', note: '' },
  ])
  const [isVentilationFan3DataSent, setIsVentilationFan3DataSent] = useState(false);
  const [fan2Statuses, setFan2Statuses] = useState([
    { machine_name: 'EF-VFD-01',record_date: '', record_time: '', status: '', A1: '', A2: '', A3: '', T: '', note: '' },
    { machine_name: 'EF-BRR-02',record_date: '', record_time: '', status: '', A1: '', A2: '', A3: '', T: '', note: '' },
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
  const [airFlowStatuses, setAirFlowStatuses] = useState([
    { machine_name: 'FIT-3611',record_date: '', record_time: '', Flow: '', valve_percentage:'', note: '' },
    { machine_name: 'FIT-3612',record_date: '', record_time: '', Flow: '', valve_percentage:'', note: '' },
    { machine_name: 'FIT-3613',record_date: '', record_time: '', Flow: '', valve_percentage:'', note: '' },
    { machine_name: 'FIT-3614',record_date: '', record_time: '', Flow: '', valve_percentage:'', note: '' },
  ])
  const [isAirFlowDataSent, setIsAirFlowDataSent] = useState(false);
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
  const [autoSampler_2Statuses, setAutoSampler_2Statuses] = useState([
    { machine_name: 'SP-EF-5201',record_date: '', record_time: '', status: '', T:'', note: '' },
  ])
  const [isAutoSampler_2DataSent, setIsAutoSampler_2DataSent] = useState(false);
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
    { machine_name: 'EF-CL-01 (เครื่องจักร)',record_date: '', record_time: '', status: '', note: '' },
    { machine_name: 'EF-CL-02 (เครื่องจักร)',record_date: '', record_time: '', status: '', note: '' },
    { machine_name: 'EF-CL-03 (เครื่องจักร)',record_date: '', record_time: '', status: '', note: '' },
    { machine_name: 'EF-CL-04 (เครื่องจักร)',record_date: '', record_time: '', status: '', note: '' },
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
    { machine_name: 'EF-CL-01 (ตู้ไฟ)',record_date: '', record_time: '', status: '', note: '' },
    { machine_name: 'EF-CL-02 (ตู้ไฟ)',record_date: '', record_time: '', status: '', note: '' },
    { machine_name: 'EF-CL-03 (ตู้ไฟ)',record_date: '', record_time: '', status: '', note: '' },
    { machine_name: 'EF-CL-04 (ตู้ไฟ)',record_date: '', record_time: '', status: '', note: '' },
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
      const savedAirFlowStatuses = localStorage.getItem('airFlowStatuses')
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
      const savedAutoSampler_2Statuses = localStorage.getItem('autoSampler_2Statuses')
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
      if (savedAirFlowStatuses) setAirFlowStatuses(JSON.parse(savedAirFlowStatuses))
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
      if (savedAutoSampler_2Statuses) {setAutoSampler_2Statuses(JSON.parse(savedAutoSampler_2Statuses));}
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
  localStorage.setItem('airFlowStatuses', JSON.stringify(airFlowStatuses));
}, [airFlowStatuses]);

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
  localStorage.setItem('autoSampler_2Statuses', JSON.stringify(autoSampler_2Statuses));
}, [autoSampler_2Statuses]);

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
      console.log('Submitting chiller data...'); // Debugging
      console.log('Chiller statuses:', chStatuses); // Debugging
  
      // Validation: Check if any status is 'E' without a note
      for (const ch of chStatuses) {
          console.log(`Checking machine ${ch.machine_name} with status ${ch.status} and note ${ch.note}`); // Debugging
          if (ch.status === 'E' && (!ch.note || ch.note.trim() === '')) {
              setValidationError(`*** Please enter a note for machine ${ch.machine_name} with status 'E'. ***`);
              console.error('Validation failed'); // Debugging
              return; // Prevent submission
          }
      }
  
      console.log('Validation passed'); // Debugging
  
      // If validation passes, proceed with the submission
      try {
          for (const ch of chStatuses) {
              const formattedDate = recordDate ? recordDate.toISOString().split('T')[0] : null;
              const response = await fetch('https://jb-api-1.onrender.com/api/chiller', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({
                      machine_name: ch.machine_name,
                      record_date: formattedDate,
                      record_time: recordTime,
                      status: ch.status,
                      note: ch.note,
                  }),
              });
  
              if (!response.ok) {
                  console.error('Failed to add record for machine', ch.machine_name); // Debugging
                  setValidationError(`Failed to add record for machine ${ch.machine_name}`);
                  return;
              }
          }
  
          console.log('All records added successfully');
          setChStatuses(chStatuses.map((ch) => ({ ...ch, status: '', note: '' })));
          setIsChillerDataSent(true);
          setValidationError(null); // Clear validation error if data is successfully sent
      } catch (error) {
          console.error('Error adding record:', error);
          setValidationError('Error adding record.');
      }
  };
  

  const handleSubmitChillerWaterPumpData = async () => {
    console.log('Submitting chiller water pump data...'); // Debugging
    console.log('Chiller Water Pump statuses:', chillerWaterPumpStatuses); // Debugging

    // Validation: Check if any status is 'E' without a note
    for (const chwp of chillerWaterPumpStatuses) {
        console.log(`Checking machine ${chwp.machine_name} with status ${chwp.status} and note ${chwp.note}`); // Debugging
        if (chwp.status === 'E' && (!chwp.note || chwp.note.trim() === '' || chwp.note.trim() === '-')) {
            setValidationError_2(`*** Please enter a note for machine ${chwp.machine_name} with status 'E'. ***`);
            console.error('Validation failed'); // Debugging
            return; // Prevent submission
        }
    }

    console.log('Validation passed'); // Debugging

    // If validation passes, proceed with the submission
    try {
        for (const chwp of chillerWaterPumpStatuses) {
            const formattedDate = recordDate ? recordDate.toISOString().split('T')[0] : null;
            const response = await fetch('https://jb-api-1.onrender.com/api/Chiller_Water_Pump', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    machine_name: chwp.machine_name,
                    record_date: formattedDate,
                    record_time: recordTime,
                    status: chwp.status,
                    A1: chwp.A1,
                    A2: chwp.A2,
                    A3: chwp.A3,
                    T: chwp.T,
                    note: chwp.note,
                }),
            });

            if (!response.ok) {
                console.error('Failed to add record for machine', chwp.machine_name); // Debugging
                setValidationError_2(`Failed to add record for machine ${chwp.machine_name}`);
                return;
            }
        }

        console.log('All Chiller Water Pump records added successfully');
        setChillerWaterPumpStatuses(chillerWaterPumpStatuses.map((chwp) => ({ ...chwp, status: '', A1: '', A2: '', A3: '', T: '', note: '' })));
        setIsChillerWaterPumpDataSent(true);
        setValidationError_2(null); // Clear validation error if data is successfully sent
    } catch (error) {
        console.error('Error adding Chiller Water Pump records:', error);
        setValidationError_2('Error adding Chiller Water Pump records.');
    }
};
  
const handleSubmitFan6Data = async () => {
  console.log('Submitting fan 6 data...'); // Debugging
  console.log('Fan 6 statuses:', fan6Statuses); // Debugging

  // Validation: Check if any status is 'E' without a note
  for (const fan of fan6Statuses) {
      console.log(`Checking machine ${fan.machine_name} with status ${fan.status} and note ${fan.note}`); // Debugging
      if (fan.status === 'E' && (!fan.note || fan.note.trim() === '' || fan.note.trim() === '-')) {
          setValidationError_3(`*** Please enter a note for machine ${fan.machine_name} with status 'E'. ***`);
          console.error('Validation failed'); // Debugging
          return; // Prevent submission
      }
  }

  console.log('Validation passed'); // Debugging

  // If validation passes, proceed with the submission
  try {
      for (const fan of fan6Statuses) {
          const formattedDate = recordDate ? recordDate.toISOString().split('T')[0] : null;
          const response = await fetch('https://jb-api-1.onrender.com/api/Ventilation_Fan_Room6', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                  machine_name: fan.machine_name,
                  record_date: formattedDate,
                  record_time: recordTime,
                  status: fan.status,
                  A1: fan.A1,
                  A2: fan.A2,
                  A3: fan.A3,
                  T: fan.T,
                  note: fan.note,
              }),
          });

          if (!response.ok) {
              console.error('Failed to add record for machine', fan.machine_name); // Debugging
              setValidationError_3(`Failed to add record for machine ${fan.machine_name}`);
              return;
          }
      }

      console.log('All Ventilation Fan Room 6 records added successfully');
      setFan6Statuses(fan6Statuses.map((fan) => ({ ...fan, status: '', A1: '', A2: '', A3: '', T: '', note: '' })));
      setIsVentilationFan6DataSent(true);
      setValidationError_3(null); // Clear validation error if data is successfully sent
  } catch (error) {
      console.error('Error adding Ventilation Fan Room 6 records:', error);
      setValidationError_3('Error adding Ventilation Fan Room 6 records.');
  }
};
  
const handleSubmitBiofilterData = async () => {
  console.log('Submitting biofilter data...'); // Debugging
  console.log('Biofilter statuses:', biofilterStatuses); // Debugging

  // Validation: Check if any status is 'E' without a note
  for (const biofilter of biofilterStatuses) {
      console.log(`Checking machine ${biofilter.machine_name} with status ${biofilter.status} and note ${biofilter.note}`); // Debugging
      if (biofilter.status === 'E' && (!biofilter.note || biofilter.note.trim() === '' || biofilter.note.trim() === '-')) {
          setValidationError_4(`*** Please enter a note for machine ${biofilter.machine_name} with status 'E'. ***`);
          console.error('Validation failed'); // Debugging
          return; // Prevent submission
      }
  }

  console.log('Validation passed'); // Debugging

  // If validation passes, proceed with the submission
  try {
      for (const biofilter of biofilterStatuses) {
          const formattedDate = recordDate ? recordDate.toISOString().split('T')[0] : null;
          const response = await fetch('https://jb-api-1.onrender.com/api/biofilter', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                  machine_name: biofilter.machine_name,
                  record_date: formattedDate,
                  record_time: recordTime,
                  status: biofilter.status,
                  note: biofilter.note,
              }),
          });

          if (!response.ok) {
              console.error('Failed to add record for machine', biofilter.machine_name); // Debugging
              setValidationError_4(`Failed to add record for machine ${biofilter.machine_name}`);
              return;
          }
      }

      console.log('All Biofilter records added successfully');
      setBiofilterStatuses(biofilterStatuses.map((biofilter) => ({ ...biofilter, status: '', note: '' })));
      setIsBiofilterDataSent(true);
      setValidationError_4(null); // Clear validation error if data is successfully sent
  } catch (error) {
      console.error('Error adding Biofilter records:', error);
      setValidationError_4('Error adding Biofilter records.');
  }
};

const handleSubmitGardenPump = async () => {
  console.log('Submitting garden pump data...'); // Debugging
  console.log('Garden Pump statuses:', gardenPumpStatuses); // Debugging

  // Validation: Check if any status is 'E' without a note
  for (const gardenPump of gardenPumpStatuses) {
      console.log(`Checking machine ${gardenPump.machine_name} with status ${gardenPump.status} and note ${gardenPump.note}`); // Debugging
      if (gardenPump.status === 'E' && (!gardenPump.note || gardenPump.note.trim() === '' || gardenPump.note.trim() === '-')) {
          setValidationError_5(`*** Please enter a note for machine ${gardenPump.machine_name} with status 'E'. ***`);
          console.error('Validation failed'); // Debugging
          return; // Prevent submission
      }
  }

  console.log('Validation passed'); // Debugging

  // If validation passes, proceed with the submission
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
              console.error('Failed to add record for machine', gardenPump.machine_name); // Debugging
              setValidationError_5(`Failed to add record for machine ${gardenPump.machine_name}`);
              return;
          }
      }

      console.log('All Garden Pump records added successfully');
      setGardenPumpStatuses(gardenPumpStatuses.map((gardenPump) => ({ ...gardenPump, status: '', note: '' })));
      setIsGardenPumpDataSent(true);
      setValidationError_5(null); // Clear validation error if data is successfully sent
  } catch (error) {
      console.error('Error adding Garden Pump records:', error);
      setValidationError_5('Error adding Garden Pump records.');
  }
};


const handleSubmitInletPumping = async () => {
  console.log('Submitting inlet pumping data...'); // Debugging
  console.log('Inlet Pumping statuses:', inletPumpingStatuses); // Debugging

  // Validation: Check if any status is 'E' without a note
  for (const inletPumping of inletPumpingStatuses) {
      console.log(`Checking machine ${inletPumping.machine_name} with status ${inletPumping.status} and note ${inletPumping.note}`); // Debugging
      if (inletPumping.status === 'E' && (!inletPumping.note || inletPumping.note.trim() === '' || inletPumping.note.trim() === '-')) {
          setValidationError_6(`*** Please enter a note for machine ${inletPumping.machine_name} with status 'E'. ***`);
          console.error('Validation failed'); // Debugging
          return; // Prevent submission
      }
  }

  console.log('Validation passed'); // Debugging

  // If validation passes, proceed with the submission
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
              console.error('Failed to add record for machine', inletPumping.machine_name); // Debugging
              setValidationError_6(`Failed to add record for machine ${inletPumping.machine_name}`);
              return;
          }
      }

      console.log('All Inlet Pumping records added successfully');
      setInletPumpingStatuses(inletPumpingStatuses.map((inletPumping) => ({ ...inletPumping, status: '', note: '' })));
      setIsInletPumpingDataSent(true);
      setValidationError_6(null); // Clear validation error if data is successfully sent
  } catch (error) {
      console.error('Error adding Inlet Pumping records:', error);
      setValidationError_6('Error adding Inlet Pumping records.');
  }
};


const handleSubmitVentilationInletPumping = async () => {
  console.log('Submitting ventilation inlet pumping data...'); // Debugging
  console.log('Ventilation Inlet Pumping statuses:', ventilationInletPumpingStatuses); // Debugging

  // Validation: Check if any status is 'E' without a note
  for (const ventilationInletPumping of ventilationInletPumpingStatuses) {
      console.log(`Checking machine ${ventilationInletPumping.machine_name} with status ${ventilationInletPumping.status} and note ${ventilationInletPumping.note}`); // Debugging
      if (ventilationInletPumping.status === 'E' && (!ventilationInletPumping.note || ventilationInletPumping.note.trim() === '' || ventilationInletPumping.note.trim() === '-')) {
          setValidationError_7(`*** Please enter a note for machine ${ventilationInletPumping.machine_name} with status 'E'. ***`);
          console.error('Validation failed'); // Debugging
          return; // Prevent submission
      }
  }

  console.log('Validation passed'); // Debugging

  // If validation passes, proceed with the submission
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
              console.error('Failed to add record for machine', ventilationInletPumping.machine_name); // Debugging
              setValidationError_7(`Failed to add record for machine ${ventilationInletPumping.machine_name}`);
              return;
          }
      }

      console.log('All Ventilation Inlet Pumping records added successfully');
      setIsVentilationInletPumpingDataSent(true);
      setValidationError_7(null); // Clear validation error if data is successfully sent
  } catch (error) {
      console.error('Error adding Ventilation Inlet Pumping records:', error);
      setValidationError_7('Error adding Ventilation Inlet Pumping records.');
  }
};


const handleSubmitInletGate = async () => {
  console.log('Submitting inlet gate data...'); // Debugging
  console.log('Inlet Gate statuses:', inletGateStatuses); // Debugging

  // Validation: Check if any status is 'E' without a note
  for (const inletGate of inletGateStatuses) {
      console.log(`Checking machine ${inletGate.machine_name} with status ${inletGate.status} and note ${inletGate.note}`); // Debugging
      if (inletGate.status === 'E' && (!inletGate.note || inletGate.note.trim() === '' || inletGate.note.trim() === '-')) {
          setValidationError_8(`*** Please enter a note for machine ${inletGate.machine_name} with status 'E'. ***`);
          console.error('Validation failed'); // Debugging
          return; // Prevent submission
      }
  }

  console.log('Validation passed'); // Debugging

  // If validation passes, proceed with the submission
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
              console.error('Failed to add record for machine', inletGate.machine_name); // Debugging
              setValidationError_8(`Failed to add record for machine ${inletGate.machine_name}`);
              return;
          }
      }

      console.log('All Inlet Gate records added successfully');
      setIsInletGateDataSent(true);
      setValidationError_8(null); // Clear validation error if data is successfully sent
  } catch (error) {
      console.error('Error adding Inlet Gate records:', error);
      setValidationError_8('Error adding Inlet Gate records.');
  }
};


const handleSubmitCoarseScreen = async () => {
  try {
      for (const coarseScreen of coarseScreenStatuses) {
          if (coarseScreen.status === 'E' && (!coarseScreen.note || coarseScreen.note.trim() === '' || coarseScreen.note.trim() === '-')) {
              setValidationError_9(`*** Please enter a note for machine ${coarseScreen.machine_name} with status 'E'. ***`);
              return; // Prevent submission
          }
      }

      const formattedDate = recordDate ? recordDate.toISOString().split('T')[0] : null;
      for (const coarseScreen of coarseScreenStatuses) {
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
              setValidationError_9(`Failed to add record for machine ${coarseScreen.machine_name}`);
              return;
          }
      }
      setIsCoarseScreenDataSent(true);
      setValidationError_9(null); // Clear validation error if data is successfully sent
  } catch (error) {
      setValidationError_9('Error adding Coarse Screen records.');
  }
};


const handleSubmitFan3 = async () => {
  try {
      for (const fan3 of fan3Statuses) {
          if (fan3.status === 'E' && (!fan3.note || fan3.note.trim() === '' || fan3.note.trim() === '-')) {
              setValidationError_10(`*** Please enter a note for machine ${fan3.machine_name} with status 'E'. ***`);
              return; // Prevent submission
          }
      }

      const formattedDate = recordDate ? recordDate.toISOString().split('T')[0] : null;
      for (const fan3 of fan3Statuses) {
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
              setValidationError_10(`Failed to add record for machine ${fan3.machine_name}`);
              return;
          }
      }
      setIsVentilationFan3DataSent(true);
      setValidationError_10(null); // Clear validation error if data is successfully sent
  } catch (error) {
      setValidationError_10('Error adding Fan 3 records.');
  }
};


const handleSubmitFan2 = async () => {
  try {
      for (const fan2 of fan2Statuses) {
          if (fan2.status === 'E' && (!fan2.note || fan2.note.trim() === '' || fan2.note.trim() === '-')) {
              setValidationError_11(`*** Please enter a note for machine ${fan2.machine_name} with status 'E'. ***`);
              return; // Prevent submission
          }
      }

      const formattedDate = recordDate ? recordDate.toISOString().split('T')[0] : null;
      for (const fan2 of fan2Statuses) {
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
              setValidationError_11(`Failed to add record for machine ${fan2.machine_name}`);
              return;
          }
      }
      setIsVentilationFan2DataSent(true);
      setValidationError_11(null); // Clear validation error if data is successfully sent
  } catch (error) {
      setValidationError_11('Error adding Fan 2 records.');
  }
};


const handleSubmitFan1 = async () => {
  try {
      for (const fan1 of fan1Statuses) {
          if (fan1.status === 'E' && (!fan1.note || fan1.note.trim() === '' || fan1.note.trim() === '-')) {
              setValidationError_12(`*** Please enter a note for machine ${fan1.machine_name} with status 'E'. ***`);
              return; // Prevent submission
          }
      }

      const formattedDate = recordDate ? recordDate.toISOString().split('T')[0] : null;
      for (const fan1 of fan1Statuses) {
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
              setValidationError_12(`Failed to add record for machine ${fan1.machine_name}`);
              return;
          }
      }
      setIsVentilationFan1DataSent(true);
      setValidationError_12(null); // Clear validation error if data is successfully sent
  } catch (error) {
      setValidationError_12('Error adding Fan 1 records.');
  }
};


const handleSubmitAutoSampler = async () => {
  try {
      for (const autoSampler of autoSamplerStatuses) {
          if (autoSampler.status === 'E' && (!autoSampler.note || autoSampler.note.trim() === '' || autoSampler.note.trim() === '-')) {
              setValidationError_13(`*** Please enter a note for machine ${autoSampler.machine_name} with status 'E'. ***`);
              return; // Prevent submission
          }
      }

      const formattedDate = recordDate ? recordDate.toISOString().split('T')[0] : null;
      for (const autoSampler of autoSamplerStatuses) {
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
              setValidationError_13(`Failed to add record for machine ${autoSampler.machine_name}`);
              return;
          }
      }
      setIsAutoSamplerDataSent(true);
      setValidationError_13(null); // Clear validation error if data is successfully sent
  } catch (error) {
      setValidationError_13('Error adding Auto Sampler records.');
  }
};


const handleSubmitVortexGrit = async () => {
  try {
      for (const vortexGrit of vortexGritStatuses) {
          if (vortexGrit.status === 'E' && (!vortexGrit.note || vortexGrit.note.trim() === '' || vortexGrit.note.trim() === '-')) {
              setValidationError_14(`*** Please enter a note for machine ${vortexGrit.machine_name} with status 'E'. ***`);
              return; // Prevent submission
          }
      }

      const formattedDate = recordDate ? recordDate.toISOString().split('T')[0] : null;
      for (const vortexGrit of vortexGritStatuses) {
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
              setValidationError_14(`Failed to add record for machine ${vortexGrit.machine_name}`);
              return;
          }
      }
      setIsVortexGridDataSent(true);
      setValidationError_14(null); // Clear validation error if data is successfully sent
  } catch (error) {
      setValidationError_14('Error adding Vortex Grit records.');
  }
};


const handleSubmitAirFlow = async () => {
  try {
    for (const airFlow of airFlowStatuses) {
      // Formatting date and time
      const formattedDate = recordDate ? recordDate.toISOString().split('T')[0] : null;
      const response = await fetch('https://jb-api-1.onrender.com/api/air_flow', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          machine_name: airFlow.machine_name,
          record_date: formattedDate,
          record_time: recordTime,
          Flow: airFlow.Flow,
          valve_percentage: airFlow.valve_percentage,
          note: airFlow.note,
        }),
      });

      if (!response.ok) {
        console.error('Failed to add Air Flow record');
        return;
      }
    }
    console.log('All Air Flow records added successfully');
    setIsAirFlowDataSent(true);
  } catch (error) {
    console.error('Error adding Air Flow records:', error);
  }
};

const handleSubmitFineScreen = async () => {
  try {
    for (const fineScreen of fineScreenStatuses) {
      if (fineScreen.status === 'E' && (!fineScreen.note || fineScreen.note.trim() === '' || fineScreen.note.trim() === '-')) {
        setValidationError_15(`*** Please enter a note for machine ${fineScreen.machine_name} with status 'E'. ***`);
        return; // Prevent submission
      }
    }

    const formattedDate = recordDate ? recordDate.toISOString().split('T')[0] : null;
    for (const fineScreen of fineScreenStatuses) {
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
        setValidationError_15(`Failed to add record for machine ${fineScreen.machine_name}`);
        return;
      }
    }
    setIsFineScreenDataSent(true);
    setValidationError_15(null); // Clear validation error if data is successfully sent
  } catch (error) {
    setValidationError_15('Error adding Fine Screen records.');
  }
};


const handleSubmitDrainagePump3 = async () => {
  try {
    for (const drainagePump3 of drainagePump3Statuses) {
      if (drainagePump3.status === 'E' && (!drainagePump3.note || drainagePump3.note.trim() === '' || drainagePump3.note.trim() === '-')) {
        setValidationError_16(`*** Please enter a note for machine ${drainagePump3.machine_name} with status 'E'. ***`);
        return; // Prevent submission
      }
    }

    const formattedDate = recordDate ? recordDate.toISOString().split('T')[0] : null;
    for (const drainagePump3 of drainagePump3Statuses) {
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
        setValidationError_16(`Failed to add record for machine ${drainagePump3.machine_name}`);
        return;
      }
    }
    setIsDrainagePump3DataSent(true);
    setValidationError_16(null); // Clear validation error if data is successfully sent
  } catch (error) {
    setValidationError_16('Error adding Drainage Pump 3 records.');
  }
};


const handleSubmitFan4 = async () => {
  try {
    for (const fan4 of fan4Statuses) {
      if (fan4.status === 'E' && (!fan4.note || fan4.note.trim() === '' || fan4.note.trim() === '-')) {
        setValidationError_17(`*** Please enter a note for machine ${fan4.machine_name} with status 'E'. ***`);
        return; // Prevent submission
      }
    }

    const formattedDate = recordDate ? recordDate.toISOString().split('T')[0] : null;
    for (const fan4 of fan4Statuses) {
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
        setValidationError_17(`Failed to add record for machine ${fan4.machine_name}`);
        return;
      }
    }
    setIsVentilationFan4DataSent(true);
    setValidationError_17(null); // Clear validation error if data is successfully sent
  } catch (error) {
    setValidationError_17('Error adding Fan 4 records.');
  }
};


const handleSubmitAnoxicMixer1 = async () => {
  try {
    for (const anoxicMixer1 of anoxicMixer1Statuses) {
      if (anoxicMixer1.status === 'E' && (!anoxicMixer1.note || anoxicMixer1.note.trim() === '' || anoxicMixer1.note.trim() === '-')) {
        setValidationError_18(`*** Please enter a note for machine ${anoxicMixer1.machine_name} with status 'E'. ***`);
        return; // Prevent submission
      }
    }

    const formattedDate = recordDate ? recordDate.toISOString().split('T')[0] : null;
    for (const anoxicMixer1 of anoxicMixer1Statuses) {
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
        setValidationError_18(`Failed to add record for machine ${anoxicMixer1.machine_name}`);
        return;
      }
    }
    setIsAnoxicMixer1DataSent(true);
    setValidationError_18(null); // Clear validation error if data is successfully sent
  } catch (error) {
    setValidationError_18('Error adding Anoxic Mixer 1 records.');
  }
};


const handleSubmitAnoxicMixer2 = async () => {
  try {
    for (const anoxicMixer2 of anoxicMixer2Statuses) {
      if (anoxicMixer2.status === 'E' && (!anoxicMixer2.note || anoxicMixer2.note.trim() === '' || anoxicMixer2.note.trim() === '-')) {
        setValidationError_19(`*** Please enter a note for machine ${anoxicMixer2.machine_name} with status 'E'. ***`);
        return; // Prevent submission
      }
    }

    const formattedDate = recordDate ? recordDate.toISOString().split('T')[0] : null;
    for (const anoxicMixer2 of anoxicMixer2Statuses) {
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
        setValidationError_19(`Failed to add record for machine ${anoxicMixer2.machine_name}`);
        return;
      }
    }
    console.log('All Anoxic Mixer 2 records added successfully');
    setIsAnoxicMixer2DataSent(true);
    setValidationError_19(null); // Clear validation error if data is successfully sent
  } catch (error) {
    console.error('Error adding Anoxic Mixer 2 records:', error);
    setValidationError_19('Error adding Anoxic Mixer 2 records.');
  }
};


const handleSubmitAnoxicMixer3 = async () => {
  try {
    for (const anoxicMixer3 of anoxicMixer3Statuses) {
      if (anoxicMixer3.status === 'E' && (!anoxicMixer3.note || anoxicMixer3.note.trim() === '' || anoxicMixer3.note.trim() === '-')) {
        setValidationError_20(`*** Please enter a note for machine ${anoxicMixer3.machine_name} with status 'E'. ***`);
        return; // Prevent submission
      }
    }

    const formattedDate = recordDate ? recordDate.toISOString().split('T')[0] : null;
    for (const anoxicMixer3 of anoxicMixer3Statuses) {
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
        setValidationError_20(`Failed to add record for machine ${anoxicMixer3.machine_name}`);
        return;
      }
    }
    console.log('All Anoxic Mixer 3 records added successfully');
    setIsAnoxicMixer3DataSent(true);
    setValidationError_20(null); // Clear validation error if data is successfully sent
  } catch (error) {
    console.error('Error adding Anoxic Mixer 3 records:', error);
    setValidationError_20('Error adding Anoxic Mixer 3 records.');
  }
};



const handleSubmitAnoxicMixer4 = async () => {
  try {
    for (const anoxicMixer4 of anoxicMixer4Statuses) {
      if (anoxicMixer4.status === 'E' && (!anoxicMixer4.note || anoxicMixer4.note.trim() === '' || anoxicMixer4.note.trim() === '-')) {
        setValidationError_21(`*** Please enter a note for machine ${anoxicMixer4.machine_name} with status 'E'. ***`);
        return; // Prevent submission
      }
    }

    const formattedDate = recordDate ? recordDate.toISOString().split('T')[0] : null;
    for (const anoxicMixer4 of anoxicMixer4Statuses) {
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
        setValidationError_21(`Failed to add record for machine ${anoxicMixer4.machine_name}`);
        return;
      }
    }
    console.log('All Anoxic Mixer 4 records added successfully');
    setIsAnoxicMixer4DataSent(true);
    setValidationError_21(null); // Clear validation error if data is successfully sent
  } catch (error) {
    console.error('Error adding Anoxic Mixer 4 records:', error);
    setValidationError_21('Error adding Anoxic Mixer 4 records.');
  }
};


const handleSubmitSingleAirBlower = async () => {
  try {
    for (const singleAirBlower of singleAirBlowerStatuses) {
      if (singleAirBlower.status === 'E' && (!singleAirBlower.note || singleAirBlower.note.trim() === '' || singleAirBlower.note.trim() === '-')) {
        setValidationError_22(`*** Please enter a note for machine ${singleAirBlower.machine_name} with status 'E'. ***`);
        return; // Prevent submission
      }
    }

    const formattedDate = recordDate ? recordDate.toISOString().split('T')[0] : null;
    for (const singleAirBlower of singleAirBlowerStatuses) {
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
        setValidationError_22(`Failed to add record for machine ${singleAirBlower.machine_name}`);
        return;
      }
    }
    console.log('All Single Air Blower records added successfully');
    setIsSingleAirBlowerDataSent(true);
    setValidationError_22(null); // Clear validation error if data is successfully sent
  } catch (error) {
    console.error('Error adding Single Air Blower records:', error);
    setValidationError_22('Error adding Single Air Blower records.');
  }
};

const handleSubmitPositiveAirBlower = async () => {
  try {
    for (const positiveAirBlower of positiveAirBlowerStatuses) {
      if (positiveAirBlower.status === 'E' && (!positiveAirBlower.note || positiveAirBlower.note.trim() === '' || positiveAirBlower.note.trim() === '-')) {
        setValidationError_23(`*** Please enter a note for machine ${positiveAirBlower.machine_name} with status 'E'. ***`);
        return; // Prevent submission
      }
    }

    const formattedDate = recordDate ? recordDate.toISOString().split('T')[0] : null;
    for (const positiveAirBlower of positiveAirBlowerStatuses) {
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
        setValidationError_23(`Failed to add record for machine ${positiveAirBlower.machine_name}`);
        return;
      }
    }
    console.log('All Positive Air Blower records added successfully');
    setIsPositiveAirBlowerDataSent(true);
    setValidationError_23(null); // Clear validation error if data is successfully sent
  } catch (error) {
    console.error('Error adding Positive Air Blower records:', error);
    setValidationError_23('Error adding Positive Air Blower records.');
  }
};


const handleSubmitClarifier = async () => {
  try {
    for (const clarifier of clarifier1Statuses) {
      if (clarifier.status === 'E' && (!clarifier.note || clarifier.note.trim() === '' || clarifier.note.trim() === '-')) {
        setValidationError_24(`*** Please enter a note for machine ${clarifier.machine_name} with status 'E'. ***`);
        return; // Prevent submission
      }
    }

    const formattedDate = recordDate ? recordDate.toISOString().split('T')[0] : null;
    for (const clarifier of clarifier1Statuses) {
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
        setValidationError_24(`Failed to add record for machine ${clarifier.machine_name}`);
        return;
      }
    }
    console.log('All Clarifier records added successfully');
    setIsClarifier1DataSent(true);
    setValidationError_24(null); // Clear validation error if data is successfully sent
  } catch (error) {
    console.error('Error adding Clarifier records:', error);
    setValidationError_24('Error adding Clarifier records.');
  }
};


const handleSubmitClarifier2 = async () => {
  try {
    for (const clarifier2 of clarifier2Statuses) {
      if (clarifier2.status === 'E' && (!clarifier2.note || clarifier2.note.trim() === '' || clarifier2.note.trim() === '-')) {
        setValidationError_25(`*** Please enter a note for machine ${clarifier2.machine_name} with status 'E'. ***`);
        return; // Prevent submission
      }
    }

    const formattedDate = recordDate ? recordDate.toISOString().split('T')[0] : null;
    for (const clarifier2 of clarifier2Statuses) {
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
        setValidationError_25(`Failed to add record for machine ${clarifier2.machine_name}`);
        return;
      }
    }
    console.log('All Clarifier2 records added successfully');
    setIsClarifier2DataSent(true);
    setValidationError_25(null); // Clear validation error if data is successfully sent
  } catch (error) {
    console.error('Error adding Clarifier records:', error);
    setValidationError_25('Error adding Clarifier records.');
  }
};


const handleSubmitClarifier3 = async () => {
  try {
    for (const clarifier3 of clarifier3Statuses) {
      if (clarifier3.status === 'E' && (!clarifier3.note || clarifier3.note.trim() === '' || clarifier3.note.trim() === '-')) {
        setValidationError_26(`*** Please enter a note for machine ${clarifier3.machine_name} with status 'E'. ***`);
        return; // Prevent submission
      }
    }

    const formattedDate = recordDate ? recordDate.toISOString().split('T')[0] : null;
    for (const clarifier3 of clarifier3Statuses) {
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
        setValidationError_26(`Failed to add record for machine ${clarifier3.machine_name}`);
        return;
      }
    }
    console.log('All Clarifier3 records added successfully');
    setIsClarifier3DataSent(true);
    setValidationError_26(null); // Clear validation error if data is successfully sent
  } catch (error) {
    console.error('Error adding Clarifier records:', error);
    setValidationError_26('Error adding Clarifier records.');
  }
};


const handleSubmitClarifier4 = async () => {
  try {
    for (const clarifier4 of clarifier4Statuses) {
      if (clarifier4.status === 'E' && (!clarifier4.note || clarifier4.note.trim() === '' || clarifier4.note.trim() === '-')) {
        setValidationError_27(`*** Please enter a note for machine ${clarifier4.machine_name} with status 'E'. ***`);
        return; // Prevent submission
      }
    }

    const formattedDate = recordDate ? recordDate.toISOString().split('T')[0] : null;
    for (const clarifier4 of clarifier4Statuses) {
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
        setValidationError_27(`Failed to add record for machine ${clarifier4.machine_name}`);
        return;
      }
    }
    console.log('All Clarifier4 records added successfully');
    setIsClarifier4DataSent(true);
    setValidationError_27(null); // Clear validation error if data is successfully sent
  } catch (error) {
    console.error('Error adding Clarifier records:', error);
    setValidationError_27('Error adding Clarifier records.');
  }
};

  
const handleSubmitAutoSampler_2 = async () => {
  try {
    for (const autoSampler_2 of autoSampler_2Statuses) {
      if (autoSampler_2.status === 'E' && (!autoSampler_2.note || autoSampler_2.note.trim() === '' || autoSampler_2.note.trim() === '-')) {
        setValidationError_28(`*** Please enter a note for machine ${autoSampler_2.machine_name} with status 'E'. ***`);
        return; // Prevent submission
      }
    }

    const formattedDate = recordDate ? recordDate.toISOString().split('T')[0] : null;
    for (const autoSampler_2 of autoSampler_2Statuses) {
      const response = await fetch('https://jb-api-1.onrender.com/api/auto_sampler', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          machine_name: autoSampler_2.machine_name,
          record_date: formattedDate,
          record_time: recordTime,
          status: autoSampler_2.status,
          T: autoSampler_2.T,
          note: autoSampler_2.note,
        }),
      });

      if (!response.ok) {
        setValidationError_28(`Failed to add record for machine ${autoSampler_2.machine_name}`);
        return;
      }
    }
    console.log('All AutoSampler_2 records added successfully');
    setIsAutoSampler_2DataSent(true);
    setValidationError_28(null); // Clear validation error if data is successfully sent
  } catch (error) {
    console.error('Error adding AutoSampler_2 records:', error);
    setValidationError_28('Error adding AutoSampler_2 records.');
  }
};


const handleSubmitFan5 = async () => {
  try {
    for (const fan5 of fan5Statuses) {
      if (fan5.status === 'E' && (!fan5.note || fan5.note.trim() === '' || fan5.note.trim() === '-')) {
        setValidationError_29(`*** Please enter a note for machine ${fan5.machine_name} with status 'E'. ***`);
        return; // Prevent submission
      }
    }

    const formattedDate = recordDate ? recordDate.toISOString().split('T')[0] : null;
    for (const fan5 of fan5Statuses) {
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
        setValidationError_29(`Failed to add record for machine ${fan5.machine_name}`);
        return;
      }
    }
    console.log('All Fan5 records added successfully');
    setIsVentilationFan5DataSent(true);
    setValidationError_29(null); // Clear validation error if data is successfully sent
  } catch (error) {
    console.error('Error adding Fan5 records:', error);
    setValidationError_29('Error adding Fan5 records.');
  }
};

const handleSubmitFan5_2 = async () => {
  try {
    for (const fan5_2 of fan5_2Statuses) {
      if (fan5_2.status === 'E' && (!fan5_2.note || fan5_2.note.trim() === '' || fan5_2.note.trim() === '-')) {
        setValidationError_30(`*** Please enter a note for machine ${fan5_2.machine_name} with status 'E'. ***`);
        return; // Prevent submission
      }
    }

    const formattedDate = recordDate ? recordDate.toISOString().split('T')[0] : null;
    for (const fan5_2 of fan5_2Statuses) {
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
        setValidationError_30(`Failed to add record for machine ${fan5_2.machine_name}`);
        return;
      }
    }
    console.log('All Fan5_2 records added successfully');
    setIsVentilationFan5_2DataSent(true);
    setValidationError_30(null); // Clear validation error if data is successfully sent
  } catch (error) {
    console.error('Error adding Fan5_2 records:', error);
    setValidationError_30('Error adding Fan5_2 records.');
  }
};


const handleSubmitFan5_3 = async () => {
  try {
    for (const fan5_3 of fan5_3Statuses) {
      if (fan5_3.status === 'E' && (!fan5_3.note || fan5_3.note.trim() === '' || fan5_3.note.trim() === '-')) {
        setValidationError_31(`*** Please enter a note for machine ${fan5_3.machine_name} with status 'E'. ***`);
        return; // Prevent submission
      }
    }

    const formattedDate = recordDate ? recordDate.toISOString().split('T')[0] : null;
    for (const fan5_3 of fan5_3Statuses) {
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
        setValidationError_31(`Failed to add record for machine ${fan5_3.machine_name}`);
        return;
      }
    }
    console.log('All Fan5_3 records added successfully');
    setIsVentilationFan5_3DataSent(true);
    setValidationError_31(null); // Clear validation error if data is successfully sent
  } catch (error) {
    console.error('Error adding Fan5_3 records:', error);
    setValidationError_31('Error adding Fan5_3 records.');
  }
};


const handleSubmitFan5_4 = async () => {
  try {
    for (const fan5_4 of fan5_4Statuses) {
      if (fan5_4.status === 'E' && (!fan5_4.note || fan5_4.note.trim() === '' || fan5_4.note.trim() === '-')) {
        setValidationError_32(`*** Please enter a note for machine ${fan5_4.machine_name} with status 'E'. ***`);
        return; // Prevent submission
      }
    }

    const formattedDate = recordDate ? recordDate.toISOString().split('T')[0] : null;
    for (const fan5_4 of fan5_4Statuses) {
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
        setValidationError_32(`Failed to add record for machine ${fan5_4.machine_name}`);
        return;
      }
    }
    console.log('All Fan5_4 records added successfully');
    setIsVentilationFan5_4DataSent(true);
    setValidationError_32(null); // Clear validation error if data is successfully sent
  } catch (error) {
    console.error('Error adding Fan5_4 records:', error);
    setValidationError_32('Error adding Fan5_4 records.');
  }
};


const handleSubmitFan5_5 = async () => {
  try {
    for (const fan5_5 of fan5_5Statuses) {
      if (fan5_5.status === 'E' && (!fan5_5.note || fan5_5.note.trim() === '' || fan5_5.note.trim() === '-')) {
        setValidationError_33(`*** Please enter a note for machine ${fan5_5.machine_name} with status 'E'. ***`);
        return; // Prevent submission
      }
    }

    const formattedDate = recordDate ? recordDate.toISOString().split('T')[0] : null;
    for (const fan5_5 of fan5_5Statuses) {
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
        setValidationError_33(`Failed to add record for machine ${fan5_5.machine_name}`);
        return;
      }
    }
    console.log('All Fan5_5 records added successfully');
    setIsVentilationFan5_5DataSent(true);
    setValidationError_33(null); // Clear validation error if data is successfully sent
  } catch (error) {
    console.error('Error adding Fan5_5 records:', error);
    setValidationError_33('Error adding Fan5_5 records.');
  }
};


const handleSubmitFan5_6 = async () => {
  try {
    for (const fan5_6 of fan5_6Statuses) {
      if (fan5_6.status === 'E' && (!fan5_6.note || fan5_6.note.trim() === '' || fan5_6.note.trim() === '-')) {
        setValidationError_34(`*** Please enter a note for machine ${fan5_6.machine_name} with status 'E'. ***`);
        return; // Prevent submission
      }
    }

    const formattedDate = recordDate ? recordDate.toISOString().split('T')[0] : null;
    for (const fan5_6 of fan5_6Statuses) {
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
        setValidationError_34(`Failed to add record for machine ${fan5_6.machine_name}`);
        return;
      }
    }
    console.log('All Fan5_6 records added successfully');
    setIsVentilationFan5_6DataSent(true);
    setValidationError_34(null); // Clear validation error if data is successfully sent
  } catch (error) {
    console.error('Error adding Fan5_6 records:', error);
    setValidationError_34('Error adding Fan5_6 records.');
  }
};

const handleSubmitFan5_7 = async () => {
  try {
    for (const fan5_7 of fan5_7Statuses) {
      if (fan5_7.status === 'E' && (!fan5_7.note || fan5_7.note.trim() === '' || fan5_7.note.trim() === '-')) {
        setValidationError_35(`*** Please enter a note for machine ${fan5_7.machine_name} with status 'E'. ***`);
        return; // Prevent submission
      }
    }

    const formattedDate = recordDate ? recordDate.toISOString().split('T')[0] : null;
    for (const fan5_7 of fan5_7Statuses) {
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
        setValidationError_35(`Failed to add record for machine ${fan5_7.machine_name}`);
        return;
      }
    }
    console.log('All Fan5_7 records added successfully');
    setIsVentilationFan5_7DataSent(true);
    setValidationError_35(null); // Clear validation error if data is successfully sent
  } catch (error) {
    console.error('Error adding Fan5_7 records:', error);
    setValidationError_35('Error adding Fan5_7 records.');
  }
};


const handleSubmitDrainagePump2 = async () => {
  try {
    for (const drainagePump2 of drainagePump2Statuses) {
      if (drainagePump2.status === 'E' && (!drainagePump2.note || drainagePump2.note.trim() === '' || drainagePump2.note.trim() === '-')) {
        setValidationError_36(`*** Please enter a note for machine ${drainagePump2.machine_name} with status 'E'. ***`);
        return; // Prevent submission
      }
    }

    const formattedDate = recordDate ? recordDate.toISOString().split('T')[0] : null;
    for (const drainagePump2 of drainagePump2Statuses) {
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
        setValidationError_36(`Failed to add record for machine ${drainagePump2.machine_name}`);
        return;
      }
    }
    console.log('All DrainagePump2 records added successfully');
    setIsDrainagePump2DataSent(true);
    setValidationError_36(null); // Clear validation error if data is successfully sent
  } catch (error) {
    console.error('Error adding DrainagePump2 records:', error);
    setValidationError_36('Error adding DrainagePump2 records.');
  }
};


const handleSubmitScrumPump = async () => {
  try {
    for (const scrumPump of scrumPumpStatuses) {
      if (scrumPump.status === 'E' && (!scrumPump.note || scrumPump.note.trim() === '' || scrumPump.note.trim() === '-')) {
        setValidationError_37(`*** Please enter a note for machine ${scrumPump.machine_name} with status 'E'. ***`);
        return; // Prevent submission
      }
    }

    const formattedDate = recordDate ? recordDate.toISOString().split('T')[0] : null;
    for (const scrumPump of scrumPumpStatuses) {
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
        setValidationError_37(`Failed to add record for machine ${scrumPump.machine_name}`);
        return;
      }
    }
    console.log('All ScrumPump records added successfully');
    setIsScrumPumpDataSent(true);
    setValidationError_37(null); // Clear validation error if data is successfully sent
  } catch (error) {
    console.error('Error adding ScrumPump records:', error);
    setValidationError_37('Error adding ScrumPump records.');
  }
};

const handleSubmitHiLowWaterPump = async () => {
  try {
    for (const hiLowWaterPump of hiLowWaterPumpStatuses) {
      if (hiLowWaterPump.status === 'E' && (!hiLowWaterPump.note || hiLowWaterPump.note.trim() === '' || hiLowWaterPump.note.trim() === '-')) {
        setValidationError_38(`*** Please enter a note for machine ${hiLowWaterPump.machine_name} with status 'E'. ***`);
        return; // Prevent submission
      }
    }

    const formattedDate = recordDate ? recordDate.toISOString().split('T')[0] : null;
    for (const hiLowWaterPump of hiLowWaterPumpStatuses) {
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
        setValidationError_38(`Failed to add record for machine ${hiLowWaterPump.machine_name}`);
        return;
      }
    }
    console.log('All HiLowWaterPump records added successfully');
    setIsHiLowWaterPumpDataSent(true);
    setValidationError_38(null); // Clear validation error if data is successfully sent
  } catch (error) {
    console.error('Error adding HiLowWaterPump records:', error);
    setValidationError_38('Error adding HiLowWaterPump records.');
  }
};


const handleSubmitCWRWWaterPump = async () => {
  try {
    for (const cWRWWaterPump of cWRWWaterPumpStatuses) {
      if (cWRWWaterPump.status === 'E' && (!cWRWWaterPump.note || cWRWWaterPump.note.trim() === '' || cWRWWaterPump.note.trim() === '-')) {
        setValidationError_39(`*** Please enter a note for machine ${cWRWWaterPump.machine_name} with status 'E'. ***`);
        return; // Prevent submission
      }
    }

    const formattedDate = recordDate ? recordDate.toISOString().split('T')[0] : null;
    for (const cWRWWaterPump of cWRWWaterPumpStatuses) {
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
        setValidationError_39(`Failed to add record for machine ${cWRWWaterPump.machine_name}`);
        return;
      }
    }
    console.log('All CWRWWaterPump records added successfully');
    setIsCWRWWaterPumpDataSent(true);
    setValidationError_39(null); // Clear validation error if data is successfully sent
  } catch (error) {
    console.error('Error adding CWRWWaterPump records:', error);
    setValidationError_39('Error adding CWRWWaterPump records.');
  }
};

const handleSubmitDrainagePump1 = async () => {
  try {
    for (const drainagePump1 of drainagePump1Statuses) {
      if (drainagePump1.status === 'E' && (!drainagePump1.note || drainagePump1.note.trim() === '' || drainagePump1.note.trim() === '-')) {
        setValidationError_40(`*** Please enter a note for machine ${drainagePump1.machine_name} with status 'E'. ***`);
        return; // Prevent submission
      }
    }

    const formattedDate = recordDate ? recordDate.toISOString().split('T')[0] : null;
    for (const drainagePump1 of drainagePump1Statuses) {
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
        setValidationError_40(`Failed to add record for machine ${drainagePump1.machine_name}`);
        return;
      }
    }
    console.log('All DrainagePump1 records added successfully');
    setIsDrainagePump1DataSent(true);
    setValidationError_40(null); // Clear validation error if data is successfully sent
  } catch (error) {
    console.error('Error adding DrainagePump1 records:', error);
    setValidationError_40('Error adding DrainagePump1 records.');
  }
};

const handleSubmitEffluentPump = async () => {
  try {
    for (const effluentPump of effluentPumpStatuses) {
      if (effluentPump.status === 'E' && (!effluentPump.note || effluentPump.note.trim() === '' || effluentPump.note.trim() === '-')) {
        setValidationError_41(`*** Please enter a note for machine ${effluentPump.machine_name} with status 'E'. ***`);
        return; // Prevent submission
      }
    }

    const formattedDate = recordDate ? recordDate.toISOString().split('T')[0] : null;
    for (const effluentPump of effluentPumpStatuses) {
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
        setValidationError_41(`Failed to add record for machine ${effluentPump.machine_name}`);
        return;
      }
    }
    console.log('All EffluentPump records added successfully');
    setIsEffluentPumpDataSent(true);
    setValidationError_41(null); // Clear validation error if data is successfully sent
  } catch (error) {
    console.error('Error adding EffluentPump records:', error);
    setValidationError_41('Error adding EffluentPump records.');
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

  setAirFlowStatuses(airFlowStatuses.map(status => ({ ...status, record_date: '', record_time: '', Flow: '', valve_percentage: '', note: ''})));
  setIsAirFlowDataSent(false);

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

  setAutoSampler_2Statuses(autoSampler_2Statuses.map(status => ({ ...status, record_date: '', record_time: '', status: '', T: '', note: '' })));
  setIsAutoSampler_2DataSent(false);

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

  setValidationError(null)
  setValidationError_2(null)
  setValidationError_3(null)
  setValidationError_4(null)
  setValidationError_5(null)
  setValidationError_6(null)
  setValidationError_7(null)
  setValidationError_8(null)


  // Clear localStorage
  localStorage.clear();

  setShowSections1(false);
  setShowSections2(false);
  setShowSections3(false);
  setShowSections4(false);
  setShowSections5(false);
  setShowSections6(false);
  setShowSections7(false);

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

const allSection_1Sent = () => {
  return isChillerDataSent && isChillerWaterPumpDataSent && isVentilationFan6DataSent && isBiofilterDataSent;
};
const allSection_2Sent = () => {
  return isGardenPumpDataSent && isInletPumpingDataSent && isVentilationInletPumpingDataSent && isInletGateDataSent && isCoarseScreenDataSent;
};
const allSection_3Sent = () => {
  return isVentilationFan3DataSent && isVentilationFan2DataSent && isVentilationFan1DataSent && isAutoSamplerDataSent && isVortexGridDataSent && isAirFlowDataSent;
};
const allSection_4Sent = () => {
  return isFineScreenDataSent && isDrainagePump3DataSent && isVentilationFan4DataSent && isAnoxicMixer1DataSent && isAnoxicMixer2DataSent && isAnoxicMixer3DataSent && isAnoxicMixer4DataSent && isSingleAirBlowerDataSent && isPositiveAirBlowerDataSent;
};
const allSection_5Sent = () => {
  return isClarifier1DataSent && isClarifier2DataSent && isClarifier3DataSent && isAutoSampler_2DataSent;
};
const allSection_6Sent = () => {
  return isVentilationFan5DataSent && isVentilationFan5_2DataSent && isVentilationFan5_3DataSent && isVentilationFan5_4DataSent && isVentilationFan5_5DataSent && isVentilationFan5_6DataSent && isVentilationFan5_7DataSent && isDrainagePump2DataSent && isScrumPumpDataSent;
};
const allSection_7Sent = () => {
  return isHiLowWaterPumpDataSent && isCWRWWaterPumpDataSent && isDrainagePump1DataSent && isEffluentPumpDataSent;
};


  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      
      <div
        style={{
          background: 'rgba(200, 200, 200, 0.1)',
          border: '1px solid rgba(200, 200, 200, 0.2)',
          borderRadius: '10px',
          margin: '20px',
          padding: '20px', // Add padding for better readability
        }}
      >
        <h2 className={styles.title}>แบบบันทึกการเดินระบบประจำวัน - ตรวจเช็คสภาพทั่วไปของเครื่องจักร (Daily Check Sheet)</h2>
        <h3 className={styles.subtitle}>FM-OP-01-06.REV 06</h3>
      </div>
      

      <form onSubmit={handleSubmit} className={styles.form}>
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
                      popperPlacement="bottom" // Set popperPlacement to "right"
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

{/* Show/Hide Section 1 Button */}
{!allSection_1Sent() && (
  <>  
          {showSections1 && (
          <>
          {/* Chiller field */}
          <h3>Chiller</h3>
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
                      disabled={isChillerDataSent}
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
          {isChillerDataSent && <div className="alert">Chiller data sent successfully</div>}
          {validationError && <div className={styles.validationError}>{validationError}</div>}

          {/* Chiller Water Pump field */}
          <h3>Chiller Water Pump </h3>
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
                        placeholder="T (°C)"
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
          {validationError_2 && <div className={styles.validationError}>{validationError_2}</div>}

          {/* Ventilation Fan Room 6 field */}
          <h3>Ventilation Fan Room 6 </h3>
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
                        placeholder="T (°C)"
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
          {validationError_3 && <div className={styles.validationError}>{validationError_3}</div>}

          {/* Biofilter field */}
          <h3>Biofilter </h3>
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
          {validationError_4 && <div className={styles.validationError}>{validationError_4}</div>}

          </>
          )}
          
          
              <button type="button" className={styles.Hidebutton} onClick={handleSaveSection1}>
                    {showSections1 ? 'Hide Section 1' : 'Show Section 1'}
              </button>
        </>
      )}         
          
{/* Show/Hide Section 2 Button */}
{!allSection_2Sent() && (
  <>
          {showSections2 && (
            <>
              {/* Garden Pump field */}
                <h3>Garden Pump </h3>
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
                {validationError_5 && <div className={styles.validationError}>{validationError_5}</div>}

              {/* Inlet Pumping field */}
                <h3>Inlet Pumping </h3>
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
                            placeholder="T (°C)"
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
                {validationError_6 && <div className={styles.validationError}>{validationError_6}</div>}

              {/* Ventilation Inlet Pumping field */}
                <h3>Ventilation Inlet Pumping </h3>
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
                            placeholder="T (°C)"
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
                {validationError_7 && <div className={styles.validationError}>{validationError_7}</div>}

              {/* Inlet Gate field */}
                <h3>Inlet Gate </h3>
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
                {validationError_8 && <div className={styles.validationError}>{validationError_8}</div>}

              {/* Coarse Screen field */}
                <h3>Coarse Screen </h3>
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
                {validationError_9 && <div className={styles.validationError}>{validationError_9}</div>}
            </>
          )}  
          <button type="button" className={styles.Hidebutton} onClick={handleSaveSection2}>
                {showSections2 ? 'Hide Section 2' : 'Show Section 2'}
          </button>
          </>
      )} 
{/* Show/Hide Section 3 Button */}
{!allSection_3Sent() && (
  <> 

          {showSections3 && (
            <>
            {/* fan 3 field */}
            <h3>Ventilation Fan 3 </h3>
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
                  placeholder="T (°C)"
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
            {validationError_10 && <div className={styles.validationError}>{validationError_10}</div>}

            {/* fan 2 field */}
            <h3>Ventilation Fan 2 </h3>
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
                  placeholder="T (°C)"
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
            {validationError_11 && <div className={styles.validationError}>{validationError_11}</div>}

            {/* fan 1 field */}
            <h3>Ventilation Fan 1 </h3>
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
                  placeholder="T (°C)"
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
            {validationError_12 && <div className={styles.validationError}>{validationError_12}</div>}

            {/* Auto Sampler field */}
            <h3>Auto Sampler </h3>
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
                  placeholder="T (°C)"
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
            {validationError_13 && <div className={styles.validationError}>{validationError_13}</div>}

            {/* Vortex Grit field */}
            <h3>Vortex Grit </h3>
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
                  placeholder="T (°C)"
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
            {validationError_14 && <div className={styles.validationError}>{validationError_14}</div>}

            {/* Air Flow field */}
            <h3>Air Flow </h3>
            {airFlowStatuses.map((airFlow, index) => (
              <div key={index} className={styles.fieldGroup}>
                <label className={styles.label} htmlFor={`flow-${airFlow.machine_name}`}>{airFlow.machine_name}</label>
                <input
                  type="text"
                  id={`flow-${airFlow.machine_name}`}
                  className={styles.input}
                  value={airFlow.Flow}
                  onChange={(e) => {
                    const newStatuses = [...airFlowStatuses];
                    newStatuses[index] = { ...airFlow, Flow: e.target.value };
                    setAirFlowStatuses(newStatuses);
                  }}
                  placeholder="Flow"
                  disabled={isAirFlowDataSent}
                />
                <input
                  type="text"
                  value={airFlow.valve_percentage}
                  onChange={(e) => {
                    const newStatuses = [...airFlowStatuses];
                    newStatuses[index].valve_percentage = e.target.value;
                    setAirFlowStatuses(newStatuses);
                  }}
                  className={styles.input}
                  placeholder="Valve Percentage"
                  disabled={isAirFlowDataSent}
                />
                <input
                  type="text"
                  value={airFlow.note}
                  onChange={(e) => {
                    const newStatuses = [...airFlowStatuses];
                    newStatuses[index].note = e.target.value;
                    setAirFlowStatuses(newStatuses);
                  }}
                  className={styles.input}
                  placeholder="Note"
                  disabled={isAirFlowDataSent}
                />
              </div>
            ))}
            <button type="button" className={styles.button} onClick={handleSubmitAirFlow} disabled={isAirFlowDataSent}>Submit Air Flow Data</button>
            {isAirFlowDataSent && <div className={styles.alert}>Air Flow data sent successfully</div>}
        

            </>
          )} 
          <button type="button" className={styles.Hidebutton} onClick={handleSaveSection3}>
                {showSections3 ? 'Hide Section 3' : 'Show Section 3'}
          </button>

          </>
      )}  

{/* Show/Hide Section 4 Button */}
{!allSection_4Sent() && (
  <>

          {showSections4 && (
            <>
            {/* Fine Screen field */}
            <h3>Fine Screen </h3>
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
            {validationError_15 && <div className={styles.validationError}>{validationError_15}</div>}
            
            {/* Drainage Pump 3 field */}
            <h3>Drainage Pump 3 </h3>
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
                  placeholder="T (°C)"
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
            {validationError_16 && <div className={styles.validationError}>{validationError_16}</div>}
            
            {/* Fan 4 field */}
            <h3>Fan 4 </h3>
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
                  placeholder="T (°C)"
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
            {validationError_17 && <div className={styles.validationError}>{validationError_17}</div>}

            {/* Anoxic Mixer 1 field */}
            <h3>Anoxic Mixer 1 </h3>
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
                    placeholder="T (°C)"
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
              {validationError_18 && <div className={styles.validationError}>{validationError_18}</div>}
              
              {/* Anoxic Mixer 2 field */}
              <h3>Anoxic Mixer 2 </h3>
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
                    placeholder="T (°C)"
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
              {validationError_19 && <div className={styles.validationError}>{validationError_19}</div>}

              {/* Anoxic Mixer 3 field */}
              <h3>Anoxic Mixer 3 </h3>
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
                    placeholder="T (°C)"
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
              {validationError_20 && <div className={styles.validationError}>{validationError_20}</div>}

              {/* Anoxic Mixer 4 field */}
              <h3>Anoxic Mixer 4 </h3>
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
                    placeholder="T (°C)"
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
              {validationError_21 && <div className={styles.validationError}>{validationError_21}</div>}

              {/* Single Air Blower field */}
              <h3>Single Air Blower </h3>
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
                    placeholder="T (°C)"
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
              {validationError_22 && <div className={styles.validationError}>{validationError_22}</div>}

              {/* Positive Air Blower field */}
              <h3>Positive Air Blower </h3>
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
                    placeholder="T (°C)"
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
              {validationError_23 && <div className={styles.validationError}>{validationError_23}</div>}

            </>
          )}
          <button type="button" className={styles.Hidebutton} onClick={handleSaveSection4}>
                {showSections4 ? 'Hide Section 4' : 'Show Section 4'}
          </button>

        </>
      )}  
{/* Show/Hide Section 5 Button */}
{!allSection_5Sent() && (
  <>

          {showSections5 && (
            <>

            {/* Clarifier field */}
            <h3>Clarifier </h3>
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
            {validationError_24 && <div className={styles.validationError}>{validationError_24}</div>}
            
            {/* Clarifier2 field */}
            <h3>Clarifier2 </h3>
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
            {validationError_25 && <div className={styles.validationError}>{validationError_25}</div>}


            {/* Clarifier3 field */}
            <h3>Clarifier3 </h3>
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
            {validationError_26 && <div className={styles.validationError}>{validationError_26}</div>}
            
            {/* Clarifier4 field */}
            <h3>Clarifier4 </h3>
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
            {validationError_27 && <div className={styles.validationError}>{validationError_27}</div>}

            {/* AutoSampler_2 field */}
            <h3>AutoSampler_2 </h3>
            {autoSampler_2Statuses.map((autoSampler_2, index) => (
              <div key={index} className={styles.fieldGroup}>
                <label className={styles.label} htmlFor={`status-${autoSampler_2.machine_name}`}>{autoSampler_2.machine_name}</label>
                <select
                  id={`status-${autoSampler_2.machine_name}`}
                  className={styles.input}
                  value={autoSampler_2.status}
                  onChange={(e) => {
                    const newStatuses = [...autoSampler_2Statuses];
                    newStatuses[index] = { ...autoSampler_2, status: e.target.value };
                    setAutoSampler_2Statuses(newStatuses);
                  }}
                  disabled={isAutoSampler_2DataSent}
                >
                  <option value="" disabled>Select Status</option>
                  <option value="R">R</option>
                  <option value="N">N</option>
                  <option value="E">E</option>
                  <option value="F">F</option>
                </select>
                <input
                  type="text"
                  value={autoSampler_2.T}
                  onChange={(e) => {
                    const newStatuses = [...autoSampler_2Statuses];
                    newStatuses[index].T = e.target.value;
                    setAutoSampler_2Statuses(newStatuses);
                  }}
                  className={styles.input}
                  placeholder="T (°C)"
                />
                <input
                  type="text"
                  value={autoSampler_2.note}
                  onChange={(e) => {
                    const newStatuses = [...autoSampler_2Statuses];
                    newStatuses[index].note = e.target.value;
                    setAutoSampler_2Statuses(newStatuses);
                  }}
                  className={styles.input}
                  placeholder="Note"
                />
              </div>
            ))}
            <button type="button" className={styles.button} onClick={handleSubmitAutoSampler_2} disabled={isAutoSampler_2DataSent}>Submit AutoSampler_2 Data</button>
            {isAutoSampler_2DataSent && <div className={styles.alert}>AutoSampler_2 data sent successfully</div>}
            {validationError_28 && <div className={styles.validationError}>{validationError_28}</div>}

            </>
        )}

          <button type="button" className={styles.Hidebutton} onClick={handleSaveSection5}>
                {showSections5 ? 'Hide Section 5' : 'Show Section 5'}
          </button>

        </>
      )}  
{/* Show/Hide Section 6 Button */}
{!allSection_6Sent() && (
  <>
          {showSections6 && (
            <>
            {/* Fan5 field */}
            <h3>Ventilation Fan Room 5 (เครื่องจักร)</h3>
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
                        <option value="" disabled>Select Status (เครื่องจักร)</option>
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
            {validationError_29 && <div className={styles.validationError}>{validationError_29}</div>}

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
                        <option value="" disabled>Select Status (เครื่องจักร)</option>
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
            {validationError_30 && <div className={styles.validationError}>{validationError_30}</div>}

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
                        <option value="" disabled>Select Status (เครื่องจักร)</option>
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
            {validationError_31 && <div className={styles.validationError}>{validationError_31}</div>}

            {/* Fan5_4 field */}
            <h3>Ventilation Fan Room 5 (ตู้ไฟ)</h3>
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
                        <option value="" disabled>Select Status (ตู้ไฟ)</option>
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
            {validationError_32 && <div className={styles.validationError}>{validationError_32}</div>}

            {/* Fan5_5 field */}
            <h3>Ventilation Fan Room 5_5 </h3>
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
                        <option value="" disabled>Select Status (ตู้ไฟ)</option>
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
            {validationError_33 && <div className={styles.validationError}>{validationError_33}</div>}

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
                        <option value="" disabled>Select Status (ตู้ไฟ)</option>
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
            {validationError_34 && <div className={styles.validationError}>{validationError_34}</div>}

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
                        <option value="" disabled>Select Status (ตู้ไฟ)</option>
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
            {validationError_35 && <div className={styles.validationError}>{validationError_35}</div>}

            {/* DrainagePump2 field */}
            <h3>Drainage Pump </h3>
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
                        placeholder="T (°C)"
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
            {validationError_36 && <div className={styles.validationError}>{validationError_36}</div>}

            {/* ScrumPump field */}
            <h3>Scrum Pump </h3>
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
                        placeholder="T (°C)"
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
            {validationError_37 && <div className={styles.validationError}>{validationError_37}</div>}

            </>
        )}

        <button type="button" className={styles.Hidebutton} onClick={handleSaveSection6}>
              {showSections6 ? 'Hide Section 6' : 'Show Section 6'}
        </button>

        </>
      )}  
      
{/* Show/Hide Section 7 Button */}
{!allSection_7Sent() && (
  <>

        {showSections7 && (
          <>
          {/* HiLowWaterPump field */}
          <h3>Hi-Low Water Pump </h3>
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
          {validationError_38 && <div className={styles.validationError}>{validationError_38}</div>}

          {/* CWRW Water Pump field */}
          <h3>CWRW Water Pump </h3>
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
          {validationError_39 && <div className={styles.validationError}>{validationError_39}</div>}

          {/* Drainage Pump 1 field */}
          <h3>Drainage Pump 1 </h3>
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
                placeholder="T (°C)"
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
          {validationError_40 && <div className={styles.validationError}>{validationError_40}</div>}

          {/* EffluentPump field */}
          <h3>Effluent Pump </h3>
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
                      placeholder="T (°C)"
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
          {validationError_41 && <div className={styles.validationError}>{validationError_41}</div>}

          </>
        )}
        <button type="button" className={styles.Hidebutton} onClick={handleSaveSection7}>
              {showSections7 ? 'Hide Section 7' : 'Show Section 7'}
        </button>

        </>
      )}  

        <button type="button" className={styles.button} onClick={handleComplete}>Complete</button>
      </form>
    </div>
  );
};

export default StatusRecordForm;

