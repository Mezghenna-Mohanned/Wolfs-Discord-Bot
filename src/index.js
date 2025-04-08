require('dotenv').config();
const { Client, IntentsBitField } = require('discord.js');

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
    IntentsBitField.Flags.GuildMembers,
  ],
});

client.once('ready', (c) => {
  console.log(`Logged in as ${c.user.username}`);
});

client.on('interactionCreate', async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  const { commandName } = interaction;

  if (commandName === 'hey') {
    await interaction.reply('Hello!');
  }

  if (commandName === 'flipcoin') {
    const result = Math.random() < 0.5 ? 'Heads' : 'Tails';
    await interaction.reply(result);
  }


  if (commandName === 'serverinfo') {
    const { guild } = interaction;
    await interaction.reply(`Server Name: ${guild.name}\nTotal Members: ${guild.memberCount}`);
  }

  if (commandName === 'userinfo') {
    const user = interaction.options.getUser('user') || interaction.user;
    await interaction.reply(`User: ${user.tag}\nID: ${user.id}\nJoined At: ${user.createdAt}`);
  }
});

client.login(process.env.TOKEN);
