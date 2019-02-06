const tts = require("./libs/text-to-speech.js");
const asr = require("./libs/speech-to-text.js");
const trans = require("./libs/translation.js");

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

//test()

/*async function api(){
  json = {
    "Deutsch (Deutschland)": "de-DE",
    "English (Great Britain)": "en-GB",
    "English (United States)": "en-US",
    "Español (España)": "es-ES",
    "Français (France)": "fr-FR",
    "Italiano (Italia)": "it-IT",
    "Nederlands (Nederland)": "nl-NL",
    "Português (Portugal)": "pt-PT",
    "Română (România)": "ro-RO",
    "Slovenčina (Slovensko)": "sk-SK",
    "Русский (Россия)": "ru-RU",
    "한국어 (대한민국)": "ko-KR",
    "國語 (台灣)": "zh-TW",
    "日本語（日本)": "ja-JP"
  }
  json = JSON.parse(json);
}*/
