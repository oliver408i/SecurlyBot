const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {

    try {

    const channels = message.guild.channels.cache.filter(ch => ch.type !== 'category');
    if (args[0] === 'on') {
        channels.forEach(channel => {
            channel.updateOverwrite(message.guild.roles.everyone, {
                SEND_MESSAGES: false
            })
        })
        
        let lockEmbed = new Discord.MessageEmbed()
            
            .setThumbnail(`https://media.giphy.com/media/JozO6wdFcC81VPO6RS/giphy.gif`)
            .setDescription(`**\n\nDone! Server Fully Locked! 🔒**`)
            .setColor('#2F3136')
        return message.channel.send(lockEmbed);

    } else if (args[0] === 'off') {
        channels.forEach(channel => {
            channel.updateOverwrite(message.guild.roles.everyone, {
                SEND_MESSAGES: true
            })
        })
        
        let lockEmbed2 = new Discord.MessageEmbed()
            .setColor('#2F3136')    
            .setThumbnail(`https://media.giphy.com/media/JozO6wdFcC81VPO6RS/giphy.gif`)
            .setDescription(`**\n\nDone! Server Fully Unlocked! 🔓**`)
        return message.channel.send(lockEmbed2)
    }
} catch(e) {

        console.log(e.stack);

    }
}

module.exports.help = {

    name: "lockdown",
    desc: "Yeet.",
    personalThoughts: "We all hate securly, so why not bring it to discord?"

}