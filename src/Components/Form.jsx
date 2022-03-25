import React from 'react'

export const Form = ({handleChange,formData,handleSubmit}) => {
    const {username,age,address,department,salary,status}=formData;
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input id="username" type="text" placeholder='Enter Name' onChange={handleChange} value={username}/>
            <br />
            <input id="age" type="number" placeholder='Enter Age' onChange={handleChange} value={age}/>
            <br />
            <input id="address" type="text" placeholder='Enter Address' onChange={handleChange} value={address}/>
            <br />
            <label>Department
                <select id="department" onChange={handleChange} value={department}>
                    <option value="">Select Department</option>
                    <option value="hr">HR</option>
                    <option value="it">IT</option>
                    <option value="ops">Operations</option>
                </select>
            </label>
            <br />
            <input id="salary" type="text" placeholder='Enter Salary' onChange={handleChange} value={salary}/>
            <br />
            <label>Status Married?
                <input id="status" type="checkbox" onChange={handleChange} checked={status}/>
            </label>
            <br />
            <input type="submit" value="Save" />
        </form>
    </div>
  )
}
