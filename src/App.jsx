import React, { useState } from "react";
import ComplaintForm from "./ComplaintForm";

function App() {
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (formData) => {
    // Validate form data
    if (
      !formData.name ||
      (!formData.email && !formData.phone) ||
      !formData.message
    ) {
      alert("โปรดกรอกข้อมูลให้ครบถ้วน");
      return;
    }

    if (formData.email && !validateEmail(formData.email)) {
      alert("รูปแบบอีเมลไม่ถูกต้อง");
      return;
    }

    if (formData.phone && !validatePhone(formData.phone)) {
      alert("รูปแบบเบอร์มือถือไม่ถูกต้อง");
      return;
    }

    // Set submitted data
    setSubmittedData(formData);

    // Show alert message
    alert(`ข้อความร้องเรียน: ${formData.message}`);

    // Log form data
    console.log(JSON.stringify(formData));
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
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-4">
        แบบฟอร์มรับเรื่องร้องเรียน
      </h1>
      <ComplaintForm onSubmit={handleSubmit} />
      {/* {submittedData && (
        <div className="mt-4">
          <h2 className="text-xl font-semibold mb-2">ข้อมูลที่ส่ง:</h2>
          <pre>{JSON.stringify(submittedData, null, 2)}</pre>
        </div>
      )} */}
    </div>
  );
}

export default App;
