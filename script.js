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

const generatorButton = document.querySelector('.generator-logic-button');
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
    generatorName.textContent = eval(randomMaping);
    /* turns string from "mapping" array into variable */
    if (generatorName.textContent.length >= 19) {
        generatorName.style.fontSize = '2.5em';
        generatorName.style.fontWeight = '500';
    }   else if (generatorName.textContent.length >= 34) {
        generatorName.style.fontSize = '2em';
        generatorName.style.fontWeight = '500';
        }   else {
        generatorName.style.fontSize = '3em';
        generatorName.style.fontWeight = 'normal';
    }
})


/* image switcher and audio play */


const images = [
    { src:"https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpm1.narvii.com%2F6699%2F701699184917adb74894b7b31772d54408e06b36_00.jpg&f=1&nofb=1" , alt:"уже почти гуль" },
    { src:"https://awesomereviews.ru/wp-content/uploads/2016/03/miniature-752x440.jpg" , alt:"гуль" },
    { src:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmemepedia.ru%2Fwp-content%2Fuploads%2F2019%2F08%2Fded-insayd-5-768x768.jpg&f=1&nofb=1" , alt:"гуль валакас" },
    { src:"https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fsun9-36.userapi.com%2Fimpg%2Fw73PxsgiyLLHCr24SKWw0eYVD7FNl2JeywsHOA%2FQ9K1hPup7ts.jpg%3Fsize%3D400x0%26quality%3D90%26crop%3D280%2C0%2C720%2C720%26sign%3D2290780159d08078773ab63707d815b7%26ava%3D1&f=1&nofb=1" , alt:"безобидный гуль" },
]


let generatorImage = document.querySelector('.generator-header-figure-image');
let audio = document.querySelector('.audio');
let generatorCounter = 0;

generatorButton.addEventListener('click', function () {
    audio.play();
    generatorCounter += 1;
    if (generatorCounter >= 3 && generatorCounter < 6) {
            generatorImage.src = images[0].src;
            generatorImage.alt = images[0].alt;
    }   else if (generatorCounter >= 6 && generatorCounter < 9) {
            generatorImage.src = images[1].src;
            generatorImage.alt = images[1].alt;
    }   else if (generatorCounter >= 9 && generatorCounter < 12)  {
            generatorImage.src = images[2].src;
            generatorImage.alt = images[2].alt;
    }   else if (generatorCounter >= 12) {
            generatorImage.src = images[images.length - 1].src;
            generatorImage.alt = images[images.length - 1].alt;
            generatorCounter = 0;
    }
})