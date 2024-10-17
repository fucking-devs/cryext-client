<template>
  <div class="balance-container">
    <div class="total-balance">Общий баланс: $62.39</div>
    <div class="balance-list">
      <div class="balance-item" v-for="coin in coins" :key="coin.name">
        <img :src="coin.image" alt="coin.name" class="coin-image" />
        <span class="coin-text">{{ coin.name }}: {{ coin.amount }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface Coin {
  name: string;
  amount: number;
  image: string;
}

const coins: Coin[] = [
  { name: 'USDT', amount: 3, image: new URL('@/assets/usdt.png', import.meta.url).href },
  { name: 'AltCoin', amount: 19, image: new URL('@/assets/altcoin.png', import.meta.url).href },
  { name: 'TON', amount: 7, image: new URL('@/assets/ton.png', import.meta.url).href },
  { name: 'Bitcoin', amount: 0.0001, image: new URL('@/assets/bitcoin.png', import.meta.url).href },
];
</script>

<style scoped lang="scss">
.balance-container {
  position: fixed;
  top: 100px;
  right: 10px;
  width: 30%;
  background-color: var(--sidebar-color);
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);

  .total-balance {
    margin-bottom: 1rem;
    color: var(--vt-c-white);
    font-size: 20px;
    text-align: center;
    font-weight: normal;
    cursor: pointer;
    border-bottom: 1px solid var(--vt-c-divider-light-1);
    padding-bottom: 10px;

    &:hover {
      color: var(--link-mute);
      text-shadow: 0 0 6px rgba(197,174,174,0.8);
    }
  }

  .balance-list {
    display: flex;
    flex-direction: column;
    gap: 10px;

    .balance-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px;
      border-bottom: 1px solid var(--vt-c-divider-light-1);
      transition: all 0.3s;

      &:last-child {
        border-bottom: none;
      }

      &:hover {
        background-color: rgba(255,255,255,0.1);
        box-shadow: inset 0 -2px rgba(255,255,255,0.3);
      }

      .coin-image {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin-right: 10px;
        object-fit: cover;
        cursor: pointer;

        &:hover {
          transform: scale(1.1);
        }
      }
      
      .coin-text {
        color: var(--vt-c-white);
        font-size: 18px;
        cursor: pointer;

        transition: all 0.3s;

        &:hover {
          color: var(--link-mute);
          text-shadow: 0 0 6px rgba(197,174,174,0.8);
        }
      }
    }
  }
}
</style>