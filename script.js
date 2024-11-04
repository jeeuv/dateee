const noButton = document.getElementById('noButton');
const yesButton = document.getElementById('yesButton');
const messageContainer = document.createElement('div');
let noClickCount = 0;

// Function to show the message when "Yes" is clicked
function showYesMessage() {
    messageContainer.innerHTML = "Woohoo! You clicked yes! 🎉 Monday, you and me, on a date! 💖";
    messageContainer.classList.add('yesMessage');
    document.body.appendChild(messageContainer);
}

// Event listener for "Yes" button
yesButton.addEventListener('click', showYesMessage);


// Function to make the "No" button jump to a random position
function moveNoButton() {
    const x = Math.floor(Math.random() * (window.innerWidth - 100));
    const y = Math.floor(Math.random() * (window.innerHeight - 50));
    noButton.style.position = 'absolute';
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
}

// Event listener for "No" button
noButton.addEventListener('click', () => {
    noClickCount++;
    moveNoButton();

    if (noClickCount === 1) {
        // First click: show an arrow pointing to "Yes"
        yesButton.style.border = '3px solid red';
    } else {
        // Show messages after multiple clicks
        const messages = [
            "Come on, just click 'Yes'!",
            "You know you want to press 'Yes'!",
            "Stop being stubborn! Click 'Yes'!",
            "If you don't press 'Yes', I might get sad 😢",
            "Okay, seriously... just press 'Yes'!"
        ];
        const messageIndex = Math.min(noClickCount - 2, messages.length - 1);
        alert(messages[messageIndex]);
    }
});
