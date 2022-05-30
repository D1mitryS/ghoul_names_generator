/* get random item from array */
const getRandomElement = array => {
    let randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}


/* random gif on load */
const generatorImage = document.querySelector('.generator-image');
const imageLinks = [
    "https://media3.giphy.com/media/S3UJC9kWXkORi/giphy.gif?cid=790b761186e7d5725feb3fa35ba9dc04f77bbb0776b6e202&rid=giphy.gif&ct=g",
    "https://media1.giphy.com/media/jlVObChD6Fb5C/giphy.gif?cid=790b7611357a7d0a60623974e9e8c485f8f654b17d31733c&rid=giphy.gif&ct=g",
    "https://media3.giphy.com/media/4EEV2sRFfQiPfoITqA/giphy.gif?cid=790b76117a37cff6fd5fef6f81ba014a18d626b76a642215&rid=giphy.gif&ct=g",
    "https://media3.giphy.com/media/mKAc6ZZqeE4Ao/giphy.gif?cid=790b7611dbc7c7a5b8077fe68ff2528be783eb3f3662cafe&rid=giphy.gif&ct=g",
    "https://media3.giphy.com/media/2XLoAphEiufV6/giphy.gif?cid=790b7611d2398c73293a2c0ee881283c7038418c9fcfa650&rid=giphy.gif&ct=g",
    "https://media0.giphy.com/media/3eQduEnQqEpVFOO6FQ/giphy.gif?cid=790b761148231cf91f523ec1a73917f3056256814e9cd625&rid=giphy.gif&ct=g"
]
generatorImage.src = getRandomElement(imageLinks);


/* name variations */
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

/* name variations mapping */
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
const generatorName = document.querySelector('.generator-name');

generatorButton.addEventListener('click', () => {
    const randomDecoration = getRandomElement(decoration);
    const randomPrefix = getRandomElement(prefix);
    const randomSpacing = getRandomElement(spacing);
    const randomPhrase = getRandomElement(phrase);
    const randomWord = getRandomElement(word);

    /* turns string from "mapping" array into variable */
    const randomMaping = eval(getRandomElement(mapping));

    generatorName.textContent = randomMaping;
    const nameLength = generatorName.textContent.length;

    if (nameLength < 10) {
        generatorName.style.fontSize = "3.5em";
        generatorName.style.fontWeight = "normal"
    } else if (nameLength >= 10 && nameLength < 19) {
        generatorName.style.fontSize = "3em";
        generatorName.style.fontWeight = "500";
    } else if (nameLength >= 19 && nameLength < 26) {
        generatorName.style.fontSize = "2.5em";
        generatorName.style.fontWeight = "500";
    } else if (nameLength >= 26) {
        generatorName.style.fontSize = "2em";
        generatorName.style.fontWeight = "500";
    }
})


/* audio play */
const audio = document.querySelector('.audio');

generatorButton.addEventListener('click', () => {
    audio.play();
})