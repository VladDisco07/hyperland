const discord = require ("discord.js");

var client = new discord.Client();

const token = "NDQyMjk4MjYyMTc1NjEyOTI5.Dc85hA.aEHJ3VsNPS8tgI8dWIXCvHqm1p8";

client.on("ready", () => {
    console.log("Pregatit!")
    client.user.setPresence({ game: { name: 'The party starts here! https://discord.gg/D99Pq74', type: 3 } });
});

const prefix = "hl!"
client.on("message", (message) => {

    if (message.author.bot) return;

    if (message.content.startsWith (prefix + "salut")) {
        message.reply("Salutare :smiley:");
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
       message.channel.send ("Mesajul a fost trimis! :smile:");
    }

});

client.login (token);
