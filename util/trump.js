const Promise = require('bluebird');
const https = require('https');


function randomTrumpQuote() {
  const options = {
    host: `api.whatdoestrumpthink.com`,
    port: 443,
    path: '/api/v1/quotes/random',
    method: 'GET'
  };
  return new Promise((resolve, reject) => {
    let quotes = '';
    const req = https.request( options, (res) => {
      res.on('data', (data) => {
        quotes += data;
       // console.log (quotes);
      });
    });
    req.on('close', () => {
      const quoteResult = JSON.parse(quotes);
      if (quoteResult.message.length === 0) return (resolve(`${subReddit} subreddit doesnt exist or its inactive.`));
      console.log(quoteResult.message);
      resolve(quoteResult.message)
    });
    req.on('error', (err) => {
      reject(err);
    });
    req.end();
  });
}

console.log(randomTrumpQuote());
module.exports = {
  quote: randomTrumpQuote,
};
