<template>
    <main class="about" v-for="page in aboutPage" :key="page.id">
        <div class="about__container">
            <div class="about__container-text">
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
        font-size: 20px;
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

    .about__container-buttons {
        margin-top: 20px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        
    }

    .about__container-buttons button {
        margin-top: 30px;
    }

    .about__container-buttons button a {
        padding-right: 40px;
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
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            position: relative;
            top: 100px;
            text-align: left;
        }

        .about__container-text {
            grid-column: 2/ span 5;
        }

        .about__container-image {
            grid-column: 8 / span 4;
        }
    }
</style>