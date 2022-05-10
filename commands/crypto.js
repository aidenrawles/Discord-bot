require('dotenv').config();
const axios = require('axios');
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'crypto',
    description: 'Replies with the price of tagged crypto!',
    execute(message, args) {
        const currency = args[1];
        const tag = args[0];
        axios.get(`https://rest.coinapi.io/v1/exchangerate/${tag}`, {
            headers: {
                'X-CoinAPI-KEY':`${process.env.COIN_API_KEY}`,
            },
        })
        .then((res) => {
            const arr = res.data.rates;
            const index = arr.findIndex(curr => curr.asset_id_quote == currency);
            let price = +(Math.round(arr[index].rate + "e+2")  + "e-2");
            const newEmbed = new MessageEmbed()
            .setTitle(`The price of ${res.data.asset_id_base}/USD is $${price}`)
            .setColor('#0099ff');

            if (args[1] !== undefined) {
                newEmbed.setTitle(`The price of ${res.data.asset_id_base}/${currency} is $${price}`);
            }

            message.reply({ embeds: [newEmbed] });
            console.log('Displaying Crypto Price!');
        })
        .catch((err) => {
            console.log(err);
        });
    }
};
