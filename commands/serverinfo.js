exports.run = (client, message, args, prefix, guild,) => {
const Discord = require("discord.js");
		message.delete()
    if (!message.guild || !message.member) return;
    let embed = new Discord.RichEmbed()
    .setColor(0xff000)
    .setFooter('Information on ' + message.guild.name)
    .setThumbnail(message.guild.iconURL)
    .setTimestamp()
    .addField('Owner',
    message.guild.owner.displayName + '#' + message.guild.owner.user.discriminator)
    .addField('Owner ID',
    message.guild.owner.id)
    .addField('Region',
    message.channel.guild.region)
    .addField('Server ID',
    message.guild.id)
    .addField('Members', message.guild.members.size, true)
    .addField('Joined',
    message.guild.joinedAt)
    .addField('Channel Topic',
    message.channel.topic ? message.channel.topic : 'No channel topic!')
    message.channel.send(embed)
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['si'],
  permLevel: 0
};

exports.help = {
  name: 'updates',
  category: 'General',
  description: 'Displays info on your current server',
  usage: '-serverinfo'
};