module.exports = {
    run: async (client, msg, args) => {
        return msg.channel.send('**The soundboard command is currently disabled due to FFMPEG issues! Sorry! :<**');
        const sounds = ['johncena', 'oof', 'airhorn'];
        const resolve = require('path').resolve;
        if (!args[0]) return msg.channel.send('\\❌ Please provide a sound to play. Use `sb list` for a list of sounds.');
        if (args[0] === 'list') {
            msg.channel.send(`\\🎵 **Displaying ${sounds.length} sounds** \\➡ ${sounds.join(', ')}`);
        } else if (sounds.includes(args[0].toLowerCase())) {
            if (!msg.member.voiceChannel) return msg.channel.send('\\❌ You must be in a voice channel to use this command.');
            const voiceChannel = msg.member.voiceChannel;
            voiceChannel.join()
            .then(connection => {
                const dispatcher = connection.playFile(resolve(`./sounds/${args[0].toLowerCase()}.mp3`));
                dispatcher.on('end', () => {
                    voiceChannel.leave();
                });
            });
        } 
    },
    meta: {
        name: 'sb',
        ownerOnly: false,
        description: 'Control the \\🎵 soundboard! \\🎵',
        usage: '<list|%sound name%>'
    }
}