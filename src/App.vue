<template>
  <v-app>
    <v-app-bar app>
      <v-app-bar-nav-icon v-on:click.stop='openSideMenu'></v-app-bar-nav-icon>
      <v-toolbar-title class="headline">
        Yuki's Site
      </v-toolbar-title>

    <v-spacer></v-spacer>
      <router-link v-bind:to="{ name: 'Home' }">
        <v-icon>mdi-home</v-icon>
        Home
      </router-link>
      <router-link v-bind:to="{ name: 'About' }">
        <v-icon>mdi-home</v-icon>
        About
      </router-link>
      <router-link v-bind:to="{ name: 'Work' }">
        <v-icon>mdi-home</v-icon>
        Work
      </router-link>
    </v-app-bar>
    <SideNav />
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import SideNav from "./components/SideNav"
export default {
  name: 'App',
  components: {
    SideNav,
  },
  methods: {
    openSideMenu () {
      this.$store.dispatch('toggleSideMenu')
    }
  }
};
</script>
