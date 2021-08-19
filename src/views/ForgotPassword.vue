<template>
<div class="reset-password">
    <Modal v-if="modalActive" :modalMessage="modalMessage" v-on:close-modal="closeModal" />
    <Loading v-if="loading" />
    <div class="form-wrap">
        <form action="" class="reset"> 
            <h2>Reset your password</h2>
            <div class="inputs">
                <div class="input">
                    <input type="text" placeholder="Email" v-model="email" />
                    <email class="icon" />
                </div>
        </div>
            <button>Reset Password</button>
        </form>
    </div>  
</div>
</template>



<script>
import Modal from "../components/Modal";
import email from "../assets/Icons/envelope-regular.svg";
import Loading from "../components/Loading"
export default {
    name: "ForgotPassword",
    components: {
        Modal,
        email,
        Loading
    },
    data(){
        return{
            email: null,
            modalActive: null,
            modalMessage: "",
            loading: null,

        }
    },
    methods:{
        closeModal(){
            this.modalActive = !this.modalActive;
            this.email = "";
        }
    }
}
</script>

<style lang="scss" scoped>
.reset-password {
  position: relative;
  .form-wrap {
    .reset {
      h2 {
        margin-bottom: 8px;
      }
      p {
        text-align: center;
        margin-bottom: 32px;
      }
    }
  }
}
</style>