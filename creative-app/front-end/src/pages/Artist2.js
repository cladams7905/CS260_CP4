
import React from 'react';
import Playlist from "./playlist";

const Artist2 = () => {
    return (
        <>
        <div class="img-container">
            <img class="banner-img" src={require("../images/ed-sheeran.jpeg")} alt="ed sheeran" />
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
            </div>
        </div>
        <div class="row">
            <iframe width="560" height="415" src="https://www.youtube.com/embed/K0ibBPhiaG0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        <Playlist/>
      <div class='footer'>
        <p>Made by Carter Adams and Ken Ruth for CS 260</p>
        <a href="https://github.com/cladams7905/CS260_CP4.git">GitHub Repo</a>
      </div>
    </>
    );
};
export default Artist2;