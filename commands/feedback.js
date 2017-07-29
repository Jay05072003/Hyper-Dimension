exports.run = (client, message, args) => {
    client.channels.get("340316042817568780").send( "```" + `${message.author.tag}` + ` (${message.author.id})`  + " said " + args.join(" ") + "```")
}
 exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['fb'],
  permLevel: 0
};

exports.help = {
  name: 'feedback',
  category: 'General',
  description: 'Leaves feedback on the bot in the Feedback channel',
  usage: '-feedback (feedback)'
};