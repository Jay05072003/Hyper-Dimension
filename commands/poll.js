exports.run = (client, message, args, prefix) => {
		if (message.guild.id === "167650192215113729") return message.channel.send("Sorry but my `-poll` command is disabled in this server")
		message.delete()
	message.channel.send("**" + args.join(" ") + "**").then( message => {
	message.react("👍")
	message.react("👎")
	})}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'poll',
  category: 'General',
  description: 'Starts a poll',
  usage: '-poll [Question]'
};