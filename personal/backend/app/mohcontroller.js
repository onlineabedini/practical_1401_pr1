var data = require('./mohammad')

module.exports = new class mohammad_info {
        add_last_name(){
           data = {...data, ...{"last_name" : "Bishe"}}
           return data
        }
}