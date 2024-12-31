class NewYearCountdown {
    constructor() {
        this.newyquotes = [
            "Your passion for technology is the code that will rewrite your future. May this New Year bring you innovative solutions and breakthrough moments!",
            "In the world of technology, 2025 is not just a year - it's an upgrade to your potential. Debug your limitations and compile your dreams!",
            "2025 is not just a year, it's an opportunity to become the best version of yourself.",
            "This year, be the author of your own journey. Your dreams are the chapters, and your actions are the ink!",
            "Your value isn't just in what you know today, but in how quickly you can learn and adapt. Embrace the new year as a chance to upgrade your skills and mindset.",
            "This year, treat your personal growth like a software update - continuous, intentional, and always improving.",
            "Celebrate how far you've come, and get excited about how far you'll go in 2025!",
        ];

        this.elements = {
            days: document.getElementById('days'),
            hours: document.getElementById('hours'),
            minutes: document.getElementById('minutes'),
            seconds: document.getElementById('seconds'),
            newSection: document.getElementById('new'),
            countdownContainer: document.getElementById('countdown-container'),
            celebration: document.getElementById('celebration'),
            header: document.getElementById('header'),
            wish: document.getElementById('wish'),
            timermn: document.getElementById('timermn'),
            showFireworks: document.getElementById('showFireworks'),
            img: document.getElementById('img'),
            sourceCode: document.getElementById('sourcecode'),
            yearAnimate: document.getElementById('yearanimate'),
            four: document.getElementById('four'),
            five: document.getElementById('five'),
            wait: document.getElementById('wait'),
            generate: document.getElementById('generate'),
            nyQuotes: document.getElementById('nyquotes'),
            row: document.getElementById('row'),
        };

        this.currentQuoteIndex = 0;
        this.countdownTimer = null;
    }

    updateQuote() {
        const quoteElement = this.elements.nyQuotes;
        quoteElement.style.animation = 'fadeOut 0.5s ease-in-out';

        setTimeout(() => {
            quoteElement.textContent = this.newyquotes[this.currentQuoteIndex];
            quoteElement.style.animation = 'fadeIn 0.5s ease-in-out';
            this.currentQuoteIndex = (this.currentQuoteIndex + 1) % this.newyquotes.length;
        }, 500);
    }

    updateCountdown() {
        const newYear = new Date('December 31, 2024 12:15:00').getTime();
        const now = new Date().getTime();
        const timeLeft = newYear - now;

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        this.elements.days.innerText = days < 10 ? '0' + days : days;
        this.elements.hours.innerText = hours < 10 ? '0' + hours : hours;
        this.elements.minutes.innerText = minutes < 10 ? '0' + minutes : minutes;
        this.elements.seconds.innerText = seconds < 10 ? '0' + seconds : seconds;

        if (timeLeft < 0) {
            this.handleNewYearReached();
        } else if (timeLeft > 1) {
            this.handleCountdownProgress();
        }
    }

    handleNewYearReached() {
        clearInterval(this.countdownTimer);

        [this.elements.newSection, this.elements.wish, this.elements.generate].forEach(el => {
            el.style.display = 'flex';
        });

        [this.elements.countdownContainer, this.elements.timermn,
        this.elements.yearAnimate, this.elements.four,
        this.elements.five, this.elements.wait].forEach(el => {
            el.style.display = 'none';
        });

        this.elements.celebration.style.display = 'flex';
        this.elements.header.style.display = 'flex';
        this.elements.row.style.display = 'flex';
        this.elements.showFireworks.style.display = 'flex';
        this.elements.img.style.backgroundImage = 'url("2.jpg")';
        this.elements.sourceCode.style.background = 'rgba(0, 0, 70, 0.32)';

        setInterval(() => this.updateQuote(), 5000);
    }

    handleCountdownProgress() {
        [this.elements.yearAnimate, this.elements.wait,
        this.elements.four, this.elements.five].forEach(el => {
            el.style.display = 'flex';
        });
        this.elements.sourceCode.style.background = 'rgba(10, 0, 100, 0.32)';
    }

    initNameGeneration() {
        const generateButton = this.elements.generate;
        const celebrationSection = this.elements.celebration;

        generateButton.addEventListener('click', () => {
            const originalContent = celebrationSection.innerHTML;

            const inputContainer = document.createElement('div');
            inputContainer.innerHTML = `
            <div style="
                display: flex; 
                flex-direction: column; 
                justify-content: center; 
                align-items: center; 
                width: 100%;
            ">
                <input placeholder ="Enter Your Name" type="text" id="nameInput" style="
                    position: relative;
                    z-index: 9999;
                    width: 250px;
                    padding: 10px;
                    margin: 20px 10px;
                    border-radius: 10px;
                    border: 2px solid white;
                    background: rgba(0,0,0,0.5);
                    color: white;
                    font-size: 16px;
                ">
                <div style="
                    display: flex; 
                    flex-direction: row; 
                    justify-content: center; 
                    align-items: center; 
                    gap: 20px;
                ">
                    <button id="submitName" style="
                        position: relative;
                        z-index: 9999;
                        width: 120px;
                        padding: 10px;
                        border-radius: 10px;
                        border: 2px solid white;
                        background: rgba(255,255,255,0.2);
                        color: white;
                        cursor: pointer;
                    ">Submit</button>
                    <button id="cancelName" style="
                        position: relative;
                        z-index: 9999;
                        width: 120px;
                        padding: 10px;
                        border-radius: 10px;
                        border: 2px solid white;
                        background: rgba(255,0,0,0.2);
                        color: white;
                        cursor: pointer;
                    ">Cancel</button>
                </div>
            </div>
        `;

            celebrationSection.innerHTML = '';
            celebrationSection.appendChild(inputContainer);

            const submitButton = document.getElementById('submitName');
            const cancelButton = document.getElementById('cancelName');
            const nameInput = document.getElementById('nameInput');

            submitButton.addEventListener('click', () => {
                const name = nameInput.value.trim();
                if (name) {
                    celebrationSection.innerHTML = `
                    <h2>Happy New Year ${name}! 🎉</h2>
                    <br>
                    <br>
                    <div class="quotes">
                        <p id="nyquotes">Wishing you joy, success, and happiness!</p>
                    </div>
                `;

                    setInterval(() => this.updateQuote(), 5000);
                }
            });

            cancelButton.addEventListener('click', () => {
                celebrationSection.innerHTML = originalContent;
            });

            nameInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    submitButton.click();
                }
            });

            nameInput.focus();
        });
    }

    init() {
        this.countdownTimer = setInterval(() => this.updateCountdown(), 1000);
        this.updateCountdown();
        this.initNameGeneration();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const countdown = new NewYearCountdown();
    countdown.init();
});
