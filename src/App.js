import logo from './logo.svg';
import './App.css';
import NavBar1 from './Components/NavBar1';
import Form from './Components/Form';
import { useState } from 'react';
import Alert from './Components/Alert';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './Components/About'
import One from './Components/One';
import Two from './Components/Two';
import RoutesCheck from './Components/RoutesCheck';
function App() {
  const [mode, setMode] = useState(false)
  const [alertValue, setAlertValue] = useState(null)

  const changeMode = () => {
    setMode(!mode)
    if (mode === false) {
      changeAlertValue("Dark Mode Enable", 'success')
      document.title = 'Dark Mode'
    }
    if (mode === true) {
      changeAlertValue("Light Mode Enable", 'success')
      document.title = 'Light Mode'

    }
  }

  const changeAlertValue = (message, type) => {
    setAlertValue({
      msg: message,
      type: type
    },
      setTimeout(() => {
        setAlertValue(null)
      }, 1000)
    )
  }
  return (
    <div className={mode ? 'form_color_black ' : 'form_color_white'} >
      <BrowserRouter>
        <Alert alertValue={alertValue} />
        <NavBar1 title={'ReactJS'} aboutTitle={'JS'} mode={mode} changeMode={() => changeMode()} />
        <Routes>
          <Route path='/about' element={<About />} />
          <Route path='/' element={<Form label={"Enter text to analyze"} mode={mode} />} />
        </Routes>
      </BrowserRouter>
      
      {/* <BrowserRouter>
      <Routes>
        <Route path='/one' element={<One/>}></Route>
        <Route path='/two' element={<Two/>}></Route>
        <Route path='/' element={<RoutesCheck/>}></Route>
      </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
