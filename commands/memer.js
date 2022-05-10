const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'memer',
    description: 'Listens for argument for Memer API! Include help for list of memer commands.',
    async execute(message, args) {
        if (args[0] == undefined) {
            message.reply('Please include "help" parameter.');
            return;
        }

        try {
            let param = args[0];
            if (param === 'help') {
                const newEmbed = new MessageEmbed()
                .setTitle('List of Commands for MemerAPI!')
                .setDescription('To make an API call, use prefix ">" followed by the command.')
                .setColor('#0099ff')
                .addFields(
                    {name: 'joke', value: 'Replies with a joke', inline: false},
                    {name: 'pun', value: 'Replies with a pun', inline: false},
                    {name: 'antijoke', value: 'Replies with an antijoke', inline: false},
                    {name: 'shower', value: 'Replies with a shower thought', inline: false},
                    {name: 'quote', value: 'Replies with a quote', inline: false},
                    {name: 'web', value: 'Replies with a useless website', inline: false},
                    {name: 'chuck', value: 'Replies with Chuck Norris', inline: false},
                    {name: 'compliment', value: 'Replies with a compliment', inline: false},
                    {name: 'truth', value: 'Replies with a truth', inline: false},
                    {name: 'dare', value: 'Replies with a dare', inline: false},
                );
                message.reply({ embeds: [newEmbed] });
            }

            console.log('Displaying MemerAPI Commands!');
        } catch (error) {
            console.log(error);
        }       
    }
};