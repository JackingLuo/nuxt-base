<template>
  <div class="container">
    test
    <p>{{$store.state.test.value}}</p>
    <button @click="dispatchStore('Hello,Vuex')">测试按钮</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  created(){
    console.log(this.$store.state)
  },
  methods:{
    ...mapActions({
      'dispatchStore':'test/getInfo'
    }),
    //上面下面等价，定义一个this.dispatchStore的方法，执行test.js中actions的getInfo方法
    // dispatchStore(value){
    //   this.$store.dispatch('test/getInfo',value)
    // }
  }
}
</script>

<style>
</style>
