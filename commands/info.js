
const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {

    try {
        message.delete();
		const target = message.mentions.members.first();
		message.channel.send(`${target.user} Look at this!`)
        message.channel.send('https://Securly-Bypass.leonle1.repl.co')

    } catch(e) {

        console.log(e.stack);

    }
}

module.exports.help = {

    name: "iamserious",
    desc: "RICKROLL!!! (I mean troll)",
    personalThoughts: "HELP PLEASE!"

}
