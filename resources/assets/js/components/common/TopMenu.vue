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
            <li v-if="!user.authenticated">
                <router-link to="/login">登录</router-link>
            </li>
            <li v-if="!user.authenticated">  
                <router-link to="/register">注册</router-link>
            </li>

            <li v-if="user.authenticated">  
                <router-link to="/profile">个人中心</router-link>
            </li>
            <li v-if="user.authenticated">  
                <a href="#">退出</a>
            </li>

            </ul>
        </div>
        </div>
    </nav>
</template>

<script>
import { mapState } from 'vuex'
export default {
    computed: {
        ...mapState({
            user: state => state.AuthUser
        })
    }
}
</script>
