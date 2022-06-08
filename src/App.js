import './App.css';
import swal from 'sweetalert';
import Cards from './Componentes/Cards';
import Header from './Componentes/Header';
import Banner from './Componentes/Banner';
import { useEffect, useState } from "react";
import Vehiculos from './services/api';
import Marcas from './Componentes/Marcas';
import Slider from './Componentes/Slider';

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
      <Slider />
    </div>
  );
}

export default App;
