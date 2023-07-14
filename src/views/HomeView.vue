<!-- ordinamento di posizione dei vari componenti -->
<template>
  <div>
    <hello-world />
    <prova-world />
  </div>
</template>

<!-- Registrazione componenti -->
<script>
import HelloWorld from '../components/HelloWorld'
import ProvaWorld from '../components/provaWorld.vue';

export default {
  name: 'HomePage',
  components: {
    HelloWorld,
    ProvaWorld,
  },
}
</script>

