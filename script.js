const gallery = document.getElementById("challenge-gallery");

// build the challenge cards
// 1. reference the data set: challenge.js
// for each loop and function--instructions, in the () is the argument
challenges.forEach(function(challenge){
    // the blueprint to put in the html
    const challengeDiv = document.createElement("div");
    challengeDiv.className = "challenge";

    const challengeName = document.createElement("h2");
    challengeName.textContent = challenge.name;

    const challengeDesc = document.createElement("p");
    challengeDesc.textContent = challenge.description;

    challengeDiv.appendChild(challengeName);
    challengeDiv.appendChild(challengeDesc);

    gallery.appendChild(challengeDiv);
});
