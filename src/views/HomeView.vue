<template>
  <div class="min-h-screen relative overflow-hidden">
    <!-- Animated Background -->
    <div class="fixed inset-0 gradient-mesh">
      <div class="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900"></div>
      <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
    </div>

    <!-- Navigation -->
    <nav class="relative z-50 p-6">
      <div class="max-w-7xl mx-auto flex justify-between items-center">
        <div class="flex items-center space-x-3">
          <div class="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
            <span class="text-white font-bold">BS</span>
          </div>
          <span class="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            BlackSamurai AI
          </span>
        </div>
        <button class="glass-morphism px-6 py-2 rounded-full text-white hover:bg-white/10 transition-all duration-300">
          Get Started
        </button>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="relative z-10 px-6 pt-20 pb-32">
      <div class="max-w-7xl mx-auto text-center">
        <div class="inline-flex items-center glass-morphism px-4 py-2 rounded-full mb-8 animate-fade-in">
          <span class="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></span>
          <span class="text-sm text-gray-300">Advanced AI Trading • Live Now</span>
        </div>
        
        <h1 class="text-5xl md:text-7xl font-bold mb-8 leading-tight">
          <span class="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
            Next-Gen Trading
          </span>
          <br>
          <span class="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Intelligence
          </span>
        </h1>
        
        <p class="text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
          Revolutionize your trading experience with cutting-edge AI algorithms designed 
          for the modern trader. Sophisticated, reliable, and built for success.
        </p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <button class="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl text-white font-semibold overflow-hidden transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-blue-500/25">
            <span class="relative z-10">Start Trading Now</span>
            <div class="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
          </button>
          
          <button class="flex items-center space-x-2 px-8 py-4 glass-morphism rounded-2xl text-white hover:bg-white/10 transition-all duration-300">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M8 5v10l7-5-7-5z"/>
            </svg>
            <span>Watch Demo</span>
          </button>
        </div>

        <!-- Stats -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div class="glass-morphism p-6 rounded-2xl hover:bg-white/10 transition-all duration-300">
            <div class="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-2">
              99.9%
            </div>
            <div class="text-gray-300">Uptime Reliability</div>
          </div>
          <div class="glass-morphism p-6 rounded-2xl hover:bg-white/10 transition-all duration-300">
            <div class="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
              10K+
            </div>
            <div class="text-gray-300">Active Traders</div>
          </div>
          <div class="glass-morphism p-6 rounded-2xl hover:bg-white/10 transition-all duration-300">
            <div class="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
              24/7
            </div>
            <div class="text-gray-300">AI Operation</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="relative z-10 px-6 py-20">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-20">
          <h2 class="text-4xl md:text-5xl font-bold mb-6">
            <span class="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Why Choose Our Platform
            </span>
          </h2>
          <p class="text-xl text-gray-400 max-w-3xl mx-auto">
            Experience unparalleled trading automation with enterprise-grade security and performance
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <!-- Features List -->
          <div class="space-y-8">
            <div v-for="(feature, index) in enhancedFeatures" :key="index" 
                 class="flex items-start space-x-4 group hover:transform hover:translate-x-2 transition-all duration-300">
              <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-semibold text-white mb-2">{{ feature.title }}</h3>
                <p class="text-gray-400">{{ feature.description }}</p>
              </div>
            </div>
          </div>

          <!-- Interactive Demo Card -->
          <div class="glass-morphism p-8 rounded-3xl hover:bg-white/10 transition-all duration-300">
            <div class="space-y-6">
              <div class="flex items-center justify-between">
                <span class="text-sm text-gray-400">Live Performance</span>
                <div class="flex items-center space-x-2">
                  <div class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span class="text-sm text-green-400">Active</span>
                </div>
              </div>
              
              <div class="space-y-4">
                <div class="flex justify-between items-center">
                  <span class="text-gray-300">Success Rate</span>
                  <span class="text-2xl font-bold text-green-400">94.7%</span>
                </div>
                <div class="w-full bg-gray-700 rounded-full h-2">
                  <div class="bg-gradient-to-r from-green-400 to-emerald-500 h-2 rounded-full" style="width: 94.7%"></div>
                </div>
              </div>

              <div class="grid grid-cols-2 gap-4 pt-4">
                <div class="text-center">
                  <div class="text-lg font-bold text-blue-400">$2.4M</div>
                  <div class="text-xs text-gray-400">Volume Today</div>
                </div>
                <div class="text-center">
                  <div class="text-lg font-bold text-purple-400">1,247</div>
                  <div class="text-xs text-gray-400">Trades Executed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Getting Started Section -->
    <section class="relative z-10 px-6 py-20">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <!-- Quick Start -->
          <div class="glass-morphism p-8 rounded-3xl hover:bg-white/10 transition-all duration-300 group">
            <div class="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-green-500/25 transition-all duration-300">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-white mb-4">Quick Start</h3>
            <div class="space-y-3 mb-6">
              <div v-for="(step, index) in quickSteps" :key="index" class="flex items-center space-x-3 text-gray-300">
                <span class="w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center text-xs font-bold text-blue-400">
                  {{ index + 1 }}
                </span>
                <span class="text-sm">{{ step }}</span>
              </div>
            </div>
            <a href="https://deriv.com/signup?sidc=FECF9A5E-A3BF-4495-B5F7-9C4F97C66342" 
               target="_blank" rel="noopener noreferrer"
               class="inline-flex items-center space-x-2 bg-gradient-to-r from-green-500 to-emerald-600 px-6 py-3 rounded-xl text-white font-semibold hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300 group-hover:transform group-hover:scale-105">
              <span>Create Account</span>
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
              </svg>
            </a>
          </div>

          <!-- Virtual Trading Game -->
          <div class="glass-morphism p-8 rounded-3xl hover:bg-white/10 transition-all duration-300 group">
            <div class="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.5a1.5 1.5 0 011.5 1.5V13a1.5 1.5 0 01-1.5 1.5H9m0-5H7.5A1.5 1.5 0 006 11.5V13A1.5 1.5 0 007.5 14.5H9m0-5v5"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-white mb-4">Practice Trading</h3>
            <p class="text-gray-300 mb-6 leading-relaxed">
              Master trading with $10,000 virtual cash. Practice with real market data including Bitcoin, 
              Ethereum, and Tesla stock without any financial risk.
            </p>
            <div class="space-y-2 mb-6">
              <div class="flex items-center space-x-2 text-sm text-gray-300">
                <div class="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                <span>Zero financial risk</span>
              </div>
              <div class="flex items-center space-x-2 text-sm text-gray-300">
                <div class="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                <span>Real-time market data</span>
              </div>
              <div class="flex items-center space-x-2 text-sm text-gray-300">
                <div class="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                <span>Educational gameplay</span>
              </div>
            </div>
            <a href="/virtualtradergames"
               class="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 rounded-xl text-white font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 group-hover:transform group-hover:scale-105">
              <span>Play Free Game</span>
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.5a1.5 1.5 0 011.5 1.5V13a1.5 1.5 0 01-1.5 1.5H9m0-5H7.5A1.5 1.5 0 006 11.5V13A1.5 1.5 0 007.5 14.5H9m0-5v5"></path>
              </svg>
            </a>
          </div>

          <!-- Fast Deposits -->
          <div class="glass-morphism p-8 rounded-3xl hover:bg-white/10 transition-all duration-300 group">
            <div class="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-purple-500/25 transition-all duration-300">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-white mb-4">Instant Deposits</h3>
            <div class="space-y-3 mb-6">
              <div v-for="(method, index) in depositMethods" :key="index" class="flex items-center space-x-3 text-gray-300">
                <span class="w-6 h-6 bg-purple-500/20 rounded-full flex items-center justify-center text-xs font-bold text-purple-400">
                  {{ index + 1 }}
                </span>
                <span class="text-sm">{{ method }}</span>
              </div>
            </div>
            <a href="createaccount"
               class="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-600 px-6 py-3 rounded-xl text-white font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 group-hover:transform group-hover:scale-105">
              <span>Secure Deposit</span>
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Trading Bots Section -->
    <section class="relative z-10 px-6 py-20">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-6">
            <span class="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Premium Trading Bots
            </span>
          </h2>
          <p class="text-xl text-gray-400 max-w-3xl mx-auto">
            Choose from our collection of sophisticated AI-powered trading algorithms
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="robot in robots" :key="robot.id" 
               class="group glass-morphism p-8 rounded-3xl hover:bg-white/10 transition-all duration-500 hover:transform hover:scale-105">
            <!-- Bot Header -->
            <div class="flex items-center justify-between mb-6">
              <div class="w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center group-hover:shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300">
                <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                </svg>
              </div>
              <div class="text-right">
                <div class="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                  Ksh{{ robot.price }}
                </div>
              </div>
            </div>

            <!-- Bot Info -->
            <div class="mb-6">
              <h3 class="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                {{ robot.name }}
              </h3>
              <p class="text-gray-400 leading-relaxed">{{ robot.description }}</p>
            </div>

            <!-- Features -->
            <div class="space-y-3 mb-8">
              <div v-for="(feature, index) in robot.features" :key="index" 
                   class="flex items-center space-x-3 text-gray-300">
                <div class="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
                <span class="text-sm">{{ feature }}</span>
              </div>
            </div>

            <!-- Action Button -->
            <button @click="handlePurchase(robot)"
                    class="w-full bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-4 rounded-2xl text-white font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 group-hover:transform group-hover:scale-105 flex items-center justify-center space-x-2">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
              <span>{{ robot.isPurchased ? 'Download Now' : 'Purchase & Download' }}</span>
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Payment Modal -->
    <div v-if="showPaymentModal" class="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div class="glass-morphism max-w-md w-full p-8 rounded-3xl shadow-2xl transform transition-all duration-300">
        <!-- Modal Header -->
        <div class="text-center mb-8">
          <div class="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
            </svg>
          </div>
          <h3 class="text-2xl font-bold text-white mb-2">Purchase {{ selectedRobot?.name }}</h3>
          <p class="text-gray-400">Secure payment processing</p>
        </div>

        <!-- Payment Form -->
        <form @submit.prevent="processPayment" class="space-y-6">
          <!-- Payment Method -->
          <div>
            <label class="block text-sm font-medium text-gray-300 mb-3">Payment Method</label>
            <div class="grid grid-cols-2 gap-3">
              <button type="button" @click="paymentMethod = 'mpesa'"
                      :class="['p-3 rounded-xl border-2 transition-all duration-200', 
                               paymentMethod === 'mpesa' 
                                 ? 'border-green-500 bg-green-500/10 text-green-400' 
                                 : 'border-gray-600 text-gray-400 hover:border-gray-500']">
                <div class="text-sm font-semibold">M-Pesa</div>
              </button>
              <button type="button" @click="paymentMethod = 'card'"
                      :class="['p-3 rounded-xl border-2 transition-all duration-200',
                               paymentMethod === 'card' 
                                 ? 'border-blue-500 bg-blue-500/10 text-blue-400' 
                                 : 'border-gray-600 text-gray-400 hover:border-gray-500']">
                <div class="text-sm font-semibold">Card</div>
              </button>
            </div>
          </div>

          <!-- M-Pesa Fields -->
          <div v-if="paymentMethod === 'mpesa'">
            <label class="block text-sm font-medium text-gray-300 mb-2">Phone Number</label>
            <input v-model="phoneNumber" type="tel" placeholder="254700000000"
                   class="w-full p-4 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-500 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition-all duration-200" />
          </div>

          <!-- Card Fields -->
          <div v-if="paymentMethod === 'card'" class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-gray-300 mb-2">Card Number</label>
              <input v-model="cardNumber" type="text" placeholder="1234 5678 9012 3456"
                     class="w-full p-4 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200" />
            </div>
            <div class="grid grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-medium text-gray-300 mb-2">Expiry</label>
                <input v-model="cardExpiry" type="text" placeholder="MM/YY"
                       class="w-full p-4 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200" />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-300 mb-2">CVV</label>
                <input v-model="cardCvv" type="text" placeholder="123"
                       class="w-full p-4 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200" />
              </div>
            </div>
          </div>

          <!-- Error Message -->
          <div v-if="errorMessage" class="p-4 bg-red-500/10 border border-red-500/20 rounded-xl">
            <p class="text-red-400 text-sm">{{ errorMessage }}</p>
          </div>

          <!-- Action Buttons -->
          <div class="flex space-x-4 pt-4">
            <button type="button" @click="closePaymentModal"
                    class="flex-1 p-4 text-gray-400 hover:text-white transition-colors duration-200">
              Cancel
            </button>
            <button type="submit" :disabled="isProcessing"
                    class="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-xl text-white font-semibold disabled:opacity-50 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
              {{ isProcessing ? 'Processing...' : `Pay Ksh${selectedRobot?.price}` }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, reactive } from 'vue'
