import React from 'react';
import band from "./images/band.jpeg";

const Home = () => {
  return (
    <>
        <div class="img-container">
          <img class="banner-img" src={band} alt="one-republic"/>
          <div class='text-container'>
            <div class="text-centered lg">FAVORITE ARTISTS</div>
            <div class="text-bottom md">Favorite Bands for Carter and Ken.</div>
          </div>
        </div>
        
        <div class="main-container"/>
        <div class='container-fluid'/>
            <h1> <br/> Welcome <br/> </h1>
            <h4> <br/> Visit this website to see the favorite artists of Carter and Ken. 
            We have focused on three of them in this website. Hopefully it helps you learn about some new artists and expands your interest! Most of the information about the artists on this website comes from Wikipedia
            and <a href="https://www.theaudiodb.com/api_guide.php">theaudiodb API</a>. <br/><br/> </h4>
      
      <div class='footer'>
        <p>Made by Carter Adams and Ken Ruth for CS 260</p>
        <a href="https://github.com/cladams7905/CS260_CreativeProject1">GitHub Repo</a>
      </div>
    </>
      );
};

export default Home;