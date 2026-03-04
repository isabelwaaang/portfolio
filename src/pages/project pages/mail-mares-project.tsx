import MailMaresPNG from "../../assets/project/mail mares.jpg"
import ItchIcon from "../../assets/icons/itch icon.png"
import GithubIcon from "../../assets/icons/github icon.png"

export default function Contact(){
    return(
        <main>
            <img className = "w-[50%] h-[50%] mx-auto mt-2" src={MailMaresPNG} />
            
            <div className="flex flex-row justify-center gap-5 mt-3">
                <div className="text-[#83B0E1] font-pixel gap-1 mx-2 mt-3">
                    programmer
                </div>
                <a href="https://scottmc.itch.io/mail-mares">
                    <img className="w-10 h-auto" src={ItchIcon} />
                </a>

                <a href="https://github.com/ReOp14/MailMares">
                    <img className="w-10 h-auto" src={GithubIcon} />
                </a>
                
            </div>
            
            
            <div className="flex justify-between items-center text-[#83B0E1] font-pixel text-2xl mt-4 mx-2">
                <div>
                    what is mail mares?
                </div>

                <div className="text-base">
                    sep 2025 - now
                </div>
            </div>
            <div className="text-[#83B0E1] font-pixel gap-1 mx-2">
                mail mares is a singleplayer/co-op rogue-lites action game where the mail mares are tasked by princess skywish etheria to deliver precious treasure across equinalis. help defend the airship and treasure while you travel across the skies.
            </div>

            <div className="text-[#83B0E1] font-pixel gap-1 mx-2 text-2xl mt-4">
                key contributions
            </div>
            <div className="text-[#83B0E1] font-pixel gap-1 mx-2">
                - integrated the map functionality
            </div>
            <div className="text-[#83B0E1] font-pixel gap-1 mx-6">
                - randomly generate encounters on map tiles
            </div>
            <div className="text-[#83B0E1] font-pixel gap-1 mx-2">
                - created the shop island encounter
            </div>
            <div className="text-[#83B0E1] font-pixel gap-1 mx-6">
                - airship will stop and dock on an island if the level is selected on the map
            </div>
            <div className="text-[#83B0E1] font-pixel gap-1 mx-2">
                - began working on flufflet abilities and allowing the player to change keybinds
            </div>
        </main>
    )
}