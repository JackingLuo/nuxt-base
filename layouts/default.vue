<template>
    <ThemeProvider  :theme="themeGlobal">
        <p>公共的</p>
        <Nuxt />
    </ThemeProvider>
</template>
<script>
import {ThemeProvider} from 'vue-styled-components';
export default ({
    components: {
        ThemeProvider
    },
    data(){
        return{
            themeGlobal:{
                primary:"#005765"
            }
        }
    }
})
</script>

