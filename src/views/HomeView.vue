<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8">
    <!-- Header Section -->
    <div class="max-w-6xl mx-auto mb-20">
      <div class="text-center mb-16">
        <h1 class="text-3xl font-bold mb-6">
          Welcome To The BlackSamurai Advanced Trading Artificial Intelligence
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
              href="https://deriv.com/signup?sidc=FECF9A5E-A3BF-4495-B5F7-9C4F97C66342"
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

    <!-- Featured Bots Section -->
    <div class="max-w-6xl mx-auto mb-20">
      <div class="text-center mb-16">
        <h2 class="text-3xl font-bold mb-6">Featured and Exclusive Bots</h2>
        <p class="text-gray-400 text-lg max-w-3xl mx-auto">
          Experience the next evolution of trading with our sophisticated algorithmic solutions
        </p>
      </div>

      <!-- Robot Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div 
          v-for="robot in robots" 
          :key="robot.id" 
          class="bg-gray-800/50 border border-gray-700 backdrop-blur-sm rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300"
        >
          <div class="space-y-4">
            <h3 class="text-xl font-bold">{{ robot.name }}</h3>
            <img src="/samurai.png" alt="About Deriv" class="rounded-lg shadow-lg w-full" />  
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
                Ksh{{ robot.price }}
              </span>
              <button
                @click="handlePurchase(robot)"
                class="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                {{ robot.isPurchased ? 'Download' : 'Purchase & Download' }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Payment Modal -->
    <Teleport to="body">
      <div v-if="showPaymentModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div class="bg-gray-900 p-6 rounded-2xl shadow-2xl max-w-md w-full">
          <h3 class="text-2xl font-bold text-white mb-4">
            Purchase {{ selectedRobot?.name }}
          </h3>
          
          <form @submit.prevent="processPayment" class="space-y-4">
            <div class="space-y-4">
              <label class="block">
                <span class="text-gray-400">Payment Method</span>
                <select 
                  v-model="paymentMethod"
                  class="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white"
                >
                  <option value="mpesa">M-Pesa</option>
                  <option value="card">Credit Card</option>
                </select>
              </label>

              <div v-if="paymentMethod === 'mpesa'">
                <label class="block">
                  <span class="text-gray-400">Phone Number</span>
                  <input 
                    v-model="phoneNumber"
                    type="tel"
                    class="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white"
                    placeholder="254700000000"
                  />
                </label>
              </div>

              <div v-if="paymentMethod === 'card'" class="space-y-4">
                <label class="block">
                  <span class="text-gray-400">Card Number</span>
                  <input 
                    v-model="cardNumber"
                    type="text"
                    class="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white"
                    placeholder="1234 5678 9012 3456"
                  />
                </label>

                <div class="grid grid-cols-2 gap-4">
                  <label class="block">
                    <span class="text-gray-400">Expiry</span>
                    <input 
                      v-model="cardExpiry"
                      type="text"
                      class="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white"
                      placeholder="MM/YY"
                    />
                  </label>

                  <label class="block">
                    <span class="text-gray-400">CVV</span>
                    <input 
                      v-model="cardCvv"
                      type="text"
                      class="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white"
                      placeholder="123"
                    />
                  </label>
                </div>
              </div>
            </div>

            <div class="flex justify-end space-x-4 mt-6">
              <button 
                type="button"
                @click="closePaymentModal"
                class="px-4 py-2 text-gray-400 hover:text-white"
              >
                Cancel
              </button>
              <button 
                type="submit"
                class="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg"
                :disabled="isProcessing"
              >
                {{ isProcessing ? 'Processing...' : `Pay ${selectedRobot?.price}` }}
              </button>
            </div>
          </form>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script>
import { ref, reactive } from 'vue'
import axios from 'axios'

