<template>
  <v-app>
    <v-app-bar light app>
      <v-app-bar-nav-icon v-on:click.stop='toggleSideMenu'></v-app-bar-nav-icon>
      <v-toolbar-title class="headline" style="cursor: pointer" @click="$router.push('/')" >
        Yuki's Site
      </v-toolbar-title>

      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn text v-for="(content, index) in pageContents" :key="index" :to="content.link">
          <v-icon>{{content.icon}}</v-icon>
          {{content.link.name}}
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
  data() {
    return {
      pageContents: [
        {link: { name: 'Home' }, icon: 'mdi-home'},
        {link: { name: 'About' }, icon: 'mdi-lead-pencil'},
        {link: { name: 'Work' }, icon: 'mdi-camera-burst'},
      ],
    }
  },
  methods: {
    ...mapActions(['toggleSideMenu'])
  }
};
</script>
