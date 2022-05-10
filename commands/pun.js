const Memer = require("random-jokes-api");

module.exports = {
    name: 'pun',
    description: 'Replies with a pun!',
    async execute(message, args) {
        try {
            message.reply(Memer.pun());
            console.log('Displaying MemerAPI call!');
        } catch (error) {
            console.log(error);
        }       
    }
};