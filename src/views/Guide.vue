
<template>
    <div class="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div class="max-w-4xl mx-auto">
        <!-- Header -->
        <div class="text-center mb-12">
          <h1 class="text-4xl font-bold text-indigo-600 mb-4">
            Complete Guide to Using Deriv
          </h1>
          <p class="text-xl text-gray-600">
            Your comprehensive guide to depositing, trading, and using bots
          </p>
        </div>
  
        <!-- Table of Contents -->
        <div class="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 class="text-2xl font-semibold text-gray-800 mb-4">Quick Navigation</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div v-for="(section, index) in sections" :key="index"
              class="p-4 border rounded-lg hover:bg-indigo-50 transition-colors cursor-pointer"
              @click="scrollToSection(section.id)">
              <h3 class="text-lg font-medium text-indigo-600">{{ section.title }}</h3>
              <p class="text-sm text-gray-600 mt-2">{{ section.description }}</p>
            </div>
          </div>
        </div>
  
        <!-- Main Content -->
        <div class="space-y-8">
          <section v-for="(section, index) in sections" :key="index" :id="section.id"
            class="bg-white rounded-lg shadow-lg p-6 transition-all hover:shadow-xl">
            <h2 class="text-2xl font-bold text-gray-800 mb-6">{{ section.title }}</h2>
            <div class="prose max-w-none">
              <div v-for="(subsection, subIndex) in section.content" :key="subIndex" class="mb-6">
                <h3 class="text-xl font-semibold text-gray-700 mb-3">{{ subsection.title }}</h3>
                <div class="space-y-4">
                  <template v-if="subsection.type === 'list'">
                    <ul class="list-disc list-inside space-y-2">
                      <li v-for="(item, itemIndex) in subsection.items" :key="itemIndex"
                        class="text-gray-600 ml-4">
                        {{ item }}
                      </li>
                    </ul>
                  </template>
                  <template v-else>
                    <p class="text-gray-600">{{ subsection.content }}</p>
                  </template>
                </div>
              </div>
            </div>
          </section>
        </div>
  
        <!-- Risk Warning -->
        <div class="mt-12 bg-red-50 border border-red-200 rounded-lg p-6">
          <h3 class="text-xl font-semibold text-red-700 mb-3">Important Risk Warning</h3>
          <p class="text-red-600">
            Trading involves substantial risk of loss. Never invest more than you can afford to lose.
            Past performance does not guarantee future results.
          </p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'DerivGuide',
    data() {
      return {
        sections: [
          {
            id: 'getting-started',
            title: '1. Getting Started with Deriv',
            description: 'Account creation and platform selection',
            content: [
              {
                title: '1.1 Create an Account',
                type: 'list',
                items: [
                  'Visit the Deriv website and click on "Create free account"',
                  'Fill in your details and verify your email address',
                  'Complete the KYC process'
                ]
              },
              {
                title: '1.2 Choose a Trading Platform',
                type: 'list',
                items: [
                  'Deriv MT5: For advanced trading',
                  'Deriv Trader: For binary options',
                  'Deriv Bot: For automated trading',
                  'Deriv GO: For mobile trading'
                ]
              }
            ]
          },
          {
            id: 'depositing',
            title: '2. Depositing Funds',
            description: 'Payment methods and deposit process',
            content: [
              {
                title: '2.1 Payment Methods',
                type: 'list',
                items: [
                  'Credit/debit cards (Visa, MasterCard)',
                  'E-wallets (Skrill, Neteller, SticPay)',
                  'Cryptocurrencies (Bitcoin, Ethereum, USDT)',
                  'Bank wire transfers'
                ]
              },
              {
                title: '2.2 How to Deposit',
                type: 'list',
                items: [
                  'Log in to your Deriv account',
                  'Click on "Cashier" and then "Deposit"',
                  'Choose your preferred payment method',
                  'Enter amount and follow instructions'
                ]
              }
            ]
          },
          // Add more sections following the same pattern...
        ]
      }
    },
    methods: {
      scrollToSection(id) {
        const element = document.getElementById(id)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }
    }
  }
  </script>