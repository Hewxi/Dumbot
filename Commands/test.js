const Command = require("../Structures/Command.js");

module.exports = new Command({
    name: "test",
    description: "Show random image",

    async run(message, args, client) {
        
        var img = ["https://cdn.discordapp.com/attachments/872551317556588575/919832299674173460/VRChat_1920x1080_2021-12-11_22-47-04.571.png", 
        "https://cdn.discordapp.com/attachments/872551317556588575/919833081253339156/VRChat_1920x1080_2021-12-11_23-09-50.999.png", 
        "https://cdn.discordapp.com/attachments/872551317556588575/919833084734607360/VRChat_1920x1080_2021-12-12_00-23-54.469.png"]
        function imgRandom(imgArr) {
        return imgArr[Math.floor(Math.random() * imgArr.length)];
    }
message.channel.send(imgRandom(img));

    }
    
}); 