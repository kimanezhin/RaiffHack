<template>
  <div class="home">
    <Header class="ml-auto" />
    <div class="cards">
      <Card v-for="card in cards" :key="card.cardId" :cardItem="card" />
      
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "../components/Header";
import Card from "../components/Card";
import Axios from 'axios'
import { BulmaAccordion, BulmaAccordionItem } from "vue-bulma-accordion";
export default {
  name: "home",
  components: {
    Header,
    Card,
    BulmaAccordion,
    BulmaAccordionItem
  },
  data() {
    return {
      cards:[]
    }
  },
  mounted(){
    this.$store.dispatch("GET_CARDS").then(() =>{
      this.cards = this.$store.getters.getCards;
    })
  }
};
</script>

<style scoped>
.home {
  background-color: #f5f5f5;
  height: 100vh;
  width: 100%;
}
.cards {
  display: flex;
  flex-direction: column;
}
.cards > *:not(:first-child) {
  margin-top: 20px;
}
</style>