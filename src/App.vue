<template>
  <v-app>
    <v-app-bar light app>
      <v-app-bar-nav-icon v-on:click.stop='toggleSideMenu'></v-app-bar-nav-icon>
      <v-toolbar-title class="headline" style="cursor: pointer" @click="$router.push('/')" >
        Yuki's Site
      </v-toolbar-title>

      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn text v-bind:to="{ name: 'Home' }">
          <v-icon>mdi-home</v-icon>
          Home
        </v-btn>
        <v-btn text v-bind:to="{ name: 'About' }">
          <v-icon>mdi-home</v-icon>
          About
        </v-btn>
        <v-btn text v-bind:to="{ name: 'Work' }">
          <v-icon>mdi-home</v-icon>
          Work
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <SideNav />
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import SideNav from "./components/SideNav"
import { mapActions } from 'vuex'
export default {
  name: 'App',
  components: {
    SideNav,
  },
  methods: {
    ...mapActions(['toggleSideMenu'])
  }
};
</script>
