import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

export default function Hack() {
    return(
        <div>
            <div className="logo">
                <Link to="/">
                <img src={logo} alt="logo"></img>
                </Link>
            </div>
            <h1 className="page-title">Hack @ Home</h1>
        </div>
    )
}