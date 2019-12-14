// import React, {useEffect, useState} from 'react';
// import logo from './playstation-retro.png';
// import './App.css';
// import Game from './Game'
// // import { Router, Switch, Route } from "react-router-dom";
// import history from './history';
//
// const App = () => {
//   const [games, setGames] = useState([]);
//   const [search, setSearch] = useState((''));
//
//   const updateSearch = e => {
//     setSearch(e.target.value);
//   };
//
//   useEffect( () => {
//     getGames();
//   }, [search]);
//
//   const getGames = async () => {
//     (fetch(`/games?game=${search}`, {
//       headers: {
//         'Access-Control-Allow-Origin': '*',
//       }
//     }).then(
//         function(response) {
//           if (response.status !== 200) {
//             console.log('Looks like there was a problem. Status Code: ' +
//                 response.status);
//             return;
//           }
//           // Examine the text in the response
//           response.json().then(function(data) {
//             console.log(data);
//             setGames(data)
//           });
//         }
//     ));
// // const data = response.json();
//     // console.log(data);
//     // setGames(data)
//   };
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <h1>
//           Search your game library.
//         </h1>
//         <form className="search-form">
//           <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
//           <button className="search-button" type="submit">
//             Search
//           </button>
//             <button className="search-button" type="button" onClick={() => {
//                 history.push('/Products')
//             }}>
//                 Add Game
//             </button>
//         </form>
//       </header>
//       <body>
//       <div className="game">
//         {games.map(game => (
//             <Game
//                 key = {game.id}
//                 name = {game.name}
//                 platform={game.platform}
//                 genre={game.genre}
//                 releaseDate={game.releaseDate}
//                 numOfPlayers={game.numOfPlayers}
//                 publisher={game.publisher}
//                 boxArt = {game.boxArt}/>
//         ))};
//       </div>
//       </body>
//     </div>
//   );
// }
//
// export default App;
