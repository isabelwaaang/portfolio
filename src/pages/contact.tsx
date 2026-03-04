import { useState } from "react"
import { createPortal } from "react-dom"

import GmailIcon from "../assets/icons/gmail-icon.png"
import GithubIcon from "../assets/icons/github-icon.png"
import LinkedInIcon from "../assets/icons/linkedin-icon.png"

export default function Contact(){
    const [copied, setCopied] = useState(false)
    const handleCopyEmail = () => {
        navigator.clipboard.writeText("isabel.chu.wang@gmail.com")
        setCopied(true)

        setTimeout(() => setCopied(false), 2000)
    }

    return(
        <main>
            <div className="grid grid-cols-2 gap-12 justify-items-center mt-[15%]">

                
    
                {/* email */}
                <div
                    onClick={handleCopyEmail}
                    className="flex flex-col items-center cursor-pointer select-none relative"
                    >
                    <img src={GmailIcon} className="h-20 w-20 object-contain" />
                    <div className="text-[#83B0E1] font-pixel mt-3 text-center">
                        email
                    </div>
                    {copied &&
                        createPortal(
                        <div
                            className="fixed top-[60%] left-[87%] transform -translate-x-1/2 -translate-y-1/2 bg-[#83B0E1] w-[17%] h-[17%] flex items-center justify-center"
                        >
                            <div className="bg-white w-[95%] h-[83%] border-8 border-[#AECBEB] flex items-center justify-center gap-8">
                                <div className="text-[#83B0E1] font-pixel gap-1 mx-2">
                                    email copied to clipboard!
                                </div>
                            </div>
                        </div>,
                        document.body
                    )}
                </div>

                {/* linkedin */}
                <div
                    onClick={() => window.open("https://www.linkedin.com/in/isabel-wang-amber/", "_blank")}
                    className="flex flex-col items-center cursor-pointer select-none"
                >
                    <img src={LinkedInIcon} className="h-20 w-auto object-contain" />
                    <div className="text-[#83B0E1] font-pixel mt-3 text-center">
                        linkedin
                    </div>
                </div>

                {/* github */}
                <div
                    onClick={() => window.open("https://github.com/p1cotee", "_blank")}
                    className="flex flex-col items-center cursor-pointer select-none"
                >
                    <img src={GithubIcon} className="h-20 w-auto object-contain" />
                    <div className="text-[#83B0E1] font-pixel mt-3 text-center">
                        github
                    </div>
                </div>

            </div>
        </main>
        
    )
}