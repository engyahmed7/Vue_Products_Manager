<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-dark">
            <div class="container">
                <a class="navbar-brand text-light" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Options API
                            </a>
                            <ul class="dropdown-menu">
                              <li><router-link class="dropdown-item" to="/">Products</router-link></li>
                              <li><hr class="dropdown-divider"></li>
                              <li><router-link class="dropdown-item" to='/add'>Create Product</router-link></li>
            
                            </ul>
                          </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Composation API
                            </a>
                            <ul class="dropdown-menu">
                              <li><router-link class="dropdown-item" to='/products'>Products</router-link></li>
                              <li><hr class="dropdown-divider"></li>
                              <li><router-link class="dropdown-item" to='/products/add'>Create Product</router-link></li>
            
                            </ul>
                          </li>

                    </ul>

                </div>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        name: 'NavBar',
        data() {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        }
    }
</script>

<style scoped>

</style>