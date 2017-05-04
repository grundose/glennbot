const Discord = require('discord.js');
const client = new Discord.Client();
const nconf = require('nconf');

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

//Discord client events
client.on('ready', () => {
  console.log('Bot is authorized.');
});

//Tells trent to shutup when he says something
client.on('message', message => {
  if (message.author.username === 'grund') {
    message.reply('Shutup Trent');
  }
});

//Tells Trent we dont want to see his link
client.on('message', message => {
  if (message.author.username === 'grund' && message.content.substring(0, 4) === 'http') {
    message.reply('No ones going to look at your link Trent');
  }
});

client.on('userconnection', userconnection => {
  if (userconnection.name ==='grund') {
    message.send('No ones going to look at your link Trent');
    console.log(userconnection.name);
  }
});

//Message Logging
client.on('message', message => {
  console.log(message.content, message.author.username)});
