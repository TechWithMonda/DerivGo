<template>
    <div class="app-container">
      <div class="container">
        <div v-if="!isAuthenticated" class="auth-section">
          <div class="auth-logo">
            <i class="fas fa-lock"></i>
          </div>
          <h2 class="title">Authenticate Your Deriv Account</h2>
          <div class="form-group">
            <label for="email">Email Address</label>
            <input 
              id="email"
              v-model="email" 
              type="email" 
              placeholder="Enter your email" 
              class="input" 
              @keyup.enter="authenticateUser"
            />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <div class="password-input">
              <input 
                id="password"
                v-model="password" 
                :type="showPassword ? 'text' : 'password'" 
                placeholder="Enter your password" 
                class="input" 
                @keyup.enter="authenticateUser"
              />
              <a href="deposit"><button class="toggle-password" @click="showPassword = !showPassword">
                <i :class="showPassword ? 'fas fa-eye-slash' : 'fas fa-eye'"></i>
              </button></a> 
            </div>
          </div>
          <a href="deposit"><button 
            class="btn primary" 
            :disabled="!email || !password"
          >
            <i class="fas fa-sign-in-alt"></i> 
            Authenticate
          </button> </a>
         
           
        </div>
  
      </div>
    </div>
  </template>
  
  <script>


  export default {
    name: 'ETransferApp',
    data() {
      return {
       
        email: '',
        password: '',
        showPassword: false,
      };
    },
    methods: {
      authenticateUser() {
        if (this.email && this.password) {
          this.isAuthenticated = true;
          this.showToast("Authentication successful!");
          return ('deposit')
        } else {
          this.showToast("Please enter valid credentials.", "error");
        }
      },
     
      showToast(message, type = 'success') {
        // A simple alert for now, but could be replaced with a custom toast component
   
      },
      logout() {
        this.isAuthenticated = false;
        this.email = '';
        this.password = '';
      }
    },
  };
  </script>
  
  <style scoped>
  @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css');
  
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  .app-container {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #333;
    min-height: 100vh;
    background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  }
  
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background-color: #2c3e50;
    color: white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .navbar-brand {
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    font-weight: bold;
  }
  
  .navbar-brand i {
    margin-right: 0.5rem;
  }
  
  .navbar-menu {
    display: flex;
    list-style: none;
  }
  
  .navbar-item {
    margin-left: 1rem;
  }
  
  .navbar-item a {
    color: white;
    text-decoration: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    transition: background-color 0.3s;
    display: flex;
    align-items: center;
  }
  
  .navbar-item a i {
    margin-right: 0.5rem;
  }
  
  .navbar-item a:hover, .navbar-item.active a {
    background-color: rgba(255, 255, 255, 0.1);
  }
  
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
  }
  
  .auth-section, .content {
    background: white;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 500px;
  }
  
  .auth-logo {
    display: flex;
    justify-content: center;
    margin-bottom: 1.5rem;
  }
  
  .auth-logo i {
    font-size: 3rem;
    color: #2c3e50;
    background: #f0f0f0;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .title {
    text-align: center;
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1.5rem;
    color: #2c3e50;
  }
  
  .form-group {
    margin-bottom: 1.5rem;
  }
  
  .form-group label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 500;
    color: #555;
  }
  
  .input {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 1rem;
    transition: border-color 0.3s;
  }
  
  .input:focus {
    outline: none;
    border-color: #3498db;
    box-shadow: 0 0 0 2px rgba(52, 152, 219, 0.2);
  }
  
  .password-input {
    position: relative;
  }
  
  .toggle-password {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    cursor: pointer;
    color: #777;
  }
  
  .input-with-icon {
    position: relative;
  }
  
  .input-icon {
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    font-weight: bold;
    color: #555;
  }
  
  .input.with-icon {
    padding-left: 30px;
  }
  
  .btn {
    width: 100%;
    padding: 0.75rem;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    font-size: 1rem;
    font-weight: 500;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background-color 0.3s, transform 0.1s;
  }
  
  .btn:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  
  .btn:not(:disabled):active {
    transform: scale(0.98);
  }
  
  .btn i {
    margin-right: 0.5rem;
  } 
  
  .btn.primary { background-color: #3498db; color: white; }
  .btn.primary:hover:not(:disabled) { background-color: #2980b9;}

  </style>