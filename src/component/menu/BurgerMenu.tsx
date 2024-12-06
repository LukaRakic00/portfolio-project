'use client'

import Burger from "./elements/Burger";
import Close from "./elements/Close";
import Menu from "./elements/Menu";
import { useEffect } from "react";
import { useGlobalState } from "@/contexts/GlobalStateContext";
import SocialMedia from "@/static/SocialMedia";

function BurgerMenu (){
 
    const { isMenuOpen, toggleMenu, exitMenu } = useGlobalState();

    useEffect(() => {
        if (isMenuOpen) {
            document.body.classList.add("overflow-y-hidden")
        } else {
            document.body.classList.remove("overflow-y-hidden")
        }

        window.addEventListener('resize', exitMenu);

        return () => {
          window.removeEventListener('resize', exitMenu);
        };
    }, [isMenuOpen]);

    return (<div className="desktop:hidden">
        <div className="fixed top-0 right-0 p-2 z-50" onClick={toggleMenu}>
            {isMenuOpen ? <Close /> : <Burger />}
        </div>
        {isMenuOpen ?
            <div className="flex justify-between pt-20 fixed flex-col text-white text-4xl pl-5 bg-black backdrop-blur-md bg-opacity-40 w-full h-full z-40">
                <Menu />
                <SocialMedia size={42} />
            </div> : <></>}
    </div>);
}

export default BurgerMenu;