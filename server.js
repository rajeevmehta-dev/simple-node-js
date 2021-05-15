const express = require('express');
const app = express();
var cors = require('cors');
app.use(cors({ credentials: true, origin: true }));
app.options('*', cors());
const port = process.env.PORT || 4001;
const server = require('http').createServer(app);
const https = require('https');
const path = require('path');

if (process.env.NODE_ENV != 'test') {


    // app.listen(port, "0.0.0.0", function() {
    //     console.log(`Example app listening on port ${port}! Go to http://localhost:${port}/`)
    // })
    server.listen(port,"0.0.0.0", function() {
        console.log(`Example app listening on porttttt ${port}! Go to http://localhost:${port}/`)
    })

}


app.use(express.static(path.join(__dirname, 'frontend/build/')));
app.use(express.static(path.join(__dirname, 'uploads')));

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend/build/index.html'));
    // res.send(`Node running at ${port}`);
});

module.exports = app;
