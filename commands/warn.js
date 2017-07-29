		exports.run = (client,message,args) => {
		let guild = message.guild
        var reason = message.content.split(' ').slice(2).join(' ');
            message.delete()
        if (!message.guild || !message.member) return;

        var user = message.mentions.users.first();

        var member = message.guild.member(user);

        const ik = ["I like playing games, too.", "I like fooling around, as well.", "I don't enjoy annoying moderators.","I like playing around, too.", "Games do get addicting.", "Try to stay away from fooling around.", "Sometimes, I'm annoying too, but--"]

        if (!message.member.roles.exists('name', 'Server-Mod') && !message.member.roles.exists('name', 'Admins') && !message.member.roles.exists('name', 'Owner') && !message.member.roles.exists('name', 'Head-Admin') && !message.member.roles.exists('name', 'Player-Admin') && !message.member.roles.exists('name', 'Channel-Mod')  && !message.member.roles.exists('name', 'Manager')  && !message.member.roles.exists('name', 'Co-Owner')  && !message.member.roles.exists('name', 'Moderator') && !message.member.roles.exists('name', 'Moderators')&& !message.member.roles.exists('name', 'Mods')  && !message.member.roles.exists('name', 'Mod') && !message.member.roles.exists('name', 'Administrators') && !message.member.roles.exists('name', 'Managers') && !message.member.roles.exists('name', 'White Heart')&& !message.member.roles.exists('name', ' Staff - Co-Owner')&& !message.member.roles.exists('name', 'Helpers') ) { 
		return message.channel.send(Owner.NoPerms)
		}
        if (!user) {

            return message.reply('In order to warn a user, use `-warn [user] [reason]`').then(m => m.delete(10000));
		}
        if (!reason) {

            return message.reply('In order to warn a user, you must add a reason using `-warn [user] [reason]`').then(m => m.delete(10000));

		}
        message.reply(`Added warning to user \`${user.username}#${user.discriminator}\`!`).then(m => m.delete(10000));

        user.sendMessage(" You've been warned by `" + message.author.username + "#" + message.author.discriminator + "` for the following reason;\n" +

            "`" + reason + "`");
    }
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['w'],
  permLevel: 0
};

exports.help = {
  name: 'warn',
  category: 'General',
  description: 'Warns a user by mention',
  usage: '-warn [user] [reason]'
};