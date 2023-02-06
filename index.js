var words = [
  'bananas',
  'grapes',
  'carousel',
  'milkshake',
  'javascript',
  'limousine',
  'chocolate',
  'programming',
  'meatloaf',
  'ukulele',
  'mango'
]

var wordToGuessEl = document.getElementById('word-to-guess')
var remainingGuessesEl = document.getElementById('remaining-guesses')
var winsEl = document.getElementById('wins')
var lossesEl = document.getElementById('losses')
var previousWordEl = document.getElementById('previous-word')
var answer = words[Math.floor(Math.random() * words.length)]
var incorrectLetters = document.getElementById('incorrect-letters')
var guesses = 10
var wins = 0
var losses = 0
var lastLetters = answer.length
var correct = false
var valid = []
var invalid = []


remainingGuessesEl.textContent = guesses
var wordPlayed = answer.split('')
wordToGuessEl.textContent = ""

for (i=0; i < answer.length; i++){
  wordPlayed[i] = '_'
}

var board = wordPlayed.join("")
console.log(answer)
wordToGuessEl.textContent = board
document.body.onkeyup = function(e){
  var key = e.key.toLowerCase()
  if (invalid.includes(key) == false && valid.includes(key) == false)
  {
  for(i=0; i < answer.length; i++){
    if (answer[i] == key){
      correct = true
      lastLetters--
      valid.push(key)
      wordPlayed[i] = key

    }else{
    }
  }
  if(correct == true){
    board = wordPlayed.join("")
    wordToGuessEl.textContent = board
    if(lastLetters == 0){
      wins++
      winsEl.textContent = wins
      previousWordEl.textContent = answer
      wordToGuessEl.textContent = ""
      answer = words[Math.floor(Math.random() * words.length)]
      wordPlayed = answer.split('')
      for(i=0; i < answer.length; i++){
        wordToGuessEl.textContent = wordToGuessEl.textContent + "_"
        wordPlayed[i]='_'
      }
      guesses = 10
      remainingGuessesEl.textContent = guesses
      board = wordPlayed.join("")
      console.log(answer)
      wordToGuessEl.textContent = board
      invalid = []
      valid = []
      lastLetters = answer.length
      incorrectLetters.textContent = ""
      }
    }else{
      
    }
}
}