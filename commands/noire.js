exports.run = (client,message,guild) => {
 if (guild.id === "170642895769042946") return message.reply("Sorry but Anime is disabled in this server")
 message.channel.send("Goddess of Lastation")
 }
 exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'noire',
  category: 'General',
  description: 'Tells you about Noire',
  usage: '-noire'
};