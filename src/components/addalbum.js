import React, { useState } from 'react'
import { Link } from 'react-router-dom';

 function Addalbum() {
    const BASE_URL = ''
    const [newForm, setNewForm]= useState({

    cover: "",
    album: "",
    artists: "",
    released: "",
    tracks: "",
    about: "",

   })
   const getalbum = async (fn) => {
    try {
        const response = await fetch(BASE_URL);
        const allalbum = await response.json();

        console.log(allalbum);
    } catch (err) {
        console.log(err);
    }
};
   const addalbum = async (albumData)=>{
    try {
        console.log(albumData);
      await fetch (BASE_URL, {
            method:"post",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify(albumData)
        })
        getalbum()
    }catch(err){
        console.log(err)
    }
   }
    const handleSubmit = async (e) => {
       console.log(newForm);
        e.preventDefault()
        await addalbum(newForm)
       setNewForm ({
        cover: "",
        album: "",
        artists: "",
        released: "",
        tracks: "",
        about: "",
        })
      
    }
    const handleChange = (e)=>{
        const data = {...newForm, [e.target.name]: e.target.value}
        setNewForm(data)
       }
    return (
        <div>
            <h2>Add An Album:</h2>
            <form onSubmit={handleSubmit}>
                <label for="cover">Cover:</label>
                <input type="text" value={newForm.cover}  name="cover" onChange={handleChange} />
                <br />
                <label for="album">Album:</label>
                <input type="text" value={newForm.album} name="album" onChange={handleChange} />
                <br />
                <label for="artist">Artists:</label>
                <input type="text" value={newForm.artists} name="artists" onChange={handleChange} />
                <br />
                <label for="released">Released:</label>
                <input type="text" value={newForm.released} name="released" onChange={handleChange} />
                <br />
                <label for="tracks">Tracks:</label>
                <input type="text" value={newForm.tracks} name="tracks" onChange={handleChange} />
                <br />
                <label for="about">About:</label>
                <input type="text" value={newForm.about} name="about" onChange={handleChange} />
                <br />
                <br /><br />
                <input type="submit" /> 
                <Link to= '/'><button>back</button></Link>
            </form>
        </div>
    )
}


export default Addalbum