<template>
  <div class="hello">
    <button @click="login">Login</button>
    <button @click="checkSupervisorPassword">Check</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import useStore from '../module'

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  setup() {
    const store = useStore()
    return {
      login: store.login,
      checkSupervisorPassword: store.checkSupervisorPassword
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
