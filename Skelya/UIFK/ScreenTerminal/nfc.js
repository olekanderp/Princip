// without Babel in ES2015
const { NFC } = require('nfc-pcsc');

const nfc = new NFC(); // optionally you can pass logger

nfc.on('reader', reader => {

    function wait(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    reader.on('card', async card => {
        // card is object containing following data
        // [always] String type: TAG_ISO_14443_3 (standard nfc tags like MIFARE)                                                   or TAG_ISO_14443_4 (Android HCE and others)
        // [always] String standard: same as type
        // [only TAG_ISO_14443_3] String uid: tag uid
        // [only TAG_ISO_14443_4] Buffer data: raw data from select APDU respons                                                  e
        card.atr = Array.from(card.atr);
        card.status = "close"
        console.log(JSON.stringify(card));
        await wait(1000);
        //process.exit();
    });
    setTimeout(()=>{
        //console.log(JSON.stringify({status: "close"}))
        process.exit();
    }, 3 * 1000)

});

nfc.on('error', err => {
    console.log('an error occurred', err);
});
