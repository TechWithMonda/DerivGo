<template>
    <div class="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8">
      <!-- Elegant About Section -->
      <div class="max-w-6xl mx-auto mb-20">
        <div class="text-center mb-16">
          <h1 class="text-3xl font-bold mb-6">
            Advanced Trading Automation
          </h1>
          <p class="text-gray-400 text-lg max-w-3xl mx-auto">
            Experience the next evolution of trading with our sophisticated algorithmic solutions, 
            designed exclusively for Deriv markets
          </p>
        </div>
  
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <!-- Features Card -->
          <div class="bg-gray-800/50 border border-gray-700 backdrop-blur-sm rounded-xl p-6">
            <h3 class="text-xl mb-6 text-white">Why Choose Our Bots</h3>
            <ul class="space-y-4">
              <li v-for="feature in mainFeatures" :key="feature" class="flex items-center text-gray-300">
                <span class="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                {{ feature }}
              </li>
            </ul>
          </div>
  
          <!-- Getting Started Card -->
          <div class="bg-gray-800/50 border border-gray-700 backdrop-blur-sm rounded-xl p-6">
            <h3 class="text-xl mb-6 text-white">Getting Started</h3>
            <div class="space-y-6">
              <div class="space-y-4">
                <div v-for="(step, index) in steps" :key="index" class="flex items-start text-gray-300">
                  <span class="font-bold mr-2">{{ index + 1 }}.</span>
                  {{ step }}
                </div>
              </div>
              
              <a
                href="https://deriv.com/signup/"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
              >
                Create Deriv Account
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Robot Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div 
          v-for="robot in robots" 
          :key="robot.id" 
          class="bg-gray-800/50 border border-gray-700 backdrop-blur-sm rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300"
        >
          <div class="space-y-4 mt-4">
            <h3 class="text-xl font-bold">{{ robot.name }}</h3>
            <p class="text-gray-400">{{ robot.description }}</p>
            <ul class="space-y-2">
              <li 
                v-for="(feature, index) in robot.features" 
                :key="index"
                class="flex items-center text-gray-300"
              >
                <span class="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                {{ feature }}
              </li>
            </ul>
            <div class="flex justify-between items-center mt-6">
              <span class="text-2xl font-bold text-green-400">
                ${{ robot.price }}
              </span>
              <a
                :href="robot.fileUrl"
                :download="robot.fileName"
                @click="handleDownload(robot, $event)"
                class="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                {{ robot.isPurchased ? 'Download' : 'Purchase & Download' }}
              </a>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Disclaimer -->
      <div class="text-center max-w-2xl mx-auto">
        <p class="text-sm text-gray-400">
          Trading involves significant risk. Our bots aim to optimize trading strategies but do not guarantee profits. 
          Please trade responsibly and ensure you understand the risks involved.
        </p>
      </div>
  
      <!-- Purchase Modal -->
      <div v-if="showPurchaseModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div class="bg-gray-800 p-6 rounded-xl max-w-md w-full">
          <h3 class="text-xl font-bold text-white mb-4">Purchase {{ selectedRobot?.name }}</h3>
          <p class="text-gray-300 mb-4">Complete your purchase to download this trading bot.</p>
          
          <form @submit.prevent="processPurchase" class="space-y-4">
            <div>
              <label class="block text-gray-300 mb-2">Card Number</label>
              <input 
                v-model="paymentDetails.cardNumber"
                type="text"
                class="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="1234 5678 9012 3456"
              >
            </div>
            
            <div class="grid grid-cols-2 gap-4">
              <div>
                <label class="block text-gray-300 mb-2">Expiry Date</label>
                <input 
                  v-model="paymentDetails.expiry"
                  type="text"
                  class="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="MM/YY"
                >
              </div>
              <div>
                <label class="block text-gray-300 mb-2">CVV</label>
                <input 
                  v-model="paymentDetails.cvv"
                  type="text"
                  class="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="123"
                >
              </div>
            </div>
  
            <div class="flex justify-end space-x-4 mt-6">
              <button 
                type="button"
                @click="showPurchaseModal = false"
                class="px-4 py-2 text-gray-300 hover:text-white"
              >
                Cancel
              </button>
              <button 
                type="submit"
                class="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:opacity-90"
              >
                Pay ${{ selectedRobot?.price }}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'DerivRobotStore',
    data() {
      return {
        mainFeatures: [
          "Advanced algorithmic trading strategies",
          "Real-time market analysis and execution",
          "Comprehensive risk management systems",
          "24/7 automated operation capability"
        ],
        steps: [
          "Create your Deriv trading account",
          "Fund your account with your preferred method",
          "Select and download your trading bot",
          "Start automated trading with our setup guide"
        ],
        robots: [
          {
            id: 1,
            name: "Quantum Trader AI",
            description: "Next-gen trading bot with quantum-inspired algorithms",
            price: "149.99",
            features: ["Self-optimizing", "24/7 Operation", "Risk Management"],
            icon: 'ZapIcon',
            iconColor: 'text-blue-500',
            fileUrl: '/robots/quantum-trader.zip',
            fileName: 'quantum-trader-ai.zip',
            isPurchased: false
          },
          {
            id: 2,
            name: "Neural Network Bot",
            description: "Deep learning powered trading automation",
            price: "199.99",
            features: ["Pattern Recognition", "Adaptive Learning", "Multi-asset Trading"],
            icon: 'BotIcon',
            iconColor: 'text-purple-500',
            fileUrl: '/robots/neural-network.zip',
            fileName: 'neural-network-bot.zip',
            isPurchased: false
          },
          {
            id: 3,
            name: "HyperTrader Pro",
            description: "High-frequency trading bot with advanced analytics",
            price: "249.99",
            features: ["Microsecond Execution", "Market Analysis", "Custom Strategies"],
            icon: 'TrendingUpIcon',
            iconColor: 'text-green-500',
            fileUrl: '/robots/hypertrader.zip',
            fileName: 'hypertrader-pro.zip',
            isPurchased: false
          }
        ],
        showPurchaseModal: false,
        selectedRobot: null,
        paymentDetails: {
          cardNumber: '',
          expiry: '',
          cvv: ''
        }
      }
    },
    methods: {
      handleDownload(robot, event) {
        if (!robot.isPurchased) {
          event.preventDefault();
          this.selectedRobot = robot;
          this.showPurchaseModal = true;
        }
      },
      async processPurchase() {
        try {
          await new Promise(resolve => setTimeout(resolve, 1500));
          
          const robot = this.robots.find(r => r.id === this.selectedRobot.id);
          if (robot) {
            robot.isPurchased = true;
          }
          
          this.showPurchaseModal = false;
          this.selectedRobot = null;
          this.paymentDetails = { cardNumber: '', expiry: '', cvv: '' };
          
          const link = document.createElement('a');
          link.href = robot.fileUrl;
          link.download = robot.fileName;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        } catch (error) {
          console.error('Purchase failed:', error);
        }
      }
    }
  };
  </script>