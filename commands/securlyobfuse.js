const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {

    try {
        message.delete()
        const text = args.join(" ")
        const author = message.author.id
        if(!text) return message.channel.send("<@" + author + "> You have not specified something to obfuse").then(msg => {
        msg.delete({ timeout: 30000 })
        })
        
        message.channel.send("<@" + author + ">"  + " says **" + text.split('').map(function (char) {return char.charCodeAt(0).toString(2);}).join(' ') + "**");
			
    } catch(e) {

        console.log(e.stack);

    }
}

module.exports.help = {

    name: "obfuse",
    desc: "Make binary.",
    personalThoughts: "We all hate securly, so why not bring it to discord?"

}