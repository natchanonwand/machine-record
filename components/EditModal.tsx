import React, { useState } from 'react';
import styles from './EditModal.module.css'; // Create a CSS module for styling the modal

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
        <form>
          <input type="text" name="machine_name" value={formData.machine_name} onChange={handleInputChange} disabled />
          <input type="date" name="record_date" value={formData.record_date} onChange={handleInputChange} />
          <input type="time" name="record_time" value={formData.record_time} onChange={handleInputChange} />
          <input type="text" name="status" value={formData.status} onChange={handleInputChange} />
          <textarea name="note" value={formData.note} onChange={handleInputChange}></textarea>
          <button type="button" onClick={handleSubmit}>Save</button>
        </form>
      </div>
    </div>
  );
};

export default EditModal;
