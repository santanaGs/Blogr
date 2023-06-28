import React from "react";

import logo from '../../assets/image/logo.svg'


import {
    NavBarContent,
    LeftAreaNavBar,
    NavItem,
    NavLink,
    NavContainer,
    RightAreaNavBar,
    ButtonSignUp
} 
from './styles';

export const NavBar = () => {
    return(
        <header style={{position: 'absolute', width:'100%'}}>
            <NavBarContent>
                <LeftAreaNavBar>
                    <img src={logo} alt="" />
                    <nav>
                        <NavContainer>
                            <NavItem><NavLink href="#">Product</NavLink></NavItem>
                            <NavItem><NavLink href="#">Company</NavLink></NavItem>
                            <NavItem><NavLink href="#">Connect</NavLink></NavItem>
                        </NavContainer>
                    </nav>
                </LeftAreaNavBar>
                <RightAreaNavBar>
                <NavLink href="#">Login</NavLink>
                <ButtonSignUp href="#">Sign Up</ButtonSignUp>
                </RightAreaNavBar>
            </NavBarContent>
        </header>
    )
}