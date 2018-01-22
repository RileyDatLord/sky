module.exports = {
    run: async (client, msg) => {
        if (msg.author.bot) return;
        if (!msg.guild) return;
        if (msg.content.startsWith(client.config.prefix)) {
            const args = msg.content.slice(client.config.prefix.length).trim().split(/ +/g);
            const command = args.shift().toLowerCase();
            try {
                const commandFile = require(`../commands/${command}.js`);
                if (!require('../util/cmdMetaCheck.js').run(client, msg, commandFile)) return;
                commandFile.run(client, msg, args);
            } catch (err) {
                if (err.toString().toLowerCase().includes('cannot find module')) return;       
                client.error(client, err.stack, `(Message Handler) Command Run`, `**cmd:** ${msg.content} **user:** ${msg.author.tag} (${msg.author.id}) **guild:** ${msg.guild.name} (${msg.guild.id})`);
            }
        } else {
            require('../util/points.js').run(client, msg);
            const prefixMention = new RegExp(`^<@!?${client.user.id}> `);
            const prefix = msg.content.match(prefixMention) ? msg.content.match(prefixMention)[0] : prefix;
            if (msg.content.startsWith(prefix)) {
                const query = msg.content.split(' ')[1];
                const response = require('../util/cleverbot.js').run(client, query);
                msg.channel.send(`**${msg.author.username}**, ${response}`);
            }
        }
    }
}