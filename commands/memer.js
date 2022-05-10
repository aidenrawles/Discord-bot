const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'memer',
    description: 'Listens for argument for Memer API!',
    async execute(message, args) {
        if (args[0] == undefined) {
            message.reply('Please include "/help/" parameter.');
            return;
        }

        try {
            let param = args[0];
            if (param === 'help') {
                const newEmbed = new MessageEmbed()
                .setTitle('List of Commands for MemerAPI!')
                .setDescription('To make an API call, use prefix "/>/" followed by the command.')
                .addFields(
                    [name = 'joke', description = 'Replies with a joke', inline = false],
                    [name = 'pun', description = 'Replies with a pun', inline = false],
                    [name = 'antijoke', description = 'Replies with an antijoke', inline = false],
                    [name = 'shower', description = 'Replies with a shower thought', inline = false],
                    [name = 'quote', description = 'Replies with a quote', inline = false],
                    [name = 'web', description = 'Replies with a useless website', inline = false],
                    [name = 'chuck', description = 'Replies with Chuck Norris', inline = false],
                    [name = 'compliment', description = 'Replies with a compliment', inline = false],
                    [name = 'truth', description = 'Replies with a truth', inline = false],
                    [name = 'dare', description = 'Replies with a dare', inline = false]
                )
                .setFooter()
                .setTimestamp();
                message.reply({ embeds: [newEmbed] });
            }

            console.log('Displaying MemerAPI Commands!');
        } catch (error) {
            console.log(error);
        }       
    }
};