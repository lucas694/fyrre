import WelcomeText from "../components/WelcomeText";
import {getPodcastData} from "../../utils/utils"
import PodcastCards from "../components/PodcastCards";


export default function PodcastPage () {
    const PodcastData = getPodcastData()
    return(
        <div className='px-6 lg:px-10 xl:px-20 2xl:px-44'>
            <WelcomeText text="podcast"/>
            <div className='pb-10'>
                {[...PodcastData].reverse().slice(0,5).map((data)=>
                    <PodcastCards
                        key={data.id}
                        img={data.img}
                        title={data.title}
                        date={data.date}
                        duration={data.duration}
                        id={data.id}
                    />
                )}
            </div>
        </div>
    )
}