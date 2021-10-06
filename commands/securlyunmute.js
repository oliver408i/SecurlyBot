const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {

    try {
			if(!message.member.hasPermission("ADMINISTRATOR")){
  			return message.reply("You don't have permission to do that.");
			}
			// or, if you can't get the id:
			const mutedRole = message.guild.roles.cache.find(
			(role) => role.name === 'Muted'
			);

			// if there is no `Muted` role, send an error
			if (!mutedRole)
			return message.channel.send('There is no Muted role on this server');
			const target = message.mentions.members.first();
			target.roles.remove(mutedRole);
			message.channel.send("Successfully unmuted **" + target.displayName + "**")
    } catch(e) {

        console.log(e.stack);
				message.reply("Internal Error\nUsage: !securlymute <username>")

    }
}

module.exports.help = {

    name: "securlyunmute",
    desc: "Yeet.",
    personalThoughts: "We all hate securly, so why not bring it to discord?"

}