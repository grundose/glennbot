const { trumpQuote } = require('./util/trump');
const { randomSubredditImage } = require('./util/imgur');

exports.commands = {
    'settarget': {
        usage: '[prefix]settarget [@user]',
        description: 'Sets a new target.',
        run: (client, message, args) => {
            if (!args.length) {
                message.reply(`Usage: ${this.commands['settarget'].usage}`);
                return;
            };
            
            client.emit('targetChanged', message, message.mentions.users.first());
        }
    },

    'imgur': {
        usage: '[prefix]imgur [subreddit]',
        description: 'Sends a random image from imgur subreddit gallery.',
        run: (client, message, args) => {
            if (!args.length) {
                message.reply(`Usage: ${this.commands['imgur'].usage}`);
                return;
            }

            randomSubredditImage(args[0]).then(image => {
                message.reply(image);
            });
        }
    },

    'trump': {
        usage: '[prefix]trump',
        description: 'Sends a random Trump quote.',
        run: (client, message, args) => {
            trumpQuote().then(quote => {
                message.reply(`${quote} --Donald J. Trump`);
            });
        }
    },


    'help': {
        name: 'help',
        usage: '[prefix]help',
        description: 'Displays all commands',
        run: (client, message, args) => {
            let helpMessage = '\nCurrent supported commands: ';
            for (var name in this.commands) {
                let command = this.commands[name];
                helpMessage += `\n**${name}**\nusage: ${command.usage}\ndescription: ${command.description}\n`;
            }
            message.reply(helpMessage);
        }
    }
};