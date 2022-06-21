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
  const [formula1, setFormula1] = useState(null);
  // const [buscar, setBuscar] = useState();

  useEffect(() => {
    setData(Vehiculos)
    // fetch("https://v1.formula-1.api-sports.io/teams",{
    //   method: "GET",
    //   headers:{
    //     'x-rapidapi-key': 'fe796eb39ef3b827ab821da845d996ec',
    //     'x-rapidapi-host': 'v1.formula-1.api-sports.io'
    //   },
    // })
    //   .then((response)=> response.json())
    //   .then((data)=>{
    //     console.log(data.response);
    //     setFormula1(data.response);
    //   })
    //   .catch((error)=> console.log('falloooooo', error));
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
