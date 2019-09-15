<template>
  <div>
    <!-- <header>
      <img src="../assets/Raiffeisen_Bank.svg" alt="logo" class="ml-3">


    </header>-->
    <div class="wrapper">
      <form class="form-signin">
        <h1 class="h3 mb-2 font-weight-normal">Вход</h1>
        <label for="inputEmail" class="sr-only">Телефон</label>
        <label for="inputPassword" class="sr-only">Password</label>
        <div>
          <input
            id="inputEmail"
            class="form-control mb-3"
            placeholder="Телефон"
            required
            autofocus
            v-model="email"
          />

          <input
            id="inputPassword"
            type="password"
            v-model="pass"
            class="form-control mb-3"
            placeholder="Пароль"
            required
            autofocus
          />
        </div>
        <input
          class="button btn btn-lg btn-enter btn-block btn-enter mt-5 mb-2"
          type="submit"
          data-type="top-left"
          data-status="success"
          value="Войти"
          @click="logIn"
        />
        <!-- <div class="reset mt-2">Зарегистрироваться</div> -->
        <router-link class="reset mt-2" to="/register">Зарегистрироваться</router-link>
      </form>

      <div
        class="notify bar-top"
        id="checkMail"
        data-notification-status="success"
      >Вам на почту была отправлена ссылка для входа. Проверьте, пожалуйста, Ваш почтовый ящик.</div>
    </div>
  </div>
</template>

//10.91.7.229:8080

<script>
import Axios from "axios";
export default {
  name: "Login",
  data() {
    return {
      email: "",
      pass: "",
      reg: false
    };
  },

  methods: {
    toRegister() {},
    logIn() {
      this.$store.dispatch("LOG_IN", { email: this.email, pass: this.pass }).then(() =>{this.$router.push('/home')});
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
/* header {
  width: 100%;
  height: 10vh;
  display: flex;
  align-content: center;
}

header>img{

} */

@import url("https://fonts.googleapis.com/css?family=Montserrat&display=swap");
* {
  font-family: "Montserrat", sans-serif;
}

.wrapper {
  height: 100vh;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  padding-bottom: 40px;
  background-color: #f5f5f5;
}

.reset {
  color: black;
}

.reset:hover {
  cursor: pointer;
  text-decoration: underline;
}

.form-signin {
  display: flex;
  flex-direction: column;
  align-content: space-between;
  padding: 10px;
  border: none;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.2);
  background-color: white;
}

.button:hover {
  background-color: #ffec70 !important;
}

h1,
p {
  text-align: center;
}

.form-signin {
  width: 100%;
  max-width: 450px;
  padding: 15px;
  margin: auto;
}
.form-signin .checkbox {
  font-weight: 400;
}
.form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;

  padding: 10px;
  font-size: 16px;
  text-align: center;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin > input[type="submit"] {
  color: black;
  font-weight: 900;
}

@keyframes fade-in {
  from {
    visibility: hidden;
    opacity: 0;
  }
  to {
    visibility: visible;
    opacity: 1;
  }
}
@keyframes slide-show {
  to {
    transform: translateY(0);
  }
}

.button {
  padding: 15px 20px;
  border: 2px solid white;
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  text-decoration: none;
  color: white;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.2);

  background-color: #ffdb00 !important;
  border: none !important;
}
.button:hover,
.button.is-active {
  color: #be93c5;
  /* background-color: #0033FF; */
}
.top-left {
  position: fixed;
  z-index: 1000;
  display: flex;
  align-items: center;
  padding: 20px;
  color: #fff;
  line-height: 1.3;
  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.35);
  max-width: 350px;
  margin: 20px;
  top: 0;
  left: 0;
  transform: translateX(-420px);
}
@keyframes slide-in-left {
  to {
    transform: translateX(0);
  }
}
.top-left.do-show {
  animation: slide-in-left 1s ease-in-out forwards,
    slide-in-left 1s ease-in-out reverse forwards 5s;
}

.top-left[data-notification-status="success"] {
  background-color: #66bb6a;
}
.top-left[data-notification-status="success"]:before {
  content: "";
  display: block;
  width: 30px;
  height: 30px;
  min-width: 30px;
  margin-right: 20px;
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M12 3.984c4.407 0 8.016 3.609 8.016 8.016 0 4.406-3.608 8.016-8.016 8.016S3.984 16.407 3.984 12 7.593 3.984 12 3.984m0-2C6.478 1.984 1.984 6.477 1.984 12c0 5.521 4.493 10.016 10.016 10.016S22.016 17.522 22.016 12c0-5.523-4.495-10.016-10.016-10.016zm0 2c4.407 0 8.016 3.609 8.016' fill='%2339813C'/%3E%3Cpath d='M10.477,13.136l5.085-5.085l1.406,1.406l-6.492,6.492l-3.446-3.445l1.406-1.406L10.477,13.136z' fill='%2339813C'/%3E%3C/svg%3E")
    center / cover no-repeat;
}

.bar-top {
  position: fixed;
  z-index: 1000;
  display: flex;
  align-items: center;
  padding: 20px;
  color: #fff;
  line-height: 1.3;
  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.35);
  top: 0;
  right: 0;
  left: 0;
  width: 100%;
  transform: translateY(-100%);
}
.bar-top.do-show {
  animation: slide-show 1s forwards, slide-show 1s reverse forwards 3s;
}

.bar-top[data-notification-status="success"] {
  background-color: #66bb6a;
}
.bar-top[data-notification-status="success"]:before {
  content: "";
  display: block;
  width: 30px;
  height: 30px;
  min-width: 30px;
  margin-right: 20px;
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M12 3.984c4.407 0 8.016 3.609 8.016 8.016 0 4.406-3.608 8.016-8.016 8.016S3.984 16.407 3.984 12 7.593 3.984 12 3.984m0-2C6.478 1.984 1.984 6.477 1.984 12c0 5.521 4.493 10.016 10.016 10.016S22.016 17.522 22.016 12c0-5.523-4.495-10.016-10.016-10.016zm0 2c4.407 0 8.016 3.609 8.016' fill='%2339813C'/%3E%3Cpath d='M10.477,13.136l5.085-5.085l1.406,1.406l-6.492,6.492l-3.446-3.445l1.406-1.406L10.477,13.136z' fill='%2339813C'/%3E%3C/svg%3E")
    center / cover no-repeat;
}
</style>