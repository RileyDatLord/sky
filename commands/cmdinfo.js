const fs = require('fs');
module.exports = {
    run: async (client, msg, args) => {
        if (!args[0]) return msg.channel.send(`\\❌ Invalid usage. Expected usage:\n\n\`\`\`${client.config.prefix + module.exports.meta.aliases[0] + ' ' + module.exports.meta.usage}\`\`\``);
        fs.readdir('commands', (err, files) => {
            let meta;
            if (err) return console.error(err);
            files.forEach(file => {
                const metaCheck = require('../commands/' + file).meta;
                if (metaCheck.aliases.includes(args[0].toLowerCase())) meta = metaCheck;
            });
        });
        if (!mainName) return msg.channel.send('\\❌ Command not found.');
        const m = await msg.channel.send('<a:skyloading:397962260540293120> Fetching command data...');
        const infoMsg = [
            `\\❓ **__Command Info:__** ${meta.aliases[0]} \\❓`,
            ``,
            `**Owner Only?** ${meta.ownerOnly ? 'Yes' : 'No'}`,
            `**Description:** ${meta.description}`,
            `**Usage:** ${client.config.prefix}${meta.aliases.shift()} ${meta.usage}`,
            `**Aliases:** ${meta.aliases[0 ]? meta.aliases.map(a => client.config.prefix + a).join(', ') : 'No other aliases.'}`
        ].join('\n');
        m.edit(infoMsg);
    },
    meta: {
        aliases: ['cmdinfo', 'cmd'],
        ownerOnly: false,
        description: 'Returns information about the specified command.',
        usage: '<%command name%>'
    }
}