import LilyIcon from "../../assets/project/lily icon.png"
import GithubIcon from "../../assets/icons/github-icon.png"
import DevpostIcon from "../../assets/icons/devpost icon.png"
import FigmaIcon from "../../assets/icons/figma icon.png"

export default function Lily(){
    return(
        <main>
            <img src={LilyIcon} className="w-[50%] h-[20%] mx-auto"/>

            <div className="flex flex-row justify-center gap-5 mt-3">
                <div className="text-[#83B0E1] font-pixel gap-1 mx-2 mt-3">
                    backend developer
                </div>
                <a href="https://devpost.com/software/lily-vo9tj0">
                    <img className="w-10 h-auto" src={DevpostIcon} />
                </a>

                <a href="https://github.com/oliiviiak/IrvineHacks2026-LILY">
                    <img className="w-10 h-auto" src={GithubIcon} />
                </a>
                <a className="ml-3 mt-1"
                href="https://www.figma.com/proto/aSBmls1RQpNjmn59vQTvOE/Lily-design-files?page-id=0%3A1&node-id=109-1686&viewport=-904%2C578%2C0.2&t=LjiYZ8MKlyY6ZeAs-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=109%3A1686&show-proto-sidebar=1"   
                >
                    <img className="w-6 h-auto" src={FigmaIcon} />
                </a>
                
            </div>
            

            <div className="flex justify-between items-center text-[#83B0E1] font-pixel text-2xl mt-4 mx-2">
                <div>
                    what is lily?
                </div>

                <div className="text-base">
                    feb 2026
                </div>
            </div>
            <div className="text-[#83B0E1] font-pixel gap-1 mx-2">
                lily is an un-intimidating, ai-powered flower designed to help people navigate complex medical and 
                financial documents through natural conversation. it consists of a small friendly flower equipped
                with a microphone and camera to keep a conversation with lily and scan document and a companion app.
                the app records documents and conversations and allows family members to stay involved with alerts.
            </div>

            <div className="text-[#83B0E1] font-pixel gap-1 mx-2 text-2xl mt-4">
                key contributions
            </div>
            <div className="text-[#83B0E1] font-pixel gap-1 mx-2">
                - integrated a conversation with the claude llm
            </div>
            <div className="text-[#83B0E1] font-pixel gap-1 mx-6">
                - structured and connected tool calls to hardware inputs [ microphone and camera ]
            </div>
            <div className="text-[#83B0E1] font-pixel gap-1 mx-2">
                - implemented the core classes that store and retrieve user and conversation data
            </div>

            <div className="text-[#83B0E1] font-pixel gap-1 mx-2 text-2xl mt-4">
                awards
            </div>
            <div className="text-[#83B0E1] font-pixel gap-1 mx-2">
                - best ui/ux hack - 1st place (opennote)
            </div>

            
        </main>
    )
}