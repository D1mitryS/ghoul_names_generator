/* Gets random item from array */
const getRandElement = array => {
    const randIndex = Math.floor(Math.random() * array.length);
    return array[randIndex];
}


/*  Random gif on load */
const generatorImage = document.querySelector('#generator-image');
const imageLinks = [
    "https://media3.giphy.com/media/S3UJC9kWXkORi/giphy.gif?cid=790b761186e7d5725feb3fa35ba9dc04f77bbb0776b6e202&rid=giphy.gif&ct=g",
    "https://media1.giphy.com/media/jlVObChD6Fb5C/giphy.gif?cid=790b7611357a7d0a60623974e9e8c485f8f654b17d31733c&rid=giphy.gif&ct=g",
    "https://media3.giphy.com/media/4EEV2sRFfQiPfoITqA/giphy.gif?cid=790b76117a37cff6fd5fef6f81ba014a18d626b76a642215&rid=giphy.gif&ct=g",
    "https://media3.giphy.com/media/mKAc6ZZqeE4Ao/giphy.gif?cid=790b7611dbc7c7a5b8077fe68ff2528be783eb3f3662cafe&rid=giphy.gif&ct=g",
    "https://media3.giphy.com/media/2XLoAphEiufV6/giphy.gif?cid=790b7611d2398c73293a2c0ee881283c7038418c9fcfa650&rid=giphy.gif&ct=g",
    "https://media0.giphy.com/media/3eQduEnQqEpVFOO6FQ/giphy.gif?cid=790b761148231cf91f523ec1a73917f3056256814e9cd625&rid=giphy.gif&ct=g"
]
generatorImage.src = getRandElement(imageLinks);


/* Name variations */
const decorations = [
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
const prefixes = [
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
const spacings = [
    " ",
    " ",
    "|"
]
const phrases = [
    "мёртв внутри",
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
    "all mute",
    "eternal despair",
    "bury me alive",
    "1v9"
]
const words = [
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
const NameVariations = [
    "prefix + spacing + phrase + decoration + word +decoration",
    "prefix + decoration + phrase + decoration + word",
    "prefix + decoration + word + decoration + phrase",
    "prefix + spacing + word + spacing + phrase",
    "prefix + spacing + phrase + spacing + word",
    "prefix + decoration + word + decoration",
    "prefix + spacing + word",
    "prefix + spacing + phrase",
    "decoration + word + decoration + phrase + spacing + prefix",
    "decoration + phrase + decoration + word + spacing + prefix",
    "decoration + phrase + decoration + prefix",
    "decoration + word + decoration + phrase + prefix",
    "decoration + word + decoration + phrase",
    "decoration + phrase + decoration + word",
    "decoration + word + decoration",
    "word + decoration + phrase + decoration + prefix",
    "word + spacing + phrase + spacing + prefix",
    "word + spacing + phrase",
    "phrase + decoration + word + decoration + prefix",
    "phrase + spacing + word + spacing + prefix",
    "phrase + spacing + word",
]


const generatorButton = document.querySelector('#generator-button');
const generatorName = document.querySelector('#generated-name');

/* Generates random name based on random string from the arrays */
generatorButton.addEventListener('click', () => {
    const decoration = getRandElement(decorations);
    const prefix = getRandElement(prefixes);
    const spacing = getRandElement(spacings);
    const phrase = getRandElement(phrases);
    const word = getRandElement(words);


    /* Turns string from "nameVariation" array into consts stated above */
    const maping = eval(getRandElement(NameVariations));
    generatorName.textContent = maping;

    
    /* Changes font size and font weight based on generated name length */
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


/* Audio playback on first click */
const audio = document.querySelector('#audio');

generatorButton.addEventListener('click', () => {
    audio.play();
})