<template>
  <div class="home">
    <Introduction msg="Welcome to Yuki's portfolio!"/>
    <Animation />
  </div>
</template>

<script>

import Introduction from '../components/Introduction.vue'
import Animation from '../components/Animation.vue'

export default {
  components: {
    Introduction,
    Animation
  }
}
</script>