export default {
  name: 'DerivRobotStore',
  setup() {
    const showPaymentModal = ref(false)
    const selectedRobot = ref(null)
    const isProcessing = ref(false)
    const paymentMethod = ref('mpesa')
    const phoneNumber = ref('')
    const cardNumber = ref('')
    const cardExpiry = ref('')
    const cardCvv = ref('')

    const mainFeatures = [
      "Advanced algorithmic trading strategies",
      "Real-time market analysis and execution",
      "Comprehensive risk management systems",
      "24/7 automated operation capability"
    ]

    const steps = [
      "Create your Deriv trading account",
      "Fund your account with your preferred method",
      "Select and download your trading bot",
      "Start automated trading with our setup guide"
    ]

    const robots = reactive([
      {
        id: 1,
        name: "Quantum Trader AI",
        description: "Next-gen trading bot with quantum-inspired algorithms",
        price: "355.99",
        features: ["Self-optimizing", "24/7 Operation", "Risk Management"],
        image: '/samurai.png',
        fileUrl: '/robots/quantum-trader.xml',
        isPurchased: false
      },
      {
        id: 2,
        name: "Neural Network Bot",
        description: "Deep learning powered trading automation",
        price: "199.99",
        features: ["Pattern Recognition", "Adaptive Learning", "Multi-asset Trading"],
        image: '/samurai.png',
        fileUrl: '/robots/neural-network.xml',
        isPurchased: false
      },
      {
        id: 3,
        name: "HyperTrader Pro",
        description: "High-frequency trading bot with advanced analytics",
        price: "249.99",
        features: ["Microsecond Execution", "Market Analysis", "Custom Strategies"],
        image: '/samurai.png',
        fileUrl: '/robots/hypertrader.xml',
        isPurchased: false
      }
    ])

    const handlePurchase = (robot) => {
      if (robot.isPurchased) {
        downloadBot(robot)
      } else {
        selectedRobot.value = robot
        showPaymentModal.value = true
      }
    }

    const processPayment = async () => {
      if (!selectedRobot.value) return

      isProcessing.value = true

      try {
        if (paymentMethod.value === 'mpesa') {
          await processMpesaPayment()
        } else {
          await processCardPayment()
        }

        const robot = robots.find(r => r.id === selectedRobot.value.id)
        if (robot) {
          robot.isPurchased = true
          downloadBot(robot)
        }

        showPaymentModal.value = false
      } catch (error) {
        console.error('Payment failed:', error)
        // Handle error (show error message to user)
      } finally {
        isProcessing.value = false
      }
    }

    const processMpesaPayment = async () => {
    if (!phoneNumber.value) {
        throw new Error('Phone number is required');
    }
    
    let formattedPhone = phoneNumber.value.replace(/\D/g, '');
    if (formattedPhone.startsWith('0')) {
        formattedPhone = '254' + formattedPhone.substring(1);
    }
    
    try {
      const response = await axios.post('https://1e77-102-0-16-50.ngrok-free.app/api/payment/', {
  phone: formattedPhone,
  amount: selectedRobot.value.price
});

        if (response.data.ResponseCode === "0") {
            return {
                success: true,
                message: "Please check your phone for the payment prompt"
            };
        } else {
            throw new Error(response.data.ResponseDescription || 'Payment failed');
        }

    } catch (error) {
        console.error('Payment error:', error);
        throw new Error(error.response?.data?.error || 'Payment failed');
    }
};

    const processCardPayment = async () => {
      // Implement card payment processing
      await new Promise(resolve => setTimeout(resolve, 2000))
      return true
    }

    const downloadBot = (robot) => {
      const link = document.createElement('a')
      link.href = robot.fileUrl
      link.download = `${robot.name.toLowerCase().replace(/\s+/g, '-')}.xml`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }

    const closePaymentModal = () => {
      showPaymentModal.value = false
      selectedRobot.value = null
      paymentMethod.value = 'mpesa'
      phoneNumber.value = ''
      cardNumber.value = ''
      cardExpiry.value = ''
      cardCvv.value = ''
    }

    return {
      showPaymentModal,
      selectedRobot,
      isProcessing,
      paymentMethod,
      phoneNumber,
      cardNumber,
      cardExpiry,
      cardCvv,
      mainFeatures,
      steps,
      robots,
      handlePurchase,
      processPayment,
      closePaymentModal
    }
  }
}
</script>