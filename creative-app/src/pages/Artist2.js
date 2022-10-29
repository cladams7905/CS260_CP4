
import React from 'react';
import band2 from "./images/ed-sheeran.jpeg";

const Artist2 = () => {
    return (
        <>
        <div class="img-container">
            <img class="banner-img" src={band2} alt="ed sheeran" />
            <div class='text-container'>
                <div class="text-centered lg">ED SHEERAN</div>
                <div class="text-bottom md">One of the most popular artists of our day, Ed Sheeran has been releasing pop hits that have resonated across the globe.</div>
            </div>
        </div>
        <div class="main-container">
            <div class='container-fluid'>
                <h1> <br/> Ed Sheeran <br/> </h1>
                <p> <br/> Edward Christopher Sheeran MBE (/ˈʃɪərən/; born 17 February 1991) is an English singer-songwriter and musician.[1] Born in Halifax, West Yorkshire and raised in Framlingham, Suffolk, he began writing songs around the age of eleven. In early 2011, Sheeran independently released the extended play, No. 5 Collaborations Project. He signed with Asylum Records the same year.

                Sheeran's debut album, + (pronounced "plus"), was released in September 2011 and topped the UK Albums Chart. It contained his first hit single "The A Team". In 2012, Sheeran won the Brit Awards for Best British Male Solo Artist and British Breakthrough Act. Sheeran's second studio album, × (pronounced "multiply"), topped charts around the world upon its release in June 2014. It was named the second-best-selling album worldwide of 2015. In the same year, × won Album of the Year at the 2015 Brit Awards, and he received the Ivor Novello Award for Songwriter of the Year from the British Academy of Songwriters, Composers and Authors. A single from ×, "Thinking Out Loud", earned him the 2016 Grammy Awards for Song of the Year and Best Pop Solo Performance. <br/> </p>
        <h1> <br/> Most Recent Albums <br/><br/> </h1>
        <div id='ed-sheeran-albums'>
        </div>
        <h1> <br/> Top Five Hits <br/><br/> </h1>
        <div id='ed-sheeran-songs'>
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
var artist = "ed sheeran";
var id = "ed-sheeran-albums";
var shazam_artist = "Ed%20Sheeran";
var id_songs = "ed-sheeran-songs";
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

export default Artist2;