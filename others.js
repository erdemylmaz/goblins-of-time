const others = [
  {
    type: "link",
    owner: "Rokunoru",
    link: "https://www.youtube.com/watch?v=24a03rlrOww",
  },
  {
    type: "text",
    owner: "Semih Asikoglu",
    text: `Seslendirme`,
  },
  {
    type: "text",
    owner: "Rokunoru & skamos",
    text: `Fotograflar`,
  },
];

const othersDiv = document.createElement("div");
othersDiv.className = "others-div";

othersDiv.innerHTML = `
  <div class="others-div-text">Diger</div>

  <div class="others-divs"></div>
`;

document.body.appendChild(othersDiv);

const othersArea = document.querySelector(".others-divs");

others.map((other) => {
  let div = document.createElement("div");
  div.className = "other";

  if (other.type == "link") {
    div.innerHTML = `
      <div class="others-text"><span>${other.owner}</span>'a ait bir video</div>
      <a href=${other.link} target="_blank" class="others-link">YouTube</a>
    `;
  } else if (other.type == "text") {
    div.innerHTML = `
      <div class="others-text">${other.text} <span> ${other.owner}</span></div>
      `;
  }

  othersArea.appendChild(div);
});
