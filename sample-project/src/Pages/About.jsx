import { useState } from "react";
import State from "../hooks/State";
import { Link } from "react-router-dom";
import { UserContext } from "../hooks/UserContext";
import { useContext } from "react";

const About = () => {
    const name=useContext(UserContext)
    return (
        <div>
            <h1>Hi! {name}</h1>
            <Link to='/state'>UseState</Link><br/>
            <Link to='/form'>Controlled Form</Link><br/>
            <Link to='/effect'>Effect</Link>
        </div>
    )
}
export default About