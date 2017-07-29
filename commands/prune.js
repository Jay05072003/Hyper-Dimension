exports.run = (client,message,args) => {
        let guild = message.guild
        message.delete();
        var amount = message.content.split(" ").splice(1, 2).join(" ");
        var perms = message.member.hasPermission('MANAGE_MESSAGES')
        var user = message.mentions.users.first();
        var permsclient = message.guild.member(client.user).hasPermission('MANAGE_MESSAGES')
        if (message.author.id !== "293165236947779585")
            if (!message.member.roles.exists('name', 'Admin') && !message.member.roles.exists('name', 'Administrator') && !message.member.roles.exists('name', 'Admins') && !message.member.roles.exists('name', 'Owner') && !message.member.roles.exists('name', 'Administrators') && !message.member.roles.exists('name', 'Player-Admin') && !message.member.roles.exists('name', 'Channel-Mod') && !message.member.roles.exists('name', 'Head-Admin') && !message.member.roles.exists('name', 'Manager')  && !message.member.roles.exists('name', 'Mods')  && !message.member.roles.exists('name', 'Moderators')  && !message.member.roles.exists('name', 'Manager')) {
                return message.reply("You dont have permission to execute `-prune`");
            }
        if (!permsclient) {
            message.delete()
            return message.reply("I either do not the `Manage Messages` permission or my highest role does not have that permission.").then(m => m.delete(10000));
        }
        if (amount < 1) {
            console.log("Reject for amount under 1.")
            return message.reply("I cannot find an amount of messages for me to purge! :thumbsdown:").then(m => m.delete(10000));
        }
        if (amount > 100) {
            console.log("Reject for amount over 100.")
            return message.reply("I cannot find an amount of messages between 1-100 for me to purge! :thumbsdown:").then(m => m.delete(10000));
        }
        message.delete()
        console.log("Deleted message.")
        message.channel.bulkDelete(amount)
        console.log("Pruned amount.")
        message.reply("Successfully purged `" + amount + "` messages! :thumbsup:").then(m => m.delete(5000));
        console.log("Said it was pruned.")
        console.log("Chat was cleared by " + message.member + " Amount: " + amount);
          if (guild.id === "252034250809802752") return client.channels.get("270148725517582336").send("```" + `${message.author.username}` + "#" + message.author.discriminator + " Has Pruned " + amount + "```")
    if (guild.id === "330043848594161666") return  client.channels.get("330459733838528513").send("```" + `${message.author.username}` + "#" + message.author.discriminator + " Has Pruned " + amount + "```")
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['purge'],
  permLevel: 0
};

exports.help = {
  name: 'prune',
  category: 'General',
  description: 'Deletes the number of messages you request',
  usage: '-prune [number]'
};
