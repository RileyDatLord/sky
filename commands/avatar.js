module.exports = {
    run: async (client, msg, args) => {
        const user = args[0] ? msg.mentions.users.first() || client.users.get(args[0]) : msg.author;
        if (!user) return msg.channel.send('\\❌ Invalid user.');
        const m = await msg.channel.send(`<a:skyloading:397962260540293120> Grabbing avatar of **${user.tag}**...`);
        m.edit(`\\😀 Avatar of **${user.tag}**...\n${user.avatarURL()}`);        
    },
    meta: {
        name: 'avatar',
        ownerOnly: false,
        description: 'Grabs the target\'s Discord avatar.',
        usage: '[%mention%|%user ID%]'
    }
}