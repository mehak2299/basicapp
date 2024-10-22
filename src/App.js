import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import Form from './Components/Form';
function App() {
  return (
    <>
      {/* <NavBar title={'ReactJS'} aboutTitle={'JS'}/> */}
      {/* <NavBar/> */}
      <NavBar title={'ReactJS'} aboutTitle={'JS'} />
      <div className="container my-3" ><Form label={"Enter text to analyze"}/></div>
   


    </>
  );
}

export default App;
