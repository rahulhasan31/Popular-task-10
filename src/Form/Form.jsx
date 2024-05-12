import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Tab from '../Tab/Tab';
import Table from '../Table/Table';
import Datepicker from "tailwind-datepicker-react"
import './Form.css'

const Form = () => {
    

const [data, setData]=useState(null)
const [formData, setFormData]=useState(false)

useEffect(()=>{
    fetch('./popular.json')
    .then(res=> res.json())
    .then(data=>
     
        setData(data.flightOffer)
        
        )
},[])
console.log('form',data)

const handleSearch=()=>{
    setFormData(true)
}
const [selectedDate, setSelectedDate] = useState('');

const handleDateChange = (event) => {
  setSelectedDate(event.target.value);
};
    return (
        <div className='divTop'>
            <div className='w-50'>
            <Tab/>
            <div className="divider divider-primary"></div>
            </div>
            <form className=" flex gap-5">
            <input type="text" placeholder="LHR" className="input input-bordered input-primary w-full max-w-40" />
            <input type="text" placeholder="CDG" className="input input-bordered input-primary w-full max-w-40" />
            <div className="flex flex-col items-center">
      
      <input
        className="input input-bordered input-primary w-full max-w-40"
        type="date"
        id="datepicker"
        value={selectedDate}
        onChange={handleDateChange}
      />
     
    </div>
    <select className="select select-primary w-full max-w-xs">
  <option disabled selected>Day -</option>
  <option>Saturday</option>
  <option>Sunday</option>
  <option>Monday</option>
  <option>Tuesday</option>
  <option>Wednesday</option>
  <option>Thursday</option>
  <option>Friday</option>
</select>
    <select className="select select-primary w-full max-w-xs">
  <option disabled selected>Day +</option>
  <option>Saturday</option>
  <option>Sunday</option>
  <option>Monday</option>
  <option>Tuesday</option>
  <option>Wednesday</option>
  <option>Thursday</option>
  <option>Friday</option>
</select>
    <select className="select select-primary w-full max-w-xs">
  <option disabled selected>Any Time</option>
  <option>8:00pm - 10:00pm</option>
  <option>11:00pm - 12:00pm</option>
  <option>1:00pm - 2:00pm</option>
  <option>3:00pm - 4:00pm</option>
  <option>5:00pm - 6:00pm</option>
  <option>7:00pm - 8:00pm</option>
  
</select>
    
   <p>+</p>
   <select className="select select-primary w-full max-w-xs">
  <option disabled selected>ADT</option>
  <option>8:00pm - 10:00pm</option>
 
  
</select>
   <select className="select select-primary w-full max-w-xs">
  <option disabled selected>1</option>
  <option>8:00pm - 10:00pm</option>

  
</select>
  
      </form>
      <div className="divider divider-primary"></div>

   <section className='flex justify-between' >
 <div>
 <div className=" flex gap-2 ">
  
   
  <input type="checkbox" defaultChecked className="checkbox checkbox-primary" />
  
<div>
  <h1 className='font-semibold'>Extra Opton</h1>
</div>
</div>
 </div>

<div>
<div className='flex gap-2  justify-center align-middle items-center'>
  <h1 className='font-semibold'>Environment</h1>
<input type="radio" name="radio-2" className="radio radio-primary" checked />
<h1 className='font-semibold'>Dummy</h1>
<input type="radio" name="radio-2" className="radio radio-primary" />
<h1 className='font-semibold '>Put</h1>
</div>
</div>

<div>
<div className='flex justify-end'>
    <button onClick={handleSearch} className='bg-blue-600 py-1 px-4 text-white rounded-sm font-semibold'>SEARCH</button>
</div>
</div>
   </section>

      <div className="divider divider-primary"></div>
       <div className='text-start mb-5'>
        <h1 className='text-xl font-semibold'>Data parsed SuccessFully</h1>
       </div>
      <div className="overflow-x-auto">
  {
    formData?<>
    <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr className='bg-gray-200'>
    
        <th>FLIGHT</th>
        <th>AIRCRAFT</th>
        <th>CLASS</th>
        <th>FARE</th>
        <th>ROUTE</th>
        <th>DEPARTURE</th>
        <th>ARRIVAL</th>
        <th>DURATION</th>
        <th>PRICE</th>
      </tr>
    </thead>
    <tbody>
  
 
    <Table  pupolarData={data} />
 
    </tbody>
  </table>
    </>:""
  }
</div>
    
        </div>
    );
};

export default Form;