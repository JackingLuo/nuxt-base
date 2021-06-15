<template>
  <div class="container">
    首页
  </div>
</template>

<script>
// import {formatDate} from "@/utils"
export default {
  created(){
    console.log(this.$store.state)
    console.log(process.client)//客户端还是服务端
  }
}
</script>

<style>
</style>
