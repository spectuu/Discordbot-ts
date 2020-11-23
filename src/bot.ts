import {config} from 'dotenv'
config();
import { Client, Message, MessageEmbed } from 'discord.js';
const client: Client = new Client()
import { prefix } from './prefix.json';
const embed = MessageEmbed;
client.on("ready", () => {
console.log(`Bot is ready!`)
});

client.on("message", message => {
    if(message.content.startsWith(`${prefix}hello`)){
        message.reply('hi!')
    } 
});

client.on("message", message => {
    if(message.content.startsWith(`${prefix}ClearChannel`)){
    const {member, mentions} = message
    const tag = member?.id
    }
})

client.on("message", message => {
    if(message.content.startsWith(`${prefix}UserName`)){
    const usertag = message.mentions.members?.first();
    if(usertag){
        var remove = "!!UserTag"
        var msg = message.content.substring(remove.length);
        const username = message;
        const member = message;
        const tag = `${username}`;
        msg = tag
        console.log(message.mentions.users);
        message.channel.send(msg);
        
        }
    }
})


client.login(process.env.TOKEN);