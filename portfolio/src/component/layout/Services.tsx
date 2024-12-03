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
            height={200}  // Postavite odgovarajuću visinu slike
            layout="responsive"  // Koristite responsive layout
        />

        <p className="flex text-4xl my-8 justify-center text-white font-bold">Services</p>
        <div className="flex desktop:flex-row mobile:flex-col mobile:items-center flex-grow justify-around text-center">
            <Service hl="Single Page Applications" desc="Development of responsive web apps such as portfolios, landingpages and dashboards" img="/icons/spa.svg" />
            <Service hl="API Integration" desc="Seamless integration into your solution for dynamic content delivery" img="/icons/api.svg" />
            <Service hl="SEO Optimization" desc="Enhancing visibility and rankings of your web application" img="/icons/seo.svg" />
        </div>
        <p className="desktop:text-[40px] mobile:text-[24px] font-bold text-center mb-4">You have a project? Get in Touch</p>
        <ContactBtn title={"Contact Me"} />

    </div>
}

export default Services;