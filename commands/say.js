exports.run = (client, message, args, prefix, guild) => {
    if (message.guild.id === "167650192215113729") return message.channel.send("Sorry but my `-say` command is disabled in this server")
    message.channel.send({
        embed: {
            color: 0xff000,
            description: args.join(" ")
        }
    })
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['s'],
  permLevel: 0
};

exports.help = {
  name: 'say',
  category: 'General',
  description: 'Makes the bot repeat your message',
  usage: '-say'
};