<template>
  <div class="home"></div>
</template>

<script>
import mqtt from "@/config/mqttConfig3";

export default {
  name: "Home",
  data: () => {
    return {
      user: {
        _id: 1848484
      },
      mqtt: null
    };
  },
  components: {},
  mounted() {
    mqtt.launch(this.user._id, (topic, source) => {
      console.log("message: ", source.toString());
    });
    mqtt.subscribe("a/#");
  },
  destroyed() {
    // mqtt.end();
  }
};
</script>
