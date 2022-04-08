import React, { useState, useEffect }from "react"
import "./Navbar.css";





function Navbar(){
    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY>100){
                handleShow(true)
            }else handleShow(false)
        })
            return() => {
                window.removeEventListener("scroll");
        };
    }, []);
    
    // const element = <FontAwesomeIcon icon={faCoffee} />
    return(
        <div class={`navbar ${show && "navbarBlack"}`}>
            <img class="logo" src={require('./logo.png')} alt="Netflix Logo"></img>
            <img class="user" src={require('./user.jpg')} alt="Netflix Logo"></img>
            <input id="searchbar" type="text" placeholder="Titles, people, genres"></input>

            <div class="dropdown">
                <div class="dropbtn"><i class="fas fa-file-code"></i>Browse
                    <i class="fa fa-caret-down"></i>
                </div>
                <div class="dropdown-content">
                    <a href="/series">series</a>
                    <a href="/films">Films</a>
                    <a href="/plugins">Plugins</a>
                    <a href="/new_populair">New & populair</a>
                    <a href="my_list">My list</a>
                    
                    
                </div>
            </div>
            
        </div>
    )
}
export default Navbar