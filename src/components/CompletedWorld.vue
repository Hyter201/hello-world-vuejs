<template>
    <div>
      <h1>Task completati:</h1>
      <ol>
        <li v-for="task in myArray" :key="task">
          {{ task }}
        </li>
      </ol>
    </div>
  </template>
  
  <script>
  import { mapState } from 'vuex';
  
  export default {
    computed: {
      ...mapState(['myArray'])
    }
  }
  </script>