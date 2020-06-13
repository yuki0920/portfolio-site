<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <h1 class="display-2 font-weight-bold mb-3">This is my introduction page</h1>
      </v-col>
      <v-col class="mb-5" cols="12">
        <h2 class="headline font-weight-bold mb-3">スキル</h2>
      </v-col>
      <v-col class="mb-5" cols="12">
        <h3>言語</h3>
        <v-row justify="center">
          <div v-for="(language, index) in languages" v-bind:key="index" class="subheading mx-3">
            {{ language }}
          </div>
        </v-row>
      </v-col>
      <v-col class="mb-5" cols="12">
        <h3>フレームワーク等</h3>
        <v-row justify="center">
          <div v-for="(framework, index) in frameworks" v-bind:key="index" class="subheading mx-3">
            {{ framework }}
          </div>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: 'About',
  data() {
    return {
      languages: ['Ruby', 'JavaScript'],
      frameworks: ['Ruby on Rails', 'Vue.js']
    }
  }

}
</script>
