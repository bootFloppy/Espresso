const http = require('http');
const { SlashCommandBuilder, inlineCode, codeBlock } = require('discord.js');

//module.exports = {
//	data: new SlashCommandBuilder()
//		.setName('forecast')
//		.setDescription('Returns the forecast for a state entered')
//        .addStringOption(option => 
//          option
//              .setName('latlong')
//              .setDescription('Latitude and Longitude input (TEMP), must be formated like (10.-10)')
//              .setRequired(true)),
//	async execute(interaction) {
//        const latlong = interaction.options.getString('latlong')
//        const options = {
//            host: 'api.weather.gov',
//            path: `/points/${latlong}`,
//            method: 'GET',
//            headers: { 'User-Agent': 'Mozilla/5.0' }
//        }
//
//        http.get(options, (response) => {
//            interaction.deferReply();
//            response.on("data", function(chunk) {
//                const codeblock = codeBlock(chunk);
//                interaction.reply(`:ping_pong: ${response.statusCode} ${codeblock}`)
//            })
//        }).on('error', function(e) {
//            interaction.reply(`the thing doesn't work get rekt loser`)
//        })
//	},
//};
