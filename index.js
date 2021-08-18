var readLineSync = require("readline-sync");

var userName = readLineSync.question("Hey! What's your name? ");
console.log(
  "Welcome, " +
    userName +
    ".\nLet's see how much you know about the popular sitcom, FRIENDS!"
);

var score = 0;

var highScores = [
  {
    name: "Tejas",
    score: 5,
  },
  {
    name: "Smitha",
    score: 4,
  },
];

var questionArray = [
  {
    question:
      "1. Which of these is not one of Joey's favourite foods?\na. Tofu\nb. Pizza\nc. Sandwich\n",
    answer: "a",
  },

  {
    question:
      "2. Which of the following is not a nickname of any of the 6 main characters?\na. Wet Pants Geller\nb. Big Fat Goalie\nc. Crap Bag\n",
    answer: "c",
  },

  {
    question:
      "3. Which one of the boys sported an Afro in high school?\na. Chandler\nb. Ross\nc. Joey\n",
    answer: "b",
  },

  {
    question:
      "4. What was the name of Monica's imaginary boyfriend?\na. Jared\nb. Bobby\nc. Chip\n",
    answer: "a",
  },

  {
    question:
      "5. What is Chandler's middle name?\na. Toby\nb. Muriel\nc. Matthew\n",
    answer: "b",
  },
];

function play(question, answer) {
  var userAnswer = readLineSync.question(question);
  if (userAnswer === answer) {
    console.log("RIGHT ANSWER! 🎉");
    score += 1;
  } else {
    console.log("WRONG ANSWER! ❌");
  }
  console.log("Your current score -> " + score);
  console.log("-----------");
}

for (i = 0; i < questionArray.length; i++) {
  play(questionArray[i].question, questionArray[i].answer);
}

if (score >= 4) {
  console.log("Woohoo! Your final score is -> " + score);
  console.log("Congratulations! You have made it to the high scorers list!");
  highScores.push({
    name: [userName],
    score: score,
  });
  highScores.sort(function (a, b) {
    return b.score - a.score;
  });
} else if (score >= 2) {
  console.log("Not bad! Your final score is -> " + score);
} else {
  console.log("You need to up your game! Your final score is -> " + score);
}

console.log("Check out the high scores!");
console.log("-----------");
for (i = 0; i < highScores.length; i++) {
  console.log(highScores[i].name + " : " + highScores[i].score);
}
