exports.run = (client,message,config) => {
    message.delete()
	if (message.author.id === (config.ownerid)) {
    message.channel.send(Owner.AvatarUpdated)
    client.user.setAvatar(args.join(" "))
    }else{
    message.channel.send(Owner.NoPerms)
}}
 exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 5
};

exports.help = {
  name: 'avatar',
  category: 'Owner',
  description: 'Sets HyperDimensions current avatar',
  usage: '-avatar [link]'
};