const { Client, Intents } = require('discord.js');//
require('dotenv').config();
const { token } = process.env.DISCORD_TOKEN;

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
});


client.on("message", msg => {
    if (msg.content === "ping") {
        msg.react('<:blobreach:123456789012345678>');
    }
});

// Login to Discord with your client's token
client.login(token);


