const Memer = require("random-jokes-api");

module.exports = {
    name: 'quote',
    description: 'Replies with a quote!',
    async execute(message, args) {
        try {            
            message.reply(Memer.quotes()); 
            console.log('Displaying MemerAPI call!');
        } catch (error) {
            console.log(error);
        }       
    }
};