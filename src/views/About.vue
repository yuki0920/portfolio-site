<template>
  <div class="about">
    <h1>This is my introduction page</h1>
    <Skill />
  </div>
</template>

<script>
import Skill from '@/components/Skill.vue'

export default {
  name: 'About',
  components: {
    Skill
  }
}
</script>
