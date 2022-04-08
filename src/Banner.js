import React,{ useState, useEffect } from "react"
import axios from "./axios"
import requests from "./requests"
import "./Banner.css";




function Banner(){
    const [movie, setMovies] = useState([]);
    
    useEffect(() =>{
        async function fetchData(){
            const request = await axios.get(requests.fetchNetflixOriginals )
            setMovies(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length-1)
                ]
            )
            return request;
        }
        fetchData();
    }, []);
    // data ophalen uit de API
    console.log(movie);
    function truncate(str, n){
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }
    //Als er meer letters zijn dan 150, word die text vervangen met ...

    return(
        <header class="myBanner"
            style={{
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
                )`,
            }}
        >
            <div className="contentBanner">
                {/* {title} */}
                
                <h1>
                    {/* <img src="Netflix.png" alt="hello"></img> */}
                    {movie?.title || movie?.name || movie?.orgiginal_name }
                    {/* de title, naam en orginalenaam schrijfen op het scherm */}
                </h1>
                <h2 class="description">
                    {truncate(movie?.overview, 150)}
                </h2>
                <div class="buttons">
                    <button class="button" >Play </button>
                    
                    <button class="button info" >More information</button>
                </div>
                <div class="bottom"></div>

            </div>
            

        </header>
    )
}
export default Banner
