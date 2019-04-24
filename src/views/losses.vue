<template>
  <div class="home">
     <losses/>
  </div>
</template>

<script>
// @ is an alias to /src
import losses from '../components/losses-comp.vue'
export default {
  name: 'home',
  components: {
    losses,
  }
}
</script>

