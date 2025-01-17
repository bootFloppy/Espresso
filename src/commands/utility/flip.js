const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('flip')
		.setDescription('Flips a coin.'),
	async execute(interaction) {
		let choices = ['HEADS', 'TAILS'];
		let i = Math.floor(Math.random() * choices.length);
		const sent = await interaction.reply({ content: 'The coin landed on '+choices[i] });
	}
};