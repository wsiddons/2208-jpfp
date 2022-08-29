const port = process.env.PORT || 3000;
const app = require('./app');
const db = require('./db')
const express = require('express')



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



module.exports = app