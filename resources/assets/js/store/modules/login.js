import JwtToken from '../../helpers/jwt'
import * as types from '../mutation-type'

export default {
    actions: {
        loginRequest({ dispatch }, formData) {
            return axios
                .post('/api/login', formData)
                .then(response => {
                    console.log(response.data)
                    JwtToken.setToken(response.data.token)
                    dispatch('setAuthUser')
                })
                .catch(error => {
                    console.log(error.response.data)
                })
        },
        logoutRequest({ dispatch }) {
            return axios
                .post('/api/logout')
                .then(response => {
                    JwtToken.removeToken()
                    dispatch('unsetAuthUser')
                })
                .catch(error => {
                    console.log(error.response.data)
                })
        }
    }
}
