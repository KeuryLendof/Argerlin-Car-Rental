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
                <li className='itemLi'><a href="https://www.google.com/maps/place/18%C2%B026'47.2%22N+69%C2%B040'53.0%22W/@18.4464435,-69.6835753,17z/data=!3m1!4b1!4m9!1m3!11m2!2sVAnuQ4MFPbQU2tySUS58g6pRJbBWqQ!3e2!3m4!1s0x0:0x0!8m2!3d18.4464384!4d-69.6813866?authuser=1" target="_blank">Ubicacion</a></li> 
                <li className='itemLi'><a href="#careers">About</a></li>
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
            </ul>  
        </header>        
    )
    
}

export default Header;