/*no quites los creditos!, no seas rata

 Credits to:
CuriosityBot-MD*/

import { watchFile, unwatchFile } from 'fs';
import chalk from 'chalk';
import { fileURLToPath, pathToFileURL } from 'url';

global.owner = [
['212625457341', 'المطور 💖', true], 
['212713522982', 'المساعد 🍧', true],
['212625457341', '𝗢𝘄𝗻𝗲𝗿 🍭', false]];

//BETA: Si quiere evitar escribir el número que será bot en la consola, agregué desde aquí entonces:
//Sólo aplica para opción 2 (ser bot con código de texto de 8 digitos)
global.botNumberCode = ""; //Ejemplo: +59309090909
global.confirmCode = "";

global.suittag = ['212625457341'];
global.mods = [];
global.prems = [];

//Aqui encuentras los nombres del bot
global.packname = "kabane-𝖬𝖣";
global.author = "mode :kabane : bot";
global.wm = "kabane bot";
global.wm2 = "kabane bot";
global.azami = "kabane bot";
global.cb = "*🚀 انتظر قليلا...*";


//Las Versiones Y Entre Otros
global.vs = "V2";
global.library = "Baileys";
global.baileys = "@whiskeysockets/baileys";
global.lenguaje = 'Español';
global.menudi = ["⛶","❏","⫹⫺"];
global.dev = "ahmed";
global.devnum = "+212625457341";

let file = fileURLToPath(import.meta.url);
watchFile(file, () => { unwatchFile(file);
console.log(chalk.yellow("Se actualizo el archivo config.js"));
import(`${file}?update=${Date.now()}`);
});
