const axios = require('axios');

module.exports = {
    name: 'meow',
    description: 'Replies with an image of a cat!',
    execute(message, args){
        console.log('Displaying image of cat!');
		axios.get(`https://api.thecatapi.com/v1/images/search`)
		.then((res) => {
			const catImage = res.data[0].url;
			message.reply(`Displaying image of a cat:\n${catImage}`);
		})
		.catch((err) => {
			console.log(err);
		});
    }
};