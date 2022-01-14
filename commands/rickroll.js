const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {

    try {
		message.delete();
		const target = message.mentions.members.first();
		message.channel.send(`${target.user} GET RICKROLLED!`)
		message.channel.send({
    	files: ['./commands/4KL.gif']
		});
        message.channel.send('Rickroll by Securly :D');
        

    } catch(e) {

        console.log(e.stack);

    }
}

module.exports.help = {

    name: "rickroll",
    desc: "get rickrolled haha",
}
