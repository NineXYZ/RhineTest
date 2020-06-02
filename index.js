// Creates the client
const {Client} = require('discord.js');
const client = new Client();

// Start the client
client.once('ready', () => console.log('Bot is ready!!!'));
console.log('Reading messages...');
client.on('message', msg => console.log(msg.content));

client.login('TOKEN');