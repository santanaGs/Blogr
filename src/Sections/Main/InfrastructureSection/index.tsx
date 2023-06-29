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
                        Flexible content management enables users to easily move through posts. Increase the usability of your blog by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.
                        </Description>
                    </RightArea>
                </SectionContent>
            </Background>
        </Container>
    )
}