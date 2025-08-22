import React, { useEffect, useState } from "react";

const EditJobForm = ({ sendJobData, setEditFormShow, editRowId, formEntryToEdit }) => {
  const [formData, setFormData] = useState({
     company: "",
     position: "",
     status: ""  
});

  useEffect(() => {
    if (formEntryToEdit) {
      setFormData(formEntryToEdit);
    }
  }, [formEntryToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    sendJobData(editRowId, formData);
    setEditFormShow(false);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <form 
        onSubmit={handleSubmit} 
        className="bg-white p-6 rounded-lg shadow-lg w-96 flex flex-col gap-4"
      >
        <h2 className="text-xl font-bold text-gray-800 text-center">Edit Job</h2>
        
        <input
          type="text"
          name="company"
          value={formData.company}
          placeholder="Company"
          onChange={handleChange}
          className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        
        <input
          type="text"
          name="position"
          value={formData.position}
          placeholder="Position"
          onChange={handleChange}
          className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="">--Select Status--</option>
          <option value="Applied">Applied</option>
          <option value="Interview Scheduled">Interview Scheduled</option>
          <option value="Offer Received">Offer Received</option>
          <option value="Rejected">Rejected</option>
          <option value="Withdrawn">Withdrawn</option>
        </select>
        
        <div className="flex justify-end gap-2 mt-2">
          <button
            type="button"
            onClick={() => setEditFormShow(false)}
            className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditJobForm;
