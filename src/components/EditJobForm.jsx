import React, {useState} from "react";

const EditJobForm = ({sendJobData}) => {

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
            Edit Job
            <form onSubmit={handleSubmit}>
                <input type="text" name="company" value={formData.company} placeholder="Company" onChange={handleChange}/>
                <input type="text" name="position" value={formData.position} placeholder="Position" onChange={handleChange}/>
                <input type="text" name="status"  value={formData.status} placeholder="Status" onChange={handleChange}/>
                <input type="submit" value="Update" className="bg-blue"/>
            </form>

        </div>
    )
}

export default EditJobForm;