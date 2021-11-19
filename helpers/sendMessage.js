export const sendMessage = (bot, { chatId, message, options = {} }) => bot.telegram.sendMessage(chatId, message, options);
