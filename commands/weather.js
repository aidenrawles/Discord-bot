require('dotenv').config();
const axios = require('axios');
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'weather',
    description: 'Replies with the weather forecast at location!',
    execute(message, args) {
        const q = args[0];
        let days = 1;
        if (args[1] != undefined) {
            days = args[1];
            if (days > 3) {
                days = 3;
            } else if (days < 1) {
                days = 1;
            }
        } 
        axios.get(`http://api.weatherapi.com/v1/forecast.json?key=${process.env.WEATHER_API_KEY}&q=${q}&days=${days}&aqi=no&alerts=no`)
        .then((res) => {
            const newEmbed = new MessageEmbed()
            .setTitle(`Weather Forecast in ${q} For The Next ${days} Day(s).`)
            .setColor('#0099ff');
            message.reply({ embeds: [newEmbed] });

            for (let index = 0; index < days; index++) {
                let forecastWeather = res.data.forecast.forecastday[index].day.condition.text;
                message.channel.send(`${res.data.forecast.forecastday[index].date} | ${q} forecast is ${forecastWeather}.`);
            }

            console.log(`Displaying Weather Forecast in ${q} for the next ${days} day(s)!`);
        })
        .catch((err) => {
            console.log(err);
        });
    }
};