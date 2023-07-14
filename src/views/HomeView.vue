<!-- ordinamento di posizione dei vari componenti -->
<template>
  <div>
    <hello-world />
  </div>
</template>

<!-- Registrazione componenti -->
<script>
import HelloWorld from '../components/HelloWorld'

// Questo export consente l'attivazione effettiva del componente
export default {
  components: {
    HelloWorld
  },
}
</script>

