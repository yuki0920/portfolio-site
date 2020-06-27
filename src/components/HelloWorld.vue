<template>
  <v-container>
    <v-row class="text-left top">
      <v-col cols="12" md="12">
        <h1 class="display-2 font-weight-bold my-3">
          {{ msg }}
        </h1>

        <p class="subheading font-weight-regular">
          Check my portfolio...
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'HelloWorld',
    props: {
      msg: String
    }
  }
</script>

<style>
.top .subheading {
  display: inline-block;
  border-bottom: 6px dotted #000000;
}
</style>
