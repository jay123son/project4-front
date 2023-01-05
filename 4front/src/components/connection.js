import React from "react";
import { useState } from "react";
import { useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

export default function Albuml() {
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
            <div className="button">
                <Link to = '/addalbum'> <button> Add Album </button> </Link>
            </div>
            <div className="main">
                {album.map((element) => {
                    return( 
                        <div className="container">
                            <Link to ={`album/${element._id}`}><img alt={"Album Cover"}src={element.images}/>
                            <div>{element.album}</div></Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}