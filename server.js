import { bot } from "./utils/bot.js";
import { handleEvents } from "./commands/index.js";

handleEvents(bot);

bot.launch();

console.log("Hello world");

