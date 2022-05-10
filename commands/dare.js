const Memer = require("random-jokes-api");

module.exports = {
    name: 'dare',
    description: 'Replies with a dare!',
    async execute(message, args) {
        try {
            message.reply(Memer.dare()); 
            console.log('Displaying MemerAPI call!');
        } catch (error) {
            console.log(error);
        }       
    }
};