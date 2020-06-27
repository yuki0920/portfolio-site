<template>
  <v-container>
    <v-navigation-drawer v-model="$store.state.drawer" absolute temporary>
      <v-list>
        <v-list-item>
          <v-list-item-avatar>
            <img src="../assets/icon.jpg" />
          </v-list-item-avatar>
          <v-list-item-content>Yuki Watanabe</v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list-item v-for="(item, index) in items" v-bind:key="index" v-bind:to="item.link">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      items: [
        { title: "Home", icon: "mdi-home", link: { name: 'Home' } },
        { title: "Skill", icon: 'mdi-lead-pencil', link: { name: 'About'  } },
        { title: "Work", icon: "mdi-camera-burst", link: { name: 'Work' } },
      ],
    }
  }
}
</script>
