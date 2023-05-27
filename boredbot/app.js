const idea = document.querySelector("#idea");
const newIdea = document.querySelector("#new-idea");
const infoIcon = document.querySelector(".fa-circle-info");
const info = document.querySelector("#info");

newIdea.addEventListener("click", () => {
  waitForIdea();
  setTimeout(getNewIdea, 500);
});

function waitForIdea() {
  idea.innerText = "Loading...";
}

async function getNewIdea() {
  const response = await fetch("https://apis.scrimba.com/bored/api/activity");
  const jsonData = await response.json();
  idea.innerText = jsonData.activity;
  newIdea.innerText = "Get new idea";
}

// displays information popup

infoIcon.onmouseover = function () {
  info.style.display = "block";
};

infoIcon.onmouseout = function () {
  info.style.display = "none";
};
