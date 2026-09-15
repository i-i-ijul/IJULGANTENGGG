const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send ("Ijul Ganteng");
});

app.listen(port, () => {
    console.log('aplikasi udah siap di http://localhost:${port}');
});