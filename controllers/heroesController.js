const fs = require(`fs`);

const heroes = JSON.parse(fs.readFileSync(__dirname +'../../data/heroes.json', 'utf-8'));
const controllerHeroes = {
    index: (req, res) => {
        res.send(heroes);
    },
    heroesDetalles: (req,res) => {
        let idHeroe = req.params.id;
        heroes.forEach(heroe =>{
            if(idHeroe == heroe.id){
                res.send(`Hola! Mi nombre es ${heroe.nombre} y mi profesión es ${heroe.profesion}`)
            }
        });
        res.send('Lo siento, no encontré ese héroe')
    },
    heroesConResenia: (req, res) => {
        let idHeroe = req.params.id;
        res.set({'content-type': 'text/plain; charset=utf-8'});
        heroes.forEach(heroe =>{
            if (idHeroe == heroe.id && req.params.palabra == 'ok'){
                res.send(`${heroe.nombre}:\n\n${heroe.resenia}`)
            }else if(idHeroe == heroe.id){
                res.send(`${heroe.nombre}.\n\nLamento que no quieras saber más de mí :c`)
            }
        });
        res.send('Lo siento, no encontré ese héroe')
    }
}

module.exports = controllerHeroes;