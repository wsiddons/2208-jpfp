const port = process.env.PORT || 3000;
const app = require('./app');
const db = require('./db')
const express = require('express')
const path = require('path')


app.use(express.static(path.join(__dirname, '..', 'public')))


const init = async () => {
    await db.syncAndSeed();
    app.listen(port, () => console.log(`listening on port ${port}`));
};

init();


//dont touch me!


// body parsing middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api', require('./api')) // include our routes!

app.get('/*', (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));

})



module.exports = app