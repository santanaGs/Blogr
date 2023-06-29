import { Description } from "../HeroSection/styles"
import { Container, SectionContent, TitleSection, InfoSection, LeftArea, RightArea, TextInfo, TitleInfo, DescriptionInfo, ImageDesktop } from "./styles"

import futereImg from '../../../assets/image/illustration-editor-desktop.svg'

export const DesignedSection = () => {
    return (
        <Container>
            <SectionContent>
                <TitleSection>
                    Designed for the future
                </TitleSection>
                <InfoSection>
                    <LeftArea>
                        <TextInfo>
                            <TitleInfo>
                                Introducing an extensible editor
                            </TitleInfo>
                            <DescriptionInfo>Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or change the looks of a blog.
                            </DescriptionInfo>
                        </TextInfo>
                        <TextInfo>
                            <TitleInfo>
                                Robust content management
                            </TitleInfo>
                            <DescriptionInfo>
                                Flexible content management enables users to easily move through posts. Increase the usability of your blog by adding customized categories, sections, format, or flow. With this functionality, you’re in full contro
                            </DescriptionInfo>
                        </TextInfo>
                    </LeftArea>
                    <RightArea>
                        <ImageDesktop src={futereImg} alt="" />
                    </RightArea>
                </InfoSection>
            </SectionContent>
        </Container>
    )
}