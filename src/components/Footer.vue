<template>
    <footer class="bg-gradient-to-b from-gray-900 to-gray-800 text-gray-300 border-t border-gray-700/50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <!-- Main Footer Content -->
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <!-- Company Info -->
          <div class="space-y-4">
            <h2 class="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              TheBlackSamurai
            </h2>
            <p class="text-gray-400">
              Revolutionizing automated trading with cutting-edge AI technology.
            </p>
            <p class="text-gray-400">You can contact me:
             samwelmonda48@gmail.com
            </p>
            <div class="flex space-x-4">
              <a href="#" class="text-gray-400 hover:text-blue-400 transition-colors">
                <i class="bi bi-telegram text-xl"></i>
              </a>
              <a href="https://www.youtube.com/@TechWithMonda" class="text-gray-400 hover:text-blue-400 transition-colors">
                <i class="bi bi-youtube text-xl"></i>
              </a>
              <a href="#" class="text-gray-400 hover:text-blue-400 transition-colors">
                <i class="bi bi-discord text-xl"></i>
              </a>
            </div>
          </div>
  
          <!-- Quick Links -->
          <div class="space-y-4">
            <h3 class="text-lg font-semibold text-white">Quick Links</h3>
            <ul class="space-y-2">
              <li>
                <router-link to="/" class="text-gray-400 hover:text-blue-400 transition-colors">Home</router-link>
              </li>
              <li>
                <router-link to="/freebots" class="text-gray-400 hover:text-blue-400 transition-colors">Free AI Robots</router-link>
              </li>
              <li>
                <router-link to="/premium" class="text-gray-400 hover:text-blue-400 transition-colors">Premium Robots</router-link>
              </li>
              <li>
                <router-link to="/Guide" class="text-gray-400 hover:text-blue-400 transition-colors">Trading Guides</router-link>
              </li>
            </ul>
          </div>
  
          <!-- Resources -->
          <div class="space-y-4">
            <h3 class="text-lg font-semibold text-white">Resources</h3>
            <ul class="space-y-2">
              <li>
                <a href="#" class="text-gray-400 hover:text-blue-400 transition-colors">Documentation</a>
              </li>
              <li>
                <a href="#" class="text-gray-400 hover:text-blue-400 transition-colors">API Reference</a>
              </li>
              <li>
                <a href="mailto:samuelmonda@gmail.com" class="text-gray-400 hover:text-blue-400 transition-colors">Support Center</a>
              </li>
              <li>
                <a href="#" class="text-gray-400 hover:text-blue-400 transition-colors">Trading Academy</a>
              </li>
            </ul>
          </div>
  
          <!-- Newsletter -->
          <div class="space-y-4">
            <h3 class="text-lg font-semibold text-white">Stay Updated</h3>
            <p class="text-gray-400">Subscribe to our newsletter for the latest updates and trading signals.</p>
            <form @submit.prevent="subscribeNewsletter" class="space-y-2">
              <input 
                type="email" 
                v-model="email"
                placeholder="Enter your email" 
                class="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
              >
              <button 
                type="submit"
                class="w-full px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:opacity-90 transition-opacity"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
  
        <!-- Bottom Bar -->
        <div class="mt-12 pt-8 border-t border-gray-700/50">
          <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p class="text-gray-400">
              © {{ new Date().getFullYear() }} TheBlackSamurai. All rights reserved.
            </p>
            <div class="flex space-x-6">
              <a href="policy" class="text-gray-400 hover:text-blue-400 transition-colors">Privacy Policy</a>
              <a href="policy" class="text-gray-400 hover:text-blue-400 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const email = ref('')
  
  const subscribeNewsletter = () => {
    // Implement newsletter subscription logic here
    console.log('Newsletter subscription for:', email.value)
    email.value = ''
  }
  </script>
  
  <style scoped>

  </style>