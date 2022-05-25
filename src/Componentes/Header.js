import './style.css'

function Header(){

  

    return(
        <header className="header">  
            <a href="/" className="logo">ARGERLIN</a> 
            <input className="menu-btn" type="checkbox" id="menu-btn" />  
            <label className="menu-icon" for="menu-btn"><span className="navicon"></span></label>  
            <ul className="menu">  
                <li><a href="#about">Buscar</a></li>  
                <li><a href="#careers">Ubicacion</a></li>  
                <li><a href="#contact">Acerca de</a></li>  
            </ul>  
        </header>  
        
    )
    
}

export default Header;