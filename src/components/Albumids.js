import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function Albumid(props) {
  const { id } = useParams();
  const [albumId, setAlbumId] = useState([]);
  const [tracks, setTracks] = useState([]);
  const URL = `https://topalbum.fly.dev/album`;
  console.log(URL)
  const getalbum = async () => {
    try {
      const response = await fetch(`${URL}/${id}`);
      const albumData = await response.json();
      setAlbumId(albumData);
      setTracks(albumData.tracks);
    } catch (err) {
      console.log(err);
    }
  };
  const navigate = useNavigate();

  const removeAlbum = async () => {
    try {
      const options = {
        method: "DELETE",
      };
      console.log(URL)
      const response = await fetch(`${URL}/${id}`, options);
      const deletedalbum = await response.json();
      console.log(deletedalbum);
      navigate("/");
    } catch (err) {
      navigate("/");
    }
  };
  useEffect(() => {
    getalbum();
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, []);
console.log(albumId)
  return (
    <div>
      <div className="container">
        <img src={albumId.cover} alt={"album cover"}/>
        <div>{albumId.album}</div>
        <div>{albumId.artists}</div>
        <div>{albumId.released}</div>
        <ul> {tracks.map((track,index)=>{
          return (
            <li key={index}>{track}</li>)
        })}</ul>
        <div>{albumId.about}</div>
        <div> 

        
          <button className="delete" onClick={removeAlbum}>
            Remove Album
          </button>
          <Link to="/">
            <button>back</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
