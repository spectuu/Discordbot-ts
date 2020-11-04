import {config} from 'dotenv'
config();

import { Client, Message } from 'discord.js'
const client: Client = new Client()

import { prefix } from './config.json'

client.on("ready", () => {
console.log(`Bot is ready!`)
})

client.on("message", (message: Message) => {
console.log(message.content)

if(message.content.startsWith(`${prefix}hola`)){
message.channel.send(`Adios`);
}
})

client.login(process.env.TOKEN);