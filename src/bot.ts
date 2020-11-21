import {config} from 'dotenv'
config();

import { Client, Message } from 'discord.js';
const client: Client = new Client()

import { prefix } from './prefix.json';

client.on("ready", () => {
console.log(`Bot is ready!`)
});

client.on("message", async (message) => {
console.log(message.content)
if(message.content.startsWith(`${prefix}kick`)){
    if(message.member?.hasPermission(['ADMINISTRATOR', 'KICK_MEMBERS'])){       
    const memberbanned = message.mentions.members?.first();
    if(memberbanned){
        const kickedmember = await memberbanned.kick();
        message.channel.send('The user' + kickedmember.user.username + 'has been kicked');
    }
  }
}else{
    message.reply(`Aqui mando yo malparido ahora sientate y mira como me bugeo para joderte la vida`)
}
});

client.on("message", message => {
    if(message.content.startsWith(`${prefix}hello`)){
        message.channel.send('hi!')
    } 
});

client.login(process.env.TOKEN);