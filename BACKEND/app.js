var {app, puerto} = require('./configs/server.config')
const mongoose = require('mongoose')





app.listen(puerto, () =>{
    console.log(`Server running on ${puerto}, everything is working.`);
})
