module.exports = (client, message) => {
const Discord = require("discord.js");
const Ssettings = new Discord.Collection()
(async function() {
  const cmdFiles = await readdir('./Ssettings/');
  client.log("log", `Loading custom grettings for ` + `${cmdFiles.length}`);
  cmdFiles.forEach(f => {
    try {
      let props = require(`./Ssettings/${f}`);
      client.log("Loading Custom Messages");
    } catch (e) {
      client.log(`Unable to load command ${f}: ${e}`);
    }
    if(!cmdFiless)
    return console.log("Please tell " + message.guild.owner + " to issue -setgreeting (greeting)")
  });
});
 message.channel.send(`../Ssettings/${message.guild.tag}`)
}
