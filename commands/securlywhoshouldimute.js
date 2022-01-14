
const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {

    try {

        message.channel.send('IT IS DECIDED:\n**1110111 1100001 1110010 1110010 1100101 1101110**')

    } catch(e) {

        console.log(e.stack);

    }
}

module.exports.help = {

    name: "whoshouldimute",
    desc: "Get help here",
    personalThoughts: "HELP PLEASE!"

}
