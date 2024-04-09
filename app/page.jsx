import Heading from "../components/Heading";
import P5jsContainer from "@/components/p5Canvas";

export default function HomePage(){
    return(
        <>
                <Heading>X-TOPIA</Heading>
                <div className="min-h-12">
                 <P5jsContainer/>
                </div>
                <p className="pb-3">X-Topia is an award-winning design-research 
                practice that explores the intersection of architecture and urbanism
                 with technology and the public, social and cultural realm. It was
                  funded in 2008 by Marcella Del Signore, an architect, urbanist, 
                  and technologist focused on interscalar spatial practices. X-Topia
                   is currently based in the US, Italy, and Brazil. The array of projects
                    focuses on interscalar design approaches that engage the notion of 
                    socio-technical systems through computation, prototyping, material 
                    and fabricated assemblies, data-driven protocols, and adaptive 
                    environments. X-Topia investigates architecture, environments, 
                    and cities not as isolated entities but as part of an extended field 
                    mediated through the discursive application of technology. Operating 
                    nationally and internationally through an extended network of partners, i
                    nstitutions and sponsors that have supported the work, X-Topia has been engaged 
                    in a wide array of urban interventions and small-scale prototypes recognized 
                    internationally through publications, grants, and awards, including the invitation 
                    to the 17th Venice Architecture Biennale in 2021 with the project Aério.</p>
        </>
    ) 
}