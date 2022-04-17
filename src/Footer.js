import React from "react"
import "./Footer.css";



function Navbar(){
     function myFunction() {
        document.getElementById("button").innerHTML = "128-146";
    }
    
    return(
        <footer>
            {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.8.2/css/fontawesome.min.css"></link>
            <script src="https://kit.fontawesome.com/2cc335b51d.js" crossorigin="anonymous"></script> */}
            <div id="links">
                <a class="nothing" href="https://www.facebook.com/NetflixNederland"><img class="socials facebook" src={require('./img/facebook.png')} alt="Netflix Logo"></img></a>

                <a class="nothing" href="https://www.instagram.com/NetflixNL/"><img class="socials" src={require('./img/instagram.png')} alt="Netflix Logo"></img></a>
                <a class="nothing" href="https://twitter.com/NetflixNL"><img class="socials" src={require('./img/twitter.png')} alt="Netflix Logo"></img></a>
                <a class="nothing" href="https://www.youtube.com/user/netflixbenelux"><img class="socials" src={require('./img/youtube.png')} alt="Netflix Logo"></img></a>
            </div>

            <ul class="information">
                <a class="text" href=""><li class="li">Audio Description</li></a>
                <a class="text" href=""><li class="li">Investor Reletions</li></a>
                <a class="text" href=""><li class="li">Legal Notices</li></a>
            </ul> 
            <ul class="information">
                <a class="text" href=""><li class="li">Help Centre</li></a>
                <a class="text" href=""><li class="li"> Jobs </li></a>
                <a class="text" href=""><li class="li">Cookie Preferences</li></a>
            </ul> 
            <ul class="information">
                <a class="text" href=""><li class="li">Gift Cards</li></a>
                <a class="text" href=""><li class="li">Terms of Use</li></a>
                <a class="text" href=""><li class="li">Corporate Information</li></a>
            </ul> 
            <ul class="information">
                <a class="text" href=""><li class="li">Media Centre</li></a>
                <a class="text" href=""><li class="li">Privacy</li></a>
                <a class="text" href=""><li class="li">Contact Us</li></a>
            </ul> 
            <button id="button" onClick={myFunction}>Click me</button>
            <div id="copyright">©   2022 Netflix, Max van Gend</div><br></br><br></br>
        </footer>
    )
}
export default Navbar