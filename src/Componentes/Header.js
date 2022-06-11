import React from 'react';
import { TextInput, TextInputProps, ActionIcon, useMantineTheme } from '@mantine/core';
import { Search, ArrowRight, ArrowLeft } from 'tabler-icons-react';
import './style.css'

function Header(){

    const theme = useMantineTheme();


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
                    <ul class="dropdown-menu">
                        <TextInput
                            icon={<Search size={18} />}
                            radius="xl"
                            size="md"
                            rightSection={
                                <ActionIcon size={32} radius="xl" color={theme.primaryColor} variant="filled">
                                {theme.dir === 'ltr' ? <ArrowRight size={18} /> : <ArrowLeft size={18} />}
                                </ActionIcon>
                            }
                            class="dropdown-item"
                            placeholder="Search questions"
                            rightSectionWidth={42}
                        />
                    </ul>
                </li>
                <li className='itemLi'><a href="#careers">Ubicacion</a></li>  
            </ul>  
        </header>        
    )
    
}

export default Header;