import Store from "./store.js";
import View from "./view.js";

// Encapsulate variables and functions dedicated to specific functionality so as to avoid too many global variables that can pollute the global name space



// const App = {
//   // first select html elements (squares together for iteration)
//   // second declare registerEventListeners func/method to add event listeners to html elements on window load
//   //third call resisterEventListeners func via init func
//   // fourth declare state variable
//   $: {
//     menu: document.querySelector('[data-id="menu"]'),
//     menuItems: document.querySelector('[data-id="menu-items"]'),
//     resetBtn: document.querySelector('[data-id="reset-btn"]'),
//     newRoundBtn: document.querySelector('[data-id="new-round-btn"]'),
//     squares: document.querySelectorAll('[data-id="square"]'),
//     modal: document.querySelector('[data-id="modal"]'),
//     modalText: document.querySelector('[data-id="modal-text"]'),
//     modalBtn: document.querySelector('[data-id="modal-btn"]'),
//     turn: document.querySelector('[data-id="turn"]'),
//   },
//   init() {
//     App.registerEventListeners();
//   },
//   state: {
//     moves: [],
//   },
//   //method takes in array of objects - entire game board (current moves)
//   getGameStatus(moves) {
//     // filter array to pull each individual players moves so far, coerce players squareId to number for comparison with winning pattern later
//     const p1Moves = moves
//       .filter((move) => move.playerId === 1)
//       .map((move) => +move.squareId);
//     const p2Moves = moves
//       .filter((move) => move.playerId === 2)
//       .map((move) => +move.squareId);

//     //winning patterns
//     // check for a winner or tie using array of square numbers with same icon
//     const winningPatterns = [
//       [1, 2, 3],
//       [1, 5, 9],
//       [1, 4, 7],
//       [2, 5, 8],
//       [3, 5, 7],
//       [3, 6, 9],
//       [4, 5, 6],
//       [7, 8, 9],
//     ];

//     // set winner var to null to update later
//     let winner = null;

//     // loop through array of arrays of winning patterns, compare to array of current player 1 & player 2 board moves to determine winner or tie
//     winningPatterns.forEach((pattern) => {
//       const p1Wins = pattern.every((v) => p1Moves.includes(v));
//       const p2Wins = pattern.every((v) => p2Moves.includes(v));
//       if (p1Wins) winner = 1;
//       if (p2Wins) winner = 2;
//     });

//     //game status being returned, status variable declared with no keyword - global, string assigned using colon
//     return {
//       status: moves.length === 9 || winner != null ? "Complete" : "In-Progress",
//       //check game status in-progress or complete ternary if statement
//       winner, // 1 or 2 or null (tie)
//     };
//   },
//   // EVENT LISTENERS
//   registerEventListeners() {
//     // Menu
//     App.$.menu.addEventListener("click", (event) => {
//       App.$.menuItems.classList.toggle("hidden");
//     });
//     // TO DO
//     App.$.resetBtn.addEventListener("click", (event) => {
//       console.log("Reset");
//     });
//     // TO DO
//     App.$.newRoundBtn.addEventListener("click", (event) => {
//       console.log("New Round");
//     });
//     // Modal Btn (Play Again) clear state, clear board squares, hide modal
//     App.$.modalBtn.addEventListener("click", (event) => {
//       App.state.moves = [];
//       App.$.squares.forEach((square) => square.replaceChildren());
//       App.$.modal.classList.add("hidden");
//     });

//     // TO DO
//     // - Loop through array of squares,
//     // - add listener to all
//     // - create new icon element
//     // - give new icon element classes
//     // - insert new icon element with classes to parent element that was clicked.
//     // conditional to check if icon already in the square, if so player can not click in the same square, click another square.
//     App.$.squares.forEach((square) => {
//       square.addEventListener("click", (event) => {
//         console.log(`Square with id: ${event.target.id} was clicked`);
//         // console.log(`Current Player is: ${App.state.moves.playerId}`);

//         // helper func to determine if square already has move, takes in current squared clicked, checks moves array of obj to see if move already happened in that square indicating that an idoc X or O is already in square.
//         const hasMove = (squareId) => {
//           const existingMove = App.state.moves.find(
//             (move) => move.squareId === squareId
//           );
//           return existingMove !== undefined;
//         };
//         // call hasMove helper func, if truthy return
//         if (hasMove(+square.id)) {
//           return;
//         }

