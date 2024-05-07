export default function HTMLRenderer({url}){

    return(
        <div className="col-start-1 col-end-11">
            <iframe className="w-full aspect-video" src={url} frameborder="0\" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>
        </div>
    )
}