<template>
    <div>
      <button @click="createTransactionAndPay">Pay!</button>
    </div>
  </template>
  
  <script>
    import { mapState, mapActions } from 'pinia';
    import { usePaymentStore } from '../stores/midtrans';
  
  export default {
    computed: {
        ...mapState(usePaymentStore, ['transactionToken'])
    }
  }
  </script>
  