<!-- <template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="4">
        <v-btn block elevation="2">Bottone 1</v-btn>
      </v-col>
      <v-col cols="4">
        <router-link to="/"><v-btn block elevation="2">Home</v-btn></router-link>
      </v-col>
      <v-col cols="4"> -->
        <!-- Router link serve per collegare le pagine -->
        <!-- <router-link to="/about"><v-btn block elevation="2">About</v-btn></router-link>
      </v-col>
    </v-row>
  </v-container>
</template>     -->


<template>
  <v-container>
    <v-row>

      <v-col cols="12">
        <h1>Da fare:</h1>
      </v-col>

      <v-col cols="12" md="5">
        <v-text-field v-model="newTodo" placeholder="Cosa devo fare?" solo></v-text-field>
      </v-col>

      <v-col>
        <v-btn elevation="2" outlined @click="AddTodo">Aggiungi</v-btn>
      </v-col>

      <!-- Ciclo lista e imposto indice ad ogni elemento aggiunto -->
      <v-col cols='12'>
        <ol>
          <li v-for="(todo, index) in todos " :key="index">
            {{ todo }}
          </li>
        </ol>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      todos: ['Prova 1', 'Prova 2'],
      newTodo: ''
    }
  },

  methods: {
    AddTodo() {
      if (this.newTodo !== '') {
        this.newTodo.trim();
        this.todos.push(this.newTodo);
      }
    }
  }
}
</script>





