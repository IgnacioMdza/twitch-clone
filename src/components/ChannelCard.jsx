
export default function ChannelCard(props){
    return(
        <article className='channelCard'>
            <div className='channelCardStreamer'>
                <div>
                    <img src={props.photo}></img>
                </div>
                <div className='channelCardStreamerInfo'>
                    <p className='channelCardStreamerName'>{props.name}</p>
                    <p>{props.game}</p>
                </div>
            </div>
            <div className='channelCardUserViews'>
                { props.isOnline
                    ? <p>{`🔴${props.views}`}</p> 
                    : <p>Offline</p> }
            </div>
        </article>
    )
}