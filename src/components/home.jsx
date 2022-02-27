import "../styles/home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="mainContainer">
        <div className="wrapper odd">
          <div className="cat-one">
            <Link to="catalog">
              <img src="./img/planeCrash.jpg" alt=""></img>
            </Link>
          </div>
        </div>
        <div className="wrapper">
          <div className="cat-two even">
            <Link to="catalog">
              <img src="./img/grimdark.jpg" alt=""></img>
            </Link>
          </div>
        </div>
        <div className="wrapper">
          <div className="cat-three odd">
            <Link to="catalog">
              <img src="./img/terrain.jpg" alt=""></img>
            </Link>
          </div>
        </div>
        <div className="wrapper">
          <div className="cat-four even">
            <Link to="catalog">
              <img src="./img/military.jpg" alt=""></img>
            </Link>
          </div>
        </div>
        <div className="wrapper">
          <div className="cat-five odd">
            <Link to="catalog">
              <img src="./img/railroadStation.jpg" alt=""></img>
            </Link>
          </div>
        </div>
        <div className="wrapper">
          <div className="cat-six even">
            <Link to="catalog">
              <img src="./img/game-color-vallejo-pale-flesh.jpg" alt=""></img>
            </Link>
          </div>
        </div>
        <div className="wrapper">
          <div className="cat-seven odd">
            <Link to="catalog">
              <img src="./img/paintBrushes.jpg" alt=""></img>
            </Link>
          </div>
        </div>
        <div className="wrapper">
          <div className="cat-eight even">
            <Link to="catalog">
              <img src="./img/dice.jpg" alt=""></img>
            </Link>
          </div>
        </div>
        <div className="wrapper">
          <div className="cat-nine odd">
            <Link to="catalog">
              <img src="./img/superGlue.jpg" alt=""></img>
            </Link>
          </div>
        </div>
        <div className="wrapper">
          <div className="cat-ten even">
            <Link to="catalog">
              <img src="./img/gamingMat.jpg" alt=""></img>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
