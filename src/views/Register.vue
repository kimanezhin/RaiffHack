<template>
  <div>
    <!-- <header>
      <img src="../assets/Raiffeisen_Bank.svg" alt="logo" class="ml-3">


    </header>-->
    <div class="wrapper">
      <form class="form-signin">
        <h1 class="h3 mb-2 font-weight-normal">Регистрация</h1>
        <!-- <label for="inputEmail" class="sr-only">Email address</label> -->
        <!-- <label for="inputPassword" class="sr-only">Password</label> -->
        <!-- <div class="name">
          <input
            class="form-control mb-3 mr-1"
            placeholder="Имя"
            required
            autofocus
            v-model="email"
          />

          <input type="text" class="form-control mb-3 mr-1" placeholder="Фамилия" required />
          <input type="text" class="form-control mb-3 mr-1" placeholder="Отчество" />
        </div> -->

        <!-- <input type="text" class="form-control mb-2" placeholder="ИНН" required />

        <div class="buisness_choose mb-2">
          <div class="person">Юр. лицо</div>
          <div class="person">Самозанятый</div>
          <div class="person">ИП</div>
          <div class="slider"></div>
        </div> -->

        <!-- <input type="text" class="form-control mb-2" placeholder="Название организации" required />
        <div class="d-flex">
          <input
            type="email"
            class="form-control mb-2 mr-1"
            placeholder="Электронная почта"
            required
          />
          <input type="tel" class="form-control mb-2" placeholder="Телефон" required />
        </div> -->
        <input type="text" class = "form-control mb-2" placeholder="Номер карты">
        <input type="password" class="form-control mb-2" placeholder="Пароль" required />
        <input
          class="button btn btn-lg btn-enter btn-block btn-enter mt-5 mb-2"
          type="submit"
          data-type="top-left"
          data-status="success"
          value="Зарегистрироваться"
        />
      </form>

      <div
        class="notify bar-top"
        id="checkMail"
        data-notification-status="success"
      >Вам на почту была отправлена ссылка для входа. Проверьте, пожалуйста, Ваш почтовый ящик.</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      email: "",
      reg: false
    };
  },
  methods: {
      moveSlider(px){
          let slider = document.getElementsByClassName('slider')[0];

          slider
      }
  },
};
</script>

<style scoped>
.name {
  display: flex;
}

.legal_person{
transform: translate()
}

.ip{

}

.ent{

}

.buisness_choose {
  display: flex;
  position: relative;
  height: 50px;
  justify-content: space-between;
}


.person {
  border: 0.5px solid #c8c8c8;
  border-radius: 5px;
  width: 30%;
}
.slider {
  position: absolute;
  height: 5px;
  bottom: 0;
  left: calc(10%/6);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  width: 30%;
  background-color:#ffea62; 
}
</style>