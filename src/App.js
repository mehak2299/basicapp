import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import Form from './Components/Form';
import { useState } from 'react';
import Alert from './Components/Alert';
function App() {
  const [mode, setMode] = useState(false)
  const[alertValue,setAlertValue]=useState(null)

  const changeMode = () => {
    setMode(!mode)
    if(mode===false){
    changeAlertValue("Dark Mode Enable",'success')
    }
    if(mode===true){
      changeAlertValue("Light Mode Enable",'success')
      }
  }

  const changeAlertValue=(message,type)=>{
   setAlertValue({
    msg:message,
    type:type
   },
   setTimeout(()=>{
    setAlertValue(null)
   },1000)
   )
  }
  return (
    <div className={mode ? 'form_color_black ' : 'form_color_white'} >
      <Alert alertValue={alertValue}/>
      <NavBar title={'ReactJS'} aboutTitle={'JS'} mode={mode} changeMode={() => changeMode()} />

      <Form label={"Enter text to analyze"} mode={mode} />


    </div>
  );
}

export default App;
