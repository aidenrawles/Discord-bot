const Memer = require("random-jokes-api");

module.exports = {
    name: 'antijoke',
    description: 'Replies with an antijoke!',
    async execute(message, args) {
        try {
            message.reply(Memer.antijoke());
            console.log('Displaying MemerAPI call!');
        } catch (error) {
            console.log(error);
        }       
    }
};