const Memer = require("random-jokes-api");

module.exports = {
    name: 'shower',
    description: 'Replies with a shower thought!',
    async execute(message, args) {
        try {
            message.reply(Memer.showerThought());
            console.log('Displaying MemerAPI call!');
        } catch (error) {
            console.log(error);
        }       
    }
};