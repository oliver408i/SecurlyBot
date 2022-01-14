const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {

    try {
			if(!message.member.hasPermission("MANAGE SERVER")){
  			return message.reply("You don't have permission to do that.");
			}
			message.channel.updateOverwrite(message.channel.guild.roles.everyone, { VIEW_CHANNEL: true, SEND_MESSAGES: false });
			message.channel.send("Successfully locked **this channel**")

    } catch(e) {

        console.log(e.stack);

    }
}

module.exports.help = {

    name: "lock",
    desc: "Yeet.",
    personalThoughts: "We all hate securly, so why not bring it to discord?"

}