"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
dotenv_1.config();
const discord_js_1 = require("discord.js");
const client = new discord_js_1.Client();
const config_json_1 = require("./config.json");
client.on("ready", () => {
    console.log(`Bot is ready!`);
});
client.on(`${config_json_1.prefix}hola`, (message) => {
    console.log(message.content);
    if (message.content.startsWith(`${config_json_1.prefix}hola`)) {
        message.channel.send(`Adios`);
    }
});
client.login(process.env.TOKEN);
