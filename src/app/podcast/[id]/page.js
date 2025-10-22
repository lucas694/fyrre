import Link from "next/link"
import {getPodcastData} from "../../../utils/utils"
import { IoMdArrowBack } from "react-icons/io";
import Image from "next/image";
import { FaInstagram,FaTwitter,FaFacebook,FaSpotify,FaApple, } from "react-icons/fa";
import { FaSoundcloud } from "react-icons/fa6";



export default async function PodcastDetail({ params }) {
    const { id } = await params; // pega o [id] da URL
    const allPodcasts = getPodcastData();
    const podcast = allPodcasts.find(item => item.id === parseInt(id));
    return (
        <div className='px-6 lg:px-10 xl:px-20 2xl:px-44'>
            <section className="flex flex-row justify-between items-center mt-8">
                <Link  href="/podcast"
                className="flex items-center w-fit group cursor-pointer uppercase font-bold"> 
                <IoMdArrowBack  className="text-black text-xl mr-2 transition-all duration-300 group-hover:-translate-x-1/2" />
                go back
                </Link >
                <h1 className="font-bold uppercase text-3xl md:text-4xl">Podcast</h1>
            </section>

            <div className="flex items-center w-full justify-center py-8 md:py-16">
                <div className="w-full flex flex-col  md:flex-row items-center justify-center md:items-start
                md:w-[100%] xl:w-[90%] xl:w-[80%]">

                    <div className="flex flex-col w-full mt-10
                    md:w-[40%] md:mt-0 lg:w-[25%]">
                        <section className='flex flex-col items-center'>
                            <Image src={podcast.img} 
                                alt="Test image" 
                                width={600} 
                                height={600}
                                className=" w-full h-full " 
                            />
                        </section>
                        <section className="flex flex-row justify-between  border-b pt-4 pb-6">
                            <span className="font-bold uppercase text-lg">Listen On</span>
                            <ul className='flex flex-row items-center justify-center space-x-3'>
                                <li>
                                    <a href="/" target="blank_"><FaSpotify className="text-xl"/></a>
                                </li>
                                <li>
                                    <a href="/" target="blank_"><FaApple className="text-xl"/></a>
                                </li>
                                <li>
                                    <a href="/" target="blank_"><FaSoundcloud className="text-xl"/></a>
                                </li>
                            </ul>
                        </section>

                        <section className="flex flex-row justify-between mt-6">
                            <span className="font-bold">Date</span>
                            <p className="font-normal">{podcast.date}</p>
                        </section>
                        <section className="flex flex-row justify-between mt-5">
                            <span className="font-bold">Duration</span>
                            <p className="font-normal">{podcast.duration}</p>
                        </section>
                        <section className="flex flex-row justify-between mt-5">
                            <span className="font-bold">Share</span>
                            <ul className='flex flex-row items-center justify-center space-x-4'>
                                <li>
                                    <a href="/" target="blank_"><FaInstagram className="text-lg"/></a>
                                </li>
                                <li>
                                    <a href="/" target="blank_"><FaTwitter className="text-lg"/></a>
                                </li>
                                <li>
                                    <a href="/" target="blank_"><FaFacebook className="text-lg"/></a>
                                </li>
                            </ul>
                        </section>
                    </div>

                    <div className="w-full  mt-10 overscroll-auto md:mt-0 
                    md:w-[60%] md:px-8 lg:w-[70%] lg:px-18 2xl:w-[55%]">
                        <h1 className=" font-bold uppercase ">episode 0{podcast.id}</h1>
                        <h1 className="text-5xl font-bold uppercase lg:text-6xl">{podcast.title}</h1>
                        <br/>
                        <p className="font-semibold md:text-lg lg:text-xl">Egestas egestas fringilla phasellus faucibus scelerisque eleifend. Nunc pulvinar sapien et ligula ullamcorper malesuada proin libero. Aenean vel elit scelerisque mauris pellentesque. Gravida arcu ac tortor dignissim. Ac tortor dignissim convallis aenean.</p>
                        <br/>
                        <p className="text-sm md:text-base">Nec feugiat in fermentum posuere urna nec tincidunt praesent semper. Aliquam nulla facilisi cras fermentum. Quam elementum pulvinar etiam non quam lacus suspendisse faucibus interdum. Neque vitae tempus quam pellentesque nec. Interdum consectetur libero id faucibus nisl tincidunt eget nullam. Mattis enim ut tellus elementum sagittis. In fermentum et sollicitudin ac orci phasellus.</p>
                        <br/>
                        <p className="text-sm md:text-base">Est sit amet facilisis magna etiam tempor orci. Lacinia at quis risus sed vulputate odio ut. Egestas egestas fringilla phasellus faucibus scelerisque eleifend. Nunc pulvinar sapien et ligula ullamcorper malesuada proin libero. Aenean vel elit scelerisque mauris pellentesque. Gravida arcu ac tortor dignissim. Ac tortor dignissim convallis aenean.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}