<!-- ordinamento di posizione dei vari componenti -->
<template>
  <div>
    <hello-world />
  </div>
</template>

<!-- Registrazione componenti -->
<script>
import HelloWorld from '../components/HelloWorld'

export default {
  name: 'HomePage',
  components: {
    HelloWorld,
  },
}
</script>