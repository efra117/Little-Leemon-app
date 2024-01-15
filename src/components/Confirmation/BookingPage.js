import React, { useState } from 'react'
import "./reservation.css"
import BookingForm from '../reservation/BookingForm';

const BookingPage = () => {
  const [bookingDetails, setBookingDetails] = useState("")
  const availableTimes = ["12", "2", "4", "6", "8"];

  
  const handleReservation = (formData) => {
    
    console.log('Form data in BookingPage:', formData);
    
    setBookingDetails(`your booking for date ${formData.date} has been successful!!`)
  };


  return (
    <div className="reserDiv">
      <h2 className="white-bold">Table Reservation</h2>
      <BookingForm availableTimes={availableTimes} onReservation={handleReservation}  />

      <div>{bookingDetails}</div>
    </div>
  );
};

export default BookingPage;