import './style.css'


function Marcas(){



    return(
        <div className='marcasContainer'>
            <section className='marcasTitulo'>
                <h3>¿Que puedes rentar?</h3>
            </section>
            <section className='marcas'>
                <article>
                    <img src={require('../assets/images/mercedes.png')} alt="" />
                    <p>Mercedes</p>
                </article>
                <article>
                    <img src={require('../assets/images/mercedes.png')} alt="" />
                    <p>Mercedes</p>
                </article>
                <article>
                    <img src={require('../assets/images/mercedes.png')} alt="" />
                    <p>Mercedes</p>
                </article>
            </section>
        </div>
    )
}

export default Marcas;