require('dotenv').config();
const axios = require('axios');

module.exports = {
    name: 'image',
    description: 'Replies with a random image!',
    execute(message, args){
        axios.get(`https://api.unsplash.com/photos/random/?client_id=${process.env.UNSPLASH_API_KEY}`)
        .then((res) => {
            console.log(`Displaying image of ${res.data.urls.regular}`);
            message.reply(res.data.urls.regular);
        })
        .catch((err) => {
            console.log(err);
        });
    }
};