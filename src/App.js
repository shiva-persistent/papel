import { useState } from 'react';
import './App.css';
import Login from './Components/Login';
import Register from './Components/Register';
import { Routes, Route } from "react-router-dom";
import LOGO from './images/logo.png';
function App() {
  const [currentForm, setCurrentForm] = useState('register');
  const toggleForm = (formName) => {
    console.log(formName)
    setCurrentForm(prev => prev = formName)
  }
  return (
    <>
      <div className='lyt__container'>
        <img src={LOGO} width='120' alt='logo' />
      </div>
      <Routes>
        <Route path='/' element={<Register />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      
      {/* {currentForm === 'login' ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />} */}
    </>
  );
}

export default App;
