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
    <div className="main-container container-fluid">
        <br/>
        {error}
      <h1>Add a Song</h1>
      <div className="form-group">
      <form onSubmit={addSong}>
        <div>
          <div>
            Artist:
            <input className="form-control" type="text" value={artist} onChange={e => setArtist(e.target.value)} />
          </div>
        </div>
        <div>
          <div>
            Title:
            <input className="form-control" value={title} onChange={e=>setTitle(e.target.value)}></input>
          </div>
        </div>
        <input className="row btn btn-secondary" type="submit" value="Submit" /><br/>
       </form>
      </div>
      <h1>Your playlist</h1>
      {songs.map( song => (
        <div key={song.id} className="form-group">
          <div className="form-control playlist-container">
            <p><img className='playlist-image' alt="music cover" src="http://ec2-13-57-218-206.us-west-1.compute.amazonaws.com/CS260_CP4/creative-app/front-end/public/images/headphones.jpeg"/> 
            {song.artist}, "<i>{song.title}</i>" 
            <button className="btn btn-secondary btn-sm float-right" onClick={e => deleteSong(song)}>Delete</button></p>
          </div>
        </div>
      ))}
      <br/>
    </div>
        );
};

export default Playlist;