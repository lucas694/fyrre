import Image from "next/image";
import Link from "next/link";

const PodcastCardFront = (props) =>{
    const {id,img,title,date,duration} = props
    return(
        <div key={id} className="border p-8 xl:p-12 w-full xl:w-max">
            <div className="relative overflow-hidden shrink-0 w-full 
                xl:w-auto xl:h-auto">
                <Link href={`/podcast/${id}`}> 
                    <Image 
                        src={img} 
                        alt="Test image" 
                        width={405} 
                        height={405}
                        className="object-cover transition-transform duration-500 ease-out hover:scale-111 w-auto h-auto "
                    />
                </Link>
            </div>
            <Link href={`/podcast/${id}`}> 
                <h1 className=" mt-4 text-2xl font-bold xl:mt-8 xl:text-3xl">{title}</h1>
            </Link>
            <section className='flex flex-col space-y-1 2xl:flex-row 2xl:space-x-6 2xl:space-y-0 mt-6 xl:mt-10'>
                <h1 className='font-bold text-sm xl:text-base '>Date 
                    <span className='font-normal ml-2 '>{date}</span>
                </h1>
                <h1 className='font-bold text-sm xl:text-base '>Duration 
                    <span className='font-normal ml-2 '>{duration}</span>
                </h1>
            </section>
        </div>
    )
};
export default PodcastCardFront