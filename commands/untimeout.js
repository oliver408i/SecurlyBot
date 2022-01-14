const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
const target = args[0]

    target.timeout(null * 60 * 1000, 'null')
        .then(message.channel.send(target.tag + " has being released from time out."))
  .catch(console.error);
}

module.exports.help = {

    name: "untimeout",
    desc: "Get help here",
    personalThoughts: "HELP PLEASE!"

}
