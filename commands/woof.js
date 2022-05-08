const axios = require('axios');

module.exports = {
    name: 'woof',
    description: 'Replies with an image of a dog!',
    execute(message, args){
        console.log('Displaying image of a dog!');
		axios.get(`https://api.thedogapi.com/v1/images/search`)
		.then((res) => {
			const dogImage = res.data[0].url;
			message.reply(dogImage);
		})
		.catch((err) => {
			console.log(err);
		});
    }
};