<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="4">
        <v-btn block elevation="2">Bottone 1</v-btn>
      </v-col>
      <v-col cols="4">
        <router-link to="/"><v-btn block elevation="2">Home</v-btn></router-link>
      </v-col>
      <v-col cols="4">
        <!-- Router link serve per collegare le pagine -->
        <router-link to="/about"><v-btn block elevation="2">About</v-btn></router-link>
      </v-col>
    </v-row>
  </v-container>
</template>    