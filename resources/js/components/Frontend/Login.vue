<template>
    <div class="modal-dialog text-center">
        <div class="col-sm-11 main-section">
            <div class="modal-content">

                <div class="col-12 user-img">
                    <img src="../../../../public/img/global/girl.png" alt="dfughu">
                </div>

                <form @submit.prevent="authenticate" class=" col-12 mt-n3">
                    <div v-if="$route.query.account" class="text-center text-success">Your account has been activated.
                        Now you can proceed to login.
                    </div>
                    <div v-if="$route.query.reset" class="text-center text-success">Password reset is successful. Now
                        you can proceed to login.
                    </div>
                    <div class="text-center text-success">
                        <!--{{ message }}-->
                    </div>

                    <div class="input-group form-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text"><i class="fas fa-user"></i></span>
                        </div>
                        <input type="email" v-model="form.email" class="form-control" placeholder="Email Address">
                    </div>
                    <div class="input-group form-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text"><i class="fas fa-key"></i></span>
                        </div>
                        <input type="password" v-model="form.password" class="form-control" placeholder="Password">
                    </div>

                    <div class="row align-items-center remember ml-1">
                        <input type="checkbox">&nbsp;Remember Me
                    </div>
                    <div class="form-group align-items-center mt-3">
                        <input type="submit" class="btn btn-primary btn-block" value="Login">
                    </div>
                    <div class="form-group row invalid-feedback d-block">
                        {{ error }}
                    </div>
                    <p class="password-reset mt-3">
                        <router-link :to="{ name:'password-reset-form' }">
                            Forgot your password?
                        </router-link>
                    </p>
                </form>
                <social-login class="social-login mb-3 in-registration-box"
                              :url="url">
                </social-login>

                <p class="signup mt-3">Don't have an account?
                    <router-link :to="{ name:'register' }" class="signup-link">Signup</router-link>
                </p>
            </div>
        </div>
    </div>

</template>

<script>

    import {login} from "./helpers/auth";

    export default {
        name: 'login',
        data() {
            return {
                form: {
                    email: '',
                    password: ''
                },
                error: null,
                url: '',
                props: ['url'],
            };
        },
        methods: {
            authenticate() {
                this.$Progress.start();
                this.$store.dispatch('login');

                login(this.$data.form)
                    .then((res) => {
                        if (res.status !== 421) {
                            if (res.status !== 420) {
                                if (res.status !== 422) {
                                    if (res.access_token) {
                                        this.$Progress.finish();
                                        this.$store.commit("loginSuccess", res);
                                        this.$router.push('/CMS');
                                    } else {
                                        this.error = 'Invalid Access Token';
                                    }
                                } else {
                                    this.error = 'Your account is not active yet. Please activate your account';
                                }
                            } else {
                                this.error = 'You are not a user';
                            }
                        } else {
                            this.error = 'Invalid email or password';
                        }
                    })
                    .catch((error) => {
                        this.$Progress.fail();
                        this.$store.commit("loginFailed", {error});
                    })
            }
        }
    }
</script>

<style scoped>
    input {
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        border-radius: 5px;
    }

    .modal-dialog {
        margin-top: 6rem;
    }

    .modal-content {
        box-shadow: 0px 0px 6px #B4B4B4;
    }

    .modal-content img {
        height: 100px;
        width: 100px;
        transform: translate(0, -56px);
    }

    .form-group .btn {
        background-color: #38A1DA;
        border: none;
    }

    .or {
        font-size: 15px;
    }

    .input-group-text {
        background-color: #38A1DA;
    }

    .input-group-text i {
        color: #fff;
    }

    .social-icon {
        color: #38A1DA;
    }

    .signup {
        font-size: 15px;
    }

    .signup .signup-link {
        color: #38A1DA;
    }


</style>