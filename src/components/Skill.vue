<template>
  <div>
    <h2>スキル</h2>

    <h3>言語</h3>
    <ul>
      <li v-for="(language, i) in languages" :key="i">{{ language }}</li>
    </ul>

    <h3>フレームワーク</h3>
    <ul>
      <li v-for="(framework, i) in frameworks" :key="i">{{ framework }}</li>
    </ul>

  </div>
</template>

<script>
export default {
  name: 'Skill',
  data() {
    return {
      languages: ['Ruby', 'JavaScript'],
      frameworks: ['Ruby on Rails', 'Vue.js']
    }
  }
}
</script>

<style lang="scss">
ul {
  list-style-type: none;
  li {
    display: inline-block;
    margin: 0 10px
  }
}
</style>
