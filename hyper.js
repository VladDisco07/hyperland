//outdated (editing this in 2021)

const discord = require ("discord.js");

var client = new discord.Client();

const token = "no";

client.on("ready", () => {
    console.log("Ready!")
    client.user.setPresence({ game: { name: 'n-am comanda de help, csf', type: 1 } });
});

const prefix = "hl!"
client.on("message", (message) => {

    if (message.author.bot) return;

    if (message.content.startsWith (prefix + "salut")) {
        message.reply("Salutare! :smiley:");
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
