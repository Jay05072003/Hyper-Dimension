exports.run = (client,message,guild) => {
 if (guild.id === "170642895769042946") return message.reply("Sorry but Anime is disabled in this server")
 message.channel.send("Goddess of Leanbox")
 }
 exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['v'],
  permLevel: 0
};

exports.help = {
  name: 'vert',
  category: 'General',
  description: 'Tells you about Vert',
  usage: '-vert'
};