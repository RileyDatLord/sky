module.exports = {
    run: async (client, msg, args) => {
        const r = client.db;
        if (!args[0] || args[0] == NaN) {
            msg.channel.send('\\❌ No amount specified.')
        } else if (!args[1] {
                   msg.channel.send('\\❌ No user specified.')
                   }else {
            const target = msg.mentions.users.first() || client.users.get(args[0]);
            if (!target) return msg.channel.send('\\❌ Invalid user.');
            if (target.bot) return msg.channel.send('\\❌ Bots do not have Sky Points\\™.');
            var points = await r.table('globalPoints').get(target.id).run();
            if (!points) {
                msg.channel.send(`\\❌ **${target.tag}** does not have a profile. Get them to start chatting to automatically generate one. ${msg.guild.id == '110373943822540800' ? '(Discord Bots is an ignored guild!)' : ''}`);
            
        const r = client.db;
        if (!await r.table('globalPoints').get(user.id).run()) return require('../utils/insertNewPointsUser.js').run(client, user, multiplier);
        if (!client.tempProfiles[user.id].earningPoints) return;
        const profile = await r.table('globalPoints').get(user.id).run();
        
        profile['points'] += args[0] * multiplier;
        profile['tag'] = user.tag;

        await r.table('globalPoints').get(user.id).update(profile).run();
            }
            
        }   
    },
    meta: {
        name: 'points',
        ownerOnly: true,
        description: 'Adds Sky Points\\™ to the profile of target.',
        usage: '[%mention%|%user ID%]'
    }
}
