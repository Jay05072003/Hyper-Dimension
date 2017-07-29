	    exports.run = (client, message, args) => {
        let guild = message.guild
		message.delete()
        if (!message.guild || !message.member) return; // If the command is in a DM, it won't work.

        var user = message.mentions.users.first(); // Variables..

        var member = message.guild.member(user);

        var perms = message.member.hasPermission('KICK_MEMBERS') // If the author of the message has the permission 'Kick Members'

        var permsclient = message.guild.member(client.user).hasPermission('KICK_MEMBERS') // If the client has the permission 'Kick Members'

        if (!permsclient) // If the client doesn't have the Kick Members permission, then say;
            return message.reply("I either do not the `Kick Members` permission or my highest role does not have that permission.").then(m => m.delete(10000)); // this.
        message.delete();
        if (!message.member.roles.exists('name', 'Server-Mod') && !message.member.roles.exists('name', 'Admins') && !message.member.roles.exists('name', 'Owner') && !message.member.roles.exists('name', 'Head-Admin') && !message.member.roles.exists('name', 'Player-Admin') && !message.member.roles.exists('name', 'Channel-Mod')  && !message.member.roles.exists('name', 'Manager')  && !message.member.roles.exists('name', 'Co-Owner')  && !message.member.roles.exists('name', 'Moderator') && !message.member.roles.exists('name', 'Moderators')&& !message.member.roles.exists('name', 'Mods')  && !message.member.roles.exists('name', 'Mod') ) 
            return message.reply(Owner.NoPerms)
        message.delete();
        console.log(message.member.permissions.serialize())
        if (!user)
            return message.reply('In order to kick a user, use `-kick [user]`.')// this
          member.kick().then(() => {
            message.reply("`" + user.username + "#" + user.discriminator + "` has been kicked!") // this.
        });
    }
    exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0 // DO NOT LOWER THIS!!!!!!!!
};

exports.help = {
  name: 'kick',
  category: 'General',
  description: 'Kicks a user by mention from the current guild',
  usage: '-kick [user]'
};