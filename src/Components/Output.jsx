import React from 'react'
import style from './Output.module.css'
export const Output = ({list,page,setPage,total,setTotal}) => {
  return (
    <div className={style.output_div}>
        {
            list.map((emp)=>{
                return(
                    <div key={emp.id} className={style.output}>
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
        <button onClick={()=>setPage(page-1)} disabled={page===1} className={style.button}>{"<"}</button>
        <button onClick={()=>setPage(page+1)} disabled={page===Math.ceil(total/2)} className={style.button}>{">"}</button>
    </div>
  )
}
