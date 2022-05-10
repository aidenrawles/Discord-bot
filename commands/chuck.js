const Memer = require("random-jokes-api");

module.exports = {
    name: 'chuck',
    description: 'Replies with ChuckNorris!',
    async execute(message, args) {
        try {
            message.reply(Memer.chuckNorris());
            console.log('Displaying MemerAPI call!');
        } catch (error) {
            console.log(error);
        }       
    }
};