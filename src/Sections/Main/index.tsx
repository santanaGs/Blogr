import { DesignedSection } from "./DesignedSection"
import { HeroSection } from "./HeroSection"
import { InfrastructureSection } from "./InfrastructureSection"
import { PowerfulSection } from "./PowerfulSection"

export const Main = () =>{
    return(
        <div>
            <HeroSection/>
            <DesignedSection/>
            <InfrastructureSection/>
            <PowerfulSection/>
        </div>
    )
}