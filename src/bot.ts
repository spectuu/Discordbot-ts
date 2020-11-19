import {config} from 'dotenv'
config();

import { Client, Message } from 'discord.js'
const client: Client = new Client()

import { prefix } from './prefix.json'

client.on("ready", () => {
console.log(`Bot is ready!`)
})

client.on("message", async (message: Message) => {
console.log(message.content)
if(message.content.startsWith(`${prefix}kick`)){
    if(message.member?.hasPermission(['ADMINISTRATOR', 'KICK_MEMBERS'])){       
    const member = message.mentions.members?.first();
    if(member){
        const bannedmember = await member.kick();
        message.channel.send('The user' + bannedmember.user.username + 'has been kicked')
    }
  }
}else{
    message.reply('You dont have permission to use this command')
}
})

client.on("message", message => {
    if(message.content.startsWith(`${prefix}hello`)){
        message.reply('hi!')
    }
})

client.login(process.env.TOKEN);