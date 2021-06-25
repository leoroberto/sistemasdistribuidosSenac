const app = require('express')();

app.get('/', (req, res ) => 
    res.json({ message: 'Docker ér complicado de se entender se vc não visualiza bem! Docker is easy 🐳 Nada se cria tudo se copia' }) 
);

app.get('/leo', (req, res ) => 
    res.json({ message: 'Você acessou a url Leo' }) 
);

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`app listening on http://localhost:${port}`) );