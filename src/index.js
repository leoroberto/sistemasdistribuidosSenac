const app = require('express')();

app.get('/', (req, res ) => 
    res.json({ message: 'Docker is easy 🐳 Mudei novamente' }) 
);

app.get('/leo', (req, res ) => 
    res.json({ message: 'Você acessou a url Leo' }) 
);

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`app listening on http://localhost:${port}`) );