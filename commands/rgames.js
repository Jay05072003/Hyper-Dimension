exports.run = (client,message,config) => {
if (message.author.id === ("252918450312314880")) {
    let games = ["V 1.0.5 - General Command Updates!","For updates -updates",`-help | ${client.guilds.size} Servers`, "Music and Moderation are Disabled..."]
    message.reply("Rotating games").catch(console.error)
    setInterval(function() {
    client.user.setGame(games[Math.floor((Math.random() * games.length))]).catch(console.error)
    }, 10000);
}else{
    message.reply("You dont have permission to execute `-rgames` :lock:")
}}
 exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['rg'],
  permLevel: 5
};

exports.help = {
  name: 'rgames',
  category: 'Owner',
  description: 'Begins rotating HyperDimensions games',
  usage: '-rgames'
};