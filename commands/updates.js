exports.run = (client, message, args, prefix) => {
    message.channel.send({embed: {
  color: 0xff000,
  timestamp: new Date(),
  title: 'Updates for the week of 7/17/17 - 7/24/17',
  description: '1.Disabled Music\n2.Disabled Moderation\nBoth updates are only temporary'
}})}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['u'],
  permLevel: 0
};

exports.help = {
  name: 'updates',
  category: 'General',
  description: 'Displays updates on HyperDimension',
  usage: '-updates'
};