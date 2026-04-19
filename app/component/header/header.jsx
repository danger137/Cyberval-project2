"use client";
import Nav from "./nav/nav"
import "./header.css"
import Hero from "./hero/hero"

export default function Header(){
    return(
        <div className="mein-container">
            <Nav />
            <Hero />
        </div>
    )
}