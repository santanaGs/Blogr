import styled from "styled-components";

export const Container = styled.div`
    padding: 5rem;
`

export const SectionContent = styled.div`
    max-width: 1440px;
    margin-inline: auto;
`

export const TitleSection = styled.h2`
    font-family: 'Overpass',sans-serif;
    color: hsl(208, 49%, 24%);
    text-align: center;
`

export const InfoSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const LeftArea = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3rem;
`
export const RightArea = styled.div`

`
export const TextInfo = styled.div`

`
export const TitleInfo = styled.h3`
    font-family: 'Overpass',sans-serif;
    color: hsl(208, 49%, 24%);
    margin-bottom: .7rem;
    font-size: 25px;
`
export const DescriptionInfo = styled.p`
    font-family: 'Ubuntu', sans-serif;
    font-size: 16px;
    line-height: 1.5;
    font-weight: 400;
    color: hsl(207, 13%, 34%);
`

export const ImageDesktop = styled.img`
    width: auto;
    height: 850px;
`