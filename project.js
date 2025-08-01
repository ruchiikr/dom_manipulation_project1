// DOM Elements
const btn = document.querySelector('#new-quote');
const copyBtn = document.querySelector('#copy-quote');
const quote = document.querySelector('.quote');
const person = document.querySelector('.person');
const tooltip = document.querySelector('#tooltip');

// Quotes Array
const quotes = [
  {
    quote: "The best way to find yourself is to lose yourself in the service of others.",
    person: "Mahatma Gandhi"
  },
  {
    quote: "If you want to live a happy life, tie it to a goal, not to people or things.",
    person: "Albert Einstein"
  },
  {
    quote: "At his best, man is the noblest of all animals; separated from law and justice he is the worst.",
    person: "Aristotle"
  },
  {
    quote: "Your time is limited, so don’t waste it living someone else’s life.",
    person: "Steve Jobs"
  },
  {
    quote: "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
    person: "Benjamin Franklin"
  },
  {
    quote: "If you look at what you have in life, you’ll always have more. If you look at what you don’t have in life, you’ll never have enough.",
    person: "Oprah Winfrey"
  },
  {
    quote: "It does not matter how slowly you go as long as you do not stop.",
    person: "Confucius"
  },
  {
    quote: "Our lives begin to end the day we become silent about things that matter.",
    person: "Martin Luther King, Jr."
  },
  {
    quote: "Remember that not getting what you want is sometimes a wonderful stroke of luck.",
    person: "Dalai Lama"
  },
  {
    quote: "The journey of a thousand miles begins with one step.",
    person: "Lao Tzu"
  }
];

// Backgrounds Array
const backgrounds = [
  "img/project-1.jpg",
  "img/bg2.jpg",
  "img/bg3.jpg",
  "img/bg4.jpg",
  "img/bg5.jpg"
];

let lastIndex = -1;

// New Quote Handler
btn.addEventListener('click', () => {
  let random;
  do {
    random = Math.floor(Math.random() * quotes.length);
  } while (random === lastIndex);
  lastIndex = random;

  quote.innerText = quotes[random].quote;
  person.innerText = quotes[random].person;

  changeBackgroundImage();
});

// Copy Button
copyBtn.addEventListener('click', () => {
  const fullQuote = `"${quote.innerText}" — ${person.innerText}`;
  navigator.clipboard.writeText(fullQuote).then(() => {
    tooltip.classList.remove('hidden');
    setTimeout(() => {
      tooltip.classList.add('hidden');
    }, 1500);
  });// DOM Elements
const btn = document.querySelector('#new-quote');
const copyBtn = document.querySelector('#copy-quote');
const quote = document.querySelector('.quote');
const person = document.querySelector('.person');
const tooltip = document.querySelector('#tooltip');

// Quotes Array
const quotes = [
  {
    quote: "The best way to find yourself is to lose yourself in the service of others.",
    person: "Mahatma Gandhi"
  },
  {
    quote: "If you want to live a happy life, tie it to a goal, not to people or things.",
    person: "Albert Einstein"
  },
  {
    quote: "At his best, man is the noblest of all animals; separated from law and justice he is the worst.",
    person: "Aristotle"
  },
  {
    quote: "Your time is limited, so don’t waste it living someone else’s life.",
    person: "Steve Jobs"
  },
  {
    quote: "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
    person: "Benjamin Franklin"
  },
  {
    quote: "If you look at what you have in life, you’ll always have more. If you look at what you don’t have in life, you’ll never have enough.",
    person: "Oprah Winfrey"
  },
  {
    quote: "It does not matter how slowly you go as long as you do not stop.",
    person: "Confucius"
  },
  {
    quote: "Our lives begin to end the day we become silent about things that matter.",
    person: "Martin Luther King, Jr."
  },
  {
    quote: "Remember that not getting what you want is sometimes a wonderful stroke of luck.",
    person: "Dalai Lama"
  },
  {
    quote: "The journey of a thousand miles begins with one step.",
    person: "Lao Tzu"
  }
];

// Backgrounds Array
const backgrounds = [
  "img/project-1.jpg",
  "img/bg2.jpg",
  "img/bg3.jpg",
  "img/bg4.jpg",
  "img/bg5.jpg"
];

// Preload images
backgrounds.forEach(src => {
  const img = new Image();
  img.src = src;
});

let lastQuoteIndex = -1;
let lastBgIndex = -1;

// Show New Quote + New Background
btn.addEventListener('click', () => {
  let quoteIndex;
  do {
    quoteIndex = Math.floor(Math.random() * quotes.length);
  } while (quoteIndex === lastQuoteIndex);
  lastQuoteIndex = quoteIndex;

  quote.innerText = quotes[quoteIndex].quote;
  person.innerText = quotes[quoteIndex].person;

  changeBackgroundImage();
});

// Copy Quote Button
copyBtn.addEventListener('click', () => {
  const fullQuote = `"${quote.innerText}" — ${person.innerText}`;
  navigator.clipboard.writeText(fullQuote).then(() => {
    tooltip.classList.remove('hidden');
    setTimeout(() => {
      tooltip.classList.add('hidden');
    }, 1500);
  });
});

// Change Background Image and avoid repetition
function changeBackgroundImage() {
  let bgIndex;
  do {
    bgIndex = Math.floor(Math.random() * backgrounds.length);
  } while (bgIndex === lastBgIndex);
  lastBgIndex = bgIndex;

  document.body.style.backgroundImage = `url(${backgrounds[bgIndex]})`;
}

});

// Background Image Switcher
function changeBackgroundImage() {
  const index = Math.floor(Math.random() * backgrounds.length);
  document.body.style.backgroundImage = `url(${backgrounds[index]})`;
}
