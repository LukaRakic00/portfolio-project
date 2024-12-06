'use client'

import Arrow from "@/static/Arrow";
import SocialMedia from "@/static/SocialMedia";
import Typing from "@/static/Typing";
import Link from "next/link";
import Photo from "./Photo";
import DownloadButton from "@/static/DownloadButton";

function Hero() {
    return (
        <div className="flex items-center flex-col min-h-screen desktop:px-10 mobile:p-6 bg-gradient-to-r from-gradientLeft to-gradientRight">
            <div className="flex mobile:justify-center desktop:flex-row desktop:items-center mobile:flex-col-reverse items-center w-full flex-1">
                <div className="flex flex-col z-20 text-white desktop:w-3/5 mobile:w-full mobile:text-center ">
                    <p className="desktop:text-[5vw] mobile:text-[8vw] font-bold text-lightcyan w-full desktop:mt-20">Greetings, I&apos;m Luka</p>
                    <p className="desktop:text-[3vw] mobile:text-[5vw]">a developer specializing in Android and web applications with
                        <Typing />
                    </p>
                    <div className="flex mobile:hidden mt-6 justify-start w-[40vw] ml-11">
                        <div className="mt-50" >
                            <SocialMedia size={100} />
                            {/* Dodaj z-index ovde */}
                            <DownloadButton className="mt-10 relative z-50" />
                        </div>
                    </div>
                </div>
                <div className="static flex items-center justify-center desktop:ml-[100px] desktop:mb-[100px]"
                    style={{
                        width: '400px',
                        height: '400px',
                        marginRight: '10px',
                        marginBottom: '15px',
                    }}>
                    <Photo />

                </div>
            </div>

            <div className="desktop:relative desktop:bottom-10 inset-0  items-end py-2 justify-center z-10 desktop:mb-[50px]">
                <Link href={"/#About"} aria-label='About'>
                    <Arrow />
                </Link>
            </div>
        </div>
    );
}

export default Hero;

