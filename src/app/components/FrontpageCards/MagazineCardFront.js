import Image from "next/image";
import Link from "next/link";
const MagazineCardFront = (props) => {
    const {id,img,title,description,date,authorName,readTime,badge,authorId} = props
    
    const getBadgeUrl = (badge) => {
        switch(badge.toLowerCase()) {
            case 'art':
                return '/art';
            case 'sculptures':
                return '/sculptures';
            case 'street art':
                return '/streetart';
            default:
                return '/magazine';
        }
    };
    
    return(
        <div className="flex flex-col" key={id}>
            <div className="flex flex-col py-8 md:py-10 sm:flex-row">
                <Link href={`/magazine/${id}`}>
                    <div className="relative overflow-hidden shrink-0 w-full h-[350px] 
                    sm:w-[180px] sm:h-[180px] 
                    md:w-[230px] md:h-[230px] 
                    xl:w-[252px] xl:h-[252px]">
                        <Image 
                            src={img} 
                            alt="Test image" 
                            fill
                            className="object-cover transition-transform duration-500 ease-out hover:scale-110 hover:-translate-y-1"
                        />
                    </div>
                </Link>
                <div className="flex flex-col mt-2 sm:mt-0 sm:ml-6 md:ml-10">
                    <Link href={`/magazine/${id}`}>
                        <h1 className="text-4xl font-bold ">{title}</h1>
                    </Link>
                    <p className="mt-4 sm:mt-4 md:mt-6">{description}</p>
                    <div className='mt-4 flex flex-col items-start md:mt-6 md:items-center md:justify-between md:flex-row 2xl:mt-12'>
                        <section className='flex flex-col space-y-1 2xl:flex-row 2xl:space-x-6 2xl:space-y-0'>
                            <h1 className='font-bold text-normal'>Text 
                            <Link href={`/authors/${authorId}`}>
                                <span className='font-normal ml-2 text-lx underline'>{authorName}</span>
                            </Link>
                            </h1>

                            <h1 className='font-bold text-normal'>Date 
                                <span className='font-normal ml-2 text-lx '>{date}</span>
                            </h1>

                            <h1 className='font-bold text-normal'>Read 
                                <span className='font-normal ml-2 text-lx '>{readTime}</span>
                            </h1>
                        </section>
                        <Link href={getBadgeUrl(badge)} className='w-auto mt-4 border rounded-full px-3 py-1 uppercase text-sm 
                        md:mt-0 hover:bg-black hover:text-white transition-all duration-500'>
                            {badge}
                        </Link>
                    </div>
                </div>
            </div>  
            <hr className="w-full"/>
        </div>
    )
}; export default MagazineCardFront