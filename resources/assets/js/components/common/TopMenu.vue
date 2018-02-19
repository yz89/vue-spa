<template>
    <nav class="navbar navbar-default">
        <div class="container-fluid">
        <div class="navbar-header">
            <router-link to="/" class="navbar-brand">Home</router-link>
        </div>
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav navbar-right">
            <router-link to="/about" tag="li">
                <a>About</a>
            </router-link>
            <li>
                <router-link to="/register">Register</router-link>
            </li>
            </ul>
        </div>
        </div>
    </nav>
</template>

<script>
export default {}
</script>
