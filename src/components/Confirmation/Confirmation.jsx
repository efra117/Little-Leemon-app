import "./confirmation.css"
import BookingPage from "./BookingPage";
import { Link } from 'react-router-dom';

const Confirmation = () => {
    return(
        <main className="confirmation">
        <h1>Your reservation is done</h1>

        

        <Link to="/">
        <button>Return to home</button>
      </Link>
        </main>
    )
}

export default Confirmation;