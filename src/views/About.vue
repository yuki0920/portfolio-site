<template>
  <v-container>
    <v-row class="text-left">
      <v-col cols="12">
        <h1 class="display-2 font-weight-bold mb-3">Skills</h1>
      </v-col>
      <v-col cols="12">
        <h2 class="headline font-weight-bold mb-3">Programming</h2>
        <v-row>
          <v-card class="ml-3" cols="12" sm="6"  width="480" v-for="(language, index) in languages" v-bind:key="index">
            <v-card-title>{{ language.name }}</v-card-title>
            <v-card-subtitle>経験年数: {{ language.year }}</v-card-subtitle>
            <v-card-text>{{ language.text }}</v-card-text>
          </v-card>
        </v-row>
      </v-col>
      <v-col cols="12">
        <h2 class="headline font-weight-bold mb-3">Accounting</h2>
        <v-row>
          <v-card class="ml-3" cols="12" sm="6"  width="480" v-for="(accounting, index) in accountings" v-bind:key="index">
            <v-card-title>{{ accounting.name }}</v-card-title>
            <v-card-subtitle>経験年数: {{ accounting.year }}</v-card-subtitle>
            <v-card-text>{{ accounting.text }}</v-card-text>
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
      languages: [
        {name: 'Ruby / Ruby on Rails', year: '1年程度', text: 'Rubyメインの受託開発会社にて業務で使用。'},
        {name: 'JavaScript/ Vue.js', year: '半年程度', text: '主に個人で使用。'},
      ],
      accountings: [
        {name: '財務会計 / 決算', year: '4年程度', text: '上場のエネルギー会社にて新卒時より従事。仕訳、債権･債務管理、固定資産会計、有価証券報告書の作成を担当。'},
        {name: '税務申告', year: '2年程度', text: '同エネルギー会社にて出納管理を担当。'}
      ]
    }
  }

}
</script>
