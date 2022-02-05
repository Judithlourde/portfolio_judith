<template>
    <main class="about">
        <div class="about__container">
            <div class="about__container-text" v-for="page in aboutPage" :key="page.id">
                <p>{{ page.intro }}</p>

                <h2>{{ page.lead }}</h2>

                <p>{{ page.aboutText[0] }}</p>

                <div class="about__container-buttons">
                    <button>
                        <a class="member" href="">View my work</a>
                    </button>
                    
                    <button>
                        <a href="">More about me</a>
                    </button>
                </div> 
            </div>

            <div class="about__container-image">
                <img :src="page.preview.image" alt="judith-image">
            </div>
        </div>    
    </main> 
</template>

<script>
    export default {
        data() {
            return {

            }
            
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
        /* position: relative; */
        /* top: 20px; */
        font-size: 20px;
    }

    .about__container {
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

    .about__container-buttons { 
        margin-top: 20px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }

    .about__container-buttons button {
        margin-top: 30px;
    }

    .about__container-buttons button a {
        /* padding-right: 40px; */
        text-decoration: none;
        color: var(--secondary);
        background: linear-gradient(#350348, #ae00f9cf);
        padding: 10px 15px;
        border-radius: 15px;
        margin-right: 20px;
    }

    /* Medium screen devices (968px and above) */
    @media screen and (min-width: 768px) {
        .about__container {
            max-width: 768px;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            /* text-align: left; */
        }
    }
</style>