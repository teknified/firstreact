
import React from "react";
import "./header.css";

export default function startProject(){
    return(
        <header>
            <h1 className="change_color">JSOM</h1>
            <nav className="navigation">
                <a href="#">Authors</a>
                <a href="#">MostLikedPost</a>
                <a href="#">MostCommentPost</a>
            </nav>
        </header>
    ) 
}