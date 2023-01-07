const { v4} = require('uuid')
// se crea la fun
const addTask = (event) =>{
    // se reciben los datos
    const {title, description} = event.body
    const createAt = new Date()
    const id = v4()
};
// se exporta el mod
module.exports = {
    addTask,
};