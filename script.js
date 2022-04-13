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
    "瑞"
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
    "obsessed"
]

const spacing = [
    " ",
    "_",
    "†",
    "‡",
    "☠",
    "༒",
]

const phrase = [
    "мёртв внутри",
    "дед внутри",
    "dead inside",
    "hate me as you do",
    "amulet abuzer",
    "anti social",
    "ugly god",
    "13 y.o.",
    "no brain",
    "mid or feed",
    "4-0 pos or leave",
    "8k pts",
    "pudge abuzer",
    "плевать на всех",
    "all mute",
    "eternal despair",
    "bury me alive"
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
    "randomPrefix + randomDecoration + randomSpacing + randomWord + randomSpacing + randomDecoration + randomPhrase",
    "randomPrefix + randomSpacing + randomPhrase + randomSpacing + randomWord",
    "randomPrefix + randomSpacing + randomWord",
    "randomPrefix + randomDecoration + randomPhrase + randomDecoration",
    "randomDecoration + randomSpacing + randomPhrase + randomSpacing + randomDecoration",
    "randomDecoration + randomPhrase + randomDecoration + randomWord",
    "randomDecoration + randomWord + randomDecoration",
    "randomDecoration + randomPhrase + randomDecoration",
    "randomWord + randomSpacing + randomPhrase + randomSpacing" ,
    "ranomdWord + randomSpacing + randomPhrase",
    "ranomdWord + randomSpacing + randomPrefix",
    "randomPhrase + randomSpacing + randomWord",
    "randomPhrase + randomSpacing + randomPrefix"
] 

let  generatorImage = document.querySelector('.generator-header-figure-image');
let generatorName = document.querySelector('.generator-logic-name');
const generatorButton = document.querySelector('.generator-logic-button');

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
    generatorName.textContent = eval(randomMaping);
    /* turns string from "mapping" array into variable */
})