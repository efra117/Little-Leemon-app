import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
// import BookingPage from "./components/Confirmation/BookingPage";
import Ourstory from './components/About/Ourstory';
import Underconstruction from './components/Underconstruction';
import Menu from './components/menu/Menu';
import Header from './components/Header/Header';
import Confirmation from './components/Confirmation/Confirmation';
import BookingForm from './components/reservation/BookingForm';
import BookingPage from './components/Confirmation/BookingPage';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<Ourstory />} />
        <Route
          path="/reservation"
          element={<BookingPage />}
        />
        <Route
          path="/login"
          element={<Underconstruction />}
        />
        <Route path="/menu" element={<Menu />} />
        <Route path='/confirmation' element={<Confirmation/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
