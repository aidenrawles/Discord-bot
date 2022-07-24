require('dotenv').config();
const { Client, Intents, Collection } = require('discord.js');
const fs = require('node:fs');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

const prefix = '>';

client.commands = new Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));


for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	// Set a new item in the Collection
	// With the key as the command name and the value as the exported module
	client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log(`${client.user.tag} is online!`);
});

client.on('messageCreate', message => {
    if (message.author.bot || !message.content.startsWith(prefix)) return;

    if (message.webhookId !== null) message.channel.send('<@271949793373192193> Trade Executed!');

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if(!client.commands.has(command)) return;

    client.commands.get(command).execute(message, args);
});

client.login(process.env.DISCORD_TOKEN);