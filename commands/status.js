exports.run = (client, message, args) => {
		message.delete()
    let status = args.join(" ")
	let perms = (message.author.id === ("252918450312314880"))
	if(!status)
	return message.channel.send("Please use `-status [status]`")	
	if (message.author.id === ("252918450312314880")) {
	message.channel.send("Updated status to " + status)
	client.user.setStatus(args.join(" "));
    }else{
    message.channel.send("You dont have permission to execute this command :lock:")
    }}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['si'],
  permLevel: 5
};

exports.help = {
  name: 'status',
  category: 'Owner',
  description: 'Sets HyperDimensions current Status',
  usage: '-status'
};