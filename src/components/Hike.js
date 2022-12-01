import logo from "../assets/tiger.svg";
import { Link } from "react-router-dom";

export default function Hike() {
    return(
        <div className="page">
            <div className="logo">
                <Link to="/">
                <img src={logo} alt="logo"></img>
                </Link>
            </div>
            <h1 className="page-title">Hiking To-Do List</h1>
        </div>
    )
}