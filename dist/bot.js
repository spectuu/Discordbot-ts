"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
dotenv_1.config();
const discord_js_1 = require("discord.js");
const client = new discord_js_1.Client();
const prefix_json_1 = require("./prefix.json");
client.on("ready", () => {
    console.log(`Bot is ready!`);
});
client.on("message", (message) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    console.log(message.content);
    if (message.content.startsWith(`${prefix_json_1.prefix}kick`)) {
        if ((_a = message.member) === null || _a === void 0 ? void 0 : _a.hasPermission(['ADMINISTRATOR', 'KICK_MEMBERS'])) {
            const member = (_b = message.mentions.members) === null || _b === void 0 ? void 0 : _b.first();
            if (member) {
                const bannedmember = yield member.kick();
                message.channel.send('The user' + bannedmember.user.username + 'has been kicked');
            }
        }
    }
    else {
        message.reply('You dont have permission to use this command');
    }
}));
client.on("message", message => {
    if (message.content.startsWith(`${prefix_json_1.prefix}hello`)) {
        message.reply('hi!');
    }
});
client.login(process.env.TOKEN);
