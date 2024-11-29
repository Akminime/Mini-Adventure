// References to HTML elements
const charName = document.getElementById('characterName');

// Function to set a session cookie
function setCookie(name, value) {
    document.cookie = `${name}=${value}; path=/`;
}

// Function to get a cookie value by name
function getCookie(name) {
    const cookies = document.cookie.split('; ');
    for (const cookie of cookies) {
        const [key, val] = cookie.split('=');
        if (key === name) {
            return val;
        }
    }
    return null;
}

// Function to delete all cookies (optional, for clearing)
function clearCookies() {
    const cookies = document.cookie.split('; ');
    for (const cookie of cookies) {
        const key = cookie.split('=')[0];
        document.cookie = `${key}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;`;
    }
}

// Simulate the user input
function saveSessionData() {
    // Prompt user for their name and option
    const userName = prompt("Enter your name:");
    const userChoice = prompt("Choose an option:\n1. Mage\n2. Paladin\n3. Fighter");

    if (userName && userChoice) {
        // Save data in session cookies
        setCookie('userName', userName);
        setCookie('userChoice', userChoice);

        // Display the name in the character header
        charName.textContent = userName;

        // Display a confirmation alert
        alert(`Welcome, ${userName}!\nYou selected Option ${userChoice}.`);
    } else {
        alert("You didn't provide enough information.");
    }
}

// Function to load session data when the page is refreshed
function loadSessionData() {
    const userName = getCookie('userName');
    const userChoice = getCookie('userChoice');

    if (userName && userChoice) {
        charName.textContent = userName;
        alert(`Welcome back, ${userName}!\nYou previously selected Option ${userChoice}.`);
    } else {
        saveSessionData();
    }
}

// Run on page load
window.onload = loadSessionData;
