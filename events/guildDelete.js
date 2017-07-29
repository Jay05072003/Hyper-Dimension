module.exports = (client, message) => {
	let guild = message.guild
	client.user.setGame(`-help |${client.guilds.size} Servers`);
	client.channels.get("340873524375977985").send("I just left " + `${guild}` + " , I am now in " + `${client.guilds.size}`)
}