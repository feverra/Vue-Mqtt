<template>
  <div class="home"></div>
</template>

<script>
import {
  mqttConn,
  connectMqtt,
  disconectMqtt,
  subscribesAll,
  UnSubscribesAll
} from "@/config/mqttConfig2";

export default {
  name: "Home",
  data: () => {
    return {
      mqtt: null
    };
  },
  components: {},
  mounted() {
    let that = this;
    connectMqtt();
    subscribesAll("#");
    mqttConn().on("message", (topic, message) => {
      console.log(message.toString());
    });
  },
  destroyed() {
    disconectMqtt();
  }
};
</script>
