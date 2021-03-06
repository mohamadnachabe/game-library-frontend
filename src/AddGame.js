import React, {useEffect, useState} from "react";
import "./AddGame.css";
import logo from "./playstation-retro.png";
import history from "./history";

const AddGame = () =>  {

    const [name, setName] = useState('');
    const [platform, setPlatform] = useState('');
    const [genre, setGenre] = useState('');
    const [releaseDate, setReleaseDate] = useState('');
    const [numOfPlayers, setNumOfPlayers] = useState(1);
    const [publisher, setPublisher] = useState('');
    const [boxArt, setBoxArt] = useState('');

    useEffect( () => {}
    , []);


    return (
        <div>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1>
                    Add game to library.
                </h1>
            </header>
            <body className='box2'>
                <form>

                    <div className ='form'>
                        <p htmlFor="name">Name</p>
                        <input id="name" name="name" type="text" onChange={(e) => {
                            setName(e.target.value)
                        }}/>
                    </div>

                    <div className ='form'>
                        <p htmlFor="platform">Platform (PS1, PS2, PS3 or PS4)</p>
                        <input type="text" id="platform" onChange={(e) => {
                            setPlatform(e.target.value)
                        }}/>
                        {/*<select id="ddlViewBy" onChange={(e) => {*/}
                        {/*    setPlatform(e.target.value)*/}
                        {/*}}>*/}
                        {/*    <option value="1">PS1</option>*/}
                        {/*    <option value="2" selected="selected">PS2</option>*/}
                        {/*    <option value="3">PS3</option>*/}
                        {/*    <option value="3">PS4</option>*/}
                        {/*</select>*/}
                        {/*<input id="platform" name="platform" type="text" onChange={(e) => {*/}
                        {/*    setPlatform(e.target.value)*/}
                        {/*}} />*/}
                    </div>

                    <div className ='form'>
                        <p htmlFor="genre">Genre</p>
                        <input id="genre" name="genre" type="text" onChange={(e) => {
                            setGenre(e.target.value)
                        }}/>
                    </div>

                    <div className ='form'>
                        <p htmlFor="releaseDate">Release date (yyyy-mm-dd)</p>
                        <input type="date" id="start" onChange={(e) => {
                            setReleaseDate(e.target.value)
                        }}/>
                        {/*<input id="releaseDate" name="releaseDate" type="text" onChange={(e) => {*/}
                        {/*    setReleaseDate(e.target.value)*/}
                        {/*}}/>*/}
                    </div>

                    <div className ='form'>
                        <p htmlFor="numOfPlayers">Num of Players</p>
                        <input id="numOfPlayers" name="numOfPlayers" type="text" onChange={(e) => {
                            setNumOfPlayers(e.target.value)
                        }}/>
                    </div>

                    <div className ='form'>
                        <p htmlFor="publisher">Publisher</p>
                        <input id="publisher" name="publisher" type="text" onChange={(e) => {
                            setPublisher(e.target.value)
                        }}/>
                    </div>


                    <div className ='form'>
                        <p htmlFor="boxArt">Box Art (image url)</p>
                        <input id="boxArt" name="boxArt" type="text" onChange={(e) => {
                            setBoxArt(e.target.value)
                        }}/>
                    </div>

                    <button className="search-button" type="button" onClick={(e) => {
                        console.log({name}.name);
                        fetch(`http://35.246.77.193:8080/storeGame`, {
                            method: 'POST',
                            headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({
                                // "id" : 9,
                                // "name": "GTA V",
                                // "platform": "PS4",
                                // "genre": "action",
                                // "publisher": "Playstation",
                                // "releaseDate": "2019-12-13",
                                // "numOfPlayers": 2,
                                // "boxArt": "https://images-na.ssl-images-amazon.com/images/I/916T5H6sCtL._SL1500_.jpg"
                                "id" : Date.now().valueOf(),
                                "name": {name}.name,
                                "platform": {platform}.platform,
                                "genre": {genre}.genre,
                                "publisher": {publisher}.publisher,
                                "releaseDate": {releaseDate}.releaseDate,
                                "numOfPlayers": {numOfPlayers}.numOfPlayers,
                                "boxArt": {boxArt}.boxArt
                            })
                        }).then(
                            function(response) {
                                if (response.status !== 200) {
                                    console.log('Looks like there was a problem. Status Code: ' +
                                        response.status);
                                    window.alert('No game was added')
                                }
                            }
                        );
                        history.push('/')
                    }}>
                        Add Game
                    </button>
                </form>
            </body>
        </div>

    );
};

export default AddGame;
