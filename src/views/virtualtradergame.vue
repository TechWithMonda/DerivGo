<template>
    <div class="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center p-4">
      <div class="bg-white shadow-2xl rounded-2xl w-full max-w-md p-6 space-y-6">
        <h1 class="text-3xl font-bold text-center text-gray-800">Virtual Trader</h1>
        
        <!-- Balance Section -->
        <div class="bg-blue-50 rounded-xl p-4 text-center">
          <div class="flex justify-between">
            <div>
              <p class="text-sm text-gray-600">Your Balance</p>
              <p class="text-2xl font-bold text-blue-700">{{ balance.toFixed(2) }}</p>
            </div>
            <div>
              <p class="text-sm text-gray-600">Portfolio Value</p>
              <p class="text-2xl font-bold text-green-700">{{ portfolioValue.toFixed(2) }}</p>
            </div>
          </div>
        </div>
  
        <!-- Assets Section -->
        <div class="space-y-4">
          <h2 class="text-xl font-semibold text-gray-700">Available Assets</h2>
          <div 
            v-for="(asset, index) in assets" 
            :key="asset.name" 
            class="bg-white border border-gray-200 rounded-lg p-4 flex items-center justify-between hover:shadow-md transition-shadow"
          >
            <div>
              <p class="font-medium text-gray-800">{{ asset.name }}</p>
              <p class="text-sm text-gray-600">{{ asset.price.toFixed(2) }}</p>
            </div>
            
            <div class="flex items-center space-x-2">
              <span 
                v-if="asset.change !== 0"
                :class="[
                  'flex items-center text-sm font-medium',
                  asset.change > 0 ? 'text-green-600' : 'text-red-600'
                ]"
              >
                <svg 
                  v-if="asset.change > 0" 
                  xmlns="http://www.w3.org/2000/svg" 
                  class="h-4 w-4 mr-1" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor"
                >
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                  <polyline points="17 6 23 6 23 12"></polyline>
                </svg>
                <svg 
                  v-else 
                  xmlns="http://www.w3.org/2000/svg" 
                  class="h-4 w-4 mr-1" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor"
                >
                  <polyline points="23 18 13.5 8.5 8.5 13.5 1 6"></polyline>
                  <polyline points="17 18 23 18 23 12"></polyline>
                </svg>
                {{ Math.abs(asset.change).toFixed(2) }}%
              </span>
              <span class="text-sm text-gray-600">Owned: {{ asset.owned }}</span>
            </div>
            
            <div class="flex space-x-2">
              <button 
                @click="buyAsset(index)"
                :disabled="balance < asset.price"
                class="bg-blue-500 text-white px-3 py-1 rounded-md disabled:opacity-50 hover:bg-blue-600 transition-colors"
              >
                Buy
              </button>
              <button 
                @click="sellAsset(index)"
                :disabled="asset.owned === 0"
                class="bg-green-500 text-white px-3 py-1 rounded-md disabled:opacity-50 hover:bg-green-600 transition-colors"
              >
                Sell
              </button>
            </div>
          </div>
        </div>
  
        <!-- Action Buttons -->
        <div class="flex justify-between space-x-4">
          <button 
            @click="nextDay"
            class="flex-1 bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600 transition-colors flex items-center justify-center"
          >
            Next Day
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              class="h-5 w-5 ml-2" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor"
            >
              <path d="M9 18l6-6-6-6"></path>
            </svg>
          </button>
          <button 
            @click="resetGame"
            class="flex-1 bg-gray-200 text-gray-700 py-2 rounded-lg hover:bg-gray-300 transition-colors flex items-center justify-center"
          >
            Reset
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              class="h-5 w-5 ml-2" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor"
            >
              <path d="M1 4v6h6"></path>
              <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'VirtualTraderGame',
    data() {
      return {
        balance: 10000,
        initialBalance: 10000,
        assets: [
          { name: "Bitcoin", price: 50000, owned: 0, change: 0 },
          { name: "Ethereum", price: 3000, owned: 0, change: 0 },
          { name: "Tesla Stock", price: 800, owned: 0, change: 0 },
        ]
      }
    },
    computed: {
      portfolioValue() {
        return this.assets.reduce((total, asset) => {
          return total + asset.price * asset.owned;
        }, 0);
      }
    },
    methods: {
      buyAsset(index) {
        const asset = this.assets[index];
        if (this.balance >= asset.price) {
          this.balance -= asset.price;
          asset.owned += 1;
        }
      },
      sellAsset(index) {
        const asset = this.assets[index];
        if (asset.owned > 0) {
          this.balance += asset.price;
          asset.owned -= 1;
        }
      },
      nextDay() {
        this.assets.forEach((asset) => {
          const change = (Math.random() - 0.5) * 0.2;
          asset.change = change * 100;
          asset.price *= 1 + change;
        });
      },
      resetGame() {
        this.balance = this.initialBalance;
        this.assets.forEach(asset => {
          asset.owned = 0;
          asset.change = 0;
          asset.price = asset.name === "Bitcoin" ? 50000 : 
                        asset.name === "Ethereum" ? 3000 : 800;
        });
      }
    }
  }
  </script>
  
  <style scoped>
  /* Tailwind CSS is assumed to be included in the project */
  </style>