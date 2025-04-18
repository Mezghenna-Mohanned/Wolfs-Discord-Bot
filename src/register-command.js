require('dotenv').config();
const { REST, Routes } = require('discord.js');

const commands = [
  {
    name: 'hey',
    description: 'Says hello',
  },
  {
    name: 'flipcoin',
    description: 'Flips a coin and returns Heads or Tails',
  },
  {
    name: 'serverinfo',
    description: 'Displays information about the server',
  },
  {
    name: 'userinfo',
    description: 'Get information about a user',
    options: [
      {
        name: 'user',
        type: 6,
        description: 'The user to get information about',
        required: false,
      },
    ],
  },
];

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

(async () => {
  try {
    console.log('Registering commands...');
    await rest.put(
      Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
      { body: commands },
    );
    console.log('Successfully registered application commands.');
  } catch (error) {
    console.error(error);
  }
})();
