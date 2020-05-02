<template>
  <v-app id="inspire">
    <v-content>
      <v-container>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <router-link to="/">Home</router-link>|
            <router-link to="/2">Home2</router-link>|
            <router-link to="/3">Home3</router-link>|
            <router-link to="/about">About</router-link>|
            <router-link to="/about2">About2</router-link>
          </v-col>
        </v-row>
        <v-row>
          <router-view />
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({})
};
</script>
