import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";

export default function Albumid(props) {
  const { id } = useParams();
  const [albumId, setAlbumId] = useState([]);
  const URL = `${id}`;
  const getalbum = async () => {
    try {
      const response = await fetch(URL);
      const albumData = await response.json();
      setAlbumId(albumData);
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

      const response = await fetch(URL, options);
      const deletedalbum = await response.json();

      navigate("/");
    } catch (err) {
      navigate(URL);
    }
  };
  useEffect(() => {
    getalbum();
  }, []);

  return (
    <div>
      <div className="container">
        <img src={albumId.cover} />
        <div>{albumId.album}</div>
        <div>{albumId.artist}</div>
        <div>{albumId.released}</div>
        <div>{albumId.tracks}</div>
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
