import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Components/Home/Home';
import About from './Components/About/About'
import Services from './Components/Services/Services'
import TourPlaces from './Components/TourPlaces/Tourplaces'
import BookCab from './Components/Bookcab/Bookcab'
import Contact from './Components/Contact/Contact'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <BrowserRouter>
    <App/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Services' element={<Services/>}/>
      <Route path='/Tourplaces' element={<TourPlaces/>}/>
      <Route path='/Bookcab' element={<BookCab/>}/>
      <Route path='/Contact' element={<Contact/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
