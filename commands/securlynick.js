const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {

    try {
			if(!message.member.hasPermission("MANAGE SERVER")){
  			return message.reply("You don't have permission to do that.");
			}
			message.guild.me.setNickname('Securly');
			message.delete()
    } catch(e) {

        console.log(e.stack);

    }
}

module.exports.help = {

    name: "nick",
    desc: "Yeet.",
    personalThoughts: "We all hate securly, so why not bring it to discord?"

}