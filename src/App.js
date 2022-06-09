import './App.css';
import swal from 'sweetalert';
import Cards from './Componentes/Cards';
import Header from './Componentes/Header';
import Banner from './Componentes/Banner';
import { useEffect, useState } from "react";
import Vehiculos from './services/api';
import "swiper/css/bundle";

function App() {

  const [data, setData] = useState();
  // const [buscar, setBuscar] = useState();

  useEffect(() => {
    setData(Vehiculos)
  },[])

  const Alerta=()=>{

    swal("Good job!", "You clicked the button!", "warning")
    
    // info
  }

  if(!data){
    return <div id="loader"></div>
  }

  return (
    <div className="Appp" onLoad={setTimeout(Alerta,9000)}>
      <Header/>
      <br/>
      <br/>
      <br/>
      <br/>
      <Banner/>
      <Cards vehiculos={data}/>
    </div>
  );
}

export default App;
