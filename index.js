const express  = require('express');
const app      = express()
const port     = 5000

app.use(
    express.urlencoded({
        extended: true,
    })
)

app.use(express.json());

app.use(express.static('public'));

const route = require('./paginas')
app.use('/paginas', route)

app.listen(port, () => {
    console.log("servidor rodano");
})
