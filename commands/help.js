
const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {

    try {

        message.channel.send('**COMMANDS**\n**Admin only: Username = mention**\n`securlylock` - lock the current channel\n`securlyunlock` - unlock the current channel\n~~`securlymute <username>` - LOCKSCREEN (not kick!!!) this guy. Really!~~\n~~`securlyunmute <username-of-person-muted>` - undo it (why would you do that?!??!?)~~\n`securlylockscreen <username>` - kick the person (one of the only commands that are not reversible :) also this is not same as securlymute\n`securlyadmin <username>` make someone admin\n`securlyslow` - enable slowmode (3 seconds)\n`securlyunslow` - disable slowmode\n`securlypurge <amount>` - the good old purge you need in ANY mod bot\n`securlysay <something>` - what else?\n`securlybackup` - backup the server\n`securlybackupload <id>` - load a backup (BE CAREFUL!! THIS WILL DELETE THE CURRENT SERVER)\n`securlybackupinfo <id>` - get info about a backup\n\n**Everyone can use:**\n`securlyobfuse <text>` - make binary\n`securlyunobfuse <binary>` - unmake binary\n`securlyrickroll <username>` - your old rickroll\n`securly.-...-.--.-.-.---.-...-.. <username>` - totally-not-related-to-that-last-command morse code\n\n**Economy Module Commands**\n*This is an external module and uses the custom prefix **eco***\n`s-eco help` - Get all the comands')

    } catch(e) {

        console.log(e.stack);

    }
}

module.exports.help = {

    name: "help",
    desc: "Get help here",
    personalThoughts: "HELP PLEASE!"

}
