export default class View {
	$ = {};
	$$ = {};
	constructor() {
		// individual selectors go into name space $
		this.$.menu = this.#qs('[data-id="menu"]');
		this.$.menuBtn = this.#qs('[data-id="menu-btn"]');
		this.$.menuItems = this.#qs('[data-id="menu-items"]');
		this.$.resetBtn = this.#qs('[data-id="reset-btn"]');
		this.$.newRoundBtn = this.#qs('[data-id="new-round-btn"]');
		this.$.modal = this.#qs('[data-id="modal"]');
		this.$.modalText = this.#qs('[data-id="modal-text"]');
		this.$.modalBtn = this.#qs('[data-id="modal-btn"]');
		this.$.turn = this.#qs('[data-id="turn"]');
		this.$.p1Wins = this.#qs('[data-id="p1-wins"]');
		this.$.p2Wins = this.#qs('[data-id="p2-wins"]');
		this.$.ties = this.#qs('[data-id="ties"]');

		// group - list of elements go into name space $$
		this.$$.squares = this.#qsAll('[data-id="square"]');

		// UI only event - Toggle menu
		this.$.menuBtn.addEventListener("click", (event) => {
			this.#toggleMenu();
		});
	}
	s;
	// Register Event Listeners

	bindGameResetEvent(handler) {
		this.$.resetBtn.addEventListener("click", handler);
		this.$.modalBtn.addEventListener("click", handler);
		
	}

	bindNewRoundEvent(handler) {
		this.$.newRoundBtn.addEventListener("click", handler);
	}

	bindPlayerMoveEvent(handler) {
		this.$$.squares.forEach((square) => {
			square.addEventListener("click", () => handler(square));
		});
	}

	// DOM Helper Methods, # keeps class methods private

	updateScoreboard(p1Wins,p2Wins,ties){
		this.$.p1Wins.innerText = `${p1Wins} wins`
		this.$.p2Wins.innerText = `${p2Wins} wins`
		this.$.ties.innerText = `${ties} ties`
	}

	openModal(message) {
		this.$.modal.classList.remove("hidden");
		this.$.modalText.innerText = message;
	}

	closeAll() {
		this.#closeModal();
		this.#closeMenu();
	}

	clearMoves() {
		this.$$.squares.forEach((square) => {
			square.replaceChildren();
		});
	}

	#closeModal() {
		this.$.modal.classList.add("hidden");
	}

	#closeMenu() {
		this.$.menuItems.classList.add("hidden");
		this.$.menuBtn.classList.remove("border");
		const icon = this.$.menuBtn.querySelector("i");
		icon.classList.add("fa-chevron-down");
		icon.classList.remove("fa-chevron-up");
	}

	#toggleMenu() {
		this.$.menuItems.classList.toggle("hidden");
		this.$.menuBtn.classList.toggle("border");
		// grab icon in menu button
		const icon = this.$.menuBtn.querySelector("i");

		icon.classList.toggle("fa-chevron-down");
		icon.classList.toggle("fa-chevron-up");
	}

	// grab square being clicked, grab current player, create icom element, assign correct icon based on current player, insert correct icon into square.
	handlePlayerMove(squareEl, player) {
		const icon = document.createElement("i");

		icon.classList.add("fa-solid", player.iconClass, player.colorClass);
		squareEl.replaceChildren(icon);
	}

	// player = 1 | 2
	setTurnIndicator(player) {
		// create elements for turn indicator
		const icon = document.createElement("i");
		const label = document.createElement("p");
		// change color & icon of turn element based on current player
		icon.classList.add("fa-solid", player.colorClass, player.iconClass);
		// change label color based on current player
		label.classList.add(player.colorClass);

		// change text based on current player
		label.innerText = `${player.name}, you're up!`;

		// insert to the dom
		this.$.turn.replaceChildren(icon, label);
	}

	// Refactor query selectors with helper method to ensure element is being passed in, # keeps method to class only private

	// individual query selectors

	#qs(selector, parent) {
		// grab element being passed in, first search in parent element, if not then search document
		const el = parent
			? parent.querySelector(selector)
			: document.querySelector(selector);
		// check if element is truthy
		if (!el) throw new Error("Could not find element");
		// element gets passed back
		return el;
	}

	// element list selectors
	#qsAll(selector) {
		// grab element list being passed in
		const elList = document.querySelectorAll(selector);
		// check if element is truthy
		if (!elList) throw new Error("Could not find elements");
		// element list gets passed back
		return elList;
	}
}