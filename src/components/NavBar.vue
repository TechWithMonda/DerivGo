<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-9S98390Y5M"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-9S98390Y5M');
</script>
<template>
  <nav class="bg-gradient-to-r from-gray-900 to-gray-800 shadow-lg border-b border-gray-700/50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <h1 class="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
          TheBlackSamurai
        </h1>

        <!-- Hamburger Menu Button -->
        <button 
          @click="isOpen = !isOpen"
          class="md:hidden p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
        >
          <svg 
            class="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="2" 
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <!-- Desktop Navigation -->
        <ul class="hidden md:flex space-x-8">
          <li v-for="(item, index) in navItems" :key="index">
            <template v-if="item.external">
              <!-- External Link -->
              <a 
                :href="item.route" 
                target="_blank" 
                rel="noopener noreferrer"
                class="flex items-center space-x-2 px-3 py-2 text-gray-300 hover:text-blue-400 transition-colors duration-200"
              >
                <i :class="item.icon" class="text-xl"></i>
                <span class="font-medium">{{ item.text }}</span>
              </a>
            </template>
            <template v-else>
              <!-- Internal Vue Router Link -->
              <router-link 
                :to="item.route"
                class="flex items-center space-x-2 px-3 py-2 text-gray-300 hover:text-blue-400 transition-colors duration-200"
              >
                <i :class="item.icon" class="text-xl"></i>
                <span class="font-medium">{{ item.text }}</span>
              </router-link>
            </template>
          </li>
        </ul>
      </div>
    </div>

    <!-- Mobile Navigation -->
    <div v-show="isOpen" class="md:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1 bg-gray-800/50 backdrop-blur-sm">
        <li v-for="(item, index) in navItems" :key="index" class="list-none">
          <template v-if="item.external">
            <!-- External Link -->
            <a 
              :href="item.route" 
              target="_blank" 
              rel="noopener noreferrer"
              class="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-300 hover:text-blue-400 hover:bg-gray-700/50 transition-all duration-200"
              @click="isOpen = false"
            >
              <i :class="item.icon" class="text-xl"></i>
              <span>{{ item.text }}</span>
            </a>
          </template>
          <template v-else>
            <!-- Internal Vue Router Link -->
            <router-link 
              :to="item.route"
              class="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-300 hover:text-blue-400 hover:bg-gray-700/50 transition-all duration-200"
              @click="isOpen = false"
            >
              <i :class="item.icon" class="text-xl"></i>
              <span>{{ item.text }}</span>
            </router-link>
          </template>
        </li>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(false)

const navItems = [
  { route: '/', text: 'Home', icon: 'bi bi-house' },
  { route: '/freebots', text: 'Free AI Robots', icon: 'bi bi-geo-alt-fill' },
  { route: '/Premium', text: 'Premium DeepSeek Robots', icon: 'bi bi-headset' },
  { route: '/guide', text: 'Starting Guides', icon: 'bi bi-journal-plus' },
  { 
    route: 'https://deriv.com/signup?sidc=FECF9A5E-A3BF-4495-B5F7-9C4F97C66342', 
    text: 'Open a Deriv Account', 
    icon: 'bi bi-bell', 
    external: true 
  },
  { route: '/about', text: 'About Us', icon: 'bi bi-person-circle' }
]
</script>

<style scoped>
nav {
  font-family: 'Arial', sans-serif;
  transition: all 0.3s ease-in-out;
}
</style>
