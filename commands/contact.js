exports.run = (client, message, args, prefix, adminid) => {
		message.delete()
	if (message.channel.type != 'text'){
	message.channel.send('You must issue this command in a server');
	}else{
	client.users.get("252918450312314880").send("```" +`${message.author.tag} ` +  "has sent you " + args.join(" ") + "in " + message.guild.name + "```")
	message.reply("Message sent!")
 }}
 exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['c'],
  permLevel: 0
};

exports.help = {
  name: 'contact',
  category: 'General',
  description: 'Sends the Bot owner a message',
  usage: '-contact'
};
