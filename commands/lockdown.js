
const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
     message.guild.channels.forEach(ch => 
            {
            if(ch.type == "text")
              ch.updateOverwrite(message.channel.guild.roles.everyone, { VIEW_CHANNEL: true, SEND_MESSAGES: false });
            }) 
    message.channel.send("hmm")
}

module.exports.help = {

    name: "lockdown",
    desc: "Get help here",
    personalThoughts: "HELP PLEASE!"

}
