import Image from "next/image";
import Section from "../Section";

const Explore : React.FC = () => {
    return <Section id="eksplore">
    <div className="container space-y-[5.2rem]">
        <div className="flex flex-col md:flex-row justify-between space-y-3 md:space-y-0">
            <h3 className="text-cod-gray-950 text-[1.6rem] md:text-[2rem] font-semibold md:max-w-md">Nikmati berbagai <span className="text-denim-600">pemandangan</span> yang indah</h3>
            <p className="text-cod-gray-300 md:text-right md:max-w-xs">Dapatkan suasana pantai, perbukitan, sunrice, sunset dan sekaligus berkemah</p>
        </div>
        <div className="flex flex-col md:flex-row md:justify-between space-x-10">
            <div className="w-full h-[290px] relative ">
              <Image 
                src="/muarambaduk-dengan-drone.webp" alt="muarambaduk-explore-1"
                className="drop-shadow-md w-full rounded-sm"
                layout="fill"
                objectFit="cover" />
            </div>
            <div className="w-full h-[290px] relative hidden md:block">
              <Image
                src="/muarambaduk-camping.webp" alt="muarambaduk-explore-2"
                className="drop-shadow-md rounded-sm w-full"
                layout="fill"
                objectFit="cover" />
            </div>
        </div>
    </div>
  </Section>
}

export default Explore;