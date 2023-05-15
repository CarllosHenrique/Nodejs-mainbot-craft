const mineflayer = require('mineflayer')
const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

app.get(["/", "/:name"], (req, res) => {
  greeting = "<h1>Hello From Node on Fly!</h1>";
  name = req.params["name"];
  if (name) {
    res.send(greeting + "</br>and hello to " + name);
  } else {
    res.send(greeting);
  }
});
app.listen(port, () => console.log(`HelloNode app listening on port ${port}!`));


const bot = mineflayer.createBot({
  host: '{YOURSERVERIP}',
  username: '{YOURBOTNAME',
  auth: 'offline',
  port: 46961,
  version: "1.19.3",
})
bot.on('spawn', () => {
  setInterval(() => {
    bot.setControlState('jump', true);
    setTimeout(() => bot.setControlState('jump', false), 500);
  }, 50000);
});
bot.on('spawn', () => {
  setInterval(() => {
    bot.setControlState('forward', true);
    setTimeout(() => bot.setControlState('forward', false), 2000);
    setTimeout(() => {
      bot.setControlState('back', true);
      setTimeout(() => bot.setControlState('back', false), 2000);
    }, 1000);
  }, 5000);
});
