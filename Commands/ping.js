const Command = require("../Structures/Command.js");
const Discord = require("discord.js");
const config = require("../Data/config.json");

module.exports = new Command({
    name: "ping",
    description: "Bot status",

    async run(message, args, client) {
        const msg = await message.reply(`🏓Pong!`);

        const embed = new Discord.MessageEmbed()
        .setDescription(`
        Bot ping: ${client.ws.ping} ms
        Discord API Latency: ${msg.createdTimestamp - message.createdTimestamp} ms
        `)
        .setColor('AQUA')
        .setFooter(config.version);

        message.channel.send({ embeds: [embed] });
        

    }
}); 