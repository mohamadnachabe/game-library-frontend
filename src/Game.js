import React, {useState} from "react";
import './Game.css';

const Game = ({name, platform, genre, releaseDate, numOfPlayers, publisher, boxArt}) => {
    const [show, setSearch] = useState((1));
    return (
        <div className="box" onClick={() => {
            if (show === 0) {
                setSearch(0);
            } else {
                setSearch(1);
            }

            console.log(show)
        }}>
            <h1 >{show ? name : ''}</h1>
            <p>{show ? 'Platform: ' + platform : ''}</p>
            <p> {show ? 'Genre: ' + genre: ''}</p>
            <p> {show ? 'Release Date: ' + releaseDate: ''}</p>
            <p> {show ? 'Num of Players:' + numOfPlayers: ''}</p>
            <p align={boxArt}>{show ? 'Publisher: ' + publisher: ''}</p>
            <img src={boxArt} alt=""/>
        </div>

    );
};

export default Game;
