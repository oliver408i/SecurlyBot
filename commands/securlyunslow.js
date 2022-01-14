const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {

    try {
        if(!message.member.hasPermission("MANAGE SERVER")){
  				return message.reply("You don't have permission to do that.");
				}
        message.channel.setRateLimitPerUser(0 , "nospam");
        message.channel.send("Slowmode disabled")
    } catch(e) {

        console.log(e.stack);

    }
}

module.exports.help = {

    name: "unslow",
    desc: "Gives you admin perms."

}
