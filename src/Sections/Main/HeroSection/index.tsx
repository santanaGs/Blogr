import { Section } from "./styles"

import { Title, Description, ButtonsContainer, StartFree, LearnMore } from "./styles"

export const HeroSection = () =>{
    return(
        <div>
            <Section>
                <Title>Um Projeto de Caique Tech</Title>
                <Description>Grow your audience and build your online brand</Description>
                <ButtonsContainer>
                    <StartFree href="#">Start For Free</StartFree>
                    <LearnMore href="#">Learn More</LearnMore>
                </ButtonsContainer>
            </Section>
        </div>
    )
}