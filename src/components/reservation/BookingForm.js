import React, {useState} from 'react'

const BookingForm = (props) => {
  // Initialize state for form fields
  const [formData, setFormData] = useState({
    date: "",
    time: props.availableTimes[0],
    guests: 2,
    occasion: "bday",
  });

  // Handler function to update state when form fields change
  const handleInputChange = (e) => {
    const { id, value } = e.target;

    // Update the corresponding field in the state
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  // Handler function for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onReservation(formData);
  };

  return (
    <form className="reservationForm" onSubmit={handleSubmit}>
      <label htmlFor="date">Date</label>
      <input
        type="date"
        id="date"
        value={formData.date}
        onChange={handleInputChange}
      ></input>
      <label htmlFor="time">Time</label>
      <select
        name="time"
        id="time"
        value={formData.time}
        onChange={handleInputChange}
      >
        {props.availableTimes.map((e) => (
          <option value={Number(e)}>{e} PM</option>
        ))}
        {/* <option value="12">12:00 PM</option>
          <option value="2">2:00 PM</option>
          <option value="4">4:00 PM</option>
          <option value="6">6:00 PM</option>
          <option value="8">8:00 PM</option> */}
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        min="2"
        max="15"
        id="guests"
        value={formData.guests}
        onChange={handleInputChange}
      ></input>
      <label htmlFor="occasn">Occasion</label>
      <select
        name="Occasion"
        id="occasn"
        value={formData.occasion}
        onChange={handleInputChange}
      >
        <option value="bday">Birthday</option>
        <option value="aniversary">Aniversary</option>
      </select>
      <button className="buttongap" type="submit">
        {" "}
        Make a Reservation{" "}
      </button>
    </form>
  );
}

export default BookingForm