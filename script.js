/* name generator */ 
const decoration = [
    "宏",
    "牡",
    "学",
    "系",
    "大",
    "ィ",
    "☬",
    "市",
    "ス",
    "能",
    "ナ",
    "瑞",
    "†",
    "‡",
    "☠",
    "༒",
];
const prefix = [
    "zxc",
    "ZXC",
    "zxc king",
    "zxc god",
    "sf abuzer",
    "kill me",
    "1000-7",
    "S ранг",
    "sad",
    "mode:",
    "666",
    "obsessed",
    "322",
    "ugly god",
]
const spacing = [
    " ",
    " ",
    "|"
]
const phrase = [
    "мёртв внутри",
    "дед внутри",
    "мама киллер",
    "dead inside",
    "Dead inside",
    "hate me as you do",
    "amulet abuzer",
    "anti social",
    "13 y.o.",
    "no brain",
    "mid or feed",
    "4-0 pos or leave",
    "8k pts",
    "pudge abuzer",
    "плевать на всех",
    "all mute",
    "eternal despair",
    "bury me alive",
    "1v9"
]
const word = [
    "hopeless",
    "pain",
    "ghoul",
    "immortal",
    "demon",
    "schizophrenic",
    "hate",
    "emotionless",
    "epeleptic",
    "blessed",
    "white prince",
    "blood",
    "tears",
    "crying",
    "faceless",
    "clown",
    "чудище",
    "tragic",
    "emptiness"
]
const mapping = [
    "randomPrefix + randomSpacing + randomPhrase + randomDecoration + randomWord +randomDecoration",
    "randomPrefix + randomDecoration + randomPhrase + randomDecoration + randomWord",
    "randomPrefix + randomDecoration + randomWord + randomDecoration + randomPhrase",
    "randomPrefix + randomSpacing + randomWord + randomSpacing + randomPhrase",
    "randomPrefix + randomSpacing + randomPhrase + randomSpacing + randomWord",
    "randomPrefix + randomDecoration + randomWord + randomDecoration",
    "randomPrefix + randomSpacing + randomWord",
    "randomPrefix + randomSpacing + randomPhrase",
    "randomDecoration + randomWord + randomDecoration + randomPhrase + randomSpacing + randomPrefix",
    "randomDecoration + randomPhrase + randomDecoration + randomWord + randomSpacing + randomPrefix",
    "randomDecoration + randomPhrase + randomDecoration + randomPrefix",
    "randomDecoration + randomWord + randomDecoration + randomPhrase + randomPrefix",
    "randomDecoration + randomWord + randomDecoration + randomPhrase",
    "randomDecoration + randomPhrase + randomDecoration + randomWord",
    "randomDecoration + randomWord + randomDecoration",
    "randomWord + randomDecoration + randomPhrase + randomDecoration + randomPrefix",
    "randomWord + randomSpacing + randomPhrase + randomSpacing + randomPrefix",
    "randomWord + randomSpacing + randomPhrase",
    "randomPhrase + randomDecoration + randomWord + randomDecoration + randomPrefix",
    "randomPhrase + randomSpacing + randomWord + randomSpacing + randomPrefix",
    "randomPhrase + randomSpacing + randomWord",
] 

const generatorButton = document.querySelector('.generator-button');
let generatorName = document.querySelector('.generator-logic-name');

function getRandomElement(array) {
    let randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

generatorButton.addEventListener('click', function () {
    let randomDecoration = getRandomElement(decoration);
    let randomPrefix = getRandomElement(prefix);
    let randomSpacing = getRandomElement(spacing);
    let randomPhrase = getRandomElement(phrase);
    let randomWord = getRandomElement(word);
    let randomMaping = getRandomElement(mapping);
    /* turns string from "mapping" array into variable */
    generatorName.textContent = eval(randomMaping);
    let nameLength = generatorName.textContent.length
    if (nameLength >= 15 && nameLength < 25) {
        generatorName.style.fontSize = "2.5em";
        generatorName.style.fontWeight = "500";
    }   else if (nameLength >= 25) {
        generatorName.style.fontSize = "2em";
        generatorName.style.fontWeight = "500";
    }   else {
        generatorName.style.fontSize = "3em";
        generatorName.style.fontWeight = "normal"
    }
})

/* audio play */
const audio = document.querySelector('.audio');

generatorButton.addEventListener('click', function () {
    audio.play();
})

/* image switcher */
const images = [
    "img/giphy0.gif",
    "img/giphy1.gif",
    "img/giphy2.gif",
    "img/giphy3.gif",
    "img/giphy4.gif",
]

let generatorImage = document.querySelector('.generator-image');

generatorImage.src = getRandomElement(images);

