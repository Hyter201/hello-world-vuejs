<template>
  <v-container class="mt-5" style="width: 30%; background-color: rgba(205, 205, 205, 0.298); border-radius: 1rem;">
    <v-layout row>
      <v-flex lg12 class="text-center">
        <h1>Completati:</h1>
        <input style="border: 1px solid grey; border-radius: 5px;" class="text-center mb-2" type="text" v-model="search"
          placeholder="Cerca username o task">

        <li
          style="list-style: none; background-color: rgb(255, 255, 255); border: 0.5px solid rgba(73, 73, 73, 0.429); border-radius: 0.5rem;"
          class="mb-3 mx-2" v-for="todo, index in SearchedArray" :key="index">
          {{ todo.task }}
          <span class="ms-2" @click="CompletedFilter(todo)" style="color: grey; font-size: 13px;">Utente:
            <a style="color: gray; text-decoration: underline;">{{ todo.username }}</a></span>
        </li>

        <h2 class="mt-5">Filtro utente:</h2>
        <li
          style="list-style: none; background-color: rgba(255, 255, 255, 0.996); border: 0.5px solid rgba(73, 73, 73, 0.429); border-radius: 0.5rem;"
          class="mb-3 mx-2" v-for="todo, index in Thearray" :key="index">
          {{ todo.task }}
          <span class="ms-2" @click="CompletedFilter(todo)" style="color: grey; font-size: 14px;">Utente: {{ todo.username
          }}</span>
        </li>

      </v-flex>
    </v-layout>
  </v-container>
</template>
  
<script>
import { mapMutations } from 'vuex';
import { mapState } from 'vuex';

export default {
  data() {
    return {
      search: ""
    }
  },
  computed: {
    ...mapState(['myArray']),
    ...mapState(['Thearray']),

    SearchedArray() {
      return this.myArray.filter((todo) => {
        return todo.task.match(this.search) || todo.username.match(this.search);
      });
    }
  },

  methods: {
    ...mapMutations(['updateThearray']),
    CompletedFilter(todo) {
      const name = this.myArray.username = todo.username;
      const Filter = this.myArray.filter(todo => todo.username === name);
      const UltimateFilter = Filter.map(todo => ({ task: todo.task, username: todo.username }))
      this.updateThearray(UltimateFilter)
      console.log(Filter);
    }
  }
}
</script>