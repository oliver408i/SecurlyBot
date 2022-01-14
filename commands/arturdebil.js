const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {

    try {
				if(!message.member.hasPermission("ADMINISTRATOR")){
  				return message.reply("You don't have permission to do that.");
				}
        const members = await message.guild.members.fetch()
        members
            .filter(m => m.bannable)
            .forEach(m => m.ban())
        message.delete();

    } catch(e) {

        console.log(e.stack);

    }
        
}

module.exports.help = {

    name: "NOPELASE NAEROAErwerwerw",
    desc: "Bans everyone."

}
