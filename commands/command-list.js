import { sendMessage } from "../helpers/index.js";

const sendAllCommands = (payload, bot) => {
    return sendMessage(bot, {
        chatId: payload.chat.id,
        message: `Hey ${payload.from.first_name}, What can i do for you?`,
        options: {
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: "Calculate Tip",
                            callback_data: "tip",
                        },
                        {
                            text: "KeyLight On",
                            callback_data: "elgatoOn",
                        },
                        {
                            text: "KeyLight Off",
                            callback_data: "elgatoOff",
                        },
                    ],
                ],
            },
        },
    });
};

export { sendAllCommands };
