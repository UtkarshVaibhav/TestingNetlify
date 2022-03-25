import React, { useEffect, useState } from 'react'
import { Form } from './Form'
import { Output } from './Output'

export const Dashboard = () => {
    const payload={
        username:"",
        age:"",
        address:"",
        department:"",
        salary:"",
        status: false
    }
    const [formData,setFormData]=useState(payload)
    const [list,setList]=useState([]);
    const handleChange=(e)=>{
        const {id,value,checked,type}=e.target;
        setFormData({
            ...formData,
            [id]: type==="checkbox"?checked:value,
        })
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        const formDatajson=JSON.stringify(formData);
        fetch('https://my-json-server.typicode.com/UtkarshVaibhav/ReactForm/employeeData',{
            method: "POST",
            body: formDatajson,
            headers:{
                "content-type":"application/json"
            }
        })
        .then(getData);
        setFormData(payload);
    }
    useEffect(()=>getData(),[]);
    const getData=()=>{
        fetch(`https://my-json-server.typicode.com/UtkarshVaibhav/ReactForm/employeeData`)
        .then((res)=>{            
            return res.json()
        })
        .then((res)=>setList(res))
        .catch((err)=>console.log(err))
    }
  return (
    <div>
        <Form handleChange={handleChange} formData={formData} handleSubmit={handleSubmit}/>
        <hr />
        <Output list={list}/>
    </div>
  )
}
