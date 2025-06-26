import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import CreateAccount from './pages/CreateAccount';
import About from './pages/About';
import Contact from './pages/Contact';
import CarDetails from './pages/CarDetails';
import UpdateAccount from './pages/UpdateAccount';
import DeleteAccount from './pages/DeleteAccount';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:carName" element={<CarDetails />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/createaccount" element={<CreateAccount />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/update" element={<UpdateAccount />} />
        <Route path="/delete" element={<DeleteAccount />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
