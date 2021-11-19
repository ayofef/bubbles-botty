import { calculateTip, handlePercentage } from "./calculate-tip.js";
import { sendMessage } from "../helpers/index.js";
import { handleOn, handleOff } from "./elgato.js";
import { sendAllCommands } from "./command-list.js";

const handleEvents = (bot) => {
    bot.hears("Hey", (payload) => sendAllCommands(payload, bot));
    bot.command("start", (payload) => sendAllCommands(payload, bot));
    bot.command("tip", (payload) => calculateTip(payload, bot));
    bot.command("elgatoOn", (payload) => handleOn(payload, bot));
    bot.command("elgatoOff", (payload) => handleOff(payload, bot));

    /**
     * Handle tips callback data
     */
    bot.action("tip", (payload) => calculateTip(payload, bot));
    bot.action("5%", (payload) => handlePercentage(payload, bot));
    bot.action("10%", (payload) => handlePercentage(payload, bot));
    bot.action("15%", (payload) => handlePercentage(payload, bot));
    bot.action("20%", (payload) => handlePercentage(payload, bot));
    bot.action("elgatoOn", (payload) => handleOn(payload, bot));
    bot.action("elgatoOff", (payload) => handleOff(payload, bot));
};

export { handleEvents };
