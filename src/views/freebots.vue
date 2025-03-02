<!-- Google tag (gtag.js) -->

<template>
    <div class="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8">
      <div class="max-w-6xl mx-auto mb-20">
        <div class="text-center mb-16">
          <h1 class="text-3xl font-bold mb-6">
            Welcome To The BlackSamurai Free and Optimized Trading non AI Bots
          </h1>
          <p class="text-gray-400 text-lg max-w-3xl mx-auto">
            Experience the next evolution of trading with our sophisticated algorithmic solutions,
            designed exclusively for Deriv markets.
          </p>
        </div>
        
        <div class="text-center mb-16">
          <h2 class="text-3xl font-bold mb-6">Download Free Bots</h2>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div 
            v-for="robot in robots" 
            :key="robot.id" 
            class="bg-gray-800/50 border border-gray-700 backdrop-blur-sm rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300"
          >
            <div class="space-y-4">
              <h3 class="text-xl font-bold">{{ robot.name }}</h3>
              <img :src="robot.image" alt="Bot Image" class="rounded-lg shadow-lg w-full" />
              <p class="text-gray-400">{{ robot.description }}</p>
              <ul class="space-y-2">
                <li v-for="(feature, index) in robot.features" :key="index" class="flex items-center text-gray-300">
                  <span class="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  {{ feature }}
                </li>
              </ul>
              <div class="flex justify-center mt-6">
                <a
                  :href="robot.fileUrl"
                  download
                  class="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  Download
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { reactive } from 'vue';
  
  export default {
    name: 'DerivRobotStore',
    setup() {
      const robots = reactive([
        {
          id: 1,
          name: "SteadyTrader ",
          description: " A bot focused on slow, steady, and consistent trading..",
          features: ["Self-optimizing", "24/7 Operation", "Risk Management"],
          image: '/trend.png',
          fileUrl: '/robots/quantum-trader.xml'
        },
        {
          id: 2,
          name: "PipHunter",
          description: "Designed for traders who target small price movements.",
          features: ["Pattern Recognition", "Adaptive Learning", "Multi-asset Trading"],
          image: '/pip.png',
          fileUrl: '/robots/neural-network.xml'
        },
        {
          id: 3,
          name: "TrendRider",
          description: " Specializes in following long-term trends..",
          features: ["Microsecond Execution", "Market Analysis", "Custom Strategies"],
          image: '/space.jpg',
          fileUrl: '/robots/hypertrader.xml'
        }
      ]);
  
      return { robots };
    }
  };
  </script>
  