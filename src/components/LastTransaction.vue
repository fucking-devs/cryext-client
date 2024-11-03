<script lang="ts" setup>
interface Transaction {
  SenderWallet: string;
  ReceiverWallet: string;
  CryptoCurrency: string;
  Quantity: number;
  DataTransaction: Date;
  Image: string; 
}

const wallets = [
  '1fdsfsghlgdf',
  '5gjhgdfgnhf',
  '1a2b3c4dgfdg',
  '6f5gfdd3c2b1a',
  '7gfdsi0g1k2l'
];

const transactions: Transaction[] = [
  {
    SenderWallet: wallets[0],
    ReceiverWallet: wallets[1],
    CryptoCurrency: 'AltCoin',
    Quantity: 52,
    DataTransaction: new Date('2024-01-15'),
    Image: new URL('@/assets/altcoin.png', import.meta.url).href 
  },
  {
    SenderWallet: wallets[1],
    ReceiverWallet: wallets[0],
    CryptoCurrency: 'TON',
    Quantity: 228,
    DataTransaction: new Date('2023-12-10'),
    Image: new URL('@/assets/ton.png', import.meta.url).href 
  },
  {
    SenderWallet: wallets[2],
    ReceiverWallet: wallets[3],
    CryptoCurrency: 'USDT',
    Quantity: 15,
    DataTransaction: new Date('2023-11-20'),
    Image: new URL('@/assets/usdt.png', import.meta.url).href 
  },
  {
    SenderWallet: wallets[3],
    ReceiverWallet: wallets[2],
    CryptoCurrency: 'Bitcoin',
    Quantity: 0.005,
    DataTransaction: new Date('2023-10-25'),
    Image: new URL('@/assets/bitcoin.png', import.meta.url).href 
  },
  {
    SenderWallet: wallets[0],
    ReceiverWallet: wallets[4],
    CryptoCurrency: 'AltCoin',
    Quantity: 30,
    DataTransaction: new Date('2023-09-30'),
    Image: new URL('@/assets/altcoin.png', import.meta.url).href 
  },
  {
    SenderWallet: wallets[4],
    ReceiverWallet: wallets[0],
    CryptoCurrency: 'TON',
    Quantity: 50,
    DataTransaction: new Date('2023-08-15'),
    Image: new URL('@/assets/ton.png', import.meta.url).href 
  },
  {
    SenderWallet: wallets[1],
    ReceiverWallet: wallets[2],
    CryptoCurrency: 'Bitcoin',
    Quantity: 0.01,
    DataTransaction: new Date('2023-07-05'),
    Image: new URL('@/assets/bitcoin.png', import.meta.url).href 
  },
];
</script>

<template>
  <div class="transactions-container">
    <h3 class="transactions-title">Recent Transactions</h3>
    <div class="transactions-list">
      <div class="transaction-item" v-for="(transaction, index) in transactions" :key="index">
        <img :src="transaction.Image" alt="transaction.CryptoCurrency" class="transaction-image" />
        <div class="transaction-details">
          <div class="wallet">Sender: {{ transaction.SenderWallet }}</div>
          <div class="wallet">Receiver: {{ transaction.ReceiverWallet }}</div>
          <div class="date">Date: {{ transaction.DataTransaction.toLocaleDateString('en-US') }}</div>
        </div>
        <div class="quantity">
          <div class="currency-name">{{ transaction.CryptoCurrency }}</div>
          <div class="amount">{{ transaction.Quantity }}</div>
          
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.transactions-container {
  width: 600px;
  background-color: var(--sidebar-color);
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  
  margin-left: 150px; 
}

.transactions-title {
  margin-bottom: 1rem;
  color: var(--vt-c-white);
}

.transactions-list {
  display: flex;
  flex-direction: column;
  max-height: 300px; 
  overflow-y: auto; 
  
   &::-webkit-scrollbar {
     width:8px; 
      
     background-color:variables(--vt-c-divider-light-2);
     border-radius :10px; 
   }

   &::-webkit-scrollbar-thumb {
    background-color:variables(--vt-c-black-soft-2);  
     border-radius :10px; 
   }

   .transaction-item {
     display:flex;
     align-items:center; 
     justify-content :space-between; 
     padding :10px;
     border-bottom :1px solid var(--vt-c-divider-light-1);

     &:last-child {
       border-bottom:none;
     }

     .transaction-image {
       width :50px; 
       height :50px; 
       border-radius :50%; 
       margin-right :10px; 
     }

     .transaction-details {
       display:flex;
       flex-direction :column; 
       

       .wallet {
         color :var(--vt-c-white);
         font-size :12px;
        
       }
       .date {
        color :var(--vt-c-text-dark-2);
         font-size :8px;
         
       }
     }

     .quantity {
       color :var(--vt-c-white);
       font-size :12px;
       margin-left:auto; 
       text-align: right;
       
       .currency-name { 
         color :var(--vt-c-white-soft); 
         font-size :14px; 
          
         font-weight: bold;
       }
     }
   }
}
</style>