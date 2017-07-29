exports.run = (client,message,args) => {
		message.delete()
    if (message.author.id === (config.ownerID)) {
    client.channels.get("286486347760533515").send({embed: {
    color: 0xff000,
    author: {
            name: client.user.username,
            icon_url: client.user.avatarURL
    },
    fields: [
    {
      name: 'Announcement',
      value: args.join(" ")
    }
    ],
    timestamp: new Date(),
    footer: {
    icon_url: client.user.avatarURL,
  }}})}};
   exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['a'],
  permLevel: 5
};

exports.help = {
  name: 'announce',
  category: 'Owner',
  description: 'Announce command to Iffys server',
  usage: '-announce [link]'
};