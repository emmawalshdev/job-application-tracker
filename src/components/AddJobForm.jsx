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
                <input type="text" name="status"  value={formData.status} placeholder="Status" onChange={handleChange}/>
                <input type="submit" value="Submit" className="bg-blue"/>
            </form>

        </div>
    )
}

export default AddJobForm;