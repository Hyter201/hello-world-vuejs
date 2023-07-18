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
            <input @click="sendTodo(todo)" class="me-2 mb-5" type="checkbox" style="transform: scale(1.2);">
            {{ todo.task }}

            <!-- Bottone rinomina -->
            <a @click="renameTodo(todo, index)" class="me-1 ms-2 mb-1"
              style="color: black; border-radius: 1rem; padding: 0.3rem; background-color: #67b9f87c; "><i
                class="bi bi-pencil-fill"></i>
            </a>

            <!-- Bottone Cancella -->
            <a @click="deleteTodo(index)" class="me-4"
              style="color: black ;border-radius: 1rem; padding: 0.3rem; background-color: #f869677c; "><i
                class="bi bi-x-lg"></i>
            </a>

            <span style="font-size: 14px; color: grey;">Utente: {{ todo.username }}</span>
          </li>
        </ul>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapMutations } from 'vuex';
import { mapState } from 'vuex';

export default {
  // Dati
  data() {
    return {
      isEditing: false,
      selectedIndex: null,
      todos: [
        { task: 'andare al mare', completed: false, username: 'FantoccioNumero1' },
        { task: 'lezione di acquagym', completed: false, username: 'FantoccioNumero1' },
        { task: 'comprare il latte', completed: false, username: 'FantoccioNumero2' }
      ],
      newTodo: '',
    }
  },

  computed: {
    ...mapState(['username'])
  },

  mounted() {
    console.log('Username:', this.username);
  },

  // Funzioni 
  methods: {
    AddTodo() {
      if (this.newTodo !== '') {
        this.newTodo.trim();
        this.todos.push({ task: this.newTodo, completed: false, username: this.username });
        this.newTodo = ''
      }
    },

    renameTodo(todo, index) {
      this.newTodo = todo.task;
      this.selectedIndex = index;
      this.isEditing = true;
    },

    updateTodo() {
      this.todos.splice(this.selectedIndex, 1, { task: this.newTodo, username: this.username })
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
      const TaskTodo = completedTodo.map(todo => ({ task: todo.task, username: todo.username }));
      console.log('TaskTodo array:', TaskTodo)
      this.setArray(TaskTodo);
    },
    // ...mapMutations(['setFilters']),
    // CompletedFilter(todo){
    //   this.todos.username = todo.username;
    //   const Filter = this.todos.filter(todo => todo.username === todo.username && todo.completed === true);
    //   console.log(Filter)
    //   this.setFilters(Filter);
    //   }
  }
}
</script>





