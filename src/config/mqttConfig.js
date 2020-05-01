var mqtt = require('mqtt')
var client = null

const connectMqtt = () => {
    console.log('connectMqtt')
    client = mqtt.connect('ws://localhost:8083/mqtt', {
        //reconnectPeriod: 1000 * 60
    })

    client.on('connect', () => {
        console.log('Connected')
    })
}

export const disconectMqtt = () => {
    client.end(true)
    client = null
}

export const onMessage = (fun) => {
    if (client !== null) {
        client.on('message', fun)
    } else {
        return false
    }
}

export const subscribesAll = (topics) => {
    if (client == null) {
        console.log('not con')
        connectMqtt()
    }
    console.log('Subscribe', topics)
    client.subscribe(topics)
}

export const UnSubscribesAll = (topics) => {
    if (client !== null) {
        console.log('Un Subscribe', topics)
        client.unsubscribe(topics)
    }
}

export default client