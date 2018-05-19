const discord = require ("discord.js");

var client = new discord.Client();

const token = "NDQyMjk4MjYyMTc1NjEyOTI5.Dc85hA.aEHJ3VsNPS8tgI8dWIXCvHqm1p8";

client.on("ready", () => {
    console.log("Ready!")
    client.user.setPresence({ game: { name: 'The party starts here! https://discord.gg/RYcgPGs', type: 3 } });
});

const prefix = "hl!"
client.on("message", (message) => {

    if (message.author.bot) return;

    if (message.content.startsWith (prefix + "hello")) {
        message.reply("Hi there! :smiley:");
    }

    if (message.content.startsWith (prefix + "ðŸ‘€")) {
        message.channel.sendMessage(":eyes:")
    }

    mention = message.mentions.users.first();

    if(message.content.startsWith (prefix + "dm")) {
       if (mention == null) { return; }
       message.delete();
       mentionMessage = message.content.slice (8);
       mention.sendMessage (mentionMessage);
       message.channel.send ("The message was send! :smile:");
    }

});

client.login (token);
