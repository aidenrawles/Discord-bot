module.exports = {
    name: 'whip',
    description: 'Replies to master!',
    execute(message, args){
        if (args[0 === undefined]) {
            message.reply(`Sorry master!`);
        } else {
            message.channel.send(`Sorry ${args[0]}!`);
        }
    }
};