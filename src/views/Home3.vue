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

      var json = JSON.parse(message.toString());
      var index = -1;
      for (var i = 0; i < that.realtime_items.length; i++) {
        var item = that.realtime_items[i];
        if (item.code === json.id) {
          index = i;
          break;
        }
      }
      if (index !== -1) {
        Object.keys(json).forEach(key => {
          // if (key == 'datetime') {
          //   that.realtime_items[index].value[key].value = json[key]
          // } else
          if (
            key != "id" &&
            key != "type" &&
            that.realtime_items[index].value[key]
          ) {
            that.realtime_items[index].value[key].value = json[key];
          }
        });
        that.realtime_items[index].current_datatime = moment().format(
          "YYYY-MM-DD HH:mm:ss"
        );
      }
    });
    mqtt.subscribe("a/#");
  },
  destroyed() {
    // mqtt.end();
  }
};
</script>
