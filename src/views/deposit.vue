<template>
    <div class="min-h-screen bg-gradient-to-r from-gray-900 to-gray-800 shadow-lg border-b border-gray-700/50 flex items-center justify-center p-4">
      <!-- Main Form -->
      <div class="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 class="text-2xl font-bold text-gray-800 text-center mb-4">
          Deposit and Withdraw from Deriv – Fast, Secure, and Reliable
        </h2>
  
        <!-- Toggle Switch for Deposit/Withdraw -->
        <div class="flex justify-center mb-6">
          <button
            @click="activeTab = 'deposit'"
            :class="{
              'bg-blue-500 text-white': activeTab === 'deposit',
              'bg-gray-200 text-gray-700': activeTab !== 'deposit',
            }"
            class="px-6 py-2 rounded-l-lg focus:outline-none transition duration-300 text-sm"
          >
            Deposit
          </button>
          <button
            @click="activeTab = 'withdraw'"
            :class="{
              'bg-green-500 text-white': activeTab !== 'deposit',
              'bg-gray-200 text-gray-700': activeTab === 'deposit',
            }"
            class="px-6 py-2 rounded-r-lg focus:outline-none transition duration-300 text-sm"
          >
            Withdraw
          </button>
        </div>
  
        <!-- Available Balance -->
        <div class="mb-6">
          <p class="text-gray-600 text-sm">Available Balance</p>
          <p class="text-3xl font-bold text-gray-800">${{ balance.toFixed(2) }}</p>
        </div>
  
        <!-- Deposit Section -->
        <div v-if="activeTab === 'deposit'">
          <h3 class="text-lg font-semibold text-gray-700 mb-4">Deposit from M-Pesa</h3>
  
          <!-- Amount (USD) Input -->
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-medium mb-1">Amount (USD)</label>
            <input
              v-model="depositAmount"
              type="number"
              placeholder="Enter amount"
              class="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
            />
          </div>
  
          <!-- M-Pesa Phone Number Input -->
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-medium mb-1">M-Pesa Phone Number</label>
            <input
              v-model="depositPhone"
              type="text"
              placeholder="Enter M-Pesa number"
              class="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
            />
            <p class="text-xs text-gray-500 mt-1">
              Enter the M-Pesa number you want to use for this deposit. You will receive an M-Pesa prompt to complete the transaction.
            </p>
          </div>
  
          <!-- Deposit Funds Button -->
          <button
            @click="depositFunds"
            class="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300 text-sm"
          >
            Deposit Funds
          </button>
        </div>
  
        <!-- Withdraw Section -->
        <div v-if="activeTab === 'withdraw'">
          <h3 class="text-lg font-semibold text-gray-700 mb-4">Withdraw to M-Pesa</h3>
  
          <!-- Amount (USD) Input -->
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-medium mb-1">Amount (USD)</label>
            <input
              v-model="withdrawAmount"
              type="number"
              placeholder="Enter amount"
              class="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
            />
          </div>
  
          <!-- M-Pesa Phone Number Input -->
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-medium mb-1">M-Pesa Phone Number</label>
            <input
              v-model="withdrawPhone"
              type="text"
              placeholder="Enter M-Pesa number"
              class="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
            />
          </div>
  
          <!-- Withdraw Funds Button -->
          <button
            @click="withdrawFunds"
            class="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition duration-300 text-sm"
          >
            Withdraw Funds
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        activeTab: "deposit", // Toggle between deposit and withdraw
        balance: 1000, // User's available balance
        depositAmount: 0, // Amount to deposit
        depositPhone: "", // M-Pesa number for deposit
        withdrawAmount: 0, // Amount to withdraw
        withdrawPhone: "", // M-Pesa number for withdrawal
      };
    },
    methods: {
      depositFunds() {
        if (this.depositAmount <= 0 || !this.depositPhone) {
          alert("Please enter a valid amount and phone number.");
          return;
        }
  
        // Simulate deposit API call
        this.balance += this.depositAmount;
        alert("Deposit successful!");
        this.depositAmount = 0;
        this.depositPhone = "";
      },
      withdrawFunds() {
        if (this.withdrawAmount <= 0 || !this.withdrawPhone) {
          alert("Please enter a valid amount and phone number.");
          return;
        }
  
        if (this.withdrawAmount > this.balance) {
          alert("Insufficient balance.");
          return;
        }
  
        // Simulate withdrawal API call
        this.balance -= this.withdrawAmount;
        alert("Withdrawal successful!");
        this.withdrawAmount = 0;
        this.withdrawPhone = "";
      },
    },
  };
  </script>
  
  <style>
  /* Add custom styles if needed */
  </style>