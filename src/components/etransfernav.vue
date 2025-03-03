<template>
    <nav class="navbar">
      <div class="navbar-brand">E-Transfer App</div>
      <ul class="navbar-menu">
        <li class="navbar-item">
          <a href="#" @click="navigateTo('deposit')">Deposit</a>
        </li>
        <li class="navbar-item">
          <a href="#" @click="navigateTo('withdraw')">Withdraw</a>
        </li>
        <li class="navbar-item">
          <a href="#" @click="navigateTo('create-account')">Create Account</a>
        </li>
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'NavBar',
    methods: {
      navigateTo(route) {
        // You can use Vue Router to navigate to different routes
        this.$router.push({ name: route });
      }
    }
  }
  </script>
  
  <style scoped>
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background-color: #007bff;
    color: white;
  }
  
  .navbar-brand {
    font-size: 1.5rem;
    font-weight: bold;
  }
  
  .navbar-menu {
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;
  }
  
  .navbar-item {
    margin-left: 1rem;
  }
  
  .navbar-item a {
    color: white;
    text-decoration: none;
    font-size: 1rem;
  }
  
  .navbar-item a:hover {
    text-decoration: underline;
  }
  </style>