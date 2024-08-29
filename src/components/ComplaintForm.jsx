import React, { useState } from 'react';

const ComplaintForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, email, phone, message });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 max-w-lg mx-auto p-4 bg-white shadow-md rounded-lg"
    >
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          ชื่อ-นามสกุล:
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 text-gray-900 shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
          placeholder="กรุณากรอกชื่อ-นามสกุล"
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          อีเมล:
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 text-gray-900 shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
          placeholder="กรุณากรอกอีเมล"
        />
      </div>
      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-gray-700"
        >
          เบอร์มือถือ:
        </label>
        <input
          type="tel"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 text-gray-900 shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
          placeholder="กรุณากรอกเบอร์มือถือ"
        />
      </div>
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700"
        >
          ข้อความที่ร้องเรียน:
        </label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 text-gray-900 shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
          placeholder="กรุณากรอกข้อความที่ร้องเรียน"
          rows="4"
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        ส่งข้อร้องเรียน
      </button>
    </form>
  );
};

export default ComplaintForm;
