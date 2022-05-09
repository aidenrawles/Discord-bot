const fs = require('node:fs');
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'help',
    description: 'Lists bot commands!',
    execute(message, args) {
        const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
        for (let file of commandFiles) {
            file = file.split('.js');
            message.channel.send(`${file[0]},`);
        }
        console.log('Displaying bot commands!')
    }
};