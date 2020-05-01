var mqtt = require('mqtt')
var client = null


export const mqttConn = () => {
    if (client != null) {
        return client
    }
}

export const connectMqtt = () => {
    console.log('client', client)
    console.log('connectMqtt')
    client = mqtt.connect('ws://localhost:8083/mqtt', {
        //reconnectPeriod: 1000 * 60
    })
    console.log('client2', client)

    client.on('connect', () => {
        console.log('Connected')
    })
}

export const disconectMqtt = () => {
    client.end(true)
}

export const subscribesAll = (topics) => {
    console.log('Subscribe', topics)
    client.subscribe(topics)
}

export const UnSubscribesAll = (topics) => {
    console.log('Un Subscribe', topics)
    client.unsubscribe(topics)
}

export default client