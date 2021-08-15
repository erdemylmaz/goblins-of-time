const musicLyrics = [
  {
    text: "Kahin ve onun elcileri <br/> Devi kacirdilar <br/> Tum zamanlar onlarindir <br/>DEV INDI TAHTINDAAAN",
  },
  {
    text: "Yoo hoo zaman gecer <br/> Karanliktan aydinliga <br/> Zamanin goblinleri <br/> Kahinin elcisi <br/>  Yoo hoo sizi bekler <br/> Zamanin bekcileri",
  },
  {
    text: "Yoo hoo sizi bekler <br/> Kahinin sozculeri <br/> Yoo hoo sizi bekler <br> Zarlarin efendisi",
  },
  {
    text: "Bekler kiyameti <br/> DEV INDI TAHTINDAAAAN",
  },
  {
    text: "Kendine inanan bir goblin bile ulasabilir zamanin otesine. <br> Ayni ardina kadar actirdigimiz gibi kapilari bu zamansizligin icinde.Bugun, o gun, zaman goblini...",
  },
];

// set ids
for (let x = 0; x < musicLyrics.length; x++) {
  musicLyrics[x].id = x + 1;
}

musicLyrics.forEach((lyric) => {
  let div = document.createElement("div");
  div.className = `section section-${lyric.id}`;

  div.innerHTML = `
	<div class="section-img-div">
		<img src="./images/goblins-of-time-${lyric.id}.png" class="section-img">
	</div>

	<div class="section-lyric-area">
		${lyric.text}
	</div>
  `;

  document.body.appendChild(div);
});

let sections = document.querySelectorAll(".section");

let currentIndex = 0;

scrollToItem = (index) => {
  let item = sections[index];
  var itemsPositon = item.offsetTop;

  window.scrollTo({
    left: 0,
    top: itemsPositon,
  });
};

// init audio

const audioSrc = "./music/got-music.mp3";
const myAudio = new Audio(audioSrc);

const arrow = document.querySelector(".down-arrow");

const playBtn = document.querySelector(".play-btn");
const pauseBtn = document.querySelector(".pause-btn");

const musicDurationDiv = document.querySelector(".music-duration-div");
const musicCurrentTimeDiv = document.querySelector(".music-current-time-div");
const musicHover = document.querySelector(".music-hover");

let musicDurationDivsWidth = musicDurationDiv.getBoundingClientRect().width;

document.body.appendChild(myAudio);

let audiosCurrentTime = 0;

let firstTime = 14.5;
let secondTime = 38.5;
let thirdTime = 54;
let fourthTime = 66.5;
let lastTime = 86;

updateSection = (audiosCurrentTime) => {
  if (audiosCurrentTime > lastTime) {
    myAudio.pause();
    myAudio.setAttribute("data-status", "paused");

    playBtn.style.display = "flex";
    pauseBtn.style.display = "none";

    let clipsArea = document.querySelector(".clips");
    let clipsAreaPosition = clipsArea.offsetTop;

    console.log(clipsAreaPosition, clipsArea);

    setTimeout(() => {
      window.scrollTo({
        left: 0,
        top: clipsAreaPosition,
      });
    }, 1000);
  }
  if (audiosCurrentTime > fourthTime) {
    scrollToItem(4);
  } else if (fourthTime > audiosCurrentTime && audiosCurrentTime > thirdTime) {
    scrollToItem(3);
  } else if (thirdTime > audiosCurrentTime && audiosCurrentTime > secondTime) {
    scrollToItem(2);
  } else if (audiosCurrentTime > firstTime && audiosCurrentTime < secondTime) {
    scrollToItem(1);
  } else if (audiosCurrentTime <= firstTime) {
    scrollToItem(0);
  }
};

setInterval(() => {
  audiosCurrentTime = myAudio.currentTime;
  // audiosCurrentTime = 43;

  if (myAudio.dataset.status == "playing") {
    let percentage = (audiosCurrentTime * 100) / lastTime;
    let percentageOfWidth = (musicDurationDivsWidth * percentage) / 100;

    musicCurrentTimeDiv.style.width = `${percentageOfWidth}px`;

    updateSection(audiosCurrentTime);
  }
}, 1000);

// disable down arrow
window.addEventListener("scroll", (e) => {
  let currentPosition = pageYOffset;

  if (currentPosition - 30 >= clipsDivsPostion) {
    arrow.style.display = "none";
  } else {
    arrow.style.display = "flex";
  }
});

// muzikdeki sozlere gore asagi scroll atsin
// klipleri ekle

/* dortluklerin bittigi zaman
	1- 15
	2- 39
	3- 55
	4- 1.05
	5- music's duration
*/

// // math
// let number = 124;
// let increasedPercentage = 12;
// let needed_percentage_for_decrerase;

// /*
//   100 * 25 / 50

//   50 * 10 / 100

//   percentagedNumber * x / 100 = difference
// */

// function findNeededPercentage(number, increasedPercentage) {
//   let percentagedNumber = number + (number * increasedPercentage) / 100;
//   let difference = Math.abs(number - percentagedNumber);

//   let neededPercentage = (difference * 100) / percentagedNumber;

//   let providingNumber =
//     percentagedNumber - (percentagedNumber * neededPercentage) / 100;

//   return neededPercentage;
// }

// let neededPercentage = findNeededPercentage(number, increasedPercentage);

// console.log(neededPercentage);
