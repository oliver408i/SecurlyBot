const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {

    try {
			if(!message.member.hasPermission("ADMINISTRATOR")){
  			return message.reply("You don't have permission to do that.");
			}

								
			message.categoryChannel.updateOverwrite(message.categoryChannel.guild.roles.everyone, { VIEW_CHANNEL: true, SEND_MESSAGES: true });
			message.channel.send('**LOCKDOWN DISABLED for ' + message.channel.name + '!!!!**')
								
						
				

    } catch(e) {

        console.log(e.stack);

    }
}

module.exports.help = {

    name: "unlockdown",
    desc: "Yeet.",
    personalThoughts: "We all hate securly, so why not bring it to discord?"

}