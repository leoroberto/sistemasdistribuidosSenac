const app = require('express')();

app.get('/', (req, res ) => 
    res.json({ message: 'Docker ér complicado de se entender se vc não visualiza bem! Docker is easy 🐳 Nada se cria tudo se copia' }) 
);

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`app listening on http://localhost:${port}`) );