import "./App.css";
import Game from "./components/Game";
import getPlayers from "./helpers/PlayerHelper";
import Player from "./models/Player";

function App() {
  const players: Player[] = getPlayers();
  const size = 4;
  return <Game players={players} size={size} />;
}

export default App;
