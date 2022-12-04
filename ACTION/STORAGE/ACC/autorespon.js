const fs = require('fs')

const addCommands = (msg, response, userId, _data) => {
    const obj = {
        pesan: msg,
        balasan: response,
        creator: userId
    }
    _data.push(obj)
    fs.writeFileSync('./ACTION/DATABASE/commands.json', JSON.stringify(_data, null, 3))
    return true
}

const deleteCommands = (command, _data) => {
    Object.keys(_data).forEach((i) => {
        if (_data[i].pesan === command) {
            _data.splice(i, 1)
            fs.writeFileSync('./ACTION/DATABASE/commands.json', JSON.stringify(_data, null, 3))
        }
    })
    return true
}

const checkCommands = (commands, _data) => {
    let status = false
    Object.keys(_data).forEach((i) => {
        if (_data[i].pesan === commands) {
            status = true
        }
    })
    return status
}

module.exports = {
    addCommands,
    checkCommands,
    deleteCommands
}