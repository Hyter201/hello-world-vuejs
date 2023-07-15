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

      <!-- pulsanti e textarea  -->
      <v-col v-if="!isEditing" cols="12" md="5">
        <v-text-field v-model="newTodo" @keyup.enter="AddTodo" placeholder="Cosa devo fare?" solo></v-text-field>
      </v-col>
      <v-col v-else cols="12" md="5">
        <v-text-field v-model="newTodo" @keyup.enter="updateTodo" placeholder="Modifichiamo" solo></v-text-field>
      </v-col>

      <v-col v-if="!isEditing">
        <v-btn elevation="2" outlined @click="AddTodo">Aggiungi</v-btn>
      </v-col>
      <v-col v-else>
        <v-btn elevation="2" outlined @click="updateTodo">Rinomina</v-btn>
      </v-col>

      <!-- Ciclo lista e imposto indice ad ogni elemento aggiunto -->
      <v-col cols='12'>
        <ul>
          <li v-for="(todo, index) in todos " :key="index">
            <input v-model="todo.completed" @click="sendTodo(todo)" class="me-2" id="status" type="checkbox" style="transform: scale(1.2);">
            {{ todo.task }}

            <!-- Bottone rinomina -->
            <button @click="renameTodo(todo.task, index)" class="me-1 ms-2 mb-1"
              style="border: 1px solid black; border-radius: 1rem; padding: 0.3rem; background-color: #67b9f87c; ">Rinomina
            </button>

            <!-- Bottone Cancella -->
            <button @click="deleteTodo(index)"
              style="border: 1px solid black; border-radius: 1rem; padding: 0.3rem; background-color: #f869677c; ">Cancella
            </button>
          </li>
        </ul>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

import { mapMutations } from 'vuex';

export default {
  // Dati
  data() {
    return {
      isEditing: false,
      selectedIndex: null,
      todos: [
        { task: 'Prova 1', completed: true },
        { task: 'Prova 2', completed: false }
      ],
      newTodo: ''
    }
  },

  // Funzioni 
  methods: {
    AddTodo() {
      if (this.newTodo !== '') {
        this.newTodo.trim();
        this.todos.push({ task: this.newTodo, completed: false });
        this.newTodo = ''
      }
    },

    renameTodo(todo, index) {
      this.newTodo = todo;
      this.selectedIndex = index;
      this.isEditing = true;
    },

    updateTodo() {
      this.todos.splice(this.selectedIndex, 1, { task: this.newTodo })
      this.isEditing = false
      this.newTodo = ''
    },

    deleteTodo(index) {
      this.todos.splice(index, 1)
    },

    // i tre puntini consentono la modifica effettiva con vuex
    ...mapMutations(['setArray']),
    sendTodo(todo) {
      todo.completed = !todo.completed;
      const completedTodo = this.todos.filter(todo => todo.completed == true);
      const TaskTodo = completedTodo.map(todo => todo.task);
      console.log('TaskTodo array:', TaskTodo)
      this.setArray(TaskTodo);
    },   
  }
}

</script>





