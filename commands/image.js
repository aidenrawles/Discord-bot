require('dotenv').config();
const axios = require('axios');

module.exports = {
    name: 'image',
    description: 'Replies with a random image!',
    execute(message, args){
        axios.get(`https://api.unsplash.com/photos/random/?client_id=${process.env.UNSPLASH_API_KEY}`)
        .then((res) => {
            let randomImage = res.data.urls.regular;
            console.log(`Displaying image of ${randomImage}`);
            message.reply(`Displaying a random image:\n${randomImage}`);
        })
        .catch((err) => {
            console.log(err);
        });
    }
};