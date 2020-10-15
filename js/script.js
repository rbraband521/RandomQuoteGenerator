/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing

/*** 
  Quotes stored in an array
***/
var quotes = [
  {quote: "Keep your face always toward the sunshine-and shadows wil fall behind you.", source: "Walt Whitman"},
  {quote: "It's always the simple that produces the marvelous.", source: "Amelia Barr"},
  {quote: "Let us make our future now, and let us make our dreams tomorrow's reality.", source: "Malala Yousafzai"},
  {quote: "Frankly, my dear, I don't give a damn.", source: "Gone With the Wind", year: 1939},
  {quote: "I'm going to make him an offer he can't refuse.", source: "The Godfather", year: 1972},
  {quote: "Toto, I've got a feeling we're not in Kansas anymore.", source: "Dorothy", citation: "The Wizard of Oz", year: 1939},
  {quote: "You talking to me?", source: "Robert DeNiro", citation: "Taxi Driver", year: 1976},
  {quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.", source: "Nelson Mandela"},
  {quote: "The way to get started is to quit talking and begin doing.", source: "Walt Disney"},
  {quote: "If life were predicatable it would cease to be life, and be without flavor.", source: "Elanor Roosevelt"},
  {quote: "Life is what happens when you're busy making other plans.", source: "John Lennon"},
  {quote: "Do not go where the path may lead, go instead where there is no path an leave a trail.", source: "Ralph Waldo Emerson"},
  {quote: "Spread love everywhere you go. Let no one ever come to you without leaving happier.", source: "Mother Teresa"},
  {quote: "You will face many defeats in life, but never let yourself be defeated.", source: "Maya Angelou"}
]

/**this will print a new quote every 20 seconds and change the background color. 
 * The interval id value is available as well
 */
var intervalId = setInterval(printQuote, 20000);

/**used to reset the setInterval so the timer is reset if a user clicks the "show new quote" button */
function resetTimer() {
  clearInterval(intervalId);
  intervalId = setInterval(printQuote, 20000);
}

/***
  This is the function that accesses the quotes array. 
  It chooses a random number based on the length of the array, then returns the quote based on the index number.
***/
function getRandomQuote() {
  var randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
  } 

/**Gets a random color and changes the background */
function changeColor() {
  const colors = ['red', 'blue', 'green', 'teal', 'orange'];
  document.querySelector('body').style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
}

/***
  This is the function that prints the quotes to the website.
  The empty HTML variable is complete with concatanated strings which include two conditional statements to determine if 
  a quote has a citation and a year. If the quote does, it is printed to the website.
  The getElementById is used to target the div element in the index.html
***/

function printQuote() {
  changeColor();
  var randomQuote = getRandomQuote();
  var HTML = ' ';
  HTML += '<p class="quote">' + randomQuote.quote + '</p>' + '<p class="source">' + randomQuote.source;
   if (randomQuote.citation) {
    HTML += '<span class = "citation">' + randomQuote.citation + '</span>';
    }
    if(randomQuote.year) {
     HTML += '<span class = "year">' + randomQuote.year + '</span>';
     } 
     HTML += '</p>';
     document.getElementById("quote-box").innerHTML=HTML;
  resetTimer();
}


/***
  This is the event listener provided by Treehouse that is called when the button is clicked to show another quote.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);
