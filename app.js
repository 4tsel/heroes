const express =require(`express`);
const app = express();
const fs = require(`fs`);

app.listen(3030, () => console.log('Server running in 3030 port'));

const rutasMain = require(`./routes/main.js`)
const rutasHeroes = require(`./routes/heroes.js`)

app.use('/', rutasMain);
app.use('/heroes', rutasHeroes);