import styled from "styled-components";

export const ContainerFooter = styled.div`
    margin-top: 6rem;
    width: 100%;
    background-color: hsl(237, 23%, 32%);
    border-top-right-radius: 10rem;
    padding: 5rem;
`

export const FooterContent = styled.div`
    max-width:1440px;
    margin-inline: auto;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`

export const NavFooter = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`

export const Title = styled.p`
    font-family: 'Overpass', sans-serif;
    font-weight: 700;
    color: hsl(240, 2%, 79%);
`

export const NavItens = styled.li`
    list-style: none;
    font-family: 'Overpass', sans-serif;
    font-weight: 500;
    color: hsl(240, 2%, 79%);
    margin-bottom: .7rem;
`