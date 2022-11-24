import React from "react";
import {  Image } from "./styles";
import { Link, NavLink } from "react-router-dom";

const DEFAULT_IMAGE = "https://i.imgur.com/dJa0Hpl.jpeg";

function Category({ cover = DEFAULT_IMAGE, path, emoji = "?", id }) {
    return (
        <NavLink to={{
            pathname: `/pet/${id}`,
        }}
        style={{
        display: 'flex',
        flexDirection: 'column',
       textAlign: "center",
       textDecoration: 'none',
       width: '75px'}}>
            
                <Image src={cover} />
            {emoji}
        </NavLink>
    );
}

export { Category };
