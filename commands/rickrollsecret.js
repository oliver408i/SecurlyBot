const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {

    try {
		message.delete();
		const target = message.mentions.members.first();
		message.channel.send(`${target.user} --. . - / .-. .. -.-. -.- .-. --- .-.. .-..!`)
		message.channel.send({
    	files: ['./commands/4KL.gif']
		});
        message.channel.send('.-. .. -.-. -.- .-. --- .-.. .-.. / -... -.-- Securly :D');
        

    } catch(e) {

        console.log(e.stack);

    }
}

module.exports.help = {

    name: ".-...-.--.-.-.---.-...-..",
    desc: "get rickrolled haha",
}

