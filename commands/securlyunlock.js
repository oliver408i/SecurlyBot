const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {

    try {
			if(!message.member.hasPermission("ADMINISTRATOR")){
  			return message.reply("You don't have permission to do that.");
			}
			message.channel.updateOverwrite(message.channel.guild.roles.everyone, { VIEW_CHANNEL: true, SEND_MESSAGES: true });
			message.channel.send("Successfully unlocked **this channel**") 

    } catch(e) {

        console.log(e.stack);
				message.reply("Internal Error\nUsage: !securlyunmute <username-of-person-muted>")
    }
}

module.exports.help = {

    name: "securlyunlock",
    desc: "Yeet.",
    personalThoughts: "AKA securly bypass"

}