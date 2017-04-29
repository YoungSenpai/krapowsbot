var TelegramBot = require('node-telegram-bot-api');
var token = '355200928:AAEQOlBdPN4TH87PGa1Qx6cRqoEdQGOoMZ4';
var bot = new TelegramBot(token, {polling: true});

bot.onText(/\/action/ , function(msg, match){
    var fromId = msg.chat.id;
    bot.sendMessage(fromId, 'Иди нахуй!')
});

bot.onText(/\/say/ , function(msg, match){
    var fromId = msg.chat.id;
    bot.sendMessage(fromId, 'tuus matri scortum est, quod vos homosexual est.')
});

bot.onText(/\/help/ , function(msg, match){
    var fromId = msg.chat.id;
    bot.sendMessage(fromId, 'Скучный бот от скучного человека.')
});