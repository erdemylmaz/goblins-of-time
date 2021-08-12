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

pauseBtn.addEventListener("click", () => {
  myAudio.pause();
  myAudio.setAttribute("data-status", "paused");

  pauseBtn.style.display = "none";
  playBtn.style.display = "flex";
});

playBtn.addEventListener("click", () => {
  myAudio.play();
  myAudio.setAttribute("data-status", "playing");

  playBtn.style.display = "none";
  pauseBtn.style.display = "flex";
});

musicHoverEffect = (e) => {
  let width = e.offsetX;

  musicHover.style.display = "flex";
  musicHover.style.opacity = "0.5";
  musicHover.style.width = `${width}px`;
};

musicDurationDiv.addEventListener("mousemove", musicHoverEffect);
musicDurationDiv.addEventListener("mouseleave", () => {
  musicHover.style.opacity = "0";
  // musicHover.style.width = `0px`;

  setTimeout(() => {
    musicHover.style.display = "flex";
  }, 250);
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

const clips = [
  {
    title: "Kahin 1",
    link: "https://clips.twitch.tv/InventiveKitschySheepMau5-6taeUe8PCMcjAMgy",
    text: "Haberin yok geleceklerden vadedilen eninde sonunda gerceklesecek.O gecenin karanligini bekle heyhat",
  },

  {
    title: "Kahin 2",
    link: "https://clips.twitch.tv/HappyObservantKumquatLitFam-VxsBxMQYLlbxdeiG",
    text: "Ne karlar ne de karanligin icinde heyhat.Aradiginn baiından beri içinde.Ruhunun en derinlerinde uyuyorlar.Etrafindalar o geceyi bekliyorlar.",
  },
  {
    title: "Kahin 3",
    link: "https://clips.twitch.tv/PreciousTallRatJebaited-0c_CQOhruhq6oCIx",
    text: "Anlamadigini varsayiyorsun Sen de farkindasin olacaklarin Korkularinin arkasina saklanma Dogrulari soyluyorum sana O gece vaadedilenler olacak Belki son kez belki ilk kez gulenler olacak Zamanin karanlik muhafizlari Zamani geldiginde ateslerinizi yakin",
  },
  {
    title: "Kahin 4",
    link: "https://clips.twitch.tv/ObliqueUgliestWebHumbleLife-YxhFhs-iGiFM4gji",
    text: "Golgelerin ic	inde bekliyoruz usulca karanliktan haber getirdim sana Mesaleler hazir kum saatim yanimda Zamandan soz ederim heyhat Kiliclar hazir zaman benim yanimda Onlardan soz ederim heyhat",
  },
  {
    title: "Kahin 5",
    link: "https://clips.twitch.tv/AltruisticHappyLettuceOhMyDog-sAF-kKlbL-Tezk47",
    text: "Zamanin bekcileri gun geliyor Golgelerinizden cikin elcilerim Olumun bekcileri karar verin ona Mezarlarinizdan kalkin yoldaslarim Bekle yasamı heyhat zaman bizimle Geldi olum heyhat zaman sizinle",
  },
  {
    title: "Kahin 6",
    link: "https://clips.twitch.tv/DoubtfulIntelligentSnailBabyRage-ULU6DmOU8vItj5JD",
    text: "Korkma kaderden heyhat Elcilerim bekliyor oklarla Korkma karanliktan heyhat Buyuculerim bekliyor parsomenlerler Korkma olumlen heyhat Suikastcilerim bekliyor hancerlerle",
  },
  {
    title: "Kahin 7",
    link: "https://clips.twitch.tv/PreciousCogentVanillaOMGScoots-FY6qn1-eG9YJsnji",
    text: "Aglayan bir nehirin altinda Kahin guluyor sakalarina Kokusmus bir su kuyusunun altinda Kahin bagiriyor kuzgunlara Zamansiz bir ziyaret O gunu bekle heyhat",
  },
];

const clipsDiv = document.createElement("div");
clipsDiv.className = "clips";

clipsDiv.innerHTML = `
	<div class="title">Kahin Klipleri</div>

	<div class="clips-area"></div>
	<div class="hover"></div>
`;

document.body.appendChild(clipsDiv);

const clipsArea = document.querySelector(".clips-area");
const hover = document.querySelector(".hover");

onHover = (e) => {
  let item = e.target;
  let itemsPositonX = item.offsetLeft;
  let itemsPositonY = item.offsetTop;

  hover.style.display = "flex";
  hover.style.opacity = "1";
  hover.style.left = `${itemsPositonX}px`;
  hover.style.top = `${itemsPositonY}px`;
};

clips.map((clip) => {
  let clipDiv = document.createElement("a");
  clipDiv.href = clip.link;
  clipDiv.setAttribute("target", "_blank");
  clipDiv.className = "clip";

  clipDiv.innerHTML = `
	<a href=${clip.link} class="clip-title">${clip.title}</a>

	<div class="clip-text-div">
		${clip.text}
	</div>
	`;

  clipsArea.appendChild(clipDiv);

  let allClips = document.querySelectorAll(".clip");

  allClips.forEach((clip) => {
    clip.addEventListener("mouseenter", onHover);
  });
});

clipsArea.addEventListener("mouseleave", () => {
  hover.style.opacity = "0";

  setTimeout(() => {
    hover.style.display = "none";
  }, 500);
});

let clipsDivsPostion = clipsDiv.offsetTop;

window.addEventListener("scroll", (e) => {
  let currentPosition = pageYOffset;

  if (currentPosition - 30 >= clipsDivsPostion) {
    arrow.style.display = "none";
  } else {
    arrow.style.display = "flex";
  }
});

const modal = document.querySelector(".modal");
const acceptBtn = document.querySelector(".accept-modal-btn");
const refuseBtn = document.querySelector(".refuse-modal-btn");

refuseBtn.addEventListener("click", () => {
  location.reload();
});

acceptBtn.addEventListener("click", () => {
  modal.style.display = "none";

  let body = document.body;
  body.style.height = "auto";
  body.style.minHeight = "100vh";
  body.style.overflow = "auto";

  setTimeout(() => {
    myAudio.play();
    myAudio.setAttribute("data-status", "playing");
  }, 1000);
});

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

changeTime = (e) => {
  let clickedX = e.offsetX;
  let percentage = (clickedX * 100) / musicDurationDivsWidth;
  let timeOfMusic = (lastTime * percentage) / 100;

  musicCurrentTimeDiv.style.width = `${clickedX}px`;

  let audiosCurrentTime = timeOfMusic;

  updateSection(audiosCurrentTime);

  myAudio.currentTime = timeOfMusic;
};

// change music's current time
musicDurationDiv.addEventListener("click", changeTime);
