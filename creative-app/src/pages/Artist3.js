
import React from 'react';
import band3 from "./images/shelton1.jpg";

const Artist3 = () => {
  return  (
     <>
        <div class="img-container">
        <img class="banner-img" src={band3} alt="ed sheeran"/>
        <div class='text-container'>
          <div class="text-centered lg">Blake Shelton</div>
          <div class="text-bottom md">One of the more well known country artists who has made many hits since 2001.</div>
        </div>
      </div>
      <div class="main-container">
        <div class='container-fluid'>
          <h1> <br/> Blake Shelton<br/> </h1>
          <p><br/> Blake Tollison Shelton (born June 18, 1976)[1] is an American country music singer and television personality. In 2001, he made his debut with the single "Austin". The lead-off single from his self-titled debut album, "Austin" spent five weeks at number one on the Billboard Hot Country Songs chart. The now Platinum-certified debut album also produced two more top 20 entries ("All Over Me" and "Ol' Red").[1]
          His second and third albums, 2003's The Dreamer and 2004's Blake Shelton's Barn & Grill, are gold and platinum, respectively.[1] His fourth album, Pure BS (2007), was re-issued in 2008 with a cover of Michael Bublé's pop hit "Home" as one of the bonus tracks.[2] His fifth album, Startin' Fires was released in November 2008.[1] It was followed by the extended plays Hillbilly Bone and All About Tonight in 2010, and the albums Red River Blue in 2011,[3] Based on a True Story... in 2013, Bringing Back the Sunshine in 2014, If I'm Honest in 2016, Texoma Shore in 2017, and Fully Loaded: God's Country in 2019. <br/> </p>
          <h1> <br/> Most Recent Albums <br/><br/> </h1>
          <div id='blake-shelton-albums'>
          </div>
          <h1> <br/> Top Five Hits <br/><br/> </h1>
          <div id='blake-shelton-songs'>
          </div>
        </div>
      </div>
     </>
     );
};
var artist = "blake shelton";
var  id = "blake-shelton-albums";
var  shazam_artist = "Blake%20Shelton";
var   id_songs = "blake-shelton-songs";
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

export default Artist3;