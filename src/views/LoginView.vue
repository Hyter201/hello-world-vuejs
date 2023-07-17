<!-- ordinamento di posizione dei vari componenti -->
<template>
    <div>
      <login-world />
    </div>
  </template>
  
  <!-- Registrazione componenti -->
  <script>
  import LoginWorld from '../components/LoginWorld'
  
  // Questo export consente l'attivazione effettiva del componente
  export default {
    components: {
      LoginWorld
    },
  }
  </script>
  