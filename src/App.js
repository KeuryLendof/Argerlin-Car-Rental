import './App.css';
import Cards from './Componentes/Cards';
import Header from './Componentes/Header';
import Banner from './Componentes/Banner';
import { useEffect, useState } from "react";
import Vehiculos from './services/api';

function App() {

  const [data, setData] = useState();

  useEffect(() => {
    setData(Vehiculos)
  },[])


  if(!data){
    return <div id="loader"></div>
  }

  return (
    <div className="Appp">
      <Header/>
      <Banner/>
      <Cards vehiculos={data}/>
    </div>
  );
}

export default App;
