import { exec } from "child_process";

import { sendMessage } from "../helpers/index.js";

const handleOn = (payload, bot) => {
    const chatId = payload.chat.id;

    exec("sh /Users/farouqayofe/elgato-on.sh", (error, stdout, stderr) => {
        console.log(stdout);
        console.log(stderr);
        if (error !== null) {
            console.log(`exec error: ${error}`);
            return;
        }
        return sendMessage(bot, { chatId, message: `On` });
    });
};

const handleOff = (payload, bot) => {
    const chatId = payload.chat.id;

    exec("sh /Users/farouqayofe/elgato-off.sh", (error, stdout, stderr) => {
        console.log(stdout);
        console.log(stderr);
        if (error !== null) {
            console.log(`exec error: ${error}`);
            return;
        }
        return sendMessage(bot, { chatId, message: `Off` });
    });
};

export { handleOn, handleOff };
