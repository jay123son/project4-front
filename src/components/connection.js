import React from "react";
import '../App.css';
import { useState } from "react";
import { useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

export default function Album() {
    const [album, setAlbum] = useState([]); 

    useEffect(() => {
        axios.get('https://topalbum.fly.dev/album')
          .then((response) => response.data)
          .then((response) => {
            console.log(response)
            setAlbum(response) 
          })
    }, []);

    return (
        <div>
            <div className="columns button is-centered my-4">
                <Link to = '/addalbum'> <button> Add Album </button> </Link>
            </div>
            <div className="main">
                {album.map((element) => {
                    return( 
                        <div className="columns image is-centered my-4">
                            <Link to ={`album/${element._id}`}><img className="image is-128x128" alt={"Album Cover"}src={element.cover}/>
                            <div className="columns title is-centered my-4">{element.album}</div></Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}