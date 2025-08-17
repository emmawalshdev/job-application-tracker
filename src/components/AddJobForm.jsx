import React, {useState} from "react";

const AddJobForm = ({sendJobData}) => {

    const [formData, setFormData] = useState({ company:"", position: "", status: ""});

    const handleSubmit = (e) => {
        e.preventDefault();
        sendJobData(formData); // send to parent
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value})
    }
    return (
        <div>
            Add Job Application
            <form onSubmit={handleSubmit}>
                <input type="text" name="company" value={formData.company} placeholder="Company" onChange={handleChange}/>
                <input type="text" name="position" value={formData.position} placeholder="Position" onChange={handleChange}/>
                <input type="date" value="2025-12-12" onChange={handleChange}/>
                <select name="status" id="job-status-select" value={formData.status} onChange={handleChange}>
                    <option value="">--Status--</option>
                    <option value="interview scheduled">Interview scheduled</option>
                    <option value="rejected">Rejected</option>
                    <option value="offer">Offer received</option>
                    <option value="withdrawn">Application withdrawn</option>
                </select>
                <input type="submit" value="Submit" className="bg-blue"/>
            </form>

        </div>
    )
}

export default AddJobForm;