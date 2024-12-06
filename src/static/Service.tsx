import { ServiceData } from "@/types/types.d";
import Image from "next/image";

function Service(serviceData: ServiceData) {
    return <div className="flex min-h-full flex-col desktop:w-1/3 m-4 mobile:w-3/4 p-8 rounded-md transition-colors hover:bg-slate-700">
        <Image
            className="w-2/3 h-auto self-center p-14"
            src={serviceData.img}
            alt="transition"
            width={800}  // Širina slike, prilagodite prema vašoj slici
            height={600}  // Visina slike, prilagodite prema vašoj slici
        />

        <p className="text-xl font-bold">{serviceData.hl}</p>
        <p className="mt-3 text-lg">{serviceData.desc}</p>
    </div>
}

export default Service;