
// LOOK FOR LINES WITH COMMENTS TO SEE WHAT YOU NEED TO EDIT FOR YOUR OWN VERSION.

const Discord = require('discord.js');
const {prefix, token} = require('./config.json')
const bot = new Discord.Client();
var moment = require('moment');
moment().format();

bot.on('ready', () => {
    var datestamp = moment().format("DD-MM-YYYY HH:mm:ss");
    console.log(' ');
    console.log(' ____________________________________________________________');
    console.log(' ');
    console.log(' Checkout URL Distributor Bot for Discord');
    console.log(' @washedgram | washedgram#0001 ');
    console.log(` Successfully logged in as ${bot.user.tag} ...`);
    console.log(' ____________________________________________________________');
    console.log(' ');
    console.log(` Command activity log starting at ${datestamp}`);
    console.log(' ____________________________________________________________');
    console.log(' ');
    // Change this name to whatever you want below:
    bot.user.setUsername("Checkout URL Bot");
    bot.user.setActivity('msg !help')
});
bot.login(token);

var url1 = "Click here --> ";
var url2 = ``;

bot.on('message', msg => {
    const args = msg.content.slice(prefix.length).split(' ');
    const command = args.shift().toLowerCase(); 
    var timestamp = moment().format("HH:mm:ss");
    let msgSplit = msg.content.split(" ");

    // input your BOT's user ID in the line below:
    if (msg.author.id == `----------` && msgSplit[0] == '**New') {
        msg.react('🛒')};

    // input private channel ID in the line below:
    if (command === 'url' && (args.length) && msg.channel.id === '---------') { 
            // input public channel ID in the line below:
            bot.channels.get(`----------`).send(`**New Checkout URL** --- Size ${args[0]}.\nReact with 🛒 to claim!`)
            url2 = url1.concat(args[1])
            console.log(` [${timestamp}] - Checkout URL sent to Discord for claiming`);
        } 
});

bot.on('messageReactionAdd', (reaction, user, msg) => {
    var timestamp = moment().format("HH:mm:ss");
    // input your BOT's user ID in the line below:
    if(reaction.emoji.name === "🛒" && user.id !== `------------` && reaction.count == 2) {
        console.log(` [${timestamp}] - ${user.username} claimed a checkout URL`)
        bot.users.get(user.id).send(`Here is your checkout URL. Good luck!\n${url2}`);
    }
});

