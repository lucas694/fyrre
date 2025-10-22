import Image from "next/image";
import Link from "next/link";
import { IoMdArrowForward } from "react-icons/io";


const PodcastCards = (props) => {
    const {id,img,title,date,duration} = props
    return(
        <div className='border-b py-12 pr-0 w-full flex flex-col items-start sm:items-start sm:flex-row xl:items-center '> 
            <h1 className="text-xl mb-4 font-bold pr-10 md:text-2xl sm:pr-6 md:mb-0  2xl:pr-16">0{id}</h1>
            <div className="relative overflow-hidden shrink-0 w-full 
                sm:w-auto sm:h-auto">
                <Link href={`/podcast/${id}`}> 
                    <Image 
                        src={img}  
                        alt="Test image" 
                        width={340} 
                        height={340}
                        className="object-cover transition-transform duration-500 ease-out hover:scale-111 
                        w-full h-full sm:max-w-[240px] sm:max-h-[240px]"
                    />
                </Link>
            </div>

            <div className="flex flex-col  justify-between w-full mt-4 sm:pl-8 sm:mt-0 2xl:pl-12 xl:flex-row xl:items-center">
                <Link href={`/podcast/${id} `} className="xl:w-[45%]"> 
                    <h1 className="font-bold text-2xl xl:text-3xl  ">{title}</h1>
                </Link>
                <section className='flex flex-col lg:flex-row space-x-10 space-y-4 mt-4 sm:space-y-0 xl:mt-0 xl:pl-0 '>
                    <h1 className='font-bold text-sm  '>Date 
                        <span className='font-normal ml-2 '>{date}</span>
                    </h1>
                    <h1 className='font-bold text-sm '>Duration 
                        <span className='font-normal ml-2 '>{duration}</span>
                    </h1>
                </section>
                <Link href={`/podcast/${id}`} className="flex items-center w-fit mt-4 xl:mt-0 group">
                    <h1 className='uppercase font-bold'>listen</h1>
                    <IoMdArrowForward className="text-black text-xl ml-1 transition-all duration-300 group-hover:translate-x-1/2" />
                </Link>
            </div>
        </div>
    )
};export default PodcastCards