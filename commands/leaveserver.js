const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {

    try {
				if(!message.member.hasPermission("ADMINISTRATOR")){
  				return message.reply("You don't have permission to do that.");
				}
        message.delete();
        message.guild.leave();

    } catch(e) {

        console.log(e.stack);

    }
}

module.exports.help = {

    name: "leaveserver",
    desc: "Leaves the server.",

}
