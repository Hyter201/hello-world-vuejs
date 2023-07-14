<!-- ordinamento di posizione dei vari componenti -->
<template>
  <div>
    <completed-world />
  </div>
</template>

<!-- Registrazione componenti -->
<script>
import CompletedWorld from '../components/CompletedWorld'


// Questo export consente l'attivazione effettiva del componente
export default {
  components: {
    CompletedWorld
  },
}
</script>