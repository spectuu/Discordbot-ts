"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
dotenv_1.config();
const discord_js_1 = require("discord.js");
const client = new discord_js_1.Client();
const prefix_json_1 = require("./prefix.json");
client.on("ready", () => {
    console.log(`Bot is ready!`);
});
client.on("message", message => {
    if (message.content.startsWith(`${prefix_json_1.prefix}hello`)) {
        message.channel.send('hi!');
    }
});
client.login(process.env.TOKEN);
