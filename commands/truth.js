const Memer = require("random-jokes-api");

module.exports = {
    name: 'truth',
    description: 'Replies with a truth question!',
    async execute(message, args) {
        try {
            message.reply(Memer.truth());
            console.log('Displaying MemerAPI call!');
        } catch (error) {
            console.log(error);
        }       
    }
};