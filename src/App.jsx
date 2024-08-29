import React, { useState } from 'react';
import ComplaintForm from './components/ComplaintForm';
import Modal from './components/Modal';

function App() {
  const [submittedData, setSubmittedData] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const handleSubmit = (formData) => {
    // Validate form data
    if (
      !formData.name ||
      (!formData.email && !formData.phone) ||
      !formData.message
    ) {
      setModalMessage('โปรดกรอกข้อมูลให้ครบถ้วน');
      setModalOpen(true);
      return;
    }

    if (formData.name && !validateName(formData.name)) {
      setModalMessage('ชื่อหรือนามสกุลไม่ถูกต้อง');
      setModalOpen(true);
      return;
    }

    if (formData.email && !validateEmail(formData.email)) {
      setModalMessage('รูปแบบอีเมลไม่ถูกต้อง');
      setModalOpen(true);
      return;
    }

    if (formData.phone && !validatePhone(formData.phone)) {
      setModalMessage('รูปแบบเบอร์มือถือไม่ถูกต้อง');
      setModalOpen(true);
      return;
    }

    if (formData.message.length > 1000) {
      setModalMessage('ข้อความร้องเรียนยาวเกินกว่าที่กำหนด');
      setModalOpen(true);
      return;
    }

    // Set submitted data
    setSubmittedData(formData);

    // Show success message
    setModalMessage(`ข้อความร้องเรียน: ${formData.message}`);
    setModalOpen(true);

    // Log form data
    console.log(JSON.stringify(formData));
  };

  // Function to validate name
  const validateName = (name) => {
    // Validate that there are spaces between the first and last name.
    if (!/\s/.test(name)) {
      return false;
    }

    // Validate that the first and last name do not have spaces at the beginning or end.
    if (/^\s|\s$/.test(name)) {
      return false;
    }

    // Validate that there are no digits in the name.
    if (/\d/.test(name)) {
      return false;
    }

    // Validate that there is at least 1 character appearing on each word.
    const words = name.split(' ');
    for (const word of words) {
      if (word.length < 1) {
        return false;
      }
    }

    return true;
  };

  // Function to validate email
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  // Function to validate phone number
  const validatePhone = (phone) => {
    const re = /^[0-9]{10}$/;
    return re.test(phone);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6 font-prompt">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-6 text-center">
          แบบฟอร์มรับเรื่องร้องเรียน
        </h1>
        <ComplaintForm onSubmit={handleSubmit} />
        <Modal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          message={modalMessage}
        />
      </div>
    </div>
  );
}

export default App;
