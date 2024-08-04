import React, { useEffect, useState } from 'react'

const Covid = () => {

   const [data, setData] = useState([]);

   const getCovidData = async () => {
      try {
         const res = await fetch('https://api.rootnet.in/covid19-in/stats/latest');
         const actualData = await res.json();
         console.log(actualData.data.regional[20]);
         setData(actualData.data.regional[20]);
      }
      catch(err) {
         console.log(err);
      }
   }

   useEffect(() => {
      getCovidData();
   }, []);

  return (
    <>
    <section>
      <h1>🔴 LIVE</h1>
      <h2>COVID-19 CORONAVIRUS TRACKER</h2>
      <ul>
         <li className='card1'>
            <div className='card_main'>
               <div className='card_inner'>
                  <p className='card_name'><span> OUR </span> STATE</p>
                  <p className='card_total card_small'>{data.loc}</p>
               </div>
            </div>
         </li>

         <li className='card2'>
            <div className='card_main'>
               <div className='card_inner'>
                  <p className='card_name'><span> CASES </span> INDIA CONFIRMED </p>
                  <p className='card_total card_small'>{data.confirmedCasesIndian}</p>
               </div>
            </div>
         </li>

         <li className='card3'>
            <div className='card_main'>
               <div className='card_inner'>
                  <p className='card_name'><span> CASES </span> FOREIGN CONFIRMED </p>
                  <p className='card_total card_small'>{data.confirmedCasesForeign}</p>
               </div>
            </div>
         </li>

         <li className='card4'>
            <div className='card_main'>
               <div className='card_inner'>
                  <p className='card_name'><span> PEOPLE </span> DISCHARGED</p>
                  <p className='card_total card_small'>{data.discharged}</p>
               </div>
            </div>
         </li>

         <li className='card5'>
            <div className='card_main'>
               <div className='card_inner'>
                  <p className='card_name'><span> PEOPLE </span> DEATHS</p>
                  <p className='card_total card_small'>{data.deaths}</p>
               </div>
            </div>
         </li>

         <li className='card6'>
            <div className='card_main'>
               <div className='card_inner'>
                  <p className='card_name'><span> CASES </span> TOTAL CONFIRMED</p>
                  <p className='card_total card_small'>{data.totalConfirmed}</p>
               </div>
            </div>
         </li>
      </ul>
    </section> 
    </>
  )
}

export default Covid
