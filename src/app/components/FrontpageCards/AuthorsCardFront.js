import Image from "next/image";
import Link from "next/link";

const AuthorsCardFront = (props) => {
    const {id,img,name,job,city,} = props
    return(
        <div key={id} className="border p-8 w-full flex flex-col items-start sm:items-center sm:flex-row md:w-1/2  ">
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
            <div className="flex flex-col mt-4 sm:mt-0 sm:px-12 ">
                <Link href={`/authors/${id}`}>
                    <h1 className="font-bold text-3xl">{name}</h1>
                </Link>
                <section className='flex flex-col space-y-1 2xl:flex-row 2xl:space-x-6 2xl:space-y-0 mt-6 '>
                    <h1 className='font-bold text-sm xl:text-base '>Job 
                        <span className='font-normal ml-2 '>{job}</span>
                    </h1>
                    <h1 className='font-bold text-sm xl:text-base '>City 
                        <span className='font-normal ml-2 '>{city}</span>
                    </h1>
                </section>
            </div>
        </div>
    )
};export default AuthorsCardFront