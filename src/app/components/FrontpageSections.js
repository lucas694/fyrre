"use client";
import Link from "next/link";
import { IoMdArrowForward } from "react-icons/io";
import {getPodcastData} from "../../utils/utils"
import {getAuthorsData} from "../../utils/utils"
import PodcastCardFront from "./FrontpageCards/PodcastCardFront";
import AuthorsCardFront from "./FrontpageCards/AuthorsCardFront";
import { motion } from "framer-motion";



const FrontpageSections = (props) =>{
    const {authors,podcast} = props
    const PodcastData = getPodcastData()
    const AuthorsData = getAuthorsData()
    
    return(
        <div className="flex flex-col w-full py-10 lg:py-24">
            {/* HR animado */}
            <motion.hr
                initial={{ scaleX: 0, originX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
                className=""
            />

            <div className="flex flex-col justify-between w-full items-center py-14  md:flex-row">
                <div className="overflow-hidden">
                    <motion.div
                    initial={{ y: 90, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    viewport={{ once: true }}
                    >
                        <h1 className="text-6xl font-bold uppercase md:text-8xl">{authors ? "Authors" : "Podcasts"}</h1>
                    </motion.div>
                </div>
                <Link href={authors ? "/authors" : "/podcast"} className="flex items-center w-fit mt-4 md:mt-0 group">
                    <h1 className='uppercase font-bold'>{authors ? "all authors" : "All episodes"}</h1>
                    <IoMdArrowForward className="text-black text-xl ml-1 transition-all duration-300 group-hover:translate-x-1/2" />
                </Link>
            </div>

            {authors ? 
            <div className="flex flex-col w-full md:flex-row flex-wrap">
                {AuthorsData.slice(0,6).map((data)=>
                    <AuthorsCardFront
                        key={data.id}
                        id={data.id}
                        img={data.img}
                        name={data.name}
                        job={data.job}
                        city={data.city}
                        /> 
                )}
            </div> 
            : 
            <div className="flex flex-col w-full md:flex-row">
                {[...PodcastData].reverse().slice(0,3).map((data)=>
                    <PodcastCardFront
                        key={data.id}
                        id={data.id}
                        img={data.img}
                        title={data.title}
                        date={data.date}
                        duration={data.duration}
                    />
                )}
            </div>
            }
        </div>
    )
};

export default FrontpageSections