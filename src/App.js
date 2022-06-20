import './App.css';
import swal from 'sweetalert';
import Cards from './Componentes/Cards';
import Header from './Componentes/Header';
import Banner from './Componentes/Banner';
import Contact from './Componentes/Contact';
import About from './Componentes/About';
import Footer from './Componentes/Footer';
import { useEffect, useState } from "react";
import Vehiculos from './services/api';
import "swiper/css/bundle";
import { MantineProvider } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';

function App() {

  const [data, setData] = useState();
  // const [buscar, setBuscar] = useState();

  useEffect(() => {
    setData(Vehiculos)
  },[])

  const Alerta=()=>{

    swal("Advertencia!", "Los precios pueden variar dependiendo los dias de su renta!", "warning")
    
    // info
  }

  if(!data){
    return <div id="loader"></div>
  }

  return (
    <div className="Appp" onLoad={setTimeout(Alerta,9000)}>
      <MantineProvider>
        <ModalsProvider>
          <Header vehiculos={data}/>
          <br/>
          <br/>
          <br/>
          <br/>
          <Banner/>
          <Cards vehiculos={data}/>
          <About/>
          <Contact/>
          <Footer/>
        </ModalsProvider>
      </MantineProvider>
    </div>
  );
}

export default App;
