import { Container, SectionContent, Background, LeftArea, RightArea, TitleSection,ImgShadow, Description } from "./styles"

import telImg from '../../../assets/image/illustration-phones.svg'

export const InfrastructureSection = () => {
    return (
        <Container>
            <Background>
                <SectionContent>
                    <LeftArea>
                        <ImgShadow src={telImg} alt="" />
                    </LeftArea>
                    <RightArea>
                        <TitleSection>
                            State of the Art Infrastructure
                        </TitleSection>
                        <Description>
                        With reliability and speed in mind, worldwode data centers provide the backbone for ultra-fast connectivity. This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.
                        </Description>
                    </RightArea>
                </SectionContent>
            </Background>
        </Container>
    )
}