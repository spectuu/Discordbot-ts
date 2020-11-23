"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
dotenv_1.config();
const discord_js_1 = require("discord.js");
const client = new discord_js_1.Client();
const prefix_json_1 = require("./prefix.json");
const embed = discord_js_1.MessageEmbed;
client.on("ready", () => {
    console.log(`Bot is ready!`);
});
client.on("message", message => {
    if (message.content.startsWith(`${prefix_json_1.prefix}hello`)) {
        message.reply('hi!');
    }
});
client.on("message", message => {
    if (message.content.startsWith(`${prefix_json_1.prefix}ClearChannel`)) {
        const { member, mentions } = message;
        const tag = member === null || member === void 0 ? void 0 : member.id;
    }
});
client.on("message", message => {
    var _a;
    if (message.content.startsWith(`${prefix_json_1.prefix}UserName`)) {
        const usertag = (_a = message.mentions.members) === null || _a === void 0 ? void 0 : _a.first();
        if (usertag) {
            var remove = "!!UserTag";
            var msg = message.content.substring(remove.length);
            const username = message;
            const member = message;
            const tag = `${username}`;
            msg = tag;
            console.log(message.mentions.users);
            message.channel.send(msg);
        }
    }
});
client.login(process.env.TOKEN);
