// 1. Array of presentation challenge objects from screenshot
const challenges = [
  {
    title: "Slides Break Down",
    description: "Your slides suddenly stop working.",
    category: "Technical Issue"
  },
  {
    title: "Video Won't Play",
    description: "The video you're relying on won't load.",
    category: "Technical Issue"
  },
  {
    title: "Wrong Slide",
    description: "You accidentally advance to the wrong slide.",
    category: "Navigation"
  },
  {
    title: "Lost Your Place",
    description: "You don't remember which point comes next.",
    category: "Memory"
  },
  {
    title: "Blank Moment",
    description: "Your mind goes completely blank.",
    category: "Memory"
  },
  {
    title: "Start Over",
    description: "You realize you explained something incorrectly.",
    category: "Delivery"
  },
  {
    title: "Confused Audience",
    description: "Someone says, 'I don't understand.'",
    category: "Audience Interaction"
  },
  {
    title: "Where's the Evidence",
    description: "Someone asks where your information came from.",
    category: "Audience Interaction"
  }
];

// 2. Select container element from the HTML
const container = document.getElementById("content-container");

// 3. Render items dynamically if the container exists
if (container) {
  challenges.forEach((item) => {
    // Create card container
    const card = document.createElement("div");
    card.classList.add("challenge-card");

    // Create title element
    const title = document.createElement("h3");
    title.textContent = item.title;

    // Create description element
    const description = document.createElement("p");
    description.textContent = item.description;

    // Create category tag element
    const category = document.createElement("span");
    category.classList.add("challenge-category");
    category.textContent = item.category;

    // Append child elements to card
    card.appendChild(title);
    card.appendChild(description);
    card.appendChild(category);

    // Append completed card to container
    container.appendChild(card);
  });
}
