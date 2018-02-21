import JwtToken from '../../helpers/jwt'

export default {
    actions: {
        loginRequest({ dispatch }, formData) {
            axios
                .post('/api/login', formData)
                .then(response => {
                    console.log(response.data)
                    JwtToken.setToken(response.data.token)
                    dispatch('setAuthUser')
                })
                .catch(error => {
                    console.log(error)
                })
        }
    }
}
