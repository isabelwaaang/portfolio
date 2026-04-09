import ItchIcon from "../../assets/icons/itch icon.png"
import GithubIcon from "../../assets/icons/github-icon.png"

export default function Contact(){
    return(
        <main>
            <div className="flex flex-row justify-center gap-5 mt-3">
                <div className="text-[#83B0E1] font-pixel gap-1 mx-2 mt-3">
                    developer
                </div>
                <a href="https://saltiesalt.itch.io/vamoose">
                    <img className="w-8 h-auto" src={ItchIcon} />
                </a>

                <a href="https://github.com/winchell459/EscapeRoom">
                    <img className="w-8 h-auto" src={GithubIcon} />
                </a>
            </div>

            <div className="flex justify-between items-center text-[#83B0E1] font-pixel text-2xl mt-4 mx-2">
                <div>
                    what is vamoose?
                </div>

                <div className="text-base">
                    2022 - 2024
                </div>
            </div>

            <div className="text-[#83B0E1] font-pixel gap-1 mx-2">
                vamoose is a multiplayer escape room game, consisting of four different themed rooms: the 
                science classroom, egyption tomb, outpost, and dungeon. each room has a variety of different
                puzzles that train a person's ability to think outside the box. puzzles include picking up
                and placing objects, turning objects, and inputting passwords.
            </div>


            <div className="text-[#83B0E1] font-pixel gap-1 mx-2 text-2xl mt-4">
                key contributions
            </div>
            <div className="text-[#83B0E1] font-pixel gap-1 mx-2">
                • used unity and c# to design and implement interactive rooms and puzzles
            </div>
            <div className="text-[#83B0E1] font-pixel gap-1 mx-2">
                • implemented multiplayer functionality through netcode while overcoming challenges in shared puzzle states
            </div>
            <div className="text-[#83B0E1] font-pixel gap-1 mx-2">
                • designed, implemented, and tested custom puzzles and mechanics in various themed escape rooms
            </div>


            <div className="text-[#83B0E1] font-pixel gap-1 mx-2 text-2xl mt-4">
                awards
            </div>
            <div className="text-[#83B0E1] font-pixel gap-1 mx-2">
                • game gala: first place winner [ 2023 ]
            </div>
            <div className="text-[#83B0E1] font-pixel gap-1 mx-2">
                • coolest project: judge's favorite [2024]
            </div>
            <div className="text-[#83B0E1] font-pixel gap-1 mx-2">
                • ignitecs expo: second place [ 2024 ]
            </div>
        </main>
    )
}