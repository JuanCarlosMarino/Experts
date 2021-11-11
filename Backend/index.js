const routersAPI = require('./routes');
const express = require('express');
const app = express();
const port = 3000;


app.use(express.static('public'));
app.use(express.json());

routersAPI(app);

app.listen(port, () => {
    console.log('mi port ' + port);
})