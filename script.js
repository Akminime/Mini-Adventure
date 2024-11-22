const nameHeader = document.getElementById("characterName")

window.onload = function() {
    let userName = prompt("Please enter your name:");

    let userChoice = prompt("Choose one option:\n1. Option 1\n2. Option 2\n3. Option 3\n\n\nNumber Only\nI.E. '1' or '2'");

    if (userName && userChoice) {
        alert("Welcome, " + userName + "!\nYou selected Option " + userChoice + ".");
        nameHeader.textContent = userName;

    } else {
        alert("You didn't provide enough information.");
    }
}