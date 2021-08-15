const letters = [
  {
    turkish: "ö",
    english: "o",
  },
  {
    turkish: "ş",
    english: "s",
  },
  {
    turkish: "ı",
    english: "i",
  },
  {
    turkish: "ü",
    english: "u",
  },
  {
    turkish: "ğ",
    english: "g",
  },
  {
    turkish: "ç",
    english: "c",
  },
];

TranslateToEnglishAlphabet = (text) => {
  let words = text.split(" ");

  let newText = "";

  // change letters
  words.map((word) => {
    let wordLetters = word.split("");

    let newWord = "";

    // change letter by letter
    letters.map((letter) => {
      for (let x = 0; x < word.length; x++) {
        if (wordLetters[x] == letter.turkish) {
          wordLetters[x] = letter.english;
        }
      }
    });

    wordLetters.map((wordLetter) => {
      newWord += wordLetter;
    });

    newText += ` ${newWord}`;
  });

  return newText;
};

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
    text: "Aglayan bir nehirin altinda Kahin guluyor sakalarina Kokusmus bir su kuyusunun altinda Kahin bagiriyor kuzgunlara Zamansiz bir ziyaret O gunu bekle heyhat <a href='https://www.reddit.com/r/swaggybark/comments/p321hd/kahin_bekliyor/' target='_blank' class='clip-link'>Reddit Link</a>",
  },
  {
    title: "Kahin 8",
    link: "https://clips.twitch.tv/VastAstuteFinchAMPTropPunch-4ULLwhb44aytqMEr",
    text: "Zamandir karayi; ak yapan, Gunduzu gece dogumu; olumu, Kahin oturuyor bir golun kenarinda, Sapasaglam iskeleye dayanarak, Binlerce goblin direniyor zamana, Yuregi yirtip kurtulsun istiyor, Omzunda en sicak yaz gunu gibi bir el hissediyor, Geriden bir ses vaktin geldigini soyluyor, Degerli anilar zamanın goz yaslariyla, Adimadim toparlaniyor karanlikta, Yaratiklar kisa omurlerine sigdirdiklari, Her seyi sunuyorlar koca deve, Goblinler karanligi aydinlik yapmak sizin elinizde ",
  },
  {
    title: "Kahin 9",
    link: "https://clips.twitch.tv/PrettyDifficultOysterSpicyBoy-GSrwNgsBoAhOeTKI",
    text: `${TranslateToEnglishAlphabet(
      "Dinle sozumu son kez koca dev Zamandır karayı; ak yapan, Gündüzü gece doğumu; ölümü, Kahin oturuyor bir gölün kenarında, Sapasağlam iskeleye dayanarak, Binlerce goblin direniyor zamana, Yüreği yırtıp kurtulsun istiyor, Omzunda en sıcak yaz günü gibi bir el hissediyor, Geriden bir ses vaktin geldiğini söylüyor, Değerli anılar zamanın göz yaşlarıyla, Adımadım toparlanıyor karanlıkta, Yaratıklar kısa ömürlerine sığdırdıkları, Her şeyi sunuyorlar koca deve, Hatırla unutulanı"
    )}`,
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
