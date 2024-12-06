import Service from "@/static/Service";
import ContactBtn from "../menu/elements/ContactBtn";
import Image from "next/image";

function Services() {
    return <div id="Services" className="flex text-white min-h-full flex-col items-center bg-slate-800">
        <Image
            className="w-full h-44"
            src="/transitions/transition_gradient.svg"
            alt="transition"
            width={1920}  // Postavite odgovarajuću širinu slike
            height={500}  // Postavite odgovarajuću visinu slike
            layout="responsive"  // Koristite responsive layout
        />

        <p className="flex text-4xl my-8 justify-center text-white font-bold">Services</p>
        <div className="flex desktop:flex-row mobile:flex-col mobile:items-center flex-grow justify-around text-center">
            <Service hl="Android Applications" desc="Development of Android applications with intuitive UI, seamless performance, and modern features" img="/icons/android02.svg" />
            <Service hl="Web Development & UI/UX Design" desc="Designing user-friendly interfaces and developing responsive web applications" img="/icons/web.svg" />            <Service hl="Database Development & Management" desc="Building and managing scalable, secure databases for optimal data storage and performance" img="/icons/database.svg" />

        </div>
        <p className="desktop:text-[40px] mobile:text-[24px] font-bold text-center mb-4">You have a project? Get in Touch</p>
        <div className="mb-15px">
            <ContactBtn className="mb-15px" title={"Contact Me"} />
        </div>
    </div>
}

export default Services;