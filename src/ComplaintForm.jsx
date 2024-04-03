import React, { useState } from "react";

const ComplaintForm = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, email, phone, message });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 font-prompt">
      <div>
        <label htmlFor="name" className="block font-semibold">
          ชื่อ-นามสกุล:
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="block w-full border border-gray-300 rounded-md px-3 py-2"
        />
      </div>
      <div>
        <label htmlFor="email" className="block font-semibold">
          อีเมล:
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="block w-full border border-gray-300 rounded-md px-3 py-2"
        />
      </div>
      <div>
        <label htmlFor="phone" className="block font-semibold">
          เบอร์มือถือ:
        </label>
        <input
          type="tel"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="block w-full border border-gray-300 rounded-md px-3 py-2"
        />
      </div>
      <div>
        <label htmlFor="message" className="block font-semibold">
          ข้อความที่ร้องเรียน:
        </label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="block w-full border border-gray-300 rounded-md px-3 py-2"
        ></textarea>
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        ส่งข้อร้องเรียน
      </button>
    </form>
  );
};

export default ComplaintForm;
