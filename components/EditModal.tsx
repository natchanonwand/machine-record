import React, { useState } from 'react';
import styles from './EditModal.module.css'; // Import CSS module for styling

interface EditModalProps {
  record: Record;
  onSave: (updatedRecord: Record) => void;
  onClose: () => void;
}

interface Record {
  [key: string]: any;
  record_id: number;
  machine_name: string;
  record_date: string;
  record_time: string;
  status: string;
  A1?: string;
  A2?: string;
  A3?: string;
  T?: string;
  T1?: string;
  T2?: string;
  A_motor1?: string;
  A_motor2?: string;
  A_scum?: string;
  A_pump?: string;
  T_motor?: string;
  T_scum?: string;
  T_pump?: string;
  gate_percentage?: string;
  Flow?: string;
  valve_percentage?: string;
  note: string;
}

const EditModal: React.FC<EditModalProps> = ({ record, onSave, onClose }) => {
  const [formData, setFormData] = useState<Record>({ ...record });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    onSave(formData);
  };

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <span className={styles.close} onClick={onClose}>&times;</span>
        <h2>Edit Record</h2>
        <form className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="machine_name" className={styles.formLabel}>Machine Name</label>
            <input type="text" id="machine_name" name="machine_name" value={formData.machine_name} onChange={handleInputChange} disabled className={styles.formInput} />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="record_date" className={styles.formLabel}>Record Date</label>
            <input type="date" id="record_date" name="record_date" value={formData.record_date} onChange={handleInputChange} className={styles.formInput} />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="record_time" className={styles.formLabel}>Record Time</label>
            <input type="time" id="record_time" name="record_time" value={formData.record_time} onChange={handleInputChange} className={styles.formInput} />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="status" className={styles.formLabel}>Status</label>
            <input type="text" id="status" name="status" value={formData.status} onChange={handleInputChange} className={styles.formInput} />
          </div>
          {['A1', 'A2', 'A3', 'T', 'T1', 'T2', 'A_motor1', 'A_motor2', 'A_scum', 'A_pump', 'T_motor', 'T_scum', 'T_pump', 'gate_percentage', 'Flow', 'valve_percentage'].map(field => (
            <div key={field} className={styles.formGroup}>
              <label htmlFor={field} className={styles.formLabel}>{field}</label>
              <input
                type="text"
                id={field}
                name={field}
                value={formData[field] || ''}
                onChange={handleInputChange}
                className={styles.formInput}
              />
            </div>
          ))}
          <div className={styles.formGroup}>
            <label htmlFor="note" className={styles.formLabel}>Note</label>
            <textarea id="note" name="note" value={formData.note} onChange={handleInputChange} className={styles.formTextarea}></textarea>
          </div>
          <button type="button" onClick={handleSubmit} className={styles.saveButton}>Save</button>
        </form>
      </div>
    </div>
  );
};

export default EditModal;
