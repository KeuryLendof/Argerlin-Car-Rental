import './App.css';
import Cards from './Componentes/Cards';
import Header from './Componentes/Header';
import Banner from './Componentes/Banner';
import { useEffect, useState } from "react";
import Vehiculos from './services/api';

function App() {

  const [data, setData] = useState();
  const [buscar, setBuscar] = useState();

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
      <div className="join" id="search">
        <div className="join_container">
          <h2 className="join_title">Busca tu vehiculo preferido aqui!</h2>
          <form action="" className="join_form">
            <input type="text" placeholder="example 'mercedes' " className="join_input" onChange={e => setBuscar(e.target.value)} />
          </form>
        </div>
      </div>
      <Cards vehiculos={data}/>
    </div>
  );
}

export default App;
