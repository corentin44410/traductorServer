const tts = require("./text-to-speech.js");
const asr = require("./speech-to-text.js");
const trans = require("./translation.js");

const async = require("async");

async function test ()
{
    let texte = await asr.transcribeShortFile('./audio/tts.wav');
    texte = JSON.stringify(texte);
    let json = JSON.parse(texte);
    let transcription = json[0].alternatives[0].transcript;
    console.log(transcription);
    translated = await trans.translate(transcription); //["transcript"]
    let resultat = await tts.speakToFile(translated, './audio/tts.wav');
}

test()
