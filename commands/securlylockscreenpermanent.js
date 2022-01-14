const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {

    try {
        if(message.channel.type === 'DM') {
            //Fist check if message channel is not direct message, because you cant kick out of guide 
            message.channel.send('This command can use only in guide');
            return;
        };

        //Then check if user have permissions to do that
        if(!message.member.hasPermission('BAN_MEMBERS')) {
            message.channel.send('You have no permissions to do that');
            return;
        };

        //const a member, wich you need yo kick (its fist mention message member)
        let aa = message.mentions.members.first();
        //If user dont mention a member, that show him this error msg
				if (!aa || aa.id=="894720442252820491"){
					message.channel.send('You cannot ban blank');
          return;
				}
        //If all steps are completed successfully try kick this user
        aa.ban()
            .then(message.channel.send('Banned **' + aa.displayName + '**'))
            .catch(console.error);
    } catch(e) {

        console.log(e.stack);

    }
	}

module.exports.help = {

    name: "lockscreenpermanent",
    desc: "ban people",
    personalThoughts: "We all hate securly, so why not bring it to discord?"

}