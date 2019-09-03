const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("618509019887304725")
setInterval(function() {
channel.send(`Semo`)
}, 30)
})

client.login(process.env.BOT_TOKEN);