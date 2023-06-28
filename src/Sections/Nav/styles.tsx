import { styled } from 'styled-components'

export const NavBarContent = styled.div`
    max-width: 1440px;
    height: 6rem;
    margin-inline: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const H1Teste = styled.h1`
color: green;
`

export const LeftAreaNavBar = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;
`

export const NavItem = styled.li`
    list-style: none;
`

export const NavLink = styled.a`
    text-decoration: none;
    font-weight: 500;
    font-family: 'Ubuntu', sans-serif;
    color: #fff;
`

export const NavContainer = styled.ul`
    display: flex;
    gap: 1rem;
`

export const RightAreaNavBar = styled.div`
    display: flex;
    align-items: center;    
    gap: 2rem;
`

export const ButtonSignUp = styled.a`
    text-decoration: none;
    background-color: #fff;
    color: hsl(356, 100%, 66%);
    font-weight: 500;
    padding: .5rem 1.5rem;
    border-radius: 1rem;
    font-family: 'Ubuntu', sans-serif;
`