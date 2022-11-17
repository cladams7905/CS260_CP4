import React from 'react';
import Playlist from "./playlist";

const Home = () => {
  return (
    <>
    <div class="main-container"/>
        <div class='container-fluid'/>
        <div class="img-container">
          <img class="banner-img" src="http://ec2-13-57-218-206.us-west-1.compute.amazonaws.com/CS260_CP4/creative-app/front-end/public/images/band.jpeg" alt="one-republic"/>
          <div class='text-container'>
            <div class="text-centered lg">FAVORITE ARTISTS</div>
            <div class="text-bottom md">Favorite Bands for Carter and Ken.</div>
          </div>
        </div>
            <h4 class="text-container"> <h1> <br/> Welcome <br/> </h1> <br/> Visit this website to see the favorite artists of Carter and Ken. 
            We have focused on three of them in this website. Hopefully it helps you learn about some new artists and expands your interest! Most of the information about the artists on this website comes from Wikipedia
            and <a href="https://www.theaudiodb.com/api_guide.php">theaudiodb API</a>. <br/><br/> </h4>
        <Playlist/>
      <div class='footer'>
        <p>Made by Carter Adams and Ken Ruth for CS 260</p>
        <a href="https://github.com/cladams7905/CS260_ReactCLI">GitHub Repo</a>
      </div>
    </>
      );
};

export default Home;