import axios from 'axios'

export default {
  name: 'ModernTradingPlatform',
  setup() {
    const showPaymentModal = ref(false)
    const selectedRobot = ref(null)
    const isProcessing = ref(false)
    const paymentMethod = ref('mpesa')
    const phoneNumber = ref('')
    const cardNumber = ref('')
    const cardExpiry = ref('')
    const cardCvv = ref('')
    const errorMessage = ref('')

    const enhancedFeatures = [
      {
        title: "Advanced AI Algorithms",
        description: "Quantum-inspired trading strategies that adapt to market conditions in real-time with machine learning optimization."
      },
      {
        title: "Risk Management Suite",
        description: "Comprehensive portfolio protection with dynamic stop-loss, position sizing, and volatility-adjusted exposure controls."
      },
      {
        title: "Multi-Asset Trading",
        description: "Seamlessly trade across forex, cryptocurrencies, commodities, and synthetic indices with unified strategy deployment."
      },
      {
        title: "24/7 Market Monitoring",
        description: "Continuous market surveillance with instant execution capabilities and real-time performance analytics dashboard."
      }
    ]

    const quickSteps = [
      "Create Deriv account instantly",
      "Verify identity & fund account",
      "Download your chosen bot",
      "Start automated trading"
    ]

    const depositMethods = [
      "M-Pesa instant deposits",
      "Bank transfer integration",
      "Secure payment processing",
      "Real-time fund reflection",
      "24/7 withdrawal support"
    ]

    const robots = reactive([
      {
        id: 1,
        name: "Quantum Trader AI",
        description: "Next-generation trading bot powered by quantum-inspired algorithms and deep neural networks for superior market prediction accuracy.",
        price: "355",
        features: ["Quantum-inspired algorithms", "Real-time adaptation", "Advanced risk controls", "Multi-timeframe analysis"],
        fileUrl: '/robots/quantum-trader.xml',
        isPurchased: false
      },
      {
        id: 2,
        name: "Neural Network Pro",
        description: "Sophisticated deep learning system that continuously evolves its trading strategies based on market patterns and historical performance.",
        price: "199",
        features: ["Deep learning AI", "Pattern recognition", "Adaptive strategies", "Performance analytics"],
        fileUrl: '/robots/neural-network.xml',
        isPurchased: false
      },
      {
        id: 3,
        name: "HyperTrader Elite",
        description: "High-frequency trading powerhouse with microsecond execution speeds and advanced market microstructure analysis capabilities.",
        price: "249",
        features: ["Ultra-fast execution", "Market analysis", "Custom indicators", "Portfolio optimization"],
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
      errorMessage.value = ''

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
        errorMessage.value = `Payment failed: ${error.message}`
      } finally {
        isProcessing.value = false
      }
    }

    const processMpesaPayment = async () => {
      if (!phoneNumber.value) {
        throw new Error('Phone number is required')
      }

      let formattedPhone = phoneNumber.value.replace(/\D/g, '')
      if (formattedPhone.startsWith('0')) {
        formattedPhone = '254' + formattedPhone.substring(1)
      } else if (!formattedPhone.startsWith('254')) {
        throw new Error('Invalid phone number format. Use format 2547XXXXXXXX')
      }

      try {
        const response = await axios.post('https://derivgo-backend.onrender.com/api/payment/', {
          phone: formattedPhone,
          amount: selectedRobot.value.price
        })

        if (response.data.ResponseCode === "0") {
          return {
            success: true,
            message: "Please check your phone for the payment prompt"
          }
        } else {
          throw new Error(response.data.ResponseDescription || 'Payment failed')
        }
      } catch (error) {
        console.error('Payment error:', error)
        throw new Error(error.response?.data?.error || 'Payment failed')
      }
    }

    const processCardPayment = async () => {
      if (!cardNumber.value || !cardExpiry.value || !cardCvv.value) {
        throw new Error('All card details are required')
      }

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
      errorMessage.value = ''
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
      errorMessage,
      enhancedFeatures,
      quickSteps,
      depositMethods,
      robots,
      handlePurchase,
      processPayment,
      closePaymentModal
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

.glass-morphism {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.animate-fade-in {
  animation: fadeIn 0.6s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Custom gradient animations */
.gradient-mesh {
  background: 
    radial-gradient(ellipse 80% 80% at 50% -20%, rgba(120, 119, 198, 0.3), transparent),
    radial-gradient(ellipse 80% 80% at 80% 80%, rgba(255, 119, 198, 0.15), transparent),
    radial-gradient(ellipse 80% 80% at 0% 80%, rgba(59, 130, 246, 0.15), transparent);
}

/* Hover effects for cards */
.group:hover .group-hover\:shadow-lg {
  box-shadow: 0 10px 25px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.group:hover .group-hover\:shadow-blue-500\/25 {
  box-shadow: 0 10px 25px -3px rgba(59, 130, 246, 0.25), 0 4px 6px -2px rgba(59, 130, 246, 0.1);
}

.group:hover .group-hover\:shadow-green-500\/25 {
  box-shadow: 0 10px 25px -3px rgba(34, 197, 94, 0.25), 0 4px 6px -2px rgba(34, 197, 94, 0.1);
}

.group:hover .group-hover\:shadow-purple-500\/25 {
  box-shadow: 0 10px 25px -3px rgba(168, 85, 247, 0.25), 0 4px 6px -2px rgba(168, 85, 247, 0.1);
}

/* Focus states for inputs */
input:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

/* Button hover animations */
button {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Responsive typography */
@media (max-width: 768px) {
  .text-5xl {
    font-size: 2.5rem;
  }
  .text-7xl {
    font-size: 3.5rem;
  }
}
</style>
