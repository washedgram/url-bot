# url-bot

## What is it?
Basic setup for a bot that distributes URLs supplied by a Discord server admin to members based on who reacts to a message first.

## How do I set it up?
0. Make a Discord application and bot within the application: https://discordapp.com/developers/applications/. Remember to save your client ID and bot token for later. 
1. Authorize the bot you just made for use in your server by following this link: https://discordapp.com/oauth2/authorize?client_id=INSERT_CLIENT_ID_HERE&scope=bot. (You'll need administrative access to your server to authorize this) Remember to give your bot permissions to post in the channel(s) where you'd like to see output before actually running the code.
* if you already have a working/running Discord bot you can just use those credentials instead of making a new one
2. Paste and save your Discord bot's token in the 'token' section of `config.json`. You can also change the prefix (character that precedes actionable bot commands) in this file; the default is `!`.
3. Create 2 channels in your Discord server. One should be private and only accessible to the bot as well as admins/users who will supply checkout links to be distributed by the bot. The second should be a public channel where all members can view the URL "carts" that can be claimed.

3a. Open `main.js` and replace the dashed line fields with the correct channel and bot user IDs. There are 4 fields you need to replace. To get these IDs, right-click the channel or bot name in Discord and click 'copy ID' and it will be copied to your clipboard.
4. Install Node.js if you haven't yet: https://www.npmjs.com/get-npm
5. Download the ZIP file for this repository, then open Terminal/Command Prompt/whatever console you use and execute the following code:
```
cd __directory you saved this code__
npm install 
node main
```
*only run `npm install` the first time you run this code; it installs the necessary packages if you don't have them already.
*you can run `node --inspect main` instead of `node main` for debugging purposes (a Node.js debugging inspector will run alongside your bot)

## Just got it set up, what next?
- If you have Node and all the necessary dependencies installed, you will see SUCCESSFULLY LOGGED IN AS ... in your console.
- At this point, go to your private channel and you're ready to start sending URLs to be distributed. If you kept the prefix as `!`, send the following message in this channel:
```
!url SIZE LINK
```
- This will send a message to the public "carts" channel with a message showing the corresponding size of the checkout URL.

  ![title](https://github.com/washedgram/url-bot/blob/master/example1.png)
  
- The first member to react will be direct messaged by the bot with the URL.
- Your console window will log each time a URL is sent to the public channel and each time a member claims one. (No real point here)

## I have a question about how this script works
Send me a message on Twitter (https://twitter.com/washedgram) for questions.

## Things that I might add
- Error handling for incorrect input of URL/size combo
- More error handling for people who un-react
- Switching bot messages to rich embeds that change color when URL is claimed. For now, if it has 2 or more reactions, it's gone. Might do this tonight if I stay up.
- ...

## Acknowledgements
Thanks Mitchel (https://twitter.com/mmtchl) for help smoothing out the initial first version.

