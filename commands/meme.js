const axios = require('axios');

module.exports = {
    name: 'meme',
    description: 'Replies with a meme!',
    execute(message, args){
        axios.get(`https://meme-api.herokuapp.com/gimme`)
        .then((res) => {
            let memeIndex = (res.data.preview).length - 1;
            let meme = res.data.preview[memeIndex];
            message.reply(`Displaying meme:\n ${meme}`);
            console.log(`Displaying meme of ${meme}!`);
        })
        .catch((err) => {
            console.log(err);
        });
    }
};