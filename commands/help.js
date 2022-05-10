const fs = require('node:fs');
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'help',
    description: 'Lists bot commands!',
    execute(message, args) {
        const newEmbed = new MessageEmbed()
        .setTitle(`PersonalSlave Commands!`)
        .setColor('#0099ff');
        const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
        for (let file of commandFiles) {
            const contents = require(`./${file}`);
            newEmbed.addField(`>${contents.name}`, `${contents.description}`, false);
        }
        message.reply({ embeds: [newEmbed] });
        console.log('Displaying bot commands!')
    }
};