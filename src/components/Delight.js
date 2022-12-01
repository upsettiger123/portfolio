import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

export default function Delight() {
    return(
        <div>
            <div className="logo">
                <Link to="/">
                <img src={logo} alt="logo"></img>
                </Link>
            </div>
            <h1 className="page-title">Delight Dating App</h1>
        </div>
    )
}