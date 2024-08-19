// store class will handle the state management of the game
// get read only copy of game state, save will transition into next state


// set initial value object with emtpy array
const initialValue = {
  currentGameMoves: [],
  history: {
    currentRoundGames: [],
    allGames: []
  }
}

export default class Store {
	// initial value becomes the state variable
	#state = initialValue;

	constructor(players) {
		this.players = players;
	}

  get stats(){
		console.log(this.#getState());

		const state = this.#getState();
		// using optional chaining ?. to access winner obj property to compare id
		return {
			playerWithStats: this.players.map((player) => {
				const wins = state.history.currentRoundGames.filter((game) => 
					game.status.winner?.id === player.id
				).length;

				return {
					...player,
					wins,
				};
			}),
			ties: state.history.currentRoundGames.filter(
				game => game.status.winner === null
			).length,
		};

		// console.log(wins)
	}

	get game() {
		//  grab current state
		const state = this.#getState();
		// grab current player - moves array length modulo 2 - remainder is index number of next player, either 1 or 0
		const currentPlayer = this.players[state.currentGameMoves.length % 2];

		const winningPatterns = [
			[1, 2, 3],
			[1, 5, 9],
			[1, 4, 7],
			[2, 5, 8],
			[3, 5, 7],
			[3, 6, 9],
			[4, 5, 6],
			[7, 8, 9],
		];

		let winner = null;

		for (const player of this.players) {
			const selectedSquareIds = state.currentGameMoves.filter((move) => move.player.id === player.id).map((move) => move.squareId);

			for (const pattern of winningPatterns) {
				if (pattern.every((v) => selectedSquareIds.includes(v))) {
					winner = player;
				}
			}
		}

		// return currentPlayer object
		return {
			moves: state.currentGameMoves,
			currentPlayer,
			status: {
				isComplete: winner != null || state.currentGameMoves.length === 9,
				winner,
			},
		};
	}

	// public method to update what player is next

	// The structuredClone method was introduced not that long ago and is used to create a
	//deep copy of an object in JavaScript.

	playerMove(squareId) {
		const stateClone = structuredClone(this.#getState());
		// update state via push method
		stateClone.currentGameMoves.push({
			squareId,
			player: this.game.currentPlayer,
		});
		// pass in state clone to save state method
		this.#saveState(stateClone);
	}

	reset() {

    const stateClone = structuredClone(this.#getState());
		// destructure variables from game object
    const {status, moves} = this.game;

    if(status.isComplete){
      stateClone.history.currentRoundGames.push({
        moves,
        status
      })
    }

    stateClone.currentGameMoves = []

		this.#saveState(stateClone);

	}

	newRound(){
		this.reset();

		const stateClone = structuredClone(this.#getState());

		stateClone.history.allGames.push(...stateClone.history.currentRoundGames);

		stateClone.history.currentRoundGames = [];

		this.#saveState(stateClone);


	}

	#getState() {
		return this.#state;
	}

	#saveState(stateOrFn) {
		// grab previous state
		const prevState = this.#getState();
		// set new state var
		let newState;
		// determine type of item being passed in
		// if fnc, call it store return value in new state var
		// if obj store into new state var
		switch (typeof stateOrFn) {
			case "function":
				newState = stateOrFn(prevState);
				break;
			case "object":
				newState = stateOrFn;
				break;
			default:
				throw new Error("Invalid Argument Passed");
		}
		// update state with new state data
		this.#state = newState;
	}
}

