

export const VideoCard = ({info}) =>{
    const {snippet, statistics} = {...info};
    const {channelTitle, title, thumbnails} = {...snippet}

return (
    <div className="p-2 m-2 w-80 ">
        <img  className="rounded-xl" src={thumbnails?.medium?.url} alt="video" />
        <div>
            <h4 className="font-bold pt-2">{title}</h4>
            <h4>{channelTitle}</h4>
            <h5>{statistics?.viewCount} M</h5>
        </div>
    </div>
)
}