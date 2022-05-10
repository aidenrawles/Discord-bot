const Memer = require("random-jokes-api");

module.exports = {
    name: 'web',
    description: 'Replies with a useless website!',
    async execute(message, args) {
        try {
            message.reply(Memer.uselessweb());         
            console.log('Displaying MemerAPI call!');
        } catch (error) {
            console.log(error);
        }       
    }
};