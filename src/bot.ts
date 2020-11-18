import {config} from 'dotenv'
config();

import { Client, Message } from 'discord.js'
const client: Client = new Client()

import { prefix } from './prefix.json'

client.on("ready", () => {
console.log(`Bot is ready!`)
})

client.on("message", (message: Message) => {
console.log(message.content)

if(message.content.startsWith(`${prefix}hola`)){
message.reply(`Adios`);
    }
})

client.login(process.env.TOKEN);