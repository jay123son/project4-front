import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";

export default function albumid(props) {
  const { id } = useParams();
  const [albumId, setalbumId] = useState([]);
  const URL = `${id}`;
  const getalbum = async () => {
    try {
      const response = await fetch(URL);
      const albumData = await response.json();
      setalbumid(albumData);
    } catch (err) {
      console.log(err);
    }
  };
  const navigate = useNavigate();

  const removealbum = async () => {
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
        <img src={albumid.cover} />
        <div>{albumid.album}</div>
        <div>{albumid.artist}</div>
        <div>{albumid.released}</div>
        <div>{albumid.tracks}</div>
        <div>{albumid.about}</div>
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
