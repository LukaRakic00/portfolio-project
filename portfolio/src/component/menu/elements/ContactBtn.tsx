'use client'

import { useGlobalState } from "@/contexts/GlobalStateContext";
import { useEffect } from "react";

const ContactBtn = ({title}:{title:string}) => {
    
    const { isModalOpen, toggleModal, exitMenu } = useGlobalState();

    const handleClick = () => {
        exitMenu();
        toggleModal();
    }

    useEffect(() => {
        if (isModalOpen) {
            document.body.classList.add("overflow-y-hidden")
        } else {
            document.body.classList.remove("overflow-y-hidden")
        }
    }, [isModalOpen]);
    
    return (<button className='flex items-center cursor-pointer'>
        <div aria-label={title} className={"transition ease-in-out duration-300 text-center border-2 border-white rounded-3xl px-3 py-1 hover:bg-white hover:text-black"} onClick={handleClick} >{title}</div>
        </button>
    );
}

export default ContactBtn;