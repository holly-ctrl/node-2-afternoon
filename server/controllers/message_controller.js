let message = []
let id = 0

module.exports = {
    create: (req, res, next) => {
        const {text, time} = req.body
        message.push({id, text, time})
        id++
        res.status(200).send(message)
    },
    read: (req, res, next) => {
        res.status(200).send(messages)
    },
    update: (req, res, next) => {
        const {text} = req.body
        const updateID = req.params.id
        const messageIndex = message.findIndex(message.id == updateID)
        let message = message[messageIndex]

        message[messageIndex] = {
            id: message.id,
            text: text || message.text,
            time: message.time
        }
        res.status(200).send(messages)
    },
    delete: (req, res, next) => {
        const deleteID = req.params.id
        const messageIndex = messages.findIndex(message => message.id == deleteID)
        message.splice(messageIndex, 1)
        res.status(200).send(messages)
    }
}