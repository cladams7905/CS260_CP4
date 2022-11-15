import React from 'react';

const Artist1 = () => {
  return (
      <>
       <div class="img-container">
        <img class="banner-img"  src="http://ec2-13-57-218-206.us-west-1.compute.amazonaws.com/CS260_CP4/creative-app/public/images/one-republic.jpeg" alt="one republic" />
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
      <h1> <br/> Most Recent Albums <br/><br/> </h1>
      <div id='one-republic-albums'>
      </div>
      <h1> <br/> Top Five Hits <br/><br/> </h1>
      <div id='one-republic-songs'>
      </div>
        </div>
      </div>
      
      <div class='footer'>
        <p>Made by Carter Adams and Ken Ruth for CS 260</p>
        <a href="https://github.com/cladams7905/CS260_ReactCLI">GitHub Repo</a>
      </div>
    </>
      );
};

var artist = "onerepublic";
var id = "one-republic-albums";
var shazam_artist = "One%20Republic";
var id_songs = "one-republic-songs";

const url = "https://theaudiodb.com/api/v1/json/2/discography.php?s="+artist;

console.log(url);

fetch(url)
.then(function(response){
    return response.json();
}).then(function(json) {
    console.log(json);
    let results = "";
    results += "<table class='album-list'>";
    results += "<tr>";
    results += "<th>Album Name</th>";
    results += "<th>Year Released</th>";
    results += "</tr>";
    for (var i = 0; i < json.album.length; i++) {
        results += "<tr>";
        results += "<td>" + json.album[i].strAlbum + "</td>";
        results += "<td>" + json.album[i].intYearReleased + "</td>";
        results += "</tr>";
    }
    results += "</table>";
    
    document.getElementById(id).innerHTML = results;
});

const options = {
    method: 'GET',
	headers: {
    'X-RapidAPI-Key': '33c1f5e4eamsh944298e103a693dp1e1b43jsn658ec8e905c5',
    'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
	 }
};

const url2 = "https://shazam.p.rapidapi.com/search?term=" + shazam_artist + "&locale=en-US&offset=0&limit=5";
console.log(url2);
fetch(url2, options) 
.then(function(response) {
    return response.json();
}).then(function(json){
    console.log(json);
    let results = "";
    results += "<table class='album-list'>";
    results += "<tr>";
    results += "<th>Song Name</th>";
    results += "<th>Track Information</th>"
    results += "</tr>";
    for(var i = 0; i < json.tracks.hits.length; i++) {
        results += "<tr>";
        results += "<td>" + json.tracks.hits[i].track.title + "</td>";
        var shazam_link = json.tracks.hits[i].track.url;
        results += "<td>" + "<a href= " + shazam_link + "> Shazam Website</a>";
        results += "</tr>";
    }
    results += "</table><br/><br/>";
    console.log(results)
    
    document.getElementById(id_songs).innerHTML = results;
});

export default Artist1;