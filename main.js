const truthsList = [
    "What's the most embarrassing thing you've ever done?",
    "Have you ever had a crush on a friend's partner?",
    "What's a secret you've never told anyone?",
    "What's your biggest fear?",
    "What's the worst lie you've ever told?",
    "What's your guiltiest pleasure?",
    "What's the weirdest habit you have?",
    "What's something you did as a kid that still makes you cringe?",
    "Have you ever cheated in a relationship?",
    "What's a rumor you've spread about someone?",
    "What's a talent you have that no one knows about?"
  ];
  
  const daresList = [
    "Do a silly dance for 30 seconds.",
    "Sing a song loudly in a public place (or to the group).",
    "Post a funny selfie on social media and leave it up for 1 hour.",
    "Speak in a fake accent for the next 3 rounds.",
    "Let the group give you a ridiculous hairstyle and keep it for an hour.",
    "Call a friend and pretend to be a customer service agent for 2 minutes.",
    "Do an impression of a celebrity until someone guesses who it is.",
    "Hold a plank position for 60 seconds.",
    "Write a random joke in the comments of a trending YouTube video.",
    "Eat a snack (like a chip or cracker) without using your hands."
  ];

  const wouldYouRatherList = [
    "Would you rather always have to sing instead of speak or dance everywhere you go?",
    "Would you rather have unlimited money but no free time or unlimited free time but no money?",
    "Would you rather live without the internet or without air conditioning?",
    "Would you rather always know the truth but never be believed or always be believed but never know the truth?",
    "Would you rather have the ability to fly or be invisible?",
    "Would you rather live in a world without music or a world without movies?",
    "Would you rather have a rewind button or a pause button in your life?",
    "Would you rather always have to say everything on your mind or never speak again?",
    "Would you rather have a pet dragon or a pet unicorn?",
    "Would you rather be famous but unhappy or unknown but happy?"
  ];
  
  const neverHaveIEverList = [
    "Never have I ever lied to get out of trouble.",
    "Never have I ever had a crush on a teacher.",
    "Never have I ever pretended to be sick to skip work or school.",
    "Never have I ever snooped through someone else's phone.",
    "Never have I ever cheated on a test.",
    "Never have I ever ghosted someone.",
    "Never have I ever danced in front of a mirror.",
    "Never have I ever sung in the shower.",
    "Never have I ever had a one-night stand.",
    "Never have I ever stolen something."
  ];


//   Code after here
const output = document.getElementById('output');


function truth() {
    const index = Math.floor(Math.random() * truthsList.length)
    output.innerHTML = `${truthsList[index]}`;
}

function dare() {
    const index = Math.floor(Math.random() * daresList.length)
    output.innerHTML = `${daresList[index]}`
}

function wouldYouRather() {
    const index = Math.floor(Math.random() * wouldYouRatherList.length)
    output.innerHTML = `${wouldYouRatherList[index]}`
}

function neverHaveIEver() {
    const index = Math.floor(Math.random() * neverHaveIEverList.length)
    output.innerHTML = `${neverHaveIEverList[index]}`
}