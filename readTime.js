// time to read for article is goal

// requirements
/*
 - needs to be shown on top of page
 - needs to be in minutes
 - text needs to say
   "5 min read"
 - whole numbers for minutes, no floats
 - assumption is adults read at 250 words/minute
*/

// functions
// total # of words in text
// divide total words by 250
// get words from DOM
// strip html markup from text (sanitize text)
// remove hyphens, periods, remove whitespace -- punctuation
// function to display "x min read time" (add to dom)


// get words from page
function getWordsFromDOM (target) {
  const tag = target || 'p'
  return document.querySelectorAll(tag);
}

function extractTextFromMarkup(wordsFromDomArr) {
    let justTextContent = "";
    wordsFromDomArr.forEach(function (item) {
      justTextContent += item.textContent;
    })

   return justTextContent;
}

function sanitizeWordsFromPage (wordsString) {
  // convert to array
  const dirtyWords = wordsString.split(" ");
  const cleanWords = [];
  // clean up empty items in array
   dirtyWords.forEach(function(item) {
     if(item.length) {
       cleanWords.push(item)
     }
   })
  // return array of words
  return cleanWords;
}

function calculateWPM (arrayOfWords, avgWPM) {
  const wordCount = arrayOfWords.length;
  const wordsPerMinute = wordCount / avgWPM;
  return Math.round(wordsPerMinute)
}

function addWpmToDom(wpm) {
  const element = document.querySelector('#timeToRead');
  return element.textContent = `${wpm}min read.`
}
// iife immediately invoked function execution
// want to put stuff in dom when its ready
(function() {

  const domWords = getWordsFromDOM();
  const pageText = extractTextFromMarkup(domWords);
  const sanitizedWords = sanitizeWordsFromPage(pageText);
  const wordsPerMinute = calculateWPM(sanitizedWords, 250);
  console.log('words per minute', wordsPerMinute)

  addWpmToDom(wordsPerMinute);


})()
