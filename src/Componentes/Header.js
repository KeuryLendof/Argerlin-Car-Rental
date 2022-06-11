import './style.css'

function Header(){

  

    return(
        <header className="header">  
            <a href="/" className="logo">ARGERLIN</a> 
            <input className="menu-btn" type="checkbox" id="menu-btn" />  
            <label className="menu-icon" for="menu-btn"><span className="navicon"></span></label>  
            <ul className="menu">
                <li class="ndropdown itemLi">
                    <a class="dropdown-toggle" href="#" id="DropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Buscar
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="DropdownMenuLink">
                        <input class="dropdown-item"/>
                    </ul>
                </li>
                <li className='itemLi'><a href="#careers">Ubicacion</a></li>  
            </ul>  
        </header>        
    )
    
}

export default Header;