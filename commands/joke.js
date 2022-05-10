const Memer = require("random-jokes-api");

module.exports = {
    name: 'joke',
    description: 'Replies with a joke!',
    async execute(message, args) {
        try {
            message.reply(Memer.joke());            
            console.log('Displaying MemerAPI call!');
        } catch (error) {
            console.log(error);
        }       
    }
};