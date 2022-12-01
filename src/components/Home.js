import ProjectTile from "./ProjectTile.js";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

export default function Home(props) {
    return (
        <div>
            <div className="logo">
                <Link to="/">
                    <img src={logo} alt="logo"></img>
                </Link>
            </div>
            <div className="home">
                <h1 className="intro">
                Hi - I'm a designer interested in the social aspect of technology. I like to explore ways to humanize users and UX and make designs that enrich people's lives rather than distract from them.
                </h1>
                {props.projectData.map((item, index) => ( 
                    <Link to={"/"+item.id}>
                        <ProjectTile item={item} height={'20rem'}></ProjectTile> 
                    </Link>
                ))}
            </div>
        </div>
    )
}