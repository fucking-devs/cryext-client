<script lang="ts" setup>

interface Transaction {
  SenderWallet: string;
  ReceiverWallet: string;
  CryptoCurrency: string;
  Quantity: number;
  DataTransaction: Date;
}

const transactions: Transaction[] = [
  {
    SenderWallet: '1fdsfsghlgdf',
    ReceiverWallet: '5gjhgdfgnhf',
    CryptoCurrency: 'AltCoin',
    Quantity: 52,
    DataTransaction: new Date('2024-10-30'),
  },
  {
    SenderWallet: '5gjhgdfgnhf',
    ReceiverWallet: '1fdsfsghlgdf',
    CryptoCurrency: 'Ton',
    Quantity: 228,
    DataTransaction: new Date('2024-10-29'),
  },
];
</script>

<template>
  <div class="transactions-container">
    <h3 class="transactions-title">Recent Transactions</h3>
    <div class="transactions-list">
      <div class="transaction-item" v-for="(transaction, index) in transactions" :key="index">
        <div class="transaction-details">
          <div class="wallet">Sender: {{ transaction.SenderWallet }}</div>
          <div class="wallet">Receiver: {{ transaction.ReceiverWallet }}</div>
          <div class="currency">Cryptocurrency: {{ transaction.CryptoCurrency }}</div>
          <div class="quantity">Amount: {{ transaction.Quantity }}</div>
          <div class="date">Date: {{ transaction.DataTransaction.toLocaleDateString('en-US') }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.transactions-container {
  position: fixed; 
  bottom: 100px; 
  left: 350px; 
  
  width: 600px;
  background-color: var(--sidebar-color);
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);

  .transactions-title {
    margin-bottom: 1rem;
    color: var(--vt-c-white);
    font-size: 24px;
    text-align: start;
    font-weight: bold;
    border-bottom: 1px solid var(--vt-c-divider-light-1);
    padding-bottom: 10px;

    &:hover {
      color: var(--vt-c-white);
    }
  }

  .transactions-list {
    display: flex;
    flex-direction: column;

    .transaction-item {
      display: flex;
      align-items: center;
      padding: 10px;
      transition: all 0.3s;

      &:hover {
        background-color: rgba(255,255,255,0.1);
      }

      .transaction-details {
        display: flex;
        flex-direction: column;

        .wallet {
          color: var(--vt-c-white);
          font-size: 16px;
          margin-bottom: 5px;
        }

        .currency {
          color: var(--vt-c-white);
          font-size: 16px;
          margin-bottom: 5px;
        }

        .quantity {
          color: var(--vt-c-white);
          font-size: 16px;
          margin-bottom: 5px;
        }

        .date {
          color: var(--vt-c-white);
          font-size: 16px;
          margin-bottom: 0; 
        }
      }
    }
  }
}
</style>