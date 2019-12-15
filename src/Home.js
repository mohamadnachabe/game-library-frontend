import React, {useEffect, useState} from "react";
import history from './history';
import "./Home.css";
import logo from "./playstation-retro.png";
import Game from "./Game";

const Home = () =>  {
    const [games, setGames] = useState([]);
    const [search, setSearch] = useState((''));

    const updateSearch = e => {
        setSearch(e.target.value);
    };

    useEffect( () => {
        getGames();
    }, [search]);

    const getGames = async () => {
        (fetch(`http://35.246.77.193:8080/games?game=${search}`, {
            headers: {
                'Access-Control-Allow-Origin': '*',
            }
        },  {mode: 'cors'}).then(
            function(response) {
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' +
                        response.status);
                    return;
                }
                // Examine the text in the response
                response.json().then(function(data) {
                    console.log(data);
                    setGames(data);
                });
            }
        ));
// const data = response.json();
        // console.log(data);
        // setGames(data)
    };
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1>
                    Search your game library.
                </h1>
                <form className="search-form">
                    <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
                    <button className="search-button" type="submit">
                        Search
                    </button>
                    <button className="search-button" type="button" onClick={() => {
                        history.push('/AddGame')
                    }}>
                        Add Game
                    </button>
                </form>
                <p>Press on box to delete game</p>
            </header>
            <div className="game">
                {games.map(game => (
                    <Game
                        key = {game.id}
                        id = {game.id}
                        name = {game.name}
                        platform={game.platform}
                        genre={game.genre}
                        releaseDate={game.releaseDate}
                        numOfPlayers={game.numOfPlayers}
                        publisher={game.publisher}
                        boxArt = {game.boxArt}
                        setGames = {setGames}/>
                ))};
            </div>
            <div className="App-header">
                <p>mohamadnachabe@gmail.com</p>
                <a className="App-link" href="https://github.com/mohamadnachabe">Github</a>
            </div>
        </div>
    );
};

export default Home;
