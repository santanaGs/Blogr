import styled from 'styled-components'


export const Section = styled.section`
    background-image: linear-gradient(90deg, hsl(13, 100%, 72%), hsl(353, 100%, 62%));
    padding-block: 10rem;
    border-bottom-left-radius: 8rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap:1rem;
`

export const Title = styled.h1`
    font-family: 'Overpass', sans-serif;
    color: #fff;
    font-size: 50px;
    font-weight: 500;
`

export const Description = styled.p`
    color: #fff;
    font-family: 'Overpass', sans-serif;
`

export const ButtonsContainer = styled.div`
    margin-top: 30px;
    display: flex;
    gap: 1rem;
`

export const StartFree = styled.a`
    text-decoration: none;
    background-color: #fff;
    color: hsl(356, 100%, 66%);
    font-weight: 500;
    padding: .5rem 1.5rem;
    border-radius: 1rem;
    font-family: 'Ubuntu', sans-serif;
`

export const LearnMore = styled.a`
    color: #fff;
    text-decoration: none;
    background-color: transparent;
    border: 1px solid #fff;
    font-weight: 500;
    padding: .5rem 1.5rem;
    border-radius: 1rem;
    font-family: 'Ubuntu', sans-serif;
`