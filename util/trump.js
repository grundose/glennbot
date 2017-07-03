// const https = require('https');


// function randomTrumpQuote() {
//     const options = {
//         host: `api.whatdoestrumpthink.com`,
//         port: 443,
//         path: '/api/v1/quotes/random',
//         method: 'GET'
//     };
//     return new Promise((resolve, reject) => {
//         let quotes = '';
//         const req = https.request(options, (res) => {
//             res.on('data', (data) => {
//                 quotes += data;
//                 // console.log (quotes);
//             });
//         });
//         req.on('close', () => {
//             const quoteResult = JSON.parse(quotes);
//             if (quoteResult.message.length === 0) return (resolve(`${subReddit} subreddit doesnt exist or its inactive.`));
//             console.log(quoteResult.message);
//             resolve(quoteResult.message)
//         });
//         req.on('error', (err) => {
//             reject(err);
//         });
//         req.end();
//     });
// }

const host = 'https://api.whatdoestrumpthink.com';

function trumpQuote() {
    return fetch(`${host}:443/api/v1/quotes/random`, { method: 'GET' })
        .then(response => response.json())
        .then(data => data.message)
        .catch(error => { console.log(error) });
}

module.exports = {
    trumpQuote: trumpQuote
};


