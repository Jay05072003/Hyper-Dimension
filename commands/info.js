exports.run = (client, message, args, prefix) => {
  message.channel.send({
    embed: {
      color: 0xff000,
      fields: [{
        name: "Bot Owner",
        value: "Iffy ✌#4256"
      },
      {
        name: "Invite Link",
        value: "https://discordapp.com/oauth2/authorize?client_id=293165236947779585&scope=client&permissions=2146958463"
      },
      {
        name: "Support Server",
        value: "https://discord.gg/tGAEhzW"
      },
      {
        name: "Server Count",
        value: `${client.guilds.size}`
      },
      {
        name: "Member Count",
        value: `${client.users.size}`
      },
      ],

      timestamp: new Date(),
      footer: {
        icon_url: client.user.avatarURL,
        text: "Information on HyperDimension |"
      }
    }
  });
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['i'],
  permLevel: 0
};

exports.help = {
  name: 'info',
  category: 'General',
  description: 'Displays info on HyperDimension',
  usage: '-info'
};