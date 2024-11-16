<script lang="ts" setup>
interface Coin {
  name: string;
  amount: number;
  image: string;
}

const user: { 
  balance: number;
  currencies: Coin[];
} = {
  balance: 62.39,
  currencies: [
    { name: 'USDT', amount: 3, image: new URL('@/assets/usdt.png', import.meta.url).href },
    { name: 'AltCoin', amount: 19, image: new URL('@/assets/altcoin.png', import.meta.url).href },
    { name: 'TON', amount: 7, image: new URL('@/assets/ton.png', import.meta.url).href },
    { name: 'Bitcoin', amount: 0.0001, image: new URL('@/assets/bitcoin.png', import.meta.url).href },
  ]
}
</script>

<template>
  <div class="balance-container">
    <div class="total-balance">${{ user.balance.toFixed(2) }}</div>
    <div class="balance-list">
      <div class="balance-item" v-for="coin in user.currencies" :key="coin.name">
        <img :src="coin.image" alt="coin.name" class="coin-image" />
        <div class="coin-details">
          <div class="coin-name">{{ coin.name }}</div>
          <div class="coin-amount">{{ coin.amount }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.balance-container {
  width: 600px;
  background-color: var(--sidebar-color);
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  margin-top: 100px;

  .total-balance {
    margin-bottom: 1rem;
    color: var(--vt-c-white);
    font-size: 40px;
    text-align: start;
    font-weight: normal;
    border-bottom: 1px solid var(--vt-c-divider-light-1);
    padding-bottom: 10px;

    &:hover {
      color: var(--vt-c-white);
    }
  }

  .balance-list {
    display: flex;
    flex-direction: column;

    .balance-item {
      display: flex;
      align-items: center;
      justify-content: space-between; 
      padding: 10px;
      transition: background-color .3s; 
      border-bottom: 1px solid var(--vt-c-divider-light-1); 
      cursor: pointer; 

      &:last-child {
        border-bottom: none;
      }

      &:hover {
        background-color: rgba(255,255,255,0.1); 
      }

      .coin-image {
        width: 52px; 
        height: 52px; 
        border-radius: 50%; 
        margin-right: 10px; 
        object-fit: cover; 
      }

      .coin-details {
        display: flex;
        justify-content: space-between;        
        align-items: center;
        width: 100%;
        .coin-name {
          color: var(--vt-c-white); 
          font-size: 18px; 
          font-weight: bold; 
        }

        .coin-amount {
          color: var(--vt-c-white-soft); 
          font-size: 16px; 
         
          margin-left:auto; 
          text-align:right; 
        }
      }
    }
  }
}
</style>