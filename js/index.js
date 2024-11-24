const my_list = [
  {
    quote: `Be yourself; everyone else is already taken.`,
    authorName: "--Oscar Wilde",
  },
  {
    quote: `So many books, so little time.`,
    authorName: "--Frank Zappa",
  },
  {
    quote: `A room without books is like a body without a soul.`,
    authorName: "--Marcus Tullius Cicero",
  },
  {
    quote: `You've gotta dance like there's nobody watching, love like you'll never be hurt, sing like there's nobody listening, and live like it's heaven on earth.`,
    authorName: "--William W. Purkey",
  },
  {
    quote: `You only live once, but if you do it right, once is enough.`,
    authorName: "--Mae West",
  },
  {
    quote: `Be the change that you wish to see in the world.`,
    authorName: "--Mahatma Gandhi",
  },
  {
    quote: `In three words I can sum up everything I've learned about life: it goes on.`,
    authorName: "--Robert Frost",
  },
];

let counter = 0;

// Shuffle the quotes
function randomStart(array) {
  for (let i = array.length - 1; i > 0; i--) {
    //to get the nearest integer number
    const j = Math.floor(Math.random() * (i + 1));
    // this line makes the same operation of Swaping the elements

    // let temp=array[i];
    // array[i] = array[j];
    // array[j] = temp;

    [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  }
}

randomStart(my_list);

function authorFunction() {
  // Check if all quotes have been displayed
  if (counter >= my_list.length) {
    counter = 0;
    randomStart(my_list);
  }

  document.getElementById("quote").innerHTML = `"${my_list[counter].quote}"`;
  document.getElementById("author").innerHTML = my_list[counter].authorName;

  counter++;
}

authorFunction();
