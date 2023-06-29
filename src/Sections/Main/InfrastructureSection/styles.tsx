import styled from "styled-components";

export const Container = styled.div`


`

export const SectionContent = styled.div`
    max-width: 1440px;
    margin-inline: auto;
    position: relative;
    top: -65px;
    display: flex;
    align-items: center;
    gap: 3rem;
`

export const Background = styled.div`
    background-image: linear-gradient(145deg, hsl(237, 17%, 21%), hsl(237, 23%, 32%));
    border-bottom-left-radius: 10rem;
    border-top-right-radius: 10rem;
    height: 400px;
`

export const LeftArea = styled.div`

`

export const RightArea = styled.div`
display: flex;
flex-direction: column;
gap: 2rem;
`

export const TitleSection = styled.h1`
    color: hsl(0, 0%, 100%);
    font-family:'Overpass',sans-serif;
`

export const ImgShadow = styled.img`
    filter: drop-shadow(10px 5px 5px hsl(237, 23%, 32%));
`

export const Description = styled.p`
    color: hsl(240, 2%, 79%);
    font-family: 'Ubuntu',sans-serif;
    width: 500px;

`