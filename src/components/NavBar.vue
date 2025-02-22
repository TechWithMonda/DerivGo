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
          <router-link 
            v-for="(item, index) in navItems" 
            :key="index"
            :to="item.route"
            class="flex items-center space-x-2 px-3 py-2 text-gray-300 hover:text-blue-400 transition-colors duration-200"
          >
            <span class="text-xl">
              <i :class="item.icon"></i>
            </span>
            <span class="font-medium">{{ item.text }}</span>
          </router-link>
        </ul>
      </div>
    </div>

    <!-- Mobile Navigation -->
    <div 
      v-show="isOpen" 
      class="md:hidden"
    >
      <div class="px-2 pt-2 pb-3 space-y-1 bg-gray-800/50 backdrop-blur-sm">
        <router-link
          v-for="(item, index) in navItems"
          :key="index"
          :to="item.route"
          class="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-300 hover:text-blue-400 hover:bg-gray-700/50 transition-all duration-200"
          @click="isOpen = false"
        >
          <i :class="item.icon" class="text-xl"></i>
          <span>{{ item.text }}</span>
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(false)

const navItems = [
  { route: '/', text: 'Home', icon: 'bi bi-house' },
  { route: '/Locator', text: 'Free AI Robots', icon: 'bi bi-geo-alt-fill' },
  { route: '/premium', text: 'Premium DeepSeek Robots', icon: 'bi bi-headset' },
  { route: '/guide', text: 'Starting Guides', icon: 'bi bi-journal-plus' },
  { route: '/account', text: 'Open a Deriv Account', icon: 'bi bi-bell' },
  { route: '/about', text: 'About Us', icon: 'bi bi-person-circle' }
]
</script>

<style scoped>
nav {
  font-family: 'Arial', sans-serif;
  transition: all 0.3s ease-in-out;
}


</style>