import Image from "next/image";
import Link from "next/link";

const MagazineCards = (props) => {
    const {id,img,title,description,author,date,readTime,badge,authorId} = props

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
            <div key={id} className="border p-8 xl:p-11 w-full ">
                <section className="flex flex-row justify-between items-center">
                    <h1 className="text-sm font-normal">{date}</h1>
                    <Link href={getBadgeUrl(badge)} className='w-auto border rounded-full px-3 py-1 uppercase text-xs 
                    md:mt-0 hover:bg-black hover:text-white transition-all duration-500'>
                        {badge}
                    </Link>
                    
                </section>
                <Link href={`/magazine/${id}`}>
                    <div className="relative overflow-hidden shrink-0 w-full mt-6
                        xl:w-auto xl:h-auto">
                        <Image 
                            src={img} 
                            alt="Test image" 
                            width={405} 
                            height={405}
                            className="object-cover transition-transform duration-500 ease-out hover:scale-111 w-full h-full "
                        />
                    </div>
                </Link>
                <Link href={`/magazine/${id}`}>
                    <h1 className=" mt-4 text-2xl font-bold xl:mt-6 xl:text-3xl">{title}</h1>
                </Link>
                <p className="mt-4">{description}</p>
                <section className='flex flex-col space-y-1 mt-10 2xl:flex-row 2xl:space-x-6 2xl:space-y-0'>
                    <h1 className='font-bold text-normal text-sm'>Text 
                    <Link href={`/authors/${authorId}`}>
                        <span className='font-normal ml-2 underline'>{author}</span>
                    </Link>
                    </h1>

                    <h1 className='font-bold text-normal text-sm'>Read 
                        <span className='font-normal ml-2 '>{readTime}</span>
                    </h1>
                </section>
            </div>
    )
}; 
export default MagazineCards