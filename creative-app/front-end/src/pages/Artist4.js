import React from 'react';
import Playlist from "./playlist";

const Artist4 = () => {
  return  (
     <>
        <div class="img-container">
        <img class="banner-img" src= {require("../images/Kane-Brown.jpg")} alt="kane brown"/>
        <div class='text-container'>
          <div class="text-centered lg">Kane Brown</div>
          <div class="text-bottom md">Fairly young pop country singer who first came onto the scene in 2014.</div>
        </div>
      </div>
      <div class="main-container">
        <div class='container-fluid'>
          <h1> <br/> Blake Shelton<br/> </h1>
          <p><br/> Kane Allen Brown[2][3] (born October 21, 1993)[1] is an American singer. Brown first came to the attention of the public through social media.[4] He released his first EP, titled Closer, in June 2015, and followed it with a new single, "Used to Love You Sober", in October 2015. After Brown signed with RCA Nashville in early 2016, the song was included on his EP Chapter 1, released in March 2016. He released his first full-length album, the self-titled Kane Brown, on December 2, 2016. The single "What Ifs" came from this album, and in October 2017, Brown became the first artist to have simultaneous number ones on all five main Billboard country charts.[5] Brown released his second album, Experiment, in November 2018, which became his first number one album on the Billboard 200.[6] <br/> </p>
        </div>
      </div>
      <Playlist/>
      <div class='footer'>
        <p>Made by Carter Adams and Ken Ruth for CS 260</p>
        <a href="https://github.com/cladams7905/CS260_CP4">GitHub Repo</a>
      </div>
     </>
     );
};

export default Artist4;