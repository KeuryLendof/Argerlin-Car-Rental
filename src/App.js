import './App.css';
import Cards from './Componentes/Cards';
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
      <Cards vehiculos={data}/>
    </div>
  );
}

export default App;
