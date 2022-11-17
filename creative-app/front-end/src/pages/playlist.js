import { useState, useEffect } from 'react';
import axios from 'axios';

const Playlist = () => {
  
  const [songs, setSongs] = useState([]);
  const [error, setError] = useState("");
  const [artist, setArtist] = useState("");
  const [title, setTitle] = useState("");

  const fetchSongs = async() => {
    try {      
      const response = await axios.get("/api/songs/");
      setSongs(response.data.songs);
    } catch(error) {
      setError("error retrieving songs: " + error);
    }
  };
  
  const createSong = async() => {
    try {
      await axios.post("/api/songs/", {artist: artist, title: title});
    } catch(error) {
      setError("error adding a song: " + error);
    }
  };
  
  const deleteOneSong = async(song) => {
    try {
      await axios.delete("/api/songs/" + song.id);
    } catch(error) {
      setError("error deleting a song: " + error);
    }
  };

  // fetch Song data
  useEffect(() => {
    fetchSongs();
  },[]);

  const addSong = async(e) => {
    e.preventDefault();
    await createSong();
    fetchSongs();
    setArtist("");
    setTitle("");
  };

  const deleteSong = async(song) => {
    await deleteOneSong(song);
    fetchSongs();
  };
  
    return (
    <div>
        {error}
      <h1>Add a Song</h1>
      <form onSubmit={addSong}>
        <div>
          <label>
            Artist:
            <input type="text" value={artist} onChange={e => setArtist(e.target.value)} />
          </label>
        </div>
        <div>
          <label>
            Title:
            <textarea value={title} onChange={e=>setTitle(e.target.value)}></textarea>
          </label>
        </div>
        <input type="submit" value="Submit" />
      </form>
      <h1>Your playlist</h1>
      {songs.map( song => (
        <div key={song.id} className="ticket">
          <div className="problem">
            <p>{song.artist}</p>
            <p><i>-- {song.title}</i></p>
          </div>
          <button onClick={e => deleteSong(song)}>Delete</button>
        </div>
      ))}  
    </div>
        );
};

export default Playlist;