<template>
    <header>
        <div class="section-center">
            <div class="logo">
                <img src="/img/logo-qpt.png" alt="" />
            </div>
            <div class="links">
                <a href="#" class="active">Conócenos</a>
                <a href="#">Cursos</a>
                <a href="#">Noticias</a>
                <a href="#">Blog</a>
            </div>
            <div class="search">
                <input type="text" placeholder="Buscar" />
                <div class="icon">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                            clipRule="evenodd"
                        />
                    </svg>
                </div>
            </div>
            <div class="auth">
                <v-btn
                    outlined
                    :class="`${btnColor} rounded-lg mx-2`"
                    dark
                    @click="login"
                    >Iniciar Sesión</v-btn
                >
                <button class="btn btn-white">Matricúlate</button>
                <div class="bars-mobile">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                            clipRule="evenodd"
                        />
                    </svg>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    data: () => ({
        btnColor: "purple"
    }),
    methods: {
        login() {
            this.btnColor = this.btnColor == "pink" ? "purple" : "pink";
        }
    }
};
</script>

<style lang="scss" scoped>
header {
    border-bottom: 3px solid $--clr--primary;
    .section-center {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 0.3rem auto;
        .logo {
            img {
                width: 140px;
            }
        }
        .links {
            display: none;
            @media screen and (min-width: 1000px) {
                display: flex;
            }
            a {
                color: $--clr-black-1;
                font-weight: 500;
                text-decoration: none;
                border-bottom: 2px solid transparent;
                transition: $--transition;
                margin: 0 0.5rem;
                &:hover {
                    color: $--clr--primary;
                    border-bottom: 2px solid $--clr--primary;
                }
            }
            .active {
                color: $--clr--primary;
                border-bottom: 2px solid $--clr--primary;
            }
        }
        .search {
            display: none;
            align-items: center;
            border: 2px solid $--clr--primary;

            border-radius: 10px;
            overflow: hidden;
            @media screen and (min-width: 700px) {
                display: flex;
            }
            input {
                width: 220px;
                padding: 0.1rem 0.5rem;
                &:focus {
                    outline: none;
                }
            }
            .icon {
                border-left: 2px solid $--clr--primary;
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 0.2rem 0.3rem;
                svg {
                    height: 26px;
                    width: 26px;
                    path {
                        fill: $--clr--primary;
                    }
                }
            }
        }
        .auth {
            margin-right: 1rem;
            display: flex;
            align-items: center;
            @media screen and (min-width: 700px) {
                margin-right: 0;
            }
            .btn-white {
                display: none;
                @media screen and (min-width: 700px) {
                    display: flex;
                    margin-left: 0.5rem;
                }
            }
            .bars-mobile {
                width: 24px;
                display: flex;
                align-items: center;
                margin-left: 0.3rem;
                @media screen and (min-width: 1000px) {
                    display: none;
                }
                svg {
                    cursor: pointer;
                    path {
                        fill: $--clr--primary;
                    }
                }
            }
        }
    }
}
</style>
