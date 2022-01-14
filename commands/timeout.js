
const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
const target = args[0]
    const time = args[1]
    const reason = args.slice(2).join(" ")

    target.timeout(time * 60 * 1000, reason)
        .then(message.channel.send(target.tag + " is being timed out."))
  .catch(console.error);
}

module.exports.help = {

    name: "timeout",
    desc: "Get help here",
    personalThoughts: "HELP PLEASE!"

}
