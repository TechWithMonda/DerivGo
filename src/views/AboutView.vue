<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-9S98390Y5M"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-9S98390Y5M');
</script>
<template>
  <div class="about-page container mx-auto p-6 text-gray-800">
    <div class="text-center mb-10">
      <h1 class="text-4xl font-bold text-blue-600">About Deriv</h1>
      <p class="text-lg text-gray-600 mt-2">Your Ultimate Platform for Storing Bots & Guides</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div class="flex flex-col justify-center">
        <h2 class="text-2xl font-semibold text-blue-500">What is TheBlackSamurai?</h2>
        <p class="mt-4 text-gray-700">
         This is a powerfull web app designed for intergrating and hosting Ai bots which can be used in deriv to automate trades and give guides
         ,With a powerfull AI sytems traders can never worry about incurring consective losses ,our bots are well trained by certified trades and best of all its free
        </p>
      </div>
      <div>
        <img src="/samurai.png" alt="About Deriv" class="rounded-lg shadow-lg w-full" />      </div>
    </div>

    <div class="mt-12 bg-gray-100 p-6 rounded-lg shadow-md">
      <h2 class="text-2xl font-semibold text-blue-500 text-center">Why Use Deriv?</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <div class="flex flex-col items-center p-4">
          <span class="text-3xl text-blue-500">⚡</span>
          <h3 class="text-lg font-semibold mt-2">Fast & Secure</h3>
          <p class="text-sm text-gray-600 text-center">Built with modern security and speed in mind.</p>
        </div>
        <div class="flex flex-col items-center p-4">
          <span class="text-3xl text-blue-500">📂</span>
          <h3 class="text-lg font-semibold mt-2">Easy Storage</h3>
          <p class="text-sm text-gray-600 text-center">Manage bots & guides efficiently in one place.</p>
        </div>
        <div class="flex flex-col items-center p-4">
          <span class="text-3xl text-blue-500">🌎</span>
          <h3 class="text-lg font-semibold mt-2">Global Access</h3>
          <p class="text-sm text-gray-600 text-center">Access your resources anytime, anywhere.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutPage",
};
</script>

<style scoped>
.about-page {
  font-family: 'Inter', sans-serif;
}
</style>
