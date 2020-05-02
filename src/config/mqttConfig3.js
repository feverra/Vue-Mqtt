let mqtt = require('mqtt')
let client = {}
export default {
    launch(id, callback) {
        if (JSON.stringify(client) == JSON.stringify({})) {
            client = mqtt('mqtt://localhost/mqtt', {
                port: 8083,
                clientId: id,
                clean: false
            })
        }
        client.on('message', (topic, message) => {
            callback(topic, message)
        })
    },
    end() {
        client.end(true)
    },
    subscribe(topic) {
        client.subscribe(topic, { qos: 1 })
        console.log('subscribe:', topic)
    },
    publish(topic, message) {
        client.publish(topic, JSON.stringify(message), { qos: 1 })
    }
}