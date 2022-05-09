const Memer = require("random-jokes-api");

module.exports = {
    name: 'memer',
    description: 'Listens for argument for Memer API!',
    async execute(message, args) {
        if (args[0] == undefined) {
            message.reply('Please include a parameter e.g., roast.');
            return;
        }

        try {
            let param = args[0];
            if (param === 'roast') {
                message.reply(Memer.roast());
            } else if (param === 'joke') {
                message.reply(Memer.joke());
            } else if (param === 'pun') {
                message.reply(Memer.pun());
            } else if (param === 'antijoke') {
                message.reply(Memer.antijoke());
            } else if (param === 'shower') {
                message.reply(Memer.showerThought());
            } else if (param === 'quotes') {
                message.reply(Memer.quotes());
            } else if (param === 'web') {
                message.reply(Memer.uselessweb());
            } else if (param === 'chuck') {
                message.reply(Memer.chuckNorris());
            } else if (param === 'compliment') {
                message.reply(Memer.copmliment());
            } else if (param === 'trivia') {
                message.reply(Memer.trivia());
            } else if (param === 'truth') {
                message.reply(Memer.truth());
            } else if (param === 'dare') {
                message.reply(Memer.dare());
            } else if (param === 'help') {
                message.reply('The parameters are:\njoke\npun\nantijoke\nshower\nquotes\nweb\nchuck\ncompliment\ntrivia\ntruth\ndare');
            }

            console.log('Displaying MemerAPI call!');
        } catch (error) {
            console.log(error);
        }       
    }
};