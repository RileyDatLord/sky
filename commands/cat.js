const snek = require('snekfetch');

module.exports = {
    run: async (client, msg, args) => {
        let m = await msg.channel.send(`🐱 Getting a random cat picture 🐱`)
        const r = await snek.get('http://random.cat/meow');
        msg.channel.send('🐱 Here is a random cat picture... 🐱', { files: [r.body.file] });
    },
    meta: {
        name: 'cat',
        ownerOnly: false,
        description: 'Return a picture of a cat. Cuteness not guaranteed.',
        usage: ''
    }
}
