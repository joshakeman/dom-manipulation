function addListItem(input, target) {
	let listItem = document.createElement('li');
	listItem.innerHTML = input;
	target.appendChild(listItem);
}

document.addEventListener('DOMContentLoaded', function() {
	let displayPromptButton = document.getElementById('displayPromptButton');
	let view = document.getElementById('pokemon');

	displayPromptButton.addEventListener('click', function () {
		let input = prompt('What is your favorite Pokemon?');
		addListItem(input, view);
	});
});

