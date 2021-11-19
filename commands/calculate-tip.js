import { sendMessage } from "../helpers/index.js";

const PERCENT_PREFIX = "Sure, select % on ";

const getAmount = (text) => Number(text?.split("/tip")[1]?.trim());
const getPercentageAmount = (text) => Number(text?.split(PERCENT_PREFIX)[1]?.trim());

const calculateTip = (payload, bot) => {
    const amount = getAmount(payload.message.text);
    return sendMessage(bot, {
        chatId: payload.chat.id,
        message: `${PERCENT_PREFIX}${amount.toString()}`,
        options: {
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: "5%",
                            callback_data: "5%",
                        },
                        {
                            text: "10%",
                            callback_data: "10%",
                        },
                        {
                            text: "15%",
                            callback_data: "10%",
                        },
                        {
                            text: "20%",
                            callback_data: "20%",
                        },
                    ],
                ],
            },
        },
    });
};

const handlePercentage = (payload, bot) => {
    const message = payload.update.callback_query.message.text;
    const amount = getPercentageAmount(message);

    var percent = payload.update.callback_query.data;
    var percentage = parseFloat(percent) / 100.0;

    const calculatedPercentage = amount * percentage;

    const chatId = payload.update.callback_query.message.chat.id;

    return sendMessage(bot, { chatId, message: `Tip is ${calculatedPercentage}` });
};

export { calculateTip, handlePercentage };
