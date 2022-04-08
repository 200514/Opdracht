import React,{ useState, useEffect } from "react"
import axios from "./axios.js";
import "./Row.css";
// import Youtube from "react-youtube";
// import movieTrailer from "movie-trailer"

const base_url="http://image.tmdb.org/t/p/original/";

function Row({title, fetchUrl, isLargeRow}){
    const [movies, setMovies] = useState([]);

    useEffect(() =>{
        async function fetchData(){
            const request = await axios.get(fetchUrl)
            setMovies(request.data.results)
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    var match=Math.floor(Math.random() * 100);
    //match is random tussen 0 en 99
    var seasons=Math.floor(Math.random() * 10+2);

    const handleClick = (movieId) => {
        document.getElementById("moreInfo" + movieId).style.display = "block";
    }
    // Als op de image word geklikt komt de div 'moreInfo' die de movieId heeft van het plaatje waar je op klikt

    function click(movieId){
        document.getElementById("moreInfo"+ movieId).style.display = "none";
    }
    // verwijderd de div MoreInfo waar de movieid hetzelfde is als het plaatje waar erder op geklikt is.  


    return(
        <div class="row">
            <h2>{title}</h2>
            <div className="row__posters">
                {movies.map(movie =>(
                <div class="imgs">
                    <img key={movie.id} onClick={() => handleClick(movie.id)}  class={`image ${isLargeRow && "imageLarge"}`} src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name}></img>
                    
                    <div id={"moreInfo"+movie.id} class="moreInfo"> 

                        <button onClick={() => click(movie.id)}><img class="control" src={require('./img/X.png')}></img></button>
                    <img key={movie.id} class="imageClick" src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name}></img>
                    <div class="moreLeft">
                        <div class="match">{match}% Match</div>
                        <div class="year"> 2019</div>
                        <img class="genres" src={require('./img/genres.png')}></img>
                        <div class="seasons">{seasons} seasons</div>
                        <div class="hd hd2">HD</div>
                        <div class="right">
                            <div class="infoMovie"><p>Cast:</p> Tom Ellis, Lauren German, Kevin <br></br> Alejandro, <a>More</a></div><br></br>
                            <div class="infoMovie"><p>Genres:</p> Crime programmers, Fantasy TV, <br></br> TV show Based on Comicsprogrammes</div>
                            <div class="infoMovie"><p>This programme is:</p> exciting</div>
                        </div>
                        <div class="tekst">{movie.overview}</div>
                    </div>
                 </div>
                <div class="controls">
                    <img class="control play" src={require('./img/play.png')}></img>
                    <img class="control check" src={require('./img/check.png')}></img>
                    <img class="control like" src={require('./img/like.png')}></img>
                    <img class="control infos" src={require('./img/info.png')}></img>
                    <br></br>
                    <div class="match">{match}% Match</div>
                    <img class="age" src={require('./img/info.png')}></img>
                    <div class="seasons">{seasons} seasons</div>
                    <div class="hd ">HD</div>
                    <div class="genre">{title}</div>
                 </div>
                </div>
                
                
            ))} 
          
            {/* {trailerUrl && <Youtube videoId={trailerUrl} opts={opts}/>} */}
        </div>
    </div>
    )
}
export default Row
