import React, {useEffect, useState} from "react";

const EditJobForm = ({sendJobData, setEditFormShow, editRowId, formEntryToEdit}) => {

    const [formData, setFormData] = useState({ company:"", position: "", status: ""});

    useEffect(() => {
        if(formEntryToEdit) {
            setFormData(formEntryToEdit);
        }
    }, [formEntryToEdit]);

    const handleSubmit = (e) => {
        e.preventDefault();
        sendJobData(editRowId, formData); // send to parent
        console.log(formData);
    }

    const handleChange = (e) => {
        setFormData({ 
            ...formData, 
            [e.target.name]: e.target.value,
        });
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
            <button onClick={() => setEditFormShow(false)}>close</button>
        </div>
    )
}

export default EditJobForm;