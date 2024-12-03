'use client'

import SocialMedia from "@/static/SocialMedia";
import Image from "next/image";
import DownloadButton from "@/static/DownloadButton";

function Footer() {
    return <div className="bg-gradient-to-r from-gradientLeft to-gradientRight">
        <Image
            src="/transitions/transition_grey.svg"
            alt="transition"
            layout="responsive"
            width={1920} // Originalna širina slike
            height={200} // Odnos visine prema širini (možete prilagoditi)
        />
        <footer className="flex flex-col items-center">
            <div className="pt-5">
                <SocialMedia size={35} />
            </div>
            <div className="flex text-white text-center p-5">&copy; {new Date().getFullYear()} All rights reserved.</div>
        </footer>
    </div>
}

export default Footer;