const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {

    try {
        message.delete()
        const text = args.join(" ")
        if(!text) return message.channel.send("You have not specified something to unobfuse").then(msg => {
        msg.delete({ timeout: 30000 })
        })
        let outputStr = text.split(' ')
            .map(bin => String.fromCharCode(parseInt(bin, 2)))
            .join('');
        const author = message.author.id
        message.channel.send("<@" + author + "> Output: **" + outputStr + "**");
			
    } catch(e) {
        const author = message.author.id
        message.channel.send("<@" + author + "> Is that binary?")
        console.log(e.stack);

    }
}

module.exports.help = {

    name: "unobfuse",
    desc: "unMake binary.",
    personalThoughts: "We all hate securly, so why not bring it to discord?"

}