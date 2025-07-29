import React from "react";

const AddJobForm = () => {
    return (
        <div>
            Add Job Application
            <input type="text" name="company" placeholder="Company"/>
            <input type="text" name="position" placeholder="Position"/>
            <input type="text" name="status" placeholder="Status"/>
            <button className="bg-blue">Add</button>
        </div>
    )
}

export default AddJobForm;