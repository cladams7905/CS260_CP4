import React from 'react';
import Playlist from "./playlist";

const Artist1 = () => {
  return (
      <>
       <div class="img-container">
        <img class="banner-img"  src={require("../images/one-republic.jpeg")} alt="one republic" />
        <div class='text-container'>
          <div class="text-centered lg">ONE REPUBLIC</div>
          <div class="text-bottom md">Featuring the amazing lyricist Ryan Tedder, it is the only band to be this popular for 20 years.</div>
        </div>
      </div>
      <div class="main-container">
        <div class='container-fluid'>
            <h1> <br/> One Republic <br/> </h1>
            <p> <br/> OneRepublic is an American pop rock band formed in Colorado Springs, Colorado,[5] in 2002. It consists of lead vocalist and multi-instrumentalist Ryan Tedder, lead guitarist and violist Zach Filkins, rhythm guitarist Drew Brown, bassist and cellist Brent Kutzle, drummer Eddie Fisher and keyboardist and violinist Brian Willett.

The band achieved its first commercial success on Myspace as an unsigned act.[6] In late 2002, after OneRepublic played shows throughout the Los Angeles area, several record labels approached the band with interest, but the band signed with Velvet Hammer, an imprint of Columbia Records. They made their first album with producer Greg Wells during the summer and fall of 2005 at his studio, Rocket Carousel, in Culver City, California. The album was scheduled for release on June 6, 2006, but the group was dropped by Columbia two months before the album was released. The lead single of that album, "Apologize", was released on April 30, 2006, on Myspace, eventually reaching number one on the Myspace charts. <br/> </p>
        </div>
      </div>
      <Playlist/>
      
      <div class='footer'>
        <p>Made by Carter Adams and Ken Ruth for CS 260</p>
        <a href="https://github.com/cladams7905/CS260_ReactCLI">GitHub Repo</a>
      </div>
    </>
      );
};


export default Artist1;