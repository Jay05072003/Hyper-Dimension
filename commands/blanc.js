exports.run = (client,message,guild) => {
    if (guild.id === "170642895769042946") return message.reply("Sorry but Anime is disabled in this server")
    message.channel.send("Goddess of Lowee")
}
 exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['b'],
  permLevel: 0
};

exports.help = {
  name: 'blanc',
  category: 'General',
  description: 'Tells you about Blanc',
  usage: '-blanc'
};