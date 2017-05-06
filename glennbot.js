'use strict';

const Discord = require('discord.js');
const client = new Discord.Client();
const nconf = require('nconf');
const fs = require('fs');
var active = 0

//Load configuration, either from environment or file
nconf.argv()
  .env()
  .file({ file: './auth.json' });

//Validate configuration
if(typeof nconf.get('bot_token') === 'undefined' || typeof nconf.get('bot_token') !== 'string') {
  console.error("No token information supplied.\n\nHint: try --bot_token TOKEN or set bot_token variable in auth.json");
  process.exit(1);
}

//Authenticates
process.stdout.write('Logging in to discord with token... ');
client.login(nconf.get('bot_token'))
  .then(console.log('GREAT SUCCESS!'))
  .catch(function(err) {
    console.log('FAILED!');
    console.error(err);
    process.exit(1);
  });


//Read in shutup array
var shutup = fs.readFileSync('shutup.txt').toString().split("\n");
for(i in shutup) {
    console.log(shutup[i]);
}

//Read in nolink array
var nolink = fs.readFileSync('nolink.txt').toString().split("\n");
for(i in nolink) {
    console.log(nolink[i]);
}


//Discord client events
client.on('ready', () => {
  client.user.setPresence({status: 'online', game: {name: 'Fuck Trent', type: 'wut'}});
  console.log(client.user.status, client.user.presence);
  console.log(`Logged in as ${client.user.id}`);
  console.log('Bot is authorized.');
});


//Tells trent to shutup when he says something
client.on('message', message => {
  if (message.author.username === 'Trent8688' && message.content.substring(0, 4) === 'http') {
    var response= nolink[Math.floor(Math.random() * (Math.floor(nolink.length -1)))]
    message.reply(response);
  }
//He talked but didn't send a link, be mean to him anyway
  else if (message.author.username === 'Trent8688') {
    var response= shutup[Math.floor(Math.random() * (Math.floor(shutup.length -1)))]
    message.reply(response);
  }
//A respectable human talked, do nothing
  else{}
});

/*client.on('userconnection', userconnection => {
  if (userconnection.name ==='grund') {
    message.send('No ones going to look at your link Trent');
    console.log(userconnection.name);
  }
});*/


//Message Logging
client.on('message', message => {
  console.log(message.content, message.author.username, message.mentions.users.id)});


