<template>
  <form class="form-horizontal" @submit.prevent="login">

        <div class="form-group" :class="{'has-error': errors.has('email')}">
            <label for="email" class="col-md-3 control-label">邮箱</label>

            <div class="col-md-7">
                <input v-model="email" 
                       v-validate data-vv-rules="required|email" data-vv-as="邮箱"
                       @focus = "clearBag"
                       id="email" type="email" class="form-control" name="email" required>
                <span class="help-block" v-show="errors.has('email')">{{ errors.first('email') }}</span>
            </div>
        </div>

        <div class="form-group" :class="{'has-error': errors.has('password') || bag.has('password')}">
            <label for="password" class="col-md-3 control-label">密码</label>

            <div class="col-md-7">
                <input v-model="password" 
                       v-validate data-vv-rules="required|min:6" data-vv-as="密码"
                       @focus = "clearBag"
                       id="password" type="password" class="form-control" name="password" required>
                <span class="help-block" v-show="errors.has('password')">{{ errors.first('password') }}</span>
                <span class="help-block" v-if="mismatchError">{{ bag.first('password:auth') }}</span>
            </div>
        </div>

        <div class="form-group">
            <div class="col-md-7 col-md-offset-3">
                <button type="submit" class="btn btn-primary">
                    登 录
                </button>
            </div>
        </div>
    </form>
</template>

<script>
import { ErrorBag } from 'vee-validate'

export default {
    data() {
        return {
            email: '',
            password: '',
            bag: new ErrorBag()
        }
    },
    computed: {
        mismatchError() {
            return this.bag.has('password:auth') && !this.errors.has('password')
        }
    },
    methods: {
        login() {
            this.$validator.validateAll().then(result => {
                if (result) {
                    let formData = {
                        email: this.email,
                        password: this.password
                    }
                    this.$store
                        .dispatch('loginRequest', formData)
                        .then(response => {
                            this.$router.push({ name: 'profile' })
                        })
                        .catch(error => {
                            if (error.response.status == 421) {
                                this.bag.add(
                                    'password',
                                    '邮箱或密码错误',
                                    'auth'
                                )
                            }
                            console.log(error.response)
                        })
                }
                // alert('Correct them errors!')
            })
        },
        clearBag() {
            this.bag.clear()
        }
    }
}
</script>