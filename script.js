// Set the date for the event
const eventDate = new Date('2025-09-19').getTime();

// Update the countdown every second
const countdownInterval = setInterval(() => {
    const now = new Date().getTime();
    const timeLeft = eventDate - now;

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // update to display isplay 
    document.getElementById('countdown').innerHTML = 
        `${days} Days, ${hours} Hours, ${minutes} Minutes, ${seconds} Seconds`;

    // when countdown is over
    if (timeLeft < 0) {
        clearInterval(countdownInterval);
        document.getElementById('countdown').innerHTML = "It's the big day!";
    }
}, 1000);
