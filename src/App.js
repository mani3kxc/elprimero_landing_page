import './App.css';
import Section from "./components/Section";
import {useState} from "react";

function App() {

    const sections = [
        {
            title: "ENGINEERING",
            description:"Inżynieria",
            address: "http://elprimero.eu/engineering/",
            background: "engineeringBg.png",
            backgroundPosition: "20% 90%",
            overlayColor: "#FFFFFF",
            descriptionColor: "#000000",
            logo: "engineering.png",
            disabled: false
        },
        {
            title: "CARS",
            description:"Wypożyczalnia samochodów",
            address: "http://elprimero.eu/cars/",
            background: "bmw.jpg",
            backgroundPosition: "0% 50%",
            overlayColor: "#FFFFFF",
            descriptionColor: "#000000",
            logo: "haj.png",
            disabled: false
        },
        {
            title: "PHOTOGRAPHY",
            description:"Fotografia",
            address: "http://erfoto.eu",
            background: "b4.jpg",
            backgroundPosition: "center",
            overlayColor: "#ffffff",
            descriptionColor: "#000000",
            logo: "erfoto.png",
            disabled: false
        },

        {
            title: "HORSE AND JOY",
            description:"Hippika, hodowla i chów koni",
            address: "http://elprimero.eu/horseandjoy/",
            background: "b5.jpg",
            backgroundPosition: "50% 50%",
            overlayColor: "#FFFFFF",
            descriptionColor: "#000000",
            logo: "haj.png",
            disabled: false
        },

    ];

    const [clickedClass, setClickedClass] = useState('notClicked');

    const onClickHandler = () => {

        setClickedClass('clicked');

    }

  return (
    <div className={`ElprimeroLanding ${clickedClass}`}>
        <div className="loading"><h3>Trwa ładowanie strony...</h3></div>
        <div className={`main-container`}>
            <div className="site-title">
                <h2>ELPRIMERO</h2>
            </div>
          <div className="main-window">
              {
                  sections.map( (sekcja) => (
                      <Section title={sekcja.title} onClickHandler={onClickHandler} description={sekcja.description} address={sekcja.address} descriptionColor={sekcja.descriptionColor} logo={sekcja.logo} background={sekcja.background} backgroundPosition={sekcja.backgroundPosition} overlayColor={sekcja.overlayColor} disabled={sekcja.disabled}/>))
              }
          </div>
        </div>
    </div>
  );
}

export default App;
