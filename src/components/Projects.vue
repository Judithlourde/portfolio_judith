<template>
    <section class="projects">
        <div class="projects__heading">
            <h1>{{ projectsTitle }}</h1>
            <p>{{projectsDescription}}</p>
        </div>
        <div class="projects__Images" v-for="(image, index) in projectImages" :key="image.id"  :class="'projects__Images' + index">
            <img :src="image.image" :alt="image.caption">
        </div>
    </section>
    
</template>

<script>
    export default {
        data() {
            return {
                projectsTitle: 'Projects',
                projectsDescription: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.',
            }    
        },

        computed: {
            projectImages() {
                return this.$store.getters.getProjectImages;
            }
        }
    }
</script>

<style>
    .projects {
        min-width: 100%;
        position: relative;
        top: 150px;
        display: flex;
        flex-direction: column;
        padding: 20px;
        gap: 20px;
        /* margin: 0 20px; */
    }

    .projects__heading {
        text-align: center;
    }

    .projects__images img {
        border-radius: 10px;
    }

     /* Medium screen devices (968px and above) */
    @media screen and (min-width: 768px) {
        .projects {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            /* grid-template-rows: 1fr 1fr; */
            row-gap: 50px;
            /* grid-template-rows: 1fr 1fr; */
        }

        .projects__heading {
            grid-column: 3/ span 8;
        }

        .projects__images0 {
            grid-column: 3/ span 4;
            grid-row: 2/ span 4;
        }

        .projects__images1 {
            grid-column: 8/ span 4;
        }

        .projects__images2 {
            grid-column: 3/ span 4;
        }

        .projects__images3 {
            grid-column: 8/ span 4;
        }
    }
</style>
