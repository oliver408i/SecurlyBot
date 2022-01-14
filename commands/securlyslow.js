const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {

    try {
        if(!message.member.hasPermission("MANAGE SERVER")){
  				return message.reply("You don't have permission to do that.");
				}
        message.channel.setRateLimitPerUser(3 , "spam");
        message.channel.send("Slowmode enabled")
    } catch(e) {

        console.log(e.stack);

    }
}

module.exports.help = {

    name: "slow",
    desc: "doesn't Gives you admin perms."

}
