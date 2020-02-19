const { Client } = require( "discord.js" );
const client = new Client({ disableEveryone: true });

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === "ping") msg.channel.send("Pong!");
  if (msg.content === "everyone") msg.channel.send("@everyone, salut a tous!");
  if (msg.content === "noteveryone") msg.channel.send("@everyone (noteveryone), salut a tous!", { disableEveryone: false });
});

client.login('Njc5NzU5OTIwNTg0NzIwNDA5.Xk2CGg.yhSH2JW45wMlE7azpPiKSL2lQUk');