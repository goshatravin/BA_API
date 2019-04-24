<template>
  <div class="home">
     <getalldata/>
  </div>
</template>

<script>
// @ is an alias to /src
import getalldata from '../components/getalldata-comp.vue'
export default {
  name: 'home',
  components: {
    getalldata
  }
}
</script>

