<template>
  <div class="home">
     <maincontent/>
  </div>
</template>

<script>
// @ is an alias to /src
import maincontent from '../components/maincontent-comp.vue'

export default {
  name: 'home',
  components: {
    maincontent,
  }
}
</script>

<style>

</style>
