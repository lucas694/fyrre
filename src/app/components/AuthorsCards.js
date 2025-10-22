import Image from "next/image";
import Link from "next/link";
import { IoMdArrowForward } from "react-icons/io";

const AuthorsCards = (props)=>{
    const {id,img,name,job,city} = props
    return(
        <div key={id} className="border-b py-12 pr-0 w-full flex flex-col items-start sm:items-center sm:flex-row ">
            <Link href={`/authors/${id}`}>
                <div className="relative overflow-hidden shrink-0 w-[150px] h-[150px] rounded-full ">
                    <Image 
                        src={img} 
                        alt="Test image" 
                        width={150} 
                        height={150}
                        className="object-cover transition-transform duration-500 ease-out hover:scale-111 w-auto h-auto "
                    />
                </div>
            </Link>
            <div className="flex flex-col  justify-between w-full mt-4 sm:mt-0 sm:pl-12 sm:flex-row sm:items-center">
                <Link href={`/authors/${id}`}>
                    <h1 className="font-bold text-3xl">{name}</h1>
                </Link>
                <section className='flex flex-col md:flex-row space-x-10 space-y-4 mt-4 sm:space-y-0 sm:mt-0 lg:pl-50'>
                    <h1 className='font-bold text-sm xl:text-base '>Job 
                        <span className='font-normal ml-2 '>{job}</span>
                    </h1>
                    <h1 className='font-bold text-sm xl:text-base '>City 
                        <span className='font-normal ml-2 '>{city}</span>
                    </h1>
                </section>
                <Link href={`/authors/${id}`} className="flex items-center w-fit mt-4 md:mt-0 group">
                    <h1 className='uppercase font-bold'>about</h1>
                    <IoMdArrowForward className="text-black text-xl ml-1 transition-all duration-300 group-hover:translate-x-1/2" />
                </Link>
            </div>
        </div>
    )
};export default AuthorsCards