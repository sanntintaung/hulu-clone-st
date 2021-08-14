import requests from '../utils/requests';
import {useRouter} from 'next/router';

function Nav(props) {
    const router = useRouter();
    return(
        <nav>
            <div className="flex px-10 sm:px-20 overflow-x-scroll whitespace-nowrap
                space-x-10 sm:space-x-20 scrollbar-hide">
                {Object.entries(requests).map( ([key,{title,url}])=> (
                    <h2 className="cursor-pointer active:bg-green-700 transition duration-100 transform  hover:scale-125 "
                        key={key}
                        onClick={() => router.push(`/?genre=${key}`)}
                    >{title}</h2>
                ))}
            </div>
        </nav>
    );
}

export default Nav;