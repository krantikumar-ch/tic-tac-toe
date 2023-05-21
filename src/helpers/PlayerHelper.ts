import Player from "../models/Player";

export default function getPlayers():Player[]{
    const players = [] as Player[];
    players.push(new Player("Kranti","X"));
    players.push(new Player("Suganya", "O"));
    return players;
}