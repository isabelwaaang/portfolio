import Cravity from "../../assets/artists-music/cravity.jpeg"
import Idle from "../../assets/artists-music/i-dle.jpeg"
import MaoBuyi from "../../assets/artists-music/mao-buyi.jpeg"
import Onewe from "../../assets/artists-music/onewe.jpg"
import ZhouShen from "../../assets/artists-music/zhou-shen.jpg"
import Oneus from "../../assets/artists-music/oneus.webp"
import DareToCrave from "../../assets/albums/dare-to-crave.jpeg"
import Evershine from "../../assets/albums/evershine.webp"
import IFeel from "../../assets/albums/i-feel.jpeg"
import PerfectDay from "../../assets/albums/perfect-day.jpg"
import WeDreamChase from "../../assets/albums/we-dream-chaser.jpg"

export default function Music() {
  return (
    <main>
      <div className="text-[#83B0E1] font-pixel mx-4 mt-3">
        i love listening to kpop, cpop, movie soundtracks, and video game soundtracks!
      </div>

      <div className="text-[#83B0E1] font-pixel mx-4 mt-3">
        what i'm probably listening to right now:
        </div>
        <div className="mx-4 mt-2">
        <iframe
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/playlist/3ZMNPh9tXb1NuxZrbkt0QB?utm_source=generator&"
            width="100%"
            height="352"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
        />
    </div>

      <div className="text-[#83B0E1] font-pixel mx-4 mt-3">
        some of my favorite artists:
      </div>
      <div className="grid grid-cols-3 gap-4 mx-4 mt-2">
        <div className="flex flex-col items-center">
          <img src={Cravity} className="w-full h-auto" />
          <div className="text-[#83B0E1] font-pixel mt-1">cravity</div>
        </div>
        <div className="flex flex-col items-center">
          <img src={Idle} className="w-full h-auto" />
          <div className="text-[#83B0E1] font-pixel mt-1">idle</div>
        </div>
        <div className="flex flex-col items-center">
          <img src={Onewe} className="w-full h-auto" />
          <div className="text-[#83B0E1] font-pixel mt-1">onewe</div>
        </div>
        <div className="flex flex-col items-center">
          <img src={MaoBuyi} className="w-full h-auto" />
          <div className="text-[#83B0E1] font-pixel mt-1">mao buyi</div>
        </div>
        <div className="flex flex-col items-center">
          <img src={ZhouShen} className="w-full h-auto" />
          <div className="text-[#83B0E1] font-pixel mt-1">zhou shen</div>
        </div>
        <div className="flex flex-col items-center">
          <img src={Oneus} className="w-full h-auto" />
          <div className="text-[#83B0E1] font-pixel mt-1">oneus</div>
        </div>
      </div>

      <div className="text-[#83B0E1] font-pixel mx-4 mt-3">
        some of my favorite albums:
      </div>
      <div className="grid grid-cols-3 gap-4 mx-4 mt-2">
        <div className="flex flex-col items-center">
          <img src={IFeel} className="w-full h-auto" />
          <div className="text-[#83B0E1] font-pixel mt-1">i feel</div>
        </div>
        <div className="flex flex-col items-center">
          <img src={Evershine} className="w-full h-auto" />
          <div className="text-[#83B0E1] font-pixel mt-1">evershine</div>
        </div>
        <div className="flex flex-col items-center">
          <img src={PerfectDay} className="w-full h-auto" />
          <div className="text-[#83B0E1] font-pixel mt-1">perfect day</div>
        </div>
        <div className="flex flex-col items-center">
          <img src={WeDreamChase} className="w-full h-auto" />
          <div className="text-[#83B0E1] font-pixel mt-1">we: dream chaser</div>
        </div>
        <div className="flex flex-col items-center">
          <img src={DareToCrave} className="w-full h-auto" />
          <div className="text-[#83B0E1] font-pixel mt-1">dare to crave</div>
        </div>
      </div>
    </main>
  );
}