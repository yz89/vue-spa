<template>
    <nav class="navbar navbar-default">
        <div class="container-fluid">
        <div class="navbar-header">
            <router-link to="/" class="navbar-brand">主 页</router-link>
        </div>
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav navbar-right">
            <router-link to="/about" tag="li">
                <a>关于</a>
            </router-link>
            <li>
                <router-link to="/login">登录</router-link>
            </li>
            <li>  
                <router-link to="/register">注册</router-link>
            </li>
            </ul>
        </div>
        </div>
    </nav>
</template>

<script>
export default {}
</script>
