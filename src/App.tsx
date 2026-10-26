import { useState, useRef, useEffect } from "react";
import { Link, Route, Routes} from "react-router-dom";
import { useLocation } from "react-router-dom"

import AboutMe from "./pages/about-me"
import ImageApi from "./pages/image-api"
import Contact from "./pages/contact"

import MailMares from "./pages/project-pages/mail-mares-project"
import Potions from "./pages/project-pages/potions-project"
import Vamoose from "./pages/project-pages/vamoose-project"
import Lily from "./pages/project-pages/lily-project"

import SaintsRobotics from "./pages/experience-pages/saints-robotics"
import Quizbowl from "./pages/experience-pages/quizbowl"
import LogEase from "./pages/experience-pages/logease"

import Movies from "./pages/interests-pages/movies"
import Music from "./pages/interests-pages/music"
import Shows from "./pages/interests-pages/shows"
import VideoGames from "./pages/interests-pages/video-games"
import Books from "./pages/interests-pages/books"

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

import MusicPlayerIcon from "./assets/desktop/icons/music-player.png"
//import FilmIcon from "./assets/desktop/icons/film-icon.png"
//import GamesIcon from "./assets/desktop/icons/games-icon.png"

import Click from "./assets/sound-effects/click.mp3"

import { useDraggable } from "./useDraggable";

