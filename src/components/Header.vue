<template>
    <section class="header-wrapper">
        <header class="header-container">
            <div class="header">
                <a href="/" class="header__logo">
                    <span>{{title}}</span>
                </a>

                <div class="header__navigation">
                    <nav class="header__navigation--desktop">
                        <ul class="header__navigation--desktop-menu">
                            <li v-for="page in navigationPages" :key="page.id" class="header__navigation--desktop-menu-item">
                                <a href="">{{ page.title }}</a>
                            </li>
                        </ul>
                    </nav>

                    <div class="header__navigation--mobile">
                        <button>
                            <img src="/images/svg/hamburger.svg" alt="hamburger-icon">
                        </button>
                    </div>
                </div>
            </div>
        </header>

        <hr class="header__seperator"> 
    </section>
</template>

<script>
    export default {
        data() {
            return {
                title: ` Judith `,
            };
            
        },

        computed: {
            navigationPages() {
                return this.$store.getters.getNavigationPages;
            }
        }
    }
</script>

<style>
    .header-container {
        width: 100%;
        min-height: 80px;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        display: flex;
        align-items: center;
        font-size: 20px;
        background-color: rgba(255, 255, 255, 0.07);
        backdrop-filter: saturate(180%) blur(20px);
        box-shadow: 0 2px 4px 0 rgb(0 0 0 / 4%), 0 -1px 0 0 rgb(0 0 0 / 8%);
        transition: opacity .3s ease-in-out;
        z-index: 50;
    }

    .header {
        width: 100%;
        margin-left: auto;
        margin-right: auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-left: 1.5rem;
        padding-right: 1.5rem; 
    }

    .header__logo {
        font-size: 30px;
    }

     .header__navigation--desktop {
        display: none;
    }

    .header__seperator {
		border:none;
        width: 100%;
        height: 50px;
        margin-top: 0;
        border-bottom: 1px solid #630489;
        box-shadow: 0 20px 20px -20px #AE00FB;
        /* margin: -70px auto;  */
    }

    /* Medium screen devices (968px and above) */
    @media screen and (min-width: 968px) {
        /* .header__navigation {
            display: flex;
            align-items: center;
        } */

        .header__navigation--desktop {
            display: block;
        }

        .header__navigation--desktop-menu {
            display: flex;
            align-items: center;
            list-style: none;
        }

        .header__navigation--desktop-menu-item {
            padding-right: 40px;
        }

        .header__navigation--mobile {
            display: none;
        }
    }

    @media (min-width: 1172px) {
        .header {
            max-width: 1172px;
        }
    }

</style>