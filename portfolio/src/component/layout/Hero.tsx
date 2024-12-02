'use client'

import Arrow from "@/static/Arrow";
import SocialMedia from "@/static/SocialMedia";
import Typing from "@/static/Typing";
import Link from "next/link";
import Image from "next/image";

function Hero() {
    return <div className="flex items-center flex-col min-h-screen desktop:px-20 mobile:p-6 bg-gradient-to-r from-gradientLeft to-gradientRight">
        <div className="flex mobile:justify-center desktop:flex-row desktop:items-center mobile:flex-col-reverse items-center w-full flex-1">
            <div className="flex flex-col z-20 pointer-events-none text-white desktop:w-3/5 mobile:w-full mobile:text-center">
                <p className="desktop:text-[5vw] mobile:text-[8vw] font-bold text-lightcyan w-full">Greetings, I&apos;m Luka</p>
                <p className="desktop:text-[3vw] mobile:text-[5vw]">a developer specializing in Android and web applications with
                    <Typing />
                </p>
                <div className='flex mobile:hidden mt-6 justify-start w-[17vw]'><SocialMedia size={200} /></div>
            </div>

            <div
                className="rounded-full border-4 border-dashed border-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 shadow-lg overflow-hidden flex items-center justify-center 
             w-[450px] h-[450px]  
             sm:w-[300px] sm:h-[300px] sm:ml-[10px]"
            >
                <Image
                    className="w-2/5 mobile:w-full mobile:max-w-xl object-contain self-center animate-scalepulse"
                    src="/images/portrait.webp"
                    alt="Portrait"
                    style={{
                        width: "100%", // Slika zauzima sav prostor unutar kruga
                        height: "100%",
                        objectPosition: "center top", // Fokus na gornji deo lica da ne seče glavu
                    }}
                />
            </div>
        </div>
        <div className="desktop:absolute desktop:bottom-10 inset-0 flex items-end py-2 justify-center z-10">
            <Link href={"/#About"} aria-label='About' >
                <Arrow />
            </Link>
        </div>
    </div>
}

export default Hero;