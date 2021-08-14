import Image from 'next/image';
import {
    ThumbUpIcon
} from "@heroicons/react/outline";

function Thumbnail({result}) {
    const BASE_URL = 'https://image.tmdb.org/t/p/original/';
    return(
        <div className="group cursor-pointer p-2 transition duration-200
            ease-in transform sm:hover:scale-105 hover:z-50">
            <Image src={
                `${BASE_URL}${result.backdrop_path}` ||
                `${BASE_URL}${result.poster_path}`
            }
            layout="responsive"
            width={1920}
            height={1080}/>

            <div className="px-3 py-2">
                <p className="truncate text-sm ">{result.overview}</p>

                <h2 className="font-bold transition-all duration-100 ease-in group-hover:text-white">
                    {result.title || result.original_name}
                    <span className="text-xs text-opacity-25 opacity-50">{result.media_type && `  (${result.media_type})`}
                    </span>
                </h2>

                <p className="flex text-xs opacity-0 group-hover:opacity-100">
                    {result.release_date || result.first_air_date} . {" "}
                    <ThumbUpIcon className="h-4 mx-2"/> {result.vote_count}
                </p>
            </div>
        </div>
    );
}

export default Thumbnail;