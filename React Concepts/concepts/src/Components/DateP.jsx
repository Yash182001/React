import React from 'react'
import DatePicker from 'react-datepicker'
import { useState } from 'react';
import "react-datepicker/dist/react-datepicker.css";



const DateP = () => {
    const [startDate, setStartDate] = useState(new Date());
  return (
    <>
    
    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
    
    </>
  )
}

export default DateP
