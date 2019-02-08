const tts = require("./libs/text-to-speech.js");
const asr = require("./libs/speech-to-text.js");
const trans = require("./libs/translation.js");

const async = require("async");

async function vocalTranslator(langage){
    let texte = await asr.transcribeShortFile('./audio/tts.wav');
    texte = JSON.stringify(texte);
    let json = JSON.parse(texte);
    let transcription = json[0].alternatives[0].transcript;
    console.log(transcription);
    translated = await trans.translate(transcription,langage);
    let resultat = await tts.speakToFile(translated, './audio/tts.wav','',#addtheanguaghere);
}

exports.vocalTranslator = vocalTranslator;

//test()
