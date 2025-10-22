import WelcomeText from "../components/WelcomeText";
import {getAuthorsData} from "../../utils/utils"
import AuthorsCards from "../components/AuthorsCards";

export default function AuthorsPage () {
    const AuthorsData = getAuthorsData()
    return(
        <div className='px-6 lg:px-10 xl:px-20 2xl:px-44'>
            <WelcomeText text="authors"/>
            <div className='py-10'>
                {AuthorsData.slice(0,6).map((data)=>
                    <AuthorsCards
                        key={data.id}
                        id={data.id}
                        img={data.img}
                        name={data.name}
                        job={data.job}
                        city={data.city}
                    />
                )}
            </div>
        </div>
    )
}