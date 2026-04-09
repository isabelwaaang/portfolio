import PotionsIcon from "../../assets/project/potions.png"
import SteamIcon from "../../assets/icons/steam-icon.png"

export default function Contact(){
    return(
        <main>
            <img src={PotionsIcon} className="w-[100%] h-[20%] mx-auto"/>

            <div className="flex flex-row justify-center gap-5 mt-3">
                <div className="text-[#83B0E1] font-pixel gap-1 mx-2 mt-3">
                    game design intern
                </div>
                <a href="https://store.steampowered.com/app/378690/Potions_A_Curious_Tale/">
                    <img className="w-10 h-auto" src={SteamIcon} />
                </a>
            </div>

            <div className="flex justify-between items-center text-[#83B0E1] font-pixel text-2xl mt-4 mx-2">
                <div>
                    what is potions?
                </div>

                <div className="text-base">
                    sept 2024 - june 2025
                </div>
            </div>

            <div className="text-[#83B0E1] font-pixel gap-1 mx-2">
                potions: a curious tale is an adventure & crafting game where wit is your greatest weapon 
                and combat is not always the answer. play as luna, a young witch who overcomes obstacles 
                with the potions she brews, as she gathers items from enchanted lands and conquers devious 
                puzzles on her quest.
            </div>

            <div className="text-[#83B0E1] font-pixel gap-1 mx-2 text-2xl mt-4">
                key contributions
            </div>
            <div className="text-[#83B0E1] font-pixel gap-1 mx-2">
                • applied unity and c# scripting to design and implement original puzzles, quests, and boss 
                fights
            </div>
            <div className="text-[#83B0E1] font-pixel gap-1 mx-2">
                • expanded on the game’s established systems by scripting original quests and objectives
            </div>
            <div className="text-[#83B0E1] font-pixel gap-1 mx-2">
                • prototyped interactive puzzle mechanics and expanded upon it with multiple variations
            </div>
        </main>
    )
}