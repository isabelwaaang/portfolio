import { useState, useRef, useEffect } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { useLocation } from "react-router-dom"

import AboutMe from "./pages/about-me"
import ImageApi from "./pages/image-api"
import Contact from "./pages/contact"

import MailMares from "./pages/project pages/mail-mares-project"
import Potions from "./pages/project pages/potions-project"
import Vamoose from "./pages/project pages/vamoose-project"
import Lily from "./pages/project pages/lily-project"

import FOCUS from "./assets/music/FOCUS.mp3"
import HER from "./assets/music/HER.mp3"
import ImaginaryFriend from "./assets/music/Imaginary-Friend.mp3"
import LikeYouBetter from "./assets/music/LIKE-YOU-BETTER.mp3"
import Nxde from "./assets/music/Nxde.mp3"
import TheStarryNight from "./assets/music/The-Starry-Night.mp3"
import TimeMachine from "./assets/music/TIME-MACHINE.mp3"

import PlayButton from "./assets/music player/play-button.png"
import PauseButton from "./assets/music player/pause-button.png"
import SkipButton from "./assets/music player/forward-button.png"
import BackButton from "./assets/music player/back-button.png"

function App() {
  const [projectsOpen, setProjectsOpen] = useState(false);

  {/* music player stuff */}
  const [isPlaying, setIsPlaying] = useState(false);
  const playlist = [FOCUS, HER, ImaginaryFriend, LikeYouBetter, Nxde, TheStarryNight, TimeMachine];
  const [currentIndex, setCurrentIndex] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }

    audioRef.current.volume = 0.05;
  }, [isPlaying, currentIndex]);


  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === playlist.length - 1 ? 0 : prev + 1
    )
  }


  {/* pathname stuff */}
  const location = useLocation();
  const currentPath =
  location.pathname === "/"
    ? "C:\\users\\isabel\\home"
    : `C:\\users\\isabel${location.pathname.replaceAll("/", "\\")}`;


  return (
    

    <main>
      {/* music player window */}
      <div className="absolute top-[30%] left-10 bg-[#83B0E1] text-white w-[20%] h-[20%] flex items-center justify-center pt-10">
        <div className="absolute top-2 left-5 text-white text-lg font-pixel">
            music player
          </div>
        <div className="bg-white w-[95%] h-[93%] relative border-8 border-[#AECBEB] flex items-center justify-center gap-8">
          {/* back button */}
          <button onClick={() => setCurrentIndex((prev) =>
            prev == 0 ? playlist.length - 1 : prev - 1
          )}>
            <img src={BackButton} />
          </button>
          
          {/* play/pause button */}
          <button onClick={() => setIsPlaying(!isPlaying)}>
            <img src={isPlaying ? PlayButton : PauseButton}/>
            <audio
              ref={audioRef}
              src={playlist[currentIndex]}
              onEnded={handleNext}
            />
          </button>

          {/* skip button */}
          <button onClick={handleNext}>
            <img src={SkipButton} />
          </button>
          
          


          {/* volume button */}
          
        </div>
      </div>

      {/* main window */}
      <div className="flex items-center justify-center h-screen">
        <div className="relative bg-[#83B0E1] text-white w-[50%] h-[75%] flex items-center justify-center pt-10">

          {/* title */}
          <div className="absolute top-4 left-5 text-white text-lg font-pixel">
            isabel's portfolio !!
          </div>

          <div className="bg-[#E1ECF7] w-[95%] h-[93%] relative">

            {/* left panel */}
            <div className="bg-white w-[30%] h-[100%] border-8 border-[#AECBEB] p-4 pl-6 flex flex-col gap-2">
              <Link
                to="/"
                className="text-[#83B0E1] text-lg font-pixel text-left">
                local disk [ i: ]
              </Link>
              <Link
                to="/about-me"
                className="text-[#83B0E1] text-lg font-pixel text-left ml-4">
                about-me
              </Link>
              {/* projects button */}
              <button
                className="text-[#83B0E1] text-lg font-pixel text-left ml-4"
                onClick={() => setProjectsOpen(!projectsOpen)}
              >
                projects
              </button>

              {/* projects */}
              {projectsOpen && (
                <div className="ml-8 mt-1 flex flex-col gap-1">
                  <Link
                    to="/lily"
                    className="text-[#83B0E1] font-pixel">lily
                  </Link>
                  <Link
                    to="/mail-mares"
                    className="text-[#83B0E1] font-pixel">mail mares
                  </Link>
                  {/* 
                  <Link
                    to="/potions"
                    className="text-[#83B0E1] font-pixel">potions
                  </Link>
                  <Link
                    to="/vamoose"
                    className="text-[#83B0E1] font-pixel">vamoose
                  </Link>
                  */}
                  
                  
                </div>
              )}

              <Link
                to="/image-api"
                className="text-[#83B0E1] text-lg font-pixel text-left ml-4">
                image api
              </Link>
              <Link
                to="/contact"
                className="text-[#83B0E1] text-lg font-pixel text-left ml-4">
                contact
              </Link>
            </div>

            {/* top right panel */}
            <div className="absolute top-0 right-0 bg-white w-[71%] h-[12%] border-8 border-[#AECBEB] flex items-center">
              <div className="text-[#83B0E1] font-pixel ml-2">
                {currentPath}
              </div>
            </div>
            
            {/* main content panel (right) */}
            <div className="absolute bottom-0 right-0 bg-white w-[71%] h-[90%] border-8 border-[#AECBEB] overflow-auto">
              <Routes>
                <Route
                      path="/"
                      element={
                        <div className="text-[#83B0E1] font-pixel flex items-center justify-center h-full">
                          choose a folder on the left to get started!
                        </div>
                      }
                />
                <Route path="/about-me" element={<AboutMe />} />
                <Route path="/image-api" element={<ImageApi />} />
                <Route path="/contact" element={<Contact />} />

                <Route path="/mail-mares" element={<MailMares />} />
                <Route path="/potions" element={<Potions />} />
                <Route path="/vamoose" element={<Vamoose />} />
                <Route path="/lily" element={<Lily />} />
              </Routes>
              
            </div>
          </div>


          {/* close, fullscreen, minimize buttons */}
          <div className="absolute top-4 right-5 flex gap-2">
            <div className="bg-[#AECBEB] w-8 h-8">
              <div className="absolute bottom-1 left-1 bg-white w-4 h-1" />
            </div>
            <div className="bg-[#AECBEB] w-8 h-8">
              <div className="absolute bottom-1 left-11 bg-white w-6 h-6">
                <div className="absolute bottom-0.5 left-0.5 bg-[#AECBEB] w-5 h-4"/>
              </div>
            </div>
            <div className="bg-[#AECBEB] w-8 h-8 flex items-center justify-center">
              <div className="absolute top-1/2 left-24 w-1 h-5 bg-white -translate-x-1/2 -translate-y-1/2 rotate-45 origin-center"></div>
              <div className="absolute top-1/2 left-24 w-1 h-5 bg-white -translate-x-1/2 -translate-y-1/2 -rotate-45 origin-center"></div>
            </div>
          </div>

        </div>
      </div>
    </main>
  )
}

export default App
