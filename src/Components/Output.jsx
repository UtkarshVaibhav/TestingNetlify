import React from 'react'

export const Output = ({list}) => {
  return (
    <div>
        {
            list.map((emp)=>{
                return(
                    <div key={emp.id}>
                        Name: {emp.username}<br/>
                        Age: {emp.age} <br />
                        Address: {emp.address} <br />
                        Department: {emp.department} <br />
                        Salary : {emp.salary} <br />
                        {
                        emp.status?"Married":"Single"
                        }    
                    </div>
                );
            })
        }
    </div>
  )
}
