exports.run = (client,message) => {
		message.delete()
    if (message.author.id === config.ownerID) {
    client.user.setStatus("invisible")
    message.channel.send(Owner.ShutDown)
    setTimeout(function() {
    process.exit();
    }, 3000);
    }else{
    message.channel.send('You dont have permission to execute `-restart`')
}}
 exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['restart'],
  permLevel: 5
};

exports.help = {
  name: 'restart',
  category: 'Owner',
  description: 'Restarts HyperDimension',
  usage: '-restart'
};