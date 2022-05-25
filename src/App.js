import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/home';
import About from './pages/about';
import Lifetours from './pages/lifetours';
import Main from './components/Main';
import ContactUs from './pages/contactUs';
import SoloCard from './components/Card2';
import Error from './components/Error';
// import Main from './components/Main';
import Footer from './components/Footer';



const App =()=> {
return (
	<BrowserRouter>
    <Header />
    <Navbar />
      <Routes>
        <Route path='/' element= {<Home/>} />
        <Route path='/about' element= {<About/>} />
        <Route path='/lifetours' element= {<Lifetours/>} />
        <Route path='/Main' element= {<Main/>} />
          <Route path="" element= {<SoloCard/>} />
          <Route path=':postSlug' element= {<SoloCard/>} />
        <Route path='/contactUs' element= {<ContactUs/>} />
        <Route path="*" element= {<Error />} />
      </Routes>
      <Footer />
	</BrowserRouter>
  );
}

export default App;
