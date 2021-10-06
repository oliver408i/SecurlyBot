const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {

    try {

        message.channel.send('**COMMANDS**\n**Admin only! Username = mention**\n!securlylock - lock the current channel\n!securlyunlock - unlock the current channel\n!securlymute <username> - mute this guy\n!securlyunmute <username-of-person-muted> - undo it (why would you do that?!??!?)\n!securlylockscreen <username> - kick the person (one of the only commands that are not reversible :)')

    } catch(e) {

        console.log(e.stack);

    }
}

module.exports.help = {

    name: "help",
    desc: "Get help here",
    personalThoughts: "HELP PLEASE!"

}
