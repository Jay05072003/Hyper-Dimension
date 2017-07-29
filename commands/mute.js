    exports.run = (client, message, args) => { // If the message starts with "?mute"

        var guild = message.channel.guild; // Variables..        
        if (guild) {
            var suffix = message.content.split(' ').slice(1)

            var user = message.mentions.users.first();

            var member = guild.member(user)

            var reason = message.content.split(' ').slice(2).join(' ');

            var muterole = message.guild.roles.find("name", "Muted"); // Find a 'MUTED' role

            var permsclient = message.guild.member(client.user).hasPermission('KICK_MEMBERS') // If the client has the Manage Roles permission
    
            if (!permsclient)

                return message.reply("I either don't have the `Kick Members` permission or one of my roles do not have the permission.")

           if (!message.member.roles.exists('name', 'Server-Mod') && !message.member.roles.exists('name', 'Admins') && !message.member.roles.exists('name', 'Owner') && !message.member.roles.exists('name', 'Head-Admin') && !message.member.roles.exists('name', 'Player-Admin') && !message.member.roles.exists('name', 'Channel-Mod')  && !message.member.roles.exists('name', 'Manager')  && !message.member.roles.exists('name', 'Co-Owner')  && !message.member.roles.exists('name', 'Moderator') && !message.member.roles.exists('name', 'Moderators')&& !message.member.roles.exists('name', 'Mods')  && !message.member.roles.exists('name', 'Mod') ) { 

                message.delete();

                return message.reply("You dont have permission to execute `-mute`").then(m => m.delete(10000)); // this

            }

            if (!muterole) { // If there is no MUTED role,

                message.delete();

                return message.reply("Please make sure a Muted role is in the guild and below my role").then(m => m.delete(10000));

            }

            if (!user) { // If there is no mentioned user, then say

                message.delete();

                return message.reply('In order to mute a user, use `-mute [user]`').then(m => m.delete(10000)); // this

            }

            if (member.roles.exists('name', 'Muted')) { // If the person has the muted role, return.

                return;

            } // then;

            message.delete();

            member.addRole(muterole).catch(console.error) // Add the muted role. If there's an error, send it to console.

            message.reply("`" + user.username + "#" + user.discriminator + "` has been muted!").then(m => m.delete(10000)); // this.

        }}
 exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['moot'],
  permLevel: 0
};

exports.help = {
  name: 'mute',
  category: 'General',
  description: 'Apply the Muted role to a user',
  usage: '-mute [user]'
};