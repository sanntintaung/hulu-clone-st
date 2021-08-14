import Thumbnail from './Thumbnail';

function Contents({results}) {
    return(
        <div className="my-10 px-5 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4">
            {results.map((result) => (
                <Thumbnail key={result.id} result={result}/>
            ))}
        </div>
    );

}

export default Contents;