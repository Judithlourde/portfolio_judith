<template>
    <main class="about" v-for="page in aboutPage" :key="page.id">
        <div class="about__container">
            <div class="about__container-text">
                <p>{{ page.intro }}</p>

                <h2>{{ page.lead }}</h2>

                <p>{{ page.aboutText[0] }}</p>
            </div>

            <div class="about__container-image">
                <img src="/images/judith_image.png" alt="judith-image">
            </div>
        </div>
        

    </main> 
</template>

<script>
    export default {
        data() {
            
        },

        computed: {
            aboutPage() {
                return this.$store.getters.getAbout;
            }
        }
    }
</script>

<style>
    .about {
        width: 100%;
        position: relative;
        top: 120px;
        display: grid;
        grid-template-columns: repeat(12, 1fr);
    }

    .about__container {
        grid-column: 2/ span 10 ;
        text-align: center;
        display: flex;
        flex-direction: column;
        gap: var(--gap-big);
    }

    .about__container-text h2 {
        padding: var(--padding-medium) 0;
    }

    .about__container-text p {
        line-height: 1.5;
    }


</style>