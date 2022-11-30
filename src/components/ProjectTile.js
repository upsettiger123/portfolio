export default function ProjectTile(props) {
    const item = props.item;
    return (
        <div className="project-tile">
            <img src={item.img} style={{width: props.width}}></img>
            <div className="tile-content">
                <h2>{item.name}</h2>
                <p>{item.descr}</p>
            </div>
        </div>
    )
}