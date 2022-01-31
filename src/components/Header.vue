<template>
    <section>
        <header class="header">
            <div class="header__name">
                <h1>{{ title }}</h1>
            </div>

            <div class="header__icons">
                <button>
                    <img src="/images/svg/hamburger.svg" alt="hamburger-icon">
                </button>
            </div>

            <nav class="header__navigation">
                <ul class="header__navigation-menu" v-for="page in navigationPages" :key="page.id">
                    <li class="header__navigation-menu-item">{{ page.title }}</li>
                </ul>
            </nav>
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
    .header {
        /* position: fixed; */
        top: 0;
        left: 0;
        right: 0;
        width: 100%;
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        padding: var(--padding-big) 0;
        font-size: 20px;
    }

    .header__name {
        grid-column: 2/ span 4;
        text-align: left;
    }

    .header__icons {
        display: flex;
        justify-content: flex-end;
        grid-column: 8/ span 4;
    }

    .header__navigation {
        display: none;
    }

    .header__seperator {
		border:none;
        width: 90%;
        height: 50px;
        margin-top: 0;
        border-bottom: 1px solid #630489;
        box-shadow: 0 20px 20px -20px #AE00FB;
        margin: -70px auto; 
    }

    /* Medium screen devices (968px and above) */
    @media screen and (min-width: 968px) {
        .header__icons {
            display: none;
        }

        .header__name {
            grid-column: 3/ span 3;
        }

        .header__navigation {
            display: block;
            text-align: center;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            grid-column: 8/ span 4;
        }

        .header__navigation-menu {
            list-style: none;
        }
    }

</style>