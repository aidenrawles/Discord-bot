require('dotenv').config();
const axios = require('axios');
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'crypto',
    description: 'Replies with the price of tagged crypto!',
    execute(message, args) {
        const tag = args[0]
        axios.get(`https://rest.coinapi.io/v1/assets/${tag}`, {
            headers: {
                'X-CoinAPI-KEY':`${process.env.COIN_API_KEY}`,
            },
        })
        .then((res) => {
            let price = +(Math.round(res.data[0].price_usd + "e+2")  + "e-2");
            const newEmbed = new MessageEmbed()
            .setTitle(`The price of ${res.data[0].asset_id} is $${price}`)
            .setColor('#0099ff');
            message.reply({ embeds: [newEmbed] });
            console.log('Displaying Crypto Price!');
        })
        .catch((err) => {
            console.log(err);
        });
    }
};
