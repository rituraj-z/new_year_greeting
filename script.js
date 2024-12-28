const newyquotes = [
    "Your passion for technology is the code that will rewrite your future. May this New Year bring you innovative solutions and breakthrough moments!",
    "In the world of technology, 2025 is not just a year - it's an upgrade to your potential. Debug your limitations and compile your dreams!",
    "2025 is not just a year, it's an opportunity to become the best version of yourself.",
    "This year, be the author of your own journey. Your dreams are the chapters, and your actions are the ink!",
    "Your value isn't just in what you know today, but in how quickly you can learn and adapt. Embrace the new year as a chance to upgrade your skills and mindset.",
    "This year, treat your personal growth like a software update - continuous, intentional, and always improving.",
    "Celebrate how far you've come, and get excited about how far you'll go in 2025!",
];

let currentQuoteIndex = 0;

function updateQuote() {
    const quoteElement = document.getElementById('nyquotes');
    quoteElement.style.animation = 'fadeOut 0.5s ease-in-out';
    setTimeout(() => {
        quoteElement.textContent = newyquotes[currentQuoteIndex];
        quoteElement.style.animation = 'fadeIn 0.5s ease-in-out';
        currentQuoteIndex = (currentQuoteIndex + 1) % newyquotes.length;
    }, 500);
}

function updateCountdown() {
    const newYear = new Date('December 28, 2024 16:05:00').getTime();
    const now = new Date().getTime();
    const timeLeft = newYear - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById('days').innerText = days < 10 ? '0' + days : days;
    document.getElementById('hours').innerText = hours < 10 ? '0' + hours : hours;
    document.getElementById('minutes').innerText = minutes < 10 ? '0' + minutes : minutes;
    document.getElementById('seconds').innerText = seconds < 10 ? '0' + seconds : seconds;

    if (timeLeft < 0) {
        clearInterval(countdownTimer);
        document.getElementById('new').style.display = 'flex';
        document.getElementById('countdown-container').style.display = 'none';
        document.getElementById('celebration').style.display = 'flex';
        document.getElementById('header').style.display = 'flex';
        document.getElementById('wish').style.display = 'flex';
        document.getElementById('timermn').style.display = 'none';
        document.getElementById('showFireworks').style.display = 'flex';
        document.getElementById('img').style.backgroundImage = 'url("2.jpg")';
        document.getElementById('sourcecode').style.background = 'rgba(0, 0, 70, 0.32)';
        document.getElementById('yearanimate').style.display = 'none';
        document.getElementById('four').style.display = 'none';
        document.getElementById('five').style.display = 'none';
        setInterval(updateQuote, 5000);
    }
    else if (timeLeft > 1) {
        document.getElementById('yearanimate').style.display = 'flex';
        document.getElementById('four').style.display = 'flex';
        document.getElementById('five').style.display = 'flex';
        document.getElementById('sourcecode').style.background = 'rgba(10, 0, 100, 0.32)';
    }
}

const countdownTimer = setInterval(updateCountdown, 1000);
updateCountdown();
