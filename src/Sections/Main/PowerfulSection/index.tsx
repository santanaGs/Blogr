import { Container, SectionContent, ContainerImg, ContainerRightArea, ContainerText, Title, Description } from './styles'

import imgNote from '../../../assets/image/illustration-laptop-desktop.svg'

export const PowerfulSection = () => {
    return (
        <Container>
            <SectionContent>
                <ContainerImg>
                    <img src={imgNote} alt="" />
                </ContainerImg>
                <ContainerRightArea>
                    <ContainerText>
                        <Title>Free, open, simple</Title>
                        <Description>
                            Blogr is a free and open source application backed by a large community of helpful developers. It supports features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.
                        </Description>
                    </ContainerText>
                    <ContainerText>
                        <Title>Powerful tooling</Title>
                        <Description>
                            Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but capable of producing even the most complicated sites.
                        </Description>
                    </ContainerText>
                </ContainerRightArea>
            </SectionContent>
        </Container>
    )
}