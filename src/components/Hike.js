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
            <h2>Creating a hiking to do list with trails well known within driving distance from Brown's campus using an app that tracks states</h2>
        </div>
    )
}