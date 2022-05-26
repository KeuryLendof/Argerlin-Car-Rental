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
          <h2 className="join_title">¿Que quieres rental?</h2>
          <section className='marcas'>
            <article>
              <img src={require('./assets/images/mercedes.png')} alt='mercedes'/>
              <p>Mercedes</p>
            </article>
            <article>
              <img src={require('./assets/images/honda.png')} alt='honda'/>
              <p>Honda</p>
            </article>
            <article>
              <img src={require('./assets/images/hyundai.png')} alt='hyundai'/>
              <p>Hyundai</p>
            </article>
            <article>
              <img src={require('./assets/images/kia.png')} alt='kia'/>
              <p>Kia</p>
            </article>
          </section>
          <form action="" className="join_form">
            <input
              type="text"
              placeholder="example 'mercedes' "
              className="join_input" 
              onChange={e => setBuscar(e.target.value)} 
            />
          </form>
          <section className='marcas'>
            <article>
              <img src={require('./assets/images/mazda.png')} alt='kia'/>
              <p>Mazda</p>
            </article>
            <article>
              <img src={require('./assets/images/suzuki.png')} alt='kia'/>
              <p>Suzuki</p>
            </article>
            <article>
              <img src={require('./assets/images/mitsubishi.png')} alt='kia'/>
              <p>Mitsubishi</p>
            </article>
            <article>
              <img src={require('./assets/images/maseratti.png')} alt='kia'/>
              <p>Maseratti</p>
            </article>
          </section>
        </div>
      </div>
      <Cards vehiculos={data}/>
    </div>
  );
}

export default App;
