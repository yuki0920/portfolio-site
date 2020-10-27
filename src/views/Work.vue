<template>
  <v-container>
    <v-row class="text-left">
      <v-col cols="12">
        <h1 class="display-2 font-weight-bold mb-3">
          Works
        </h1>
      </v-col>
      <v-col cols="12">
        <v-row>
          <v-card
            class="ml-3"
            cols="12"
            sm="6"
            width="480"
          >
            <v-img
              class="white--text align-end"
              height="250"
              src="../assets/supplebox.jpg"
            >
              <v-card-title>
                <a href="https://supplebox.jp/">
                  Supple Box
                </a>
              </v-card-title>
            </v-img>
            <v-card-subtitle>
              プロテインの口コミ共有サービス
            </v-card-subtitle>
          </v-card>
          <v-card
            class="ml-3"
            cols="12"
            sm="6"
            width="480"
          >
            <v-img
              class="white--text align-end"
              height="250"
              src="../assets/muscleweather.jpg"
            >
              <v-card-title>
                筋肉雨予報
              </v-card-title>
            </v-img>
            <v-card-subtitle>
              LINEBOT「筋肉雨予報」<br>
              雨が降る当日朝6時に「降水確率」と「筋トレメッセージ」を通知
            </v-card-subtitle>
          </v-card>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  data() {
    return {
    }
  }

}
</script>
