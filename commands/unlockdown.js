
const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
     message.guild.channels.forEach(ch => 
            {
            if(ch.type == "text")
              r.overwritePermissions(everyoneRole, { SEND_MESSAGE: true });
            }) 
}

module.exports.help = {

    name: "unlockdown",
    desc: "Get help here",
    personalThoughts: "HELP PLEASE!"

}
