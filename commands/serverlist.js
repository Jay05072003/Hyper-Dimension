  exports.run = (client, message, args) => {
	message.channel.send({embed: {
        title: "Server List",
        color: 0xff000,
        description: `__**${client.user.username} is currently on the following servers:**__ \n\n${client.guilds.map(g => `${g.name} - **${g.memberCount} Members**`).join(`\n`)}`
    }})
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sl'],
  permLevel: 0
};

exports.help = {
  name: 'serverlist',
  category: 'General',
  description: 'Posts the servers HyperDimension is currently in',
  usage: '-serverlist'
};