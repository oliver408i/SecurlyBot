const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {

    try {
			if(!message.member.hasPermission("ADMINISTRATOR")){
  			return message.reply("You don't have permission to do that.");
			}
				message.guild.channels.cache.forEach(channel => { //Get each channel
						if (channel.type === "text") { //Check if it's a text channel
								try {
									message.channel.updateOverwrite(message.channel.guild.roles.everyone, { VIEW_CHANNEL: true, SEND_MESSAGES: true });
									message.channel.send('**LOCKDOWN DISABLED for ' + message.channel.name + '!!!!**')
								} catch (error) { //Run this if there was an error setting the permissions
										//Error handling code here
								};
						};
				});

    } catch(e) {

        console.log(e.stack);

    }
}

module.exports.help = {

    name: "securlyunlockdown",
    desc: "Yeet.",
    personalThoughts: "We all hate securly, so why not bring it to discord?"

}