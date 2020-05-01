<template>
  <div class="home"></div>
</template>

<script>
import { onMessage, subscribesAll, UnSubscribesAll } from "@/config/mqttConfig";

export default {
  name: "Home",
  data: () => {
    return {
      mqtt: null
    };
  },
  components: {},
  mounted() {
    subscribesAll("#");
    onMessage((topic, message) => {
      console.log(message.toString());
    });
  }
};
</script>
