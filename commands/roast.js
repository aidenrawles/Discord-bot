const Memer = require("random-jokes-api");

module.exports = {
    name: 'roast',
    description: 'Replies with a roast!',
    async execute(message, args) {
        if (args[0] !== undefined) {
            try {       
                message.channel.send(`${Memer.roast()} ${args[0]}`);             
                console.log('Displaying MemerAPI call!');
            } catch (error) {
                console.log(error);
            }       
        } else {
            message.reply('Please mention who you would like to roast.');
        }
    }
};