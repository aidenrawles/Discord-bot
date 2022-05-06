require('dotenv').config();
const querystring = require('querystring');
const axios = require('axios');
const { Client, Intents, Interaction, MessageEmbed } = require('discord.js');

const client = new Client({ 
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ] 
});

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
});

client.on('messageCreate', message => {
    if (message.content.startsWith('!')) {
        if (message.content.substring(1) === 'cat') {
            axios.get(`https://api.thecatapi.com/v1/images/search`)
            .then((res) => {
                console.log('Displaying image of cat');
                message.reply(res.data[0].url);
            })
            .catch((err) => {
                console.log(err);
            })
        } else if (message.content.substring(1) === 'image') {
            axios.get(`https://api.unsplash.com/photos/random/?client_id=${process.env.UNSPLASH_API_KEY}`)
            .then((res) => {
                console.log(res.data.urls.regular);
                message.reply(res.data.urls.regular);
            })
            .catch((err) => {
                console.log(err);
            });
        } else if (message.content.substring(1, 7) === 'crypto') {
            axios.get(`https://rest.coinapi.io/v1/assets/${message.content.substring(8)}`, {
                headers: {
                    'X-CoinAPI-KEY':`${process.env.COIN_API_KEY}`,
                },
            })
            .then((res) => {
                let price = +(Math.round(res.data[0].price_usd + "e+2")  + "e-2");
                const newEmbed = new MessageEmbed()
                    .setTitle(`The price of ${message.content.substring(8)} is $${price}`)
                    .setColor('#0099ff');
                message.channel.send({embeds: [newEmbed]});
            })
            .catch((err) => {
                console.log(err);
            });
        }
    }
});


client.login(process.env.DISCORD_TOKEN);