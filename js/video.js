// Elements
const video = document.getElementById('video');

const quote1 = document.getElementById('quote-1');
const quote2 = document.getElementById('quote-2');
const quote3 = document.getElementById('quote-3');

// JS styling
quote2.style.display = 'none';
quote3.style.display = 'none';

// Event Listeners
video.addEventListener('click', playVideo);
video.addEventListener('mouseover', videoControls);

// Functions
function playVideo() {
    video.play();
}

function videoControls() {
    video.setAttribute('controls', 'controls');
}

let quoteIndex = 0;
changeQuote();

function changeQuote() {
    let i;
    let quotes = document.getElementsByClassName('quote-container');
    for (i = 0; i < quotes.length; i++) {
        quotes[i].style.display = 'none';
    }
    quoteIndex++;
    if (quoteIndex > quotes.length) { quoteIndex = 1 }
    quotes[quoteIndex - 1].style.display = 'block';
    quotes[quoteIndex - 1].style.animationDelay = '4s';
    quotes[quoteIndex - 1].style.animationName = 'swipe-left';
    setTimeout(changeQuote, 5000); // change quote every 5 seconds
}
