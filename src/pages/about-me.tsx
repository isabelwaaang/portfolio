import ProfileImg from "../assets/profile.jpg"

export default function AboutMe(){
    return(
        <main>
            
            <div className="flex items-start gap-4 my-2 mx-2">
                <img
                    className="w-32 h-32 rounded-full object-cover object-top"
                    src={ProfileImg}
                    alt="profile"
                />
                <div className="text-[#83B0E1] font-pixel text-2xl flex flex-col gap-y-0.5">
                <div>isabel wang</div>
                <div className="text-base flex flex-col gap-y-0">
                    <div>based in bellevue, wa</div>
                    <div>cse major @ uc irvine</div>
                    <div>us citizen</div>
                </div>
                </div>
            </div>
            
            <div className="text-[#83B0E1] font-pixel gap-1 mx-2">
                hi!! im isabel and i am a computer science and engineering student at uc irvine
            </div>
            <div className="text-[#83B0E1] font-pixel font-bold mt-4 mx-2">
                main interests:
            </div>
            <div className="text-[#83B0E1] font-pixel mx-4">
                <div>• software engineering</div>
                <div>• ai</div>
                <div>• computer vision</div>
                <div>• game development</div>
            </div>

            <div className="text-[#83B0E1] font-bold font-pixel mt-4 mx-2">
                honors:
            </div>
            <div className="text-[#83B0E1] font-pixel mx-4">
                <div>• advanced learning and international baccalaureate graduate from the bellevue school district </div>
                <div>• deans honor list @ uci</div>
            </div>

            <div className="text-[#83B0E1] font-bold font-pixel mt-4 mx-2">
                hobbies + other interests:
            </div>
            <div className="text-[#83B0E1] font-pixel mx-4">
                <div>• video games</div>
                <div>• environemntal science</div>
                <div>• tennis, biking, skiing</div>
            </div>

            <div className="text-[#83B0E1] font-pixel font-bold mt-4 mx-2">
                languages [ fluent ]:
            </div>
            <div className="text-[#83B0E1] font-pixel mx-4">
                <div>• english</div>
                <div>• mandarin</div>
            </div>

            <div className="text-[#83B0E1] font-pixel font-bold mt-4 mx-2">
                skills:
            </div>

            {/*skills boxes */}
            <div className="flex flex-wrap gap-2 mt-2 pl-2">
                <div className="bg-[#83B0E1] text-white px-3 py-1 rounded-sm text-sm font-pixel">
                    python
                </div>
                <div className="bg-[#83B0E1] text-white px-3 py-1 rounded-sm text-sm font-pixel">
                    java
                </div>
                <div className="bg-[#83B0E1] text-white px-3 py-1 rounded-sm text-sm font-pixel">
                    c#
                </div>
                <div className="bg-[#83B0E1] text-white px-3 py-1 rounded-sm text-sm font-pixel">
                    html
                </div>
                <div className="bg-[#83B0E1] text-white px-3 py-1 rounded-sm text-sm font-pixel">
                    css
                </div>
                <div className="bg-[#83B0E1] text-white px-3 py-1 rounded-sm text-sm font-pixel">
                    javascript
                </div>
                <div className="bg-[#83B0E1] text-white px-3 py-1 rounded-sm text-sm font-pixel">
                    sql
                </div>
                <div className="bg-[#83B0E1] text-white px-3 py-1 rounded-sm text-sm font-pixel">
                    react
                </div>
                <div className="bg-[#83B0E1] text-white px-3 py-1 rounded-sm text-sm font-pixel">
                    typescript
                </div>
                <div className="bg-[#83B0E1] text-white px-3 py-1 rounded-sm text-sm font-pixel">
                    vite
                </div>
                <div className="bg-[#83B0E1] text-white px-3 py-1 rounded-sm text-sm font-pixel">
                    git
                </div>
                <div className="bg-[#83B0E1] text-white px-3 py-1 rounded-sm text-sm font-pixel">
                    unity
                </div>
            </div>
        </main>
    )
}