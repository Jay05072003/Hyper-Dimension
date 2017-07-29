exports.run = (client,message,prefix) => {
    message.delete()
	if (message.author.id === (config.ownerID)) {
    message.channel.send("Nick Updated!!")
    client.user.setUsername(args.join(" "))
    }else{
    message.channel.send("You dont have permission to execute this command :lock: ")
}}
 exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['n'],
  permLevel: 5
};

exports.help = {
  name: 'name',
  category: 'Owner',
  description: 'Sets HyperDimenions current nickname',
  usage: '-name [Name]'
};