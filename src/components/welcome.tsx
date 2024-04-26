"use client"
import { SectionWrapper } from "./section-wrapper"
import { motion } from "framer-motion"
import Image from "next/image"
import { StaticImageData } from 'next/image';
import pfp from "@/assets/userpfp"

export const Welcome = () => {

    return (
        <SectionWrapper>
            <div className="flex justify-center items-center flex-col ">
                <motion.div
                    initial={{ opacity: 0, y: 20 }} // Set initial opacity to 0 and move the element down by 20px
                    animate={{ opacity: 1, y: 0 }} // Animate opacity to 1 and move the element to its original position
                    transition={{ duration: 1 , delay:.5 }} className="flex justify-center items-center gap-2 mb-4">
                    <UserPfp pfp={pfp} />
                    <p className="text-[#9CA3BD]">Trusted already by 1.2k+</p>
                </motion.div>
                <div className="flex flex-col justify-center items-center mb-12">
                    <div className="text-[4.2rem] font-semibold mb-6">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: .7 }}
                        >Ready.</motion.span>
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: .9 }}
                        >Set.</motion.span>
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 1.1 }}
                            className="underline decoration-wavy decoration-[3px] decoration-[#da43f5]"
                        >Hire.</motion.span>
                    </div>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 1.2 }}
                        className="w-full md:w-[55%] text-xl text-[#858694] text-center leading-10">TechKareer is used by numerous businesses, institutions, and recruiters to significantly enhance their screening and recruitment procedures.</motion.p>
                </div>
                <motion.button
                    initial={{ opacity: 0, y: 30,scale: 0.6 }}
                    animate={{ opacity: 1, y: 0,scale: 1}}
                    transition={{ duration: 0.5, delay: 2.4 }}
                    className="bg-white text-black px-8 py-4  font-bold text-xs rounded-full tracking-wider shadow-[0px_0px_10px_1px_#fed7e2]  ">
                    REGISTER
                </motion.button>

                <motion.video
                    initial={{ opacity: 0, y: 20, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.5  ,delay: 1.8}}
                    autoPlay loop muted className="rounded-2xl mt-24 w-[80%]" >
                    <source src="./video.mp4" />
                </motion.video>


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