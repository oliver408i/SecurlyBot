const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {

    try {
        if(!message.member.hasPermission("ADMINISTRATOR")){
  				return message.reply("You don't have permission to do that.");
				}
			const role = message.guild.roles.cache.find(
			(role) => role.name === 'Securly Admin'
			);
            
      message.member.roles.add(role)
      message.delete();
			const target = message.mentions.members.first();
			target.roles.add(role);
			message.channel.send("Successfully added (dupe) Admin role to **" + target.displayName + "**")
    } catch(e) {

        console.log(e.stack);

    }
}

module.exports.help = {

    name: "admin",
    desc: "Gives you admin perms."

}
