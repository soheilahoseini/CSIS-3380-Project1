/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
var quotes = [{
  quote: 'Anyone who has never made a mistake has never tried anything new',
  source: 'Albert Einstein',
  citation: 'https://www.yourtango.com/2017305418/life-quotes-famous-literary-authors',
  year: 1950
},
{
  quote: 'I was never afraid of failure; \n for I would sooner fail than not be among the greatest.',
  source: 'JOHN KEATS',
  citation: 'https://www.goalcast.com/2020/01/21/quotes-from-favorite-authors/',
  year: 1795
}, {
  quote: 'Laughter is timeless. Imagination has no age. \n  And dreams are forever',
  source: 'Walt Disney',
  citation: 'http://www.planetofsuccess.com/blog/2019/beautiful-quotes/',
  year: 1960
}, {
  quote: 'Beware of false knowledge; it is more dangerous than ignorance.',
  source: 'George Bernard Shaw',
  citation: 'https://www.azquotes.com/author/13418-George_Bernard_Shaw',
  year: null 
}, {
  quote: 'Write your Sad times in Sand, Write your Good times in Stone.',
  source: 'George Bernard Shaw',
  citation: '',
  year: 1950 
}];


/***
 * `getRandomQuote` function
 * 1. Create a variable that generates a random number
 * between zero and the last index in the `quotes` array
 * 2. Use the random number variable and bracket notation
 * to grab a random object from the `quotes` array, and
 * store it in a variable
 * 3. Return the variable storing the random quote object
***/
function getRandomQuote() {
  let index = Math.floor(Math.random() * 5) + 1;
  return quotes[index];
}

/***
 * `printQuote` function
 1. Create a variable that calls the getRandomQuote() function
 2. Create a variable that initiates your HTML string with
 the first two <p></p> elements, their classNames,
 and the quote and source properties, but leave off
 the second closing `</p>` tag for now
 3. Use an if statement to check if the citation property
 exists, and if it does, concatenate a <span></span>
 element, appropriate className, and citation property
 to the HTML string
 4. Use an if statement to check of the year property exists,
 and if it does, concatenate a <span></span> element,
 appropriate className, and year property to the HTML
 string
 5. After the two if statements, concatenate the closing </p>
 tag to the HTML string
 6. set the innerHTML of the quote-box div to equal the
 complete HTML string
***/

 
function printQuote() {
  let randomQuote = getRandomQuote();
  let PtoHTML1 = "";

  if (randomQuote.quote) {
    PtoHTML1 += '<p class=quote>' + `${randomQuote.quote}` + '</p>'; 
  }
  if (randomQuote.source) {
    PtoHTML1 += '<p class=source>' + `${randomQuote.source}` ;
  }
  if (randomQuote.citation) {
    PtoHTML1 += '<span class=citation>' + `${randomQuote.citation}` + '</span>';
  }
  if (randomQuote.year) {
    PtoHTML1 += '<span class=year>' + `${randomQuote.year}` + '</span>';
  }

  document.getElementById('quote-box').innerHTML = PtoHTML1+ '</p>';  
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/
document.getElementById('load-quote').addEventListener("click", printQuote, false);