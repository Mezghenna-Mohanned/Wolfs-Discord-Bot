require('dotenv').config();
const{Client, IntentsBitField} = require('discord.js');
const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
    IntentsBitField.Flags.GuildMembers],
});

client.once('ready', (c) => {
  console.log(`Logged in as ${c.user.username}`);
});

client.on('messageCreate', (message) => {
  if(message.content == "test")
  {
    message.reply("Test successful!");}
  else if(message.content == "hello")
  {
    message.reply("Hello");}

  if(message.author.bot) return;

});





client.login(process.env.TOKEN);