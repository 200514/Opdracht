// import logo from './logo.svg';
import './App.css';
import Row from "./Row.js"
import requests from "./requests.js";
import Banner from "./Banner.js";
import Navbar from "./Navbar.js";
import Footer from "./Footer.js";

// Import alles uit deze files


function App() {
  return (
    <div className="App">
        
        
        <Navbar /> 
        {/* Alles wat in de file 'navbar' staat komt haalt die op en zet dat hierneer */}
       <Banner/>
      <Row title="Netflix originals"
       fetchUrl={requests.fetchNetflixOriginals}
       isLargeRow={true}
       /> 
       {/* Netflix originals data ophalen van de api en de plaatjes zijn groter */}
      <Row title="Trendig now" fetchUrl={requests.fetchTrending}/>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
      <Row title="Comedey Movies" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="Documentaries" fetchUrl={requests.fetchDocumantaries}/>
      
      <Footer />
    </div>
  );
}

export default App;