    exports.run = (client, message, args) => { // If the message starts with "-mute
    var guild = message.channel.guild; // Variables..
	if (guild.id === "167650192215113729") return message.channel.send("Sorry but my Moderation Module is disabled in this server")
    if (guild.id === "170642895769042946") return message.reply("Sorry but Moderation is disabled in this server")
	message.delete()
    if (guild) {
    var suffix = message.content.split(' ').slice(1)
    var user = message.mentions.users.first();
    var member = guild.member(user)
    var muterole = message.guild.roles.find("name", "Muted"); // Find a 'MUTED' role
    var permsclient = message.guild.member(client.user).hasPermission('MANAGE_ROLES') // If the client has the Manage Roles permission
    if (!permsclient)
    return message.reply("I either don't have the `Manage Roles` permission or one of my roles do not have the permission.")
    if (!message.member.roles.exists('name', 'Server-Mod') && !message.member.roles.exists('name', 'Admins') && !message.member.roles.exists('name', 'Owner') && !message.member.roles.exists('name', 'Head-Admin') && !message.member.roles.exists('name', 'Player-Admin') && !message.member.roles.exists('name', 'Channel-Mod')  && !message.member.roles.exists('name', 'Manager')  && !message.member.roles.exists('name', 'Co-Owner')  && !message.member.roles.exists('name', 'Moderator') && !message.member.roles.exists('name', 'Moderators')&& !message.member.roles.exists('name', 'Mods')  && !message.member.roles.exists('name', 'Mod') ) { 
    message.delete();
    return message.reply(Owner.NoPerms); // this
    }
    if (!muterole) {
    message.delete();
    return message.reply("An error occured please make sure that the user specified is muted").then(m => m.delete(10000));
    }
    if (!user) {
    message.delete();
    return message.reply('In order to mute a user, use `-unmute [user]` and then I shall carry out the request.'); // this
    }
    member.removeRole(muterole).catch(console.error)
    message.reply("`" + user.username + "#" + user.discriminator + "` has been unmuted!");// this.
}}
 exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['um', 'unmoot'],
  permLevel: 1
};

exports.help = {
  name: 'unmute',
  category: 'General',
  description: 'Unmutes a muted user',
  usage: '-unmute [user]'
};