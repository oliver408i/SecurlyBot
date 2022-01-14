const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {

    try {
			if(!message.member.hasPermission("MANAGE SERVER")){
  			return message.reply("You don't have permission to do that.");
			}
			const text = args.join(" ")
			if(!text) return message.channel.send("You have not specified something to say").then(msg => {
			msg.delete({ timeout: 30000 })
			})
			message.channel.send(text)
			message.delete()
    } catch(e) {

        console.log(e.stack);

    }
}

module.exports.help = {

    name: "say",
    desc: "Yeet.",
    personalThoughts: "We all hate securly, so why not bring it to discord?"

}