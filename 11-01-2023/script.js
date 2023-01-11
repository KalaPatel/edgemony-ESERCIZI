// Creare una singola card tutto in statico (via HTML), inserire gli elementi a piacere, come immagini, testo o titoli, indispensabile
// pero aggiungere un button con una X come testo.

// Aggiungere un evento al cui click del mouse sulla class intera: Cambi il colore del testo di tutta la card

// Aggiungere un secondo evento al cui click del mouse sul pulsante con la X - Elimini la card stessa

// Completare la funzione quoteGen al fine di avere delle quotes che mostrino tanto il testo che l'autore del testo stesso

function changeDocumentBg() {
  const cardBoxEls = document.querySelector(".cardText");
  cardBoxEls.style.color = `#${Math.floor(Math.random() * 16777215).toString(
    16
  )}`;
  nMousePress++;

  if (nMousePress >= 5) {
    cardBoxEls.remove();
  }
}

function quoteGen(quoteImg, quoteText, authorText) {
  const quoteEl = document.createElement("div");
  const imgEl = document.createElement("img");
  const textEl = document.createElement("p");
  const authorEl = document.createElement("p");

  const quoteListEl = document.querySelector(".quote-list");

  quoteEl.className = "cardText";
  imgEl.setAttribute("src", quoteImg);
  imgEl.setAttribute("alt", "Immagine delle card");
  textEl.textContent = quoteText;
  authorEl.className = "author";
  authorEl.textContent = authorText;

  quoteEl.append(imgEl, textEl, authorEl);
  quoteListEl.appendChild(quoteEl);
}

let nMousePress = 0;
const btnClickEl = document.querySelector(".btnCard");

const quotes = [
  {
    id: 1,
    quote: "Life isn’t about getting and having, it’s about giving and being.",
    image: "https://picsum.photos/200/200?1",
    author: "Kevin Kruse",
  },
  {
    id: 2,
    quote: "Whatever the mind of man can conceive and believe, it can achieve.",
    image: "https://picsum.photos/200/200?2",
    author: "Napoleon Hill",
  },
  {
    id: 3,
    quote: "Strive not to be a success, but rather to be of value.",
    image: "https://picsum.photos/200/200?3",
    author: "Albert Einstein",
  },
  {
    id: 4,
    quote:
      "Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.",
    image: "https://picsum.photos/200/200?4",
    author: "Robert Frost",
  },
  {
    id: 5,
    quote: "I attribute my success to this: I never gave or took any excuse.",
    image: "https://picsum.photos/200/200?5",
    author: "Florence Nightingale",
  },
  {
    id: 6,
    quote: "You miss 100% of the shots you don’t take.",
    image: "https://picsum.photos/200/200?6",
    author: "Wayne Gretzky",
  },
  {
    id: 7,
    quote:
      "I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed.",
    image: "https://picsum.photos/200/200?7",
    author: "Michael Jordan",
  },
  {
    id: 8,
    quote:
      "The most difficult thing is the decision to act, the rest is merely tenacity.",
    image: "https://picsum.photos/200/200?8",
    author: "Amelia Earhart",
  },
  {
    id: 9,
    quote: "Every strike brings me closer to the next home run.",
    image: "https://picsum.photos/200/200?9",
    author: "Babe Ruth",
  },
  {
    id: 10,
    quote: "Definiteness of purpose is the starting point of all achievement.",
    image: "https://picsum.photos/200/200?10",
    author: "W. Clement Stone",
  },
  {
    id: 11,
    quote: "We must balance conspicuous consumption with conscious capitalism.",
    image: "https://picsum.photos/200/200?11",
    author: "Kevin Kruse",
  },
  {
    id: 12,
    quote: "Life is what happens to you while you’re busy making other plans.",
    image: "https://picsum.photos/200/200?12",
    author: "John Lennon",
  },
  {
    id: 13,
    quote: "We become what we think about.",
    image: "https://picsum.photos/200/200?13",
    author: "Earl Nightingale",
  },
  {
    id: 14,
    quote:
      "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails.  Explore, Dream, Discover.",
    image: "https://picsum.photos/200/200?14",
    author: "Mark Twain",
  },
  {
    id: 15,
    quote: "Life is 10% what happens to me and 90% of how I react to it.",
    image: "https://picsum.photos/200/200?15",
    author: "Charles Swindoll",
  },
  {
    id: 16,
    quote:
      "The most common way people give up their power is by thinking they don’t have any.",
    image: "https://picsum.photos/200/200?16",
    author: "Alice Walker",
  },
  {
    id: 17,
    quote: "The mind is everything. What you think you become.",
    image: "https://picsum.photos/200/200?17",
    author: "Buddha",
  },
  {
    id: 18,
    quote:
      "The best time to plant a tree was 20 years ago. The second best time is now.",
    image: "https://picsum.photos/200/200?18",
    author: "Chinese Proverb",
  },
  {
    id: 19,
    quote: "An unexamined life is not worth living.",
    image: "https://picsum.photos/200/200?19",
    author: "Socrates",
  },
  {
    id: 20,
    quote: "Eighty percent of success is showing up.",
    image: "https://picsum.photos/200/200?20",
    author: "Woody Allen",
  },
  {
    id: 21,
    quote:
      "Your time is limited, so don’t waste it living someone else’s life.",
    image: "https://picsum.photos/200/200?21",
    author: "Steve Jobs",
  },
  {
    id: 22,
    quote: "Winning isn’t everything, but wanting to win is.",
    image: "https://picsum.photos/200/200?22",
    author: "Vince Lombardi",
  },
  {
    id: 23,
    quote:
      "I am not a product of my circumstances. I am a product of my decisions.",
    image: "https://picsum.photos/200/200?23",
    author: "Stephen Covey",
  },
  {
    id: 24,
    quote:
      "Every child is an artist.  The problem is how to remain an artist once he grows up.",
    image: "https://picsum.photos/200/200?24",
    author: "Pablo Picasso",
  },
  {
    id: 25,
    quote:
      "You can never cross the ocean until you have the courage to lose sight of the shore.",
    image: "https://picsum.photos/200/200?25",

    author: "Christopher Columbus",
  },
  {
    id: 26,
    quote:
      "I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
    image: "https://picsum.photos/200/200?26",
    author: "Maya Angelou",
  },
  {
    id: 27,
    quote: "Either you run the day, or the day runs you.",
    image: "https://picsum.photos/200/200?27",
    author: "Jim Rohn",
  },
  {
    id: 28,
    quote: "Whether you think you can or you think you can’t, you’re right.",
    image: "https://picsum.photos/200/200?28",
    author: "Henry Ford",
  },
  {
    id: 29,
    quote:
      "The two most important days in your life are the day you are born and the day you find out why.",
    image: "https://picsum.photos/200/200?29",

    author: "Mark Twain",
  },
  {
    id: 30,
    quote:
      "Whatever you can do, or dream you can, begin it.  Boldness has genius, power and magic in it.",
    image: "https://picsum.photos/200/200?30",

    author: "Johann Wolfgang von Goethe",
  },
];

quotes.forEach((item) => quoteGen(item.image, item.quote, item.author));
btnClickEl.addEventListener("click", changeDocumentBg);
