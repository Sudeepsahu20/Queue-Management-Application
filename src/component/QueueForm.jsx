import React,{useState} from 'react'
import {FaUserPlus} from "react-icons/fa"

const QueueForm = ({onAdd}) => {
    const[name,setName]=useState("");
     const[service,setService]=useState("");


     function handleSubmit(e){
        e.preventDefault();
      if(!name.trim() || !service.trim()) return;
        onAdd({name,service});
        setName("");
        setService("");
     }

  return (
    
        <form className='queue-form' onSubmit={handleSubmit}>
            <h2>Add to queue</h2>

            <div className='form-group'>
           <input type="text"
            placeholder='Enter your Name...' 
             onChange={(e)=>setName(e.target.value)}
              value={name}/>
            </div>

        <div className='form-group'>
        <select value={service} onChange={(e)=>setService(e.target.value)}>
            <option value="">Select Service</option>
            <option value="Consultation">Consultation</option>
            <option value="Payment">Payment</option>
            <option value="Support">Support</option>
        </select>
        </div>
        <button type="submit"> <FaUserPlus/>  Add Customer</button>
        
        </form>
  
  )
}

export default QueueForm