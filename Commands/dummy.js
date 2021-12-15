const Command = require("../Structures/Command.js");
const Discord = require("discord.js");
const Vibrant = require("node-vibrant");
const fetch = require("node-fetch");
        var img = ["https://cdn.discordapp.com/attachments/872551317556588575/919832299674173460/VRChat_1920x1080_2021-12-11_22-47-04.571.png", 
        "https://cdn.discordapp.com/attachments/872551317556588575/919833081253339156/VRChat_1920x1080_2021-12-11_23-09-50.999.png", 
        "https://cdn.discordapp.com/attachments/872551317556588575/919833084734607360/VRChat_1920x1080_2021-12-12_00-23-54.469.png"]
        var index = 0
module.exports = new Command({
    name: "dummy",
    description: "The Dumbass",
    async run(message, args, client) {  
        const embed = new Discord.MessageEmbed();
        
        const image = img[index]
index++
if(index > img.length - 1) index = 0
        var response = await fetch(image)
        var buffer = await response.buffer()
        var palette = await Vibrant.from(buffer).getPalette()
        embed.setColor(palette.Vibrant.getHex()) 
            .setTitle("The Dumbass :3")
            .setAuthor(message.author.username)
            .setImage(image)
            .addFields(
                {name: 'Olliemine' , value: 'Can you believe it guys? Christmas, just a week away. Christmas is in a week! Woo Hoo! I am so happy about this information. Christmas just a week away, oh wow. Can you believe it?'},
                {name: 'Twitch' , value: 'https://www.twitch.tv/olliemine'}
            )
        message.reply({ embeds: [embed] });
    }
});