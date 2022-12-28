const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to albatros with Md. Fahad Monshi!')
})

app.listen(8080, (res) => {
    console.log('Server running on port 8080');
})