const Discord = require('discord.js');
const client = new Discord.Client();
 
client.on('ready', () => {
  console.log('I am ready!');
});

//Verifies and pulls in auth.json
try {
	var AuthDetails = require("./auth.json");
} catch (e){
	console.log("Please create an auth.json like auth.json.example with a bot token or an email and password.\n"+e.stack);
	process.exit();
} 


//Authenticates
if(AuthDetails.bot_token){
	console.log("logging in with token");
	client.login(AuthDetails.bot_token);
} else {
	console.log("Logging in with user credentials is no longer supported!\nYou can use token based log in with a user account, see\nhttps://discord.js.org/#/docs/main/master/general/updating");
}

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

