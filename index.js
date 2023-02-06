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
