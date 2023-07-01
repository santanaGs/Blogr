import { ContainerFooter, FooterContent, NavFooter, Title, NavItens } from "./styles"

import logoFooter from '../../assets/image/logo.svg'

export const Footer = () =>{
    return(
        <ContainerFooter>
            <FooterContent>
                <img src={logoFooter} alt="" />
                <NavFooter>
                    <Title>Product</Title>
                    <ul>
                        <NavItens>Overview</NavItens>
                        <NavItens>Pricing</NavItens>
                        <NavItens>Marketplace</NavItens>
                        <NavItens>Features</NavItens>
                        <NavItens>Integrations</NavItens>
                    </ul>
                </NavFooter>
                <NavFooter>
                    <Title>Company</Title>
                    <ul>
                        <NavItens>About</NavItens>
                        <NavItens>Team</NavItens>
                        <NavItens>Blog</NavItens>
                        <NavItens>Careers</NavItens>
                    </ul>
                </NavFooter>
                <NavFooter>
                    <Title>Connect</Title>
                    <ul>
                        <NavItens>Contact</NavItens>
                        <NavItens>Newsletter</NavItens>
                        <NavItens>Linkedin</NavItens>
                    </ul>
                </NavFooter>
            </FooterContent>
        </ContainerFooter>
    )
}