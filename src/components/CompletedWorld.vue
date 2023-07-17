<template>
    <div>
      <h1>Task completati:</h1>
      <ol>
        <li v-for="todo in myArray" :key="todo">
          {{ todo.task }} <span @click="CompletedFilter(todo)" style="color: grey; font-size: 14px;">Utente: {{ todo.username }}</span>
        </li>
        <li v-for="todo in Thearray" :key="todo">
          {{ todo.task }} <span @click="CompletedFilter(todo)" style="color: grey; font-size: 14px;">Utente: {{ todo.username }}</span>
        </li>
      </ol>
    </div>
  </template>
  
  <script>
  import { mapMutations } from 'vuex';
  import { mapState } from 'vuex';
  
  export default {
  //   data() {
  //   return {

  //   }
  // },

    computed: {
      ...mapState(['myArray']),
      ...mapState(['Thearray'])
    },

    methods: {
      ...mapMutations(['updateThearray']),
      CompletedFilter(todo){
      const prova = this.myArray.username = todo.username;
      const Filter = this.myArray.filter(todo => todo.username === prova);
      const UltimateFilter = Filter.map(todo => ({ task: todo.task, username: todo.username }))
      this.updateThearray(UltimateFilter)
      console.log(Filter);
      }
    }
  }
  </script>