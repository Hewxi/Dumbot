const Command = require("../Structures/Command.js");
const Discord = require("discord.js");
const Vibrant = require("node-vibrant");
const fetch = require("node-fetch");

module.exports = new Command({
    name: "hexia",
    description: "The Dumbass",
    async run(message, args, client) {
        const embed = new Discord.MessageEmbed();
        var response = await fetch('https://cdn.discordapp.com/attachments/872551317556588575/919827222494347264/VRChat_1920x1080_2021-12-12_00-23-25.869.png')
        var buffer = await response.buffer()
        var palette = await Vibrant.from(buffer).getPalette()
        embed.setColor(palette.Vibrant.getHex()) 
            .setTitle("The Dumbass :3")
            .setAuthor(message.author.username)
            .setImage('https://cdn.discordapp.com/attachments/872551317556588575/919827222494347264/VRChat_1920x1080_2021-12-12_00-23-25.869.png')
            .addFields(
                {name: 'Hexia' , value: 'So fucking dumb smh'},
                {name: 'Twitch' , value: 'https://www.twitch.tv/hexiboi_1'}
            )
        message.reply({ embeds: [embed] });
    }
});