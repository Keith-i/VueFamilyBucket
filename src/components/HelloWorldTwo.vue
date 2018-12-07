<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <div>{{test}}</div>
    <div>{{second.secondVal}}</div>
    <button @click="saveSecVal">变化值</button>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'NumberTwo-2222',
      // test:''
    }
  },
  methods:{
    saveSecVal() {
      this.$store.commit('second/setSecondVal', '888888+++++')
    },
  },
  created() {
    // this.test = this.store
    console.log(this.test, '888')
    console.log(this.second, 'secondVal')
    // this.test = this.$store.state.test
  },
  computed:{
    ...mapState(['test', 'second']),
    // test() {
    //   return this.$store.state.test
    // } 
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
