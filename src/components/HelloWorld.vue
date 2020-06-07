<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      渡部 優貴(Watanabe Yuki)のポートフォリオサイトへようこそ
    </p>
    <img alt="Vue logo" src="../assets/icon.jpg" width="300">
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>
