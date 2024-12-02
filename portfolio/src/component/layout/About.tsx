import Summary from "@/static/Summary";
import Timeline from "@/static/Timeline";
import Image from "next/image";

function About() {
    const vectors = [
        "/icons/kotlin.svg",
        "/icons/java.svg",
        "/icons/sql-database.svg",
        "/icons/typescript.svg",
        "/icons/next.svg",
        "/icons/intellij-idea.svg",
        "/icons/android.svg",
        "/icons/firebase.svg",
        "/icons/postgresql.svg"
    ];

    return (
        <div className="bg-slate-800" id="About">
            <Image className="w-full h-44" src="/transitions/transition_gradient.svg" alt="transition" />
            <div className="flex justify-center items-center text-white">
                <div className="flex flex-row w-full">
                    <div className="flex desktop:w-1/2 mobile:w-full mobile:p-4 flex-col desktop:p-20">
                        <Summary />
                        {/* Section for vectors */}
                        <div className="grid grid-cols-3 gap-6 mt-16"> {/* Povećana donja margina */}
                            {vectors.map((vectorPath, index) => (
                                <Image
                                    key={index}
                                    src={vectorPath}
                                    alt={`Vector ${index + 1}`}
                                    className="w-16 h-16 mx-4 transform transition duration-500 ease-in-out hover:scale-110 hover:animate-pulse"
                                />
                            ))}
                        </div>
                    </div>
                    <div className="desktop:flex mobile:hidden w-1/2 flex-col pl-10">
                        <Timeline />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
