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
            "Are you sure? Because I think we'd look cute together.",
            "No worries! I've got a whole playlist of reasons why you should say 'Yes.' Want me to play it?",
            "Just click 'Yes,' there are more pickup lines!",
            "I'll bring snacks. You like snacks, right?",
            "Statistically, saying 'Yes' is better for your health.",
            "What if I say 'please' with puppy eyes?",
            "No is just a delayed yes. I’ll wait.",
            "If you say 'No,' I might just sit here and cry. But no pressure.",
            "Saying 'Yes' is scientifically proven to increase happiness.",
            "You're just testing me, aren't you?",
            "I promise to make it the best date ever!",
            "The universe wants you to click 'Yes,' trust me.",
            "Every 'No' gets me closer to the 'Yes.'",
            "Even the 'No' button secretly wants you to pick 'Yes.'",
            "Remember, this could be your best decision today.",
        ];
        const messageIndex = Math.min(noClickCount - 2, messages.length - 1);
        alert(messages[messageIndex]);
    }
});
