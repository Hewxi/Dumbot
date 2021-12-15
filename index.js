
const Client = require("./Structures/Client.js");
const Command = require("./Structures/Command.js");

const config = require("./Data/config.json");

const client = new Client();

const fs = require("fs");

fs.readdirSync("./src/Commands")
    .filter(file => file.endsWith(".js"))
    .forEach(file => {
        /**
         * @type {Command}
         */
        const command= require(`./Commands/${file}`);
        console.log(`Command ${command.name} loaded successfully`);
        client.commands.set(command.name, command); 
});

client.on("ready", () => console.log("The bot is online!"));

client.on("messageCreate", message => {

    if (!message.content.startsWith(config.prefix)) return;

    const args = message.content.substring(config.prefix.length).split(/ +/);

    const command = client.commands.find(command => command.name == args[0]);

    if (!command) return;

    command.run(message, args, client);
    
});

client.login(config.token);