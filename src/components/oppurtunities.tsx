"use client"
import { SectionWrapper } from "./section-wrapper"
import devkitLogo from '@/assets/devkit.webp'
import garmhal from '@/assets/garmhal.webp'
import Image, { StaticImageData } from "next/image"
import bg from "@/assets/feature/bg.webp"
import { ChevronRight, CircleCheck } from "lucide-react"
import { motion } from "framer-motion"
export const Oppurtunities = () => {
    return (
        <SectionWrapper>
            <div className="flex gap-4 flex-nowrap relative flex-col lg:flex-row">
                <div className="w-full lg:w-[30%] flex flex-col gap-3 mb-8" >
                    <h3 className="bg-gradient-to-r from-blue-400 via-ping-200 to-pink-400 inline-block text-transparent bg-clip-text">Opportunities</h3>
                    <div className="text-3xl w-full font-semibold">
                        <span>Explore</span><br />
                        <span className="text-purple-400">Rewarding Career</span><br />
                        <span>Opportunities</span>
                    </div>
                    <motion.p
                        initial={{ opacity: 0, y: 10, }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        viewport={{ once: true }}
                        className="text-xs text-gray-200/50">Become part of dynamic and innovative team - Unlock your potential in a collaborative environment driven by excellence.</motion.p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center ">
                    {oppurtunitiesArray.map((item, index) => (
                        <OppurtunitiesCard
                            key={index}
                            company={item.company}
                            logo={item.logo}
                            position={item.position}
                            payRange={item.payRange}
                            features={item.features}
                        />
                    ))}
                </div>

            </div>

        </SectionWrapper>
    )
}

type oppurtunitiesCardProps = {
    company: string;
    logo: StaticImageData;
    position: string;
    payRange: string;
    features: {
        location: string;
        date: string;
        id: string;
        jobType: string;
    }[]
}
const OppurtunitiesCard: React.FC<oppurtunitiesCardProps> = ({ company, logo, position, payRange, features }) => {
    return (

        <div
            style={{ backgroundImage: `url(${bg.src})`, backgroundSize: "cover", backgroundPosition: "center" }}
            className="rounded-2xl p-4 w-[340px] md:min-w-[390px] lg:max-w-[420px] lg:min-w-[390px] h-[501px]   flex flex-col gap-4"
        >
            <div className="flex justify-start items-center gap-2">
                <Image
                    src={logo}
                    alt="logo"
                    height={40}
                    width={40}

                />
                <p className="text-lg text-black ">{company}</p>
            </div>
            <div className="flex justify-center items-center flex-col mb-6">
                <h3 className="text-xl font-semibold text-[#02015A] mb-3">{position.toUpperCase()}</h3>
                <motion.p 
                 initial={{ opacity: 0, y: 10, }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.4,delay:.2, ease: "easeInOut" }}
                 viewport={{ once: true }}
                className="text-2xl md:text-3xl mt-2  w-[80%] text-black/80 text-center font-lighter font-bold tracking-wider leading-6">{payRange}</motion.p>
            </div>
            <div>
                {
                    features.map((item, index) => (
                        <motion.div
                        initial={{ opacity: 0, y: 10, }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay:.2,ease: "easeInOut" }}
                        viewport={{ once: true }}
                        key={index} className="flex justify-center items-start gap-4 flex-col px-4 py-6">
                            <p className="text-lg font-semibold text-black/70 flex justify-start items-center gap-2"><CircleCheck className="inline-block" /> <span>{item.location}</span></p>
                            <p className="text-lg font-semibold text-black/70 flex justify-start items-center gap-2"><CircleCheck className="inline-block" /> <span>{item.date}</span></p>
                            <p className="text-lg font-semibold text-black/70 flex justify-start items-center gap-2"><CircleCheck className="inline-block" /> <span>{item.id}</span></p>
                            <p className="text-lg font-semibold text-black/70 flex justify-start items-center gap-2"><CircleCheck className="inline-block" /> <span>{item.jobType}</span></p>
                        </motion.div>
                    ))
                }
            </div>
            <button className="px-5 py-3 rounded-full bg-black text-white w-fit self-center text-2xl font-semibold flex group transition-all justify-center items-center gap-4">
                <span>Apply Now</span> <ChevronRight className="inline-block group-hover:translate-x-2 transition-all" />
            </button>
        </div>
    )
}


const oppurtunitiesArray = [
    {
        company: "Gramhal",
        logo: garmhal,
        position: "Senior Backend Developer ",
        payRange: "₹12L - ₹20L / yr",
        features: [
            {
                location: "Goa, India (Remote)",

                date: "30/3/2024",

                id: "TECHKAREER002",

                jobType: "Full Time"
            }
        ]
    },
    {
        company: "DevKit",
        logo: devkitLogo,
        position: "Hardware Engineer",
        payRange: "₹8K - ₹15K / mo",
        features: [
            {
                location: "Faridabad, Haryana, India",

                date: "30/3/2024",

                id: "TECHKAREER002",

                jobType: "Internship"
            }
        ]
    },
    {
        company: "DevKit",
        position: "Hardware Engineer",
        logo: devkitLogo,
        payRange: "₹8K - ₹15K / mo",
        features: [
            {
                location: "Faridabad, Haryana, India",

                date: "30/3/2024",

                id: "TECHKAREER002",

                jobType: "Internship"
            }
        ]
    },
    {
        company: "DevKit",
        position: "Hardware Engineer",
        logo: devkitLogo,
        payRange: "₹8K - ₹15K / mo",
        features: [
            {
                location: "Faridabad, Haryana, India",

                date: "30/3/2024",

                id: "TECHKAREER002",

                jobType: "Internship"
            }
        ]
    },
]