function App() {
  const [projectsOpen, setProjectsOpen] = useState(false);
  const [experenceOpen, setExperienceOpen] = useState(false);
  //const [interestsOpen, setInterestsOpen] = useState(false);

  const [isMusicOpen, setIsMusicOpen] = useState(false);

  {/* music player stuff */}
  const [isPlaying, setIsPlaying] = useState(false);
  const playlist = [FOCUS, HER, ImaginaryFriend, LikeYouBetter, Nxde, TheStarryNight, TimeMachine];
  const [currentIndex, setCurrentIndex] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const navItem = "relative text-[#83B0E1] font-pixel before:absolute before:-left-4 before:top-1/2 before:-translate-y-1/2 before:text-sm hover:before:content-['>']";

  const musicWin = useDraggable();
  const [front, setFront] = useState<"main" | "music">("main");

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

  const playClickSound = () => {
    const sound = new Audio(Click);
    sound.volume = 0.1;
    sound.play().catch((err) => console.error("Sound failed:", err));
  };


  {/* pathname stuff */}
  const location = useLocation();
  const currentPath =
  location.pathname === "/"
    ? "C:\\users\\isabel\\home"
    : `C:\\users\\isabel${location.pathname.replaceAll("/", "\\")}`;

  return (
    

    <main className="bg-[#e1ecf7]">
      <audio
        ref={audioRef}
        src={playlist[currentIndex]}
        onEnded={handleNext}
      />
      {/* music player icon */}
      <div
        className="absolute top-[2%] left-[2%] w-24 h-auto cursor-pointer transition-transform duration-300 hover:scale-105 active:scale-95"
        onClick={() => {
          playClickSound();
          setIsMusicOpen(true);
        }}
      >
        <img src={MusicPlayerIcon} className="w-full h-full [image-rendering:pixelated]" />
        <div className="absolute top-20 left-1 text-[#83B0E1] text-lg font-pixel">music.exe</div>
      </div>

      {/* film  icon 
      <div className="absolute top-[20%] left-[2%] w-24 h-auto">
        <img src={FilmIcon} className="w-full h-full [image-rendering:pixelated]" />
        <div className="absolute top-20 left-3 text-[#83B0E1] text-lg font-pixel">film.exe</div>
      </div>
      */}

      {/* games  icon 
      <div className="absolute top-[38%] left-[2%] w-24 h-auto">
        <img src={GamesIcon} className="w-full h-full [image-rendering:pixelated]" />
        <div className="absolute top-20 left-0 text-[#83B0E1] text-lg font-pixel">games.exe</div>
      </div>
      */}

      {isMusicOpen && (
        <div
          style={{ ...musicWin.style, zIndex: front === "music" ? 20 : 10 }}
          onPointerDown={() => setFront("music")}
          className="absolute top-[40%] right-10 bg-[#83B0E1] text-white w-[20%] h-[20%] flex items-center justify-center pt-10"
        >
          <div {...musicWin.handle} className="absolute top-0 left-0 w-full h-12" />

          <div className="absolute top-2 left-5 text-white text-lg font-pixel pointer-events-none">
            music player
          </div>

          <div className="bg-white w-[95%] h-[93%] relative border-8 border-[#AECBEB] flex items-center justify-center gap-8">
            {/* back button */}
            <button
              onClick={() =>
                setCurrentIndex((prev) => (prev === 0 ? playlist.length - 1 : prev - 1))
              }
            >
              <img src={BackButton} />
            </button>

            {/* play/pause button */}
            <button onClick={() => setIsPlaying(!isPlaying)}>
              <img src={isPlaying ? PlayButton : PauseButton} />
            </button>

            {/* skip button */}
            <button onClick={handleNext}>
              <img src={SkipButton} />
            </button>
          </div>

          {/* close button */}
          <div className="absolute top-2 right-2 flex gap-2">
            <button
              className="relative bg-[#AECBEB] w-8 h-8"
              onClick={() => {
                setIsMusicOpen(false);
                playClickSound();
              }}
            >
              <div className="absolute top-1/2 left-1/2 w-1 h-5 bg-white -translate-x-1/2 -translate-y-1/2 rotate-45" />
              <div className="absolute top-1/2 left-1/2 w-1 h-5 bg-white -translate-x-1/2 -translate-y-1/2 -rotate-45" />
            </button>
          </div>
        </div>
      )}
      

      {/* undraggable music window
      {isMusicOpen && (
        <div className="absolute top-[30%] right-10 bg-[#83B0E1] text-white w-[20%] h-[20%] flex items-center justify-center pt-10">
          <div className="absolute top-2 left-5 text-white text-lg font-pixel">
            music player
          </div>

          <div className="bg-white w-[95%] h-[93%] relative border-8 border-[#AECBEB] flex items-center justify-center gap-8">
            {/* back button 
            <button
              onClick={() =>
                setCurrentIndex((prev) => (prev === 0 ? playlist.length - 1 : prev - 1))
              }
            >
              <img src={BackButton} />
            </button>

            {/* play/pause button 
            <button onClick={() => setIsPlaying(!isPlaying)}>
              <img src={isPlaying ? PlayButton : PauseButton} />
            </button>

            {/* skip button 
            <button onClick={handleNext}>
              <img src={SkipButton} />
            </button>
          </div>

          {/* close, fullscreen, minimize buttons 
          <div className="absolute top-2 right-2 flex gap-2">
            <button
              className="relative bg-[#AECBEB] w-8 h-8"
              onClick={() => {
                setIsMusicOpen(false);
                playClickSound();
              }}
            >
              <div className="absolute top-1/2 left-1/2 w-1 h-5 bg-white -translate-x-1/2 -translate-y-1/2 rotate-45" />
              <div className="absolute top-1/2 left-1/2 w-1 h-5 bg-white -translate-x-1/2 -translate-y-1/2 -rotate-45" />
            </button>
          </div>
        </div>
      )}
      */}

      {/* main window */}
      <div className="flex items-center justify-center h-screen">
        <div className="relative bg-[#83B0E1] text-white w-[50%] h-[75%] flex items-center justify-center pt-10">

          {/* title */}
          <div className="absolute top-4 left-5 text-white text-lg font-pixel">
            isabel's portfolio !!
          </div>

          <div className="bg-[#E1ECF7] w-[95%] h-[93%] relative">

            {/* left panel */}
            <div className="bg-white w-[30%] h-[100%] border-8 border-[#AECBEB] p-4 pl-6 flex flex-col gap-2 overflow-auto">
              <Link
                to="/"
                onClick={() => playClickSound()}
                className="text-[#83B0E1] text-lg font-pixel text-left">
                local disk [ i: ]
              </Link>
              <Link
                to="/about-me"
                onClick={() => playClickSound()}
                className={`${navItem} text-lg text-left ml-4`}>
                about-me
              </Link>
              {/* projects button */}
              <button
                className={`${navItem} text-lg text-left ml-4`}
                onClick={() => {
                  setProjectsOpen(!projectsOpen);
                  playClickSound();
                }}
              >
                projects
              </button>

              {/* projects */}
              {projectsOpen && (
                <div className="ml-8 mt-1 flex flex-col gap-1">
                  <Link
                    to="/lily"
                    onClick={() => playClickSound()}
                    className={navItem}>lily
                  </Link>
                  <Link
                    to="/mail-mares"
                    onClick={() => playClickSound()}
                    className={navItem}>mail mares
                  </Link>
                  
                  <Link
                    to="/potions"
                    onClick={() => playClickSound()}
                    className={navItem}>potions
                  </Link>
                  <Link
                    to="/vamoose"
                    onClick={() => playClickSound()}
                    className={navItem}>vamoose
                  </Link>
                </div>
              )}

              {/* experience button */}
              <button
                className={`${navItem} text-lg text-left ml-4`}
                onClick={() => {
                  setExperienceOpen(!experenceOpen);
                  playClickSound();
                }}
              >
                experience
              </button>

              {/* experience */}
              {experenceOpen && (
                <div className="ml-8 mt-1 flex flex-col gap-1">
                  <Link
                    to="/logease"
                    onClick={() => playClickSound()}
                    className={navItem}>logease
                  </Link>
                  <Link
                    to="/saints-robotics"
                    onClick={() => playClickSound()}
                    className={navItem}>saints robotics
                  </Link>
                  <Link
                    to="/quizbowl"
                    onClick={() => playClickSound()}
                    className={navItem}>quizbowl
                  </Link>
                </div>
              )}

              {/* interests button 
              <button
                className="text-[#83B0E1] text-lg font-pixel text-left ml-4"
                onClick={() => setInterestsOpen(!interestsOpen)}
              >
                interests
              </button>
              */}

              {/* interests 
              {interestsOpen && (
                <div className="ml-8 mt-1 flex flex-col gap-1">
                  <Link
                    to="/movies"
                    className="text-[#83B0E1] font-pixel">movies
                  </Link>
                  {/*
                  <Link
                    to="/shows"
                    className="text-[#83B0E1] font-pixel">shows
                  </Link>
                  <Link
                    to="/video-games"
                    className="text-[#83B0E1] font-pixel">video games
                  </Link>
                  <Link
                    to="/books"
                    className="text-[#83B0E1] font-pixel">books
                  </Link>
                  
                  <Link
                    to="/music"
                    className="text-[#83B0E1] font-pixel">music
                  </Link>
                </div>
              )}
              */}

              <Link
                to="/contact"
                onClick={() => playClickSound()}
                className={`${navItem} text-lg text-left ml-4`}>
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

                <Route path="/saints-robotics" element={<SaintsRobotics />} />
                <Route path="/quizbowl" element={<Quizbowl />} />
                <Route path="/logease" element={<LogEase />} />

                <Route path="/movies" element={<Movies />} />
                <Route path="/music" element={<Music />} />
                <Route path="/shows" element={<Shows />} />
                <Route path="/video-games" element={<VideoGames />} />
                <Route path="/books" element={<Books />} />

              </Routes>
              
            </div>
          </div>


          {/* close, fullscreen, minimize buttons 
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
          */}

        </div>
      </div>
    </main>
  )
}

export default App
