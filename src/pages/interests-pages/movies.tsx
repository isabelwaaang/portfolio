import Flow from "../../assets/movies/flow.jpg"
import Interstellar from "../../assets/movies/interstellar.jpg"
import LaLaLand from "../../assets/movies/la-la-land.png"
import MeanGirls from "../../assets/movies/mean-girls.png"
import Parasite from "../../assets/movies/parasite.jpg"

export default function Movies(){
    return(
        <main>
            <div className="flex flex-row justify-center gap-5">
                <div className="text-[#83B0E1] font-pixel gap-1 mx-2 mt-3">
                    some of my favorite movies and why
                </div>
                
            </div>

            <div className="flex flex-row justify-center gap-5">
                <div className="text-[#83B0E1] font-pixel gap-1 mx-2 mt-3">
                    [ spoiler warning !! ]
                </div>
            </div>

            <div className="flex items-start mt-3">
                <img src={LaLaLand} className="w-[30%] h-auto mx-4" />
                <div className="flex flex-col gap-1 mx-2">
                    <div className="text-[#83B0E1] font-pixel">
                        ★ ★ ★ ★ ★
                    </div>
                    <div className="text-[#83B0E1] font-pixel">
                        i love the colors it made everything look so pretty but also had meaning like 
                        how mia is always depicted in bright colors because of her optimism for her future. i also love  
                        seb and mia's relationship like they're so perfect for each other but can never be together.  
                    </div>
                </div>
            </div>

            

            <div className="flex items-start mt-3">
                <img src={Interstellar} className="w-[30%] h-auto mx-4" />
                <div className="flex flex-col gap-1 mx-2">
                    <div className="text-[#83B0E1] font-pixel">
                        ★ ★ ★ ★ ★
                    </div>
                    <div className="text-[#83B0E1] font-pixel">
                        i loved the relationship between cooper and murph. it was so heartbreaking when 
                        he realized how much time had passed after miller's planet. just a great heartfelt and emotional movie 
                        with some cool space physics sprinkled in
                    </div>
                </div>
            </div>

            <div className="flex items-start mt-3">
                <img src={Parasite} className="w-[30%] h-auto mx-4" />
                <div className="flex flex-col gap-1 mx-2">
                    <div className="text-[#83B0E1] font-pixel">
                        ★ ★ ★ ★ ★
                    </div>
                    <div className="text-[#83B0E1] font-pixel">
                        its so interesting how classism is depicted everywhere in this movie. there's so many 
                        symbols and themes like elevation, smell, etc. the sudden shift in the second half of the movie 
                        is just so jarring yet so perfect. i could talk for so long about this movie
                    </div>
                </div>
            </div>

            <div className="flex items-start mt-3">
                <img src={MeanGirls} className="w-[30%] h-auto mx-4" />
                <div className="flex flex-col gap-1 mx-2">
                    <div className="text-[#83B0E1] font-pixel">
                        ★ ★ ★ ★ ★
                    </div>
                    <div className="text-[#83B0E1] font-pixel">
                        this movie seems like a shallow girl movie but it genuinely has so much meaning on 
                        girlhood/femininity and self-acceptance. nothing is as it seems and cady's transition feels 
                        so natural. the amazing fashion and iconic lines are just an added perk
                    </div>
                </div>
            </div>

            <div className="flex items-start mt-3">
                <img src={Flow} className="w-[30%] h-auto mx-4" />
                <div className="flex flex-col gap-1 mx-2">
                    <div className="text-[#83B0E1] font-pixel">
                        ★ ★ ★ ★ ★
                    </div>
                    <div className="text-[#83B0E1] font-pixel">
                        the movie is just so good visually and the animals are so cute. i love their dynamic 
                        and the [ accidental ] references to noah's ark. i love the theme of found 
                        family i got to see it with a live orchestra. it's an amazing experience with an amazing 
                        soundtrack
                    </div>
                </div>
            </div>

            <div className="text-[#83B0E1] font-pixel mt-4 m-4">
                if you want to see less serious reviews and other films check out my{" "}
                <a href="https://letterboxd.com/p1cotee" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-70">
                    letterboxd
                </a>
                !!
            </div>
        </main>
    )
}