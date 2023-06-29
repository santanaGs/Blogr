import { DesignedSection } from "./DesignedSection"
import { HeroSection } from "./HeroSection"
import { InfrastructureSection } from "./InfrastructureSection"

export const Main = () =>{
    return(
        <div>
            <HeroSection/>
            <DesignedSection/>
            <InfrastructureSection/>
        </div>
    )
}