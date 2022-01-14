
const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("MANAGE SERVER")){
  			return message.reply("You don't have permission to do that.");
			}
    var purgeamnt = args[0];
    var purgelimit = Number(purgeamnt) + 1;
    message.channel.messages.fetch({ limit: purgelimit }).then(messages => {
        message.channel.bulkDelete(messages);
        message.reply("deleted " + messages.array().length + " messages, including deletion command.");
    }).catch(err => {
        message.channel.send("Failed to delete messages. This may be caused by attempting to delete messages that are over 2 weeks old.");
    });
}

module.exports.help = {

    name: "purge",
    desc: "Get help here",
    personalThoughts: "HELP PLEASE!"

}
