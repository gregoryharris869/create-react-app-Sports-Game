import React from "react";
import ReactDOM from "react-dom";

import Game from "./components/game/Game";
import logo1 from "./assets/images/raccoon.png";
import logo2 from "./assets/images/squirrel.png";
import logo3 from "./assets/images/bunny.png";
import logo4 from "./assets/images/hound.png";

function App(props) {
  const raccoons = {
    name: "Russiaville Raccoons",
    logoSrc: logo1,
  };

  const squirrels = {
    name: "Sheridan Squirrels",
    logoSrc: logo2,
  };

  const bunnies = {
    name: "Burlington Bunnies",
    logoSrc: logo3,
  };

  const hounds = {
    name: "Hammond Hounds",
    logoSrc: logo4,
  };

  return (
    <div className="App">
      <Game
        venue="Union 525 Gem"
        homeTeam={squirrels}
        visitingTeam={raccoons}
      />
      <Game venue="Sheridan Arena" homeTeam={bunnies} visitingTeam={hounds} />
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById("root"));

export default App;
