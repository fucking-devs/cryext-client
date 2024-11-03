


<script>
import Card from './Card.vue';

export default {
  components: {
    Card
    
  },
  data() {
    return {
      cards: [
        { id: 1, title: 'Новость №1', content: 'Ветеран рынка мемкоинов смог обойти биткоин по темпам роста' },
        { id: 2, title: 'Новость №2', content: 'Messari: Инвестиции в экосистему Solana выросли на 54%' },
        { id: 3, title: 'Новость №3', content: 'ChatGPT спрогнозировал, когда биткоин подорожает до $100 000' }
      ]
    };
  }
}
</script>
<template>
  <div>
    <card v-for="card in cards" :title="card.title" :content="card.content"  :key="card.id"/>
  </div>
</template>