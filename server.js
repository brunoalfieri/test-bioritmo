const express = require('express')
// const enforce = require('express-sslify');

const compression = require('compression')
const serverStatic = require('serve-static')
const history = require('connect-history-api-fallback')

const port = process.env.PORT || 3000

const app = express()
app.use(history())  
app.use(compression()) 

// if (process.env.NODE_ENV === 'production') {
//     app.use(enforce.HTTPS({ trustProtoHeader: true }))
// }

app.use(serverStatic(__dirname + '/dist/'))

app.listen(port, function () {
    console.log('Servidor express criado, ouvindo na porta: ' + port);
});
