exports.run = (client, message, args, prefix, NoPerms) => {
	message.delete()
    let game = args.join(" ")
	if(!game)
    return message.channel.send("Please use `-game [game]`")
	if (message.author.id === "252918450312314880") {
    message.channel.send("Game Updated!!")
    console.log("This command works")
    client.user.setGame(args.join(" "));
    }else{
    message.channel.send("You dont have permission to execute this command :lock:");
    }}
	exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['g'],
  permLevel: 5
};

exports.help = {
  name: 'game',
  category: 'Owner',
  description: 'Sets HyperDimensions current game',
  usage: '-game [game]'
};