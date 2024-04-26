"use client"
import { SectionWrapper } from "./section-wrapper"
import { motion } from "framer-motion"
import Image from "next/image"
import { StaticImageData } from 'next/image';
import pfp from "@/assets/userpfp"
import BackgroundVideo from 'next-video'
import myVideo from '../../videos/video.mp4'
import ReactPlayer from "react-player";
export const Welcome = () => {
    let videoPath = "../../videos/video.mp4"
    return (
        <SectionWrapper>
            <div className="flex justify-center items-center flex-col ">
                <div className="flex justify-center items-center gap-2 mb-4">
                    <UserPfp pfp={pfp} />
                    <p className="text-[#9CA3BD]">Trusted already by 1.2k+</p>
                </div>
                <div className="flex flex-col justify-center items-center mb-12">
                    <h1 className="text-[4.2rem] font-semibold mb-6">Ready. Set. <span className="underline decoration-wavy decoration-[3px] decoration-[#da43f5]">Hire.</span></h1>
                    <p className="w-[55%] text-xl text-[#858694] text-center leading-10">TechKareer is used by numerous businesses, institutions, and recruiters to significantly enhance their screening and recruitment procedures.</p>
                </div>
                <button className="bg-white text-black px-8 py-4  font-bold text-xs rounded-full tracking-wider shadow-[0px_0px_10px_1px_#fed7e2]  ">
                    REGISTER
                </button>
              <video autoPlay loop muted className="rounded-2xl mt-24 w-[80%]" >
                <source src="./video.mp4"/>
              </video>
            </div>
        </SectionWrapper>
    )
}

type UserPfpProps = {
    pfp: StaticImageData[]
}
const UserPfp: React.FC<UserPfpProps> = ({ pfp }) => {
    return (
        <div className="flex">
            {
                pfp.map((pfp, index) => (
                    <motion.div
                        whileHover={{ translateY: -10, transition: { duration: .3, ease: "easeInOut" } }}
                        style={{ marginLeft: index > 0 ? "-10px" : "0" }}
                        key={index}
                        className="relative w-10 h-10 rounded-full overflow-hidden border-solid border-2">
                        <Image src={pfp} alt="" layout="fill" objectFit="cover" objectPosition="center" />
                    </motion.div>
                ))
            }
        </div>


    )
}