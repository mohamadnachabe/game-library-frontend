import React, {useState} from "react";
import './Game.css';
import history from "./history";

const Game = ({id, name, platform, genre, releaseDate, numOfPlayers, publisher, boxArt, setGames}) => {
    const [show, setSearch] = useState(1);
    const [remove, showRemove] = useState(1);
    return (
        <div className="box" onClick={() => {
            if (remove === 1) {
                setSearch(1);
                showRemove(0);
            } else {
                setSearch(0);
                showRemove(1);
            }

            console.log(show)
        }}>
            <h1 >{show ? name : ''}</h1>
            <p>{show ? 'Platform: ' + platform : ''}</p>
            <p> {show ? 'Genre: ' + genre: ''}</p>
            <p> {show ? 'Release Date: ' + releaseDate: ''}</p>
            <p> {show ? 'No. of Players:' + numOfPlayers: ''}</p>
            <p align={boxArt}>{show ? 'Publisher: ' + publisher: ''}</p>
            <img src={boxArt} alt=""/>
            <button hidden={remove} className="search-button" type="button" onClick={(e) => {
                console.log({id}.id);
                fetch(`http://35.246.77.193:8080/removeGame?id=${id}`).then(
                    function(response) {
                        if (response.status !== 200) {
                            console.log('Looks like there was a problem. Status Code: ' +
                                response.status);
                            window.alert('No game was added')
                        }
                        response.json().then(function(data) {
                            console.log(data);
                            setGames(data)
                        });
                    }
                );
                history.push('/')
            }}>
                Remove game
            </button>
        </div>

    );
};

export default Game;
