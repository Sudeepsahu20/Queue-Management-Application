import { useState } from 'react'
import './App.css'
import QueueForm from './component/QueueForm';
import ShowData from './component/ShowData';

function App() {
const [queue,setQueue]=useState([]);

function removeFromQueue(id){
  setQueue(queue.filter((customer)=>(
    customer.id !== id
  )))
}

function addToQueue(customer){
 setQueue([...queue,{...customer,id:Date.now(),status:'waiting'}])
}

function updateStatus(id,newStatus){
 setQueue(queue.map((customer)=>(
  customer.id===id ? {...customer,status:newStatus}:customer
 )))
}
return (
   <div className='app'>
        <header>
          <h1>Queue Management application</h1>
          <p>Manage your customers efficiently</p>
        </header>
        <main>
         <QueueForm onAdd={addToQueue}/>
          <ShowData queue={queue} onUpdate={updateStatus} onRemove={removeFromQueue}/>
        </main>
   </div>
  )
}

export default App
