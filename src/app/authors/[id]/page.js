import Link from "next/link"
import {getAuthorsData} from "../../../utils/utils"
import { IoMdArrowBack } from "react-icons/io";
import Image from "next/image";
import { FaInstagram,FaTwitter,FaFacebook } from "react-icons/fa";


export default async function AuthorsDetail({ params }) {
    const { id } = await params; // pega o [id] da URL
    const authors = getAuthorsData(); // todos os autores
    const author = authors.find(item => item.id === parseInt(id));
    return (
        <div className='px-6 lg:px-10 xl:px-20 2xl:px-44'>
            <section className="flex flex-row justify-between items-center mt-8">
                <Link  href="/authors" className="flex items-center w-fit group cursor-pointer uppercase font-bold"> 
                    <IoMdArrowBack  className="text-black text-xl mr-2 transition-all duration-300 group-hover:-translate-x-1/2" />
                    go back
                </Link >
                <h1 className="font-bold uppercase text-3xl md:text-4xl">Authors</h1>
            </section>

            <div className="flex items-center w-full justify-center py-8 md:py-16">
                <div className="w-full flex flex-col  md:flex-row 
                md:w-[100%] xl:w-[90%] xl:w-[80%]">
                    <div className="flex flex-col w-full mt-10
                    md:w-[40%] md:mt-0 lg:w-[30%]">
                        <section className='flex flex-col items-center'>
                            <Image src={author.img} 
                                alt="Test image" 
                                width={300} 
                                height={300}
                                className=" w-[300px] h-[300px] rounded-full" 
                            />
                        </section>
                        <section className="flex flex-row justify-between mt-8 border-y py-3">
                            <span className="font-bold uppercase text-lg">follow</span>
                            <ul className='flex flex-row items-center justify-center space-x-4'>
                                <li>
                                    <a href="/" target="blank_"><FaInstagram className="text-2xl"/></a>
                                </li>
                                <li>
                                    <a href="/" target="blank_"><FaTwitter className="text-2xl"/></a>
                                </li>
                                <li>
                                    <a href="/" target="blank_"><FaFacebook className="text-2xl"/></a>
                                </li>
                            </ul>
                        </section>
                        <section className="flex flex-row justify-between mt-6">
                            <span className="font-bold">Job</span>
                            <p className="font-normal">{author.job}</p>
                        </section>
                        <section className="flex flex-row justify-between mt-5">
                            <span className="font-bold">City</span>
                            <p className="font-normal">{author.city}</p>
                        </section>
                    </div>

                    <div className="w-full  mt-10 overscroll-auto md:mt-0 
                    md:w-[60%] md:px-8 lg:w-[70%] lg:px-18 2xl:w-[65%]">
                        <h1 className="text-5xl font-bold uppercase md:text-6xl lg:text-8xl">{author.name}</h1>
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