<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>
      <v-btn>
        <router-link v-bind:to="{ name: 'Home' }">
          <v-icon>mdi-home</v-icon>
          Home
        </router-link>
      </v-btn>
      <v-btn>
        <router-link v-bind:to="{ name: 'About' }">
          <v-icon>mdi-home</v-icon>
          About
        </router-link>
      </v-btn>
      <v-btn>
        <router-link v-bind:to="{ name: 'Work' }">
          <v-icon>mdi-home</v-icon>
          Work
        </router-link>
      </v-btn>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    //
  }),
};
</script>
