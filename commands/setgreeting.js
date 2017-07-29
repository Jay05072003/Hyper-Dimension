exports.run = (client,messasge,args) => {
    const fs = require('fs')
let guild = message.guild
let greeting = args.join(" ")
fs.writeFile(`../Ssettings/${message.guild.tag}`, JSON.stringify({ a:`${message.guild.owner}`, b:`${message.guild.tag}`, c:`${message.guild.id}`, d:greeting}, null, 4));
message.reply("Greeting set to " + greeting)
}