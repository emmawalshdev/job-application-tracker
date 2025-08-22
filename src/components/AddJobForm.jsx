import React, { useState } from "react";

const AddJobForm = ({ sendJobData }) => {
  const [formData, setFormData] = useState({
    company: "",
    position: "",
    date: "",
    status: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    sendJobData(formData);
    setFormData({ company: "", position: "", date: "", status: "" }); // reset form
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-white p-6 m-4 rounded-lg shadow-md max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
        Add Job Application
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="company"
          required
          value={formData.company}
          placeholder="Company"
          onChange={handleChange}
          className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="text"
          name="position"
          required
          value={formData.position}
          placeholder="Position"
          onChange={handleChange}
          className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="">--Status--</option>
          <option value="interview scheduled">Interview scheduled</option>
          <option value="rejected">Rejected</option>
          <option value="offer">Offer received</option>
          <option value="withdrawn">Application withdrawn</option>
        </select>
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddJobForm;
