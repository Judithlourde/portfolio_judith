<template>
    <Header />
    <About />
    <Projects />
</template>

<script>
import Header from '../components/Header.vue'
import About from '../components/About.vue'
import Projects from '../components/Projects.vue'

 export default {
        components: {
            Header,
            About,
            Projects,
        }
        
    }
</script>

