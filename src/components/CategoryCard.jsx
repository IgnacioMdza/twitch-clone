
export default function CategoryCard(props){
    return(
        <article className='categoryCard'>
            <div>
                { props.isNew && <p className='newTag'>New</p> }
                <img src={props.image}></img>
            </div>
            <h4>{props.game}</h4>
            <p>{`${props.viewers} viewers`}</p>
            <div className='tagsContainer'>
                {
                    props.tags.map((tag,index) => {
                        return <button className='tagButton' key={`skill-${index}`}>{tag}</button>;
                    })
                }
            </div>
        </article>
    )
}