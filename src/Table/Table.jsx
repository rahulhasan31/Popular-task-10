import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Table = ({pupolarData}) => {
    console.log("pupolarData", pupolarData);
    const [mainDaTa, SetMainData]=useState(null)
    const [ flight, Setflight]=useState(null)
    const [ segments, Setsegments]=useState(null)

    useEffect(()=>{
 
            pupolarData?.map(f=>{
                SetMainData(f)
            })
                
    },[pupolarData])
    useEffect(()=>{
 
        mainDaTa?.itineraries?.map(f=>{
            Setflight(f)
            })
                
    },[mainDaTa])
    useEffect(()=>{
 
        flight?.segments?.map(f=>{
            Setsegments(f)
            })
                
    },[mainDaTa])

    console.log('mainDaTa',mainDaTa);
    console.log('mainDaTa',flight);
    console.log('mainDaTa',segments);
    return (

      <>
     {
        pupolarData?.map((pupolar,index)=> <tr key={index} pupolar={pupolar}>
      
      {
        pupolar?.itineraries?.map((f,index)=> <td key={index}>

          {
              f.segments.map((air)=><h1>
              {air.marketingCarrier}
              {air.aircraft}
              </h1> )
          }
        </td>)
        }
      
        
      {
        pupolar?.itineraries?.map((f,index)=> <td key={index}>

          {
              f.segments.map((air)=><h1>
              {air.flightNumber}
              
              </h1> )
          }
        </td>)
        }
      {
        pupolar?.class?.map((f,index)=> <td key={index}>

         <>{f}</>
        </td>)
        }
      {
        pupolar?.fareBasis?.map((f,index)=> <td className="" key={index}>
           <span key={index}>
         
        {f}
        
      </span>
          

        </td>)
        }
        
        
        {
        pupolar?.itineraries?.map((f,index)=> <td key={index}>

          {
              f.segments.map((air)=><h1>
                {air.departure.iataCode}-
              {air.arrival.iataCode}
              
              </h1> )
          }
        </td>)
        }
        {
        pupolar?.itineraries?.map((f,index)=> <td key={index}>

          {
              f.segments.map((air)=><h1>
                 {air.departure.at}
              
             
              </h1> )
          }
        </td>)
        }
       
       {
        pupolar?.itineraries?.map((f,index)=> <td key={index}>

          {
              f.segments.map((air)=><h1>
                 {air.arrival.at}
              
             
              </h1> )
          }
        </td>)
        }
       {
        pupolar?.itineraries?.map((f,index)=> <td key={index}>

        {f.duration}
        </td>)
        }
       
        <td>
            {pupolar.price}
            <br />
            <button className='bg-blue-600 py-1 px-3 text-white rounded-sm'>SELECT</button>
            </td>
      </tr>)
     }
      </>
     
  
    );
};

export default Table