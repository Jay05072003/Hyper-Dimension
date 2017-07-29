exports.run = (client,message,args,) => {
		return new Promise((resolve, reject) => {
			const voiceChannel = message.member.voiceChannel;
			if (!voiceChannel || voiceChannel.type !== 'voice') return message.reply('I couldn\'t connect to your voice channel...');
			voiceChannel.join().then(connection => resolve(connection)).catch(err => reject(err));
		});
	}
 exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['vcj', 'j'],
  permLevel: 0
};

exports.help = {
  name: 'join',
  category: 'General',
  description: 'Makes the bot join your current voicechannel',
  usage: '-join'
};