//         // update current player var
//         // determine what was the last move
//         const lastMove = App.state.moves.at(-1);
//         // get opposite player, helper function toggle
//         const getOppositePlayer = (playerId) => (playerId === 1 ? 2 : 1);
//         // if no play / move - set to player 1, if play - set to opposite player using helper funct
//         const currentPlayer =
//           App.state.moves.length === 0
//             ? 1
//             : getOppositePlayer(lastMove.playerId);
//             // store next player in nextPlayer var
//             const nextPlayer = getOppositePlayer(currentPlayer);

//         // create icon element to insert into html
//         const squareIcon = document.createElement("i");
//         const turnIcon = document.createElement("i");
//         // create turn label p
//         const turnLabel = document.createElement('p');

//         // insert next player text into turn label p
//         turnLabel.innerText = `Player ${nextPlayer}, you are up!`;

//         // conditional if player 1 insert X or player 2 insert O
//         // turn label and icon should be opposite of one currently playing
//         if (currentPlayer === 1) {
//           squareIcon.classList.add("fa-solid", "fa-x", "red");
//           turnIcon.classList.add("fa-solid", "fa-o", "blue");
//           turnLabel.classList = "blue";
//         } else {
//           squareIcon.classList.add("fa-solid", "fa-o", "blue");
//           turnIcon.classList.add("fa-solid", "fa-x", "red");
//           turnLabel.classList = "red";
//         }

//         // grab turn element / div, replace contents with replaceChildren, pass in turnIcon first then turnLabel
//         App.$.turn.replaceChildren(turnIcon, turnLabel);

//         // push current move to state via squared id & current player. + for type coersion to number
//         App.state.moves.push({
//           squareId: +square.id,
//           playerId: currentPlayer,
//         });

//         // toggle between player 1 and 2, ternary conditional - current player now updated line 62
//         // App.state.currentPlayer = currentPlayer === 1 ? 2 : 1;

//         // insert icon into square being clicked
//         square.replaceChildren(squareIcon);

//         // check if there is a winner or tie game
//         const game = App.getGameStatus(App.state.moves);

//         // if game complete open modal, insert message, announce winner or tie
//         let message = "";
//         if (game.status === "Complete") {
//           App.$.modal.classList.remove("hidden");

//           if (game.winner) {
//             message = `Player ${game.winner} wins!`;
//           } else {
//             message = "Tie Game!";
//           }
//         }
//         // insert message text into modal
//         App.$.modalText.textContent = message;
//       });
//     });
//   },
// };

//call init method on window load
//window.addEventListener("load",App.init);



const players = [
{
  id: 1,
  name: "Player 1",
  iconClass: "fa-x",
  colorClass: "red"
},
{
  id: 2,
  name: "Player 2",
  iconClass: "fa-o",
  colorClass: "blue"

}
]


function init() {
  const view = new View();
  // pass in array of players
  const store = new Store(players);

  // console.log(store.game)

  view.bindGameResetEvent((event) => {
   view.closeAll();
   store.reset();
   view.clearMoves();

   view.setTurnIndicator(store.game.currentPlayer);

   view.updateScoreboard(
    store.stats.playerWithStats[0].wins,
    store.stats.playerWithStats[1].wins,
    store.stats.ties
   );


  // console.log(store.stats)
  });

  view.bindNewRoundEvent((event) => {
    store.newRound();

    view.closeAll();
    view.clearMoves();
    view.setTurnIndicator(store.game.currentPlayer);
    view.updateScoreboard(
			store.stats.playerWithStats[0].wins,
			store.stats.playerWithStats[1].wins,
			store.stats.ties
		);

    // console.log("New Round Event");
    // console.log(event);
  });

  view.bindPlayerMoveEvent((square) => {

    // for clarity event is square being clicked
    // const clickedSquare = event.target;

    // check if there is an existing move so only one icon can play per square
    const existingMove= store.game.moves.find((move) => move.squareId === +square.id);
    // if existing move is truthy - then square already has an icon at play
    if(existingMove){
      return
    }

    // assign proper icon, color, and current player using state
    view.handlePlayerMove(square, store.game.currentPlayer);

    // pass in to player move the clicked square id force typeof 
    //num with +, clicked square id is string type by default
    store.playerMove(+square.id)

    // check if game still on or if complete or if tie
    if(store.game.status.isComplete){
      view.openModal(
        store.game.status.winner 
        ? `${store.game.status.winner.name} wins!`
         : "Tie" 
      );
        return;
    }

    // pass in updated info to current players, in game obj, in store module
    view.setTurnIndicator(store.game.currentPlayer);


  });

  console.log(view.$.turn);
}

window.addEventListener("load", init);
