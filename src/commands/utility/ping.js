const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('pingpong')
		.setDescription('this is not rhythm heaven'),
	async execute(interaction) {
		//await interaction.reply(':ping_pong: ${client.ws.ping}ms.');
		const sent = await interaction.reply({ content: 'Pinging...', fetchReply: true });
		interaction.editReply(`:ping_pong: ${sent.createdTimestamp - interaction.createdTimestamp}ms`);
	}
};