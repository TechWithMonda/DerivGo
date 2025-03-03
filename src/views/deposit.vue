<template>
  <div class="app-wrapper">
    <nav class="navbar">
      <div class="navbar-brand">
        <i class="fas fa-exchange-alt"></i>
        E-Transfer App
      </div>
      <ul class="navbar-menu">
        <li class="navbar-item">
          <a href="#" @click.prevent="navigateTo('deposit')">
            <i class="fas fa-arrow-down"></i> Deposit
          </a>
        </li>
        <li class="navbar-item">
          <a href="#" @click.prevent="navigateTo('withdraw')">
            <i class="fas fa-arrow-up"></i> Withdraw
          </a>
        </li>
        <li class="navbar-item">
          <a href="createaccount">
            <i class="fas fa-user-plus"></i> Create Account
          </a>
        </li>
        <li class="navbar-item">
          <a href="/">
            <i class="fas fa-home"></i> Go Back
          </a>
        </li>
        <li class="navbar-item">
          <a href="createaccount">
            <i class="fas fa-sign-out-alt"></i> logout
          </a>
        </li>
      </ul>
    </nav>

    <div class="container">
      <div class="content">
        <div class="header-section">
          <h2 class="title">Deposit and Withdraw from Deriv</h2>
          <p class="subtitle">Fast, Secure, and Reliable</p>
        </div>
        
        <div class="tabs">
          <button 
            @click="activeTab = 'deposit'" 
            :class="{ active: activeTab === 'deposit' }"
          >
            <i class="fas fa-arrow-down"></i> Deposit
          </button>
          <button 
            @click="activeTab = 'withdraw'" 
            :class="{ active: activeTab === 'withdraw' }"
          >
            <i class="fas fa-arrow-up"></i> Withdraw
          </button>
        </div>
        
        <div class="balance-card">
          <div class="balance-icon">
            <i class="fas fa-wallet"></i>
          </div>
          <div class="balance-details">
            <span class="balance-label">Available Balance:</span>
            <span class="balance-amount">${{ balance.toFixed(2) }}</span>
          </div>
        </div>

        <!-- Fix: Wrap the conditional content in a div -->
        <transition name="fade" mode="out-in">
          <div key="form-container">
            <div v-if="activeTab === 'deposit'" class="form-section">
              <h3><i class="fas fa-hand-holding-usd"></i> Deposit from M-Pesa</h3>
              
              <div class="form-group">
                <label for="depositAmount">Amount (USD)</label>
                <div class="input-group">
                  <span class="input-prefix">$</span>
                  <input 
                    id="depositAmount"
                    v-model.number="depositAmount" 
                    type="number" 
                    placeholder="Enter amount" 
                    min="0"
                    step="0.01"
                  />
                </div>
              </div>

              <div class="form-group">
                <label for="depositPhone">M-Pesa Phone Number</label>
                <div class="input-group">
                  <span class="input-prefix"><i class="fas fa-phone"></i></span>
                  <input 
                    id="depositPhone"
                    v-model="depositPhone" 
                    type="text" 
                    placeholder="Enter M-Pesa number" 
                  />
                </div>
              </div>
              
              <button 
                @click="depositFunds"
                class="btn btn-primary"
                :disabled="depositAmount <= 0 || !depositPhone"
              >
                <i class="fas fa-arrow-circle-up"></i> Deposit Funds
              </button>
              
              <div class="info-box">
                <p><i class="fas fa-info-circle"></i> Deposits are typically processed within minutes.</p>
              </div>
            </div>
            
            <div v-else-if="activeTab === 'withdraw'" class="form-section">
              <h3><i class="fas fa-money-bill-wave"></i> Withdraw to M-Pesa</h3>
              
              <div class="form-group">
                <label for="withdrawAmount">Amount (USD)</label>
                <div class="input-group">
                  <span class="input-prefix">$</span>
                  <input 
                    id="withdrawAmount"
                    v-model.number="withdrawAmount" 
                    type="number" 
                    placeholder="Enter amount" 
                    min="0"
                    :max="balance"
                    step="0.01"
                  />
                </div>
                <div class="max-amount">
                  <button @click="withdrawAmount = balance" class="max-btn">
                    Max: ${{ balance.toFixed(2) }}
                  </button>
                </div>
              </div>

              <div class="form-group">
                <label for="withdrawPhone">M-Pesa Phone Number</label>
                <div class="input-group">
                  <span class="input-prefix"><i class="fas fa-phone"></i></span>
                  <input 
                    id="withdrawPhone"
                    v-model="withdrawPhone" 
                    type="text" 
                    placeholder="Enter M-Pesa number" 
                  />
                </div>
              </div>
              
              <button 
                @click="withdrawFunds"
                class="btn btn-secondary"
                :disabled="withdrawAmount <= 0 || !withdrawPhone || withdrawAmount > balance"
              >
                <i class="fas fa-arrow-circle-down"></i> Withdraw Funds
              </button>
              
              <div class="info-box">
                <p><i class="fas fa-info-circle"></i> Withdrawals are typically processed within 24 hours.</p>
              </div>
            </div>
          </div>
        </transition>
        
        <div class="recent-transactions">
          <h3><i class="fas fa-history"></i> Recent Transactions</h3>
          <div v-if="transactions.length === 0" class="no-transactions">
            No recent transactions to display.
          </div>
          <ul v-else class="transaction-list">
            <li v-for="(transaction, index) in transactions" :key="index" class="transaction-item">
              <div class="transaction-type" :class="transaction.type">
                <i :class="transaction.type === 'deposit' ? 'fas fa-arrow-down' : 'fas fa-arrow-up'"></i>
              </div>
              <div class="transaction-info">
                <div class="transaction-amount">
                  {{ transaction.type === 'deposit' ? '+' : '-' }} ${{ transaction.amount.toFixed(2) }}
                </div>
                <div class="transaction-details">
                  <span class="transaction-phone">{{ transaction.phone }}</span>
                  <span class="transaction-date">{{ transaction.date }}</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ETransferApp',
  data() {
    return {
      activeTab: 'deposit',
      balance: 1000,
      depositAmount: 0,
      depositPhone: '',
      withdrawAmount: 0,
      withdrawPhone: '',
      transactions: []
    };
  },
  methods: {
    navigateTo(route) {
      // This would normally use vue-router
      // For now, we'll just show a message
      alert(`Navigating to ${route}`);
    },
    depositFunds() {
      if (this.depositAmount <= 0 || !this.depositPhone) {
        this.showNotification("Please enter a valid amount and phone number.", "error");
        return;
      }
      this.balance += this.depositAmount;
      this.addTransaction('deposit', this.depositAmount, this.depositPhone);
      this.showNotification("Deposit successful!");
      this.depositAmount = 0;
      this.depositPhone = '';
    },
    withdrawFunds() {
      if (this.withdrawAmount <= 0 || !this.withdrawPhone) {
        this.showNotification("Please enter a valid amount and phone number.", "error");
        return;
      }
      if (this.withdrawAmount > this.balance) {
        this.showNotification("Insufficient balance.", "error");
        return;
      }
      this.balance -= this.withdrawAmount;
      this.addTransaction('withdraw', this.withdrawAmount, this.withdrawPhone);
      this.showNotification("Withdrawal successful!");
      this.withdrawAmount = 0;
      this.withdrawPhone = '';
    },
    addTransaction(type, amount, phone) {
      const now = new Date();
      const date = now.toLocaleDateString() + ' ' + now.toLocaleTimeString();
      this.transactions.unshift({ type, amount, phone, date });
      
      // Keep only the last 5 transactions
      if (this.transactions.length > 5) {
        this.transactions.pop();
      }
    },
    showNotification(message, type = 'success') {
      // In a real app, we'd use a toast component
      alert(message);
    }
  }
};
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.app-wrapper {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  min-height: 100vh;
  background: linear-gradient(45deg, #f3f4f6, #ffffff);
}

.navbar {
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  background-color: #007bff;
  color: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.navbar-brand {
  display: flex;
  align-items: center;
  font-size: 1.25rem;
  font-weight: bold;
}

.navbar-brand i {
  margin-right: 0.5rem;
}

.navbar-menu {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
}

.navbar-item a {
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  display: flex;
  align-items: center;
  transition: background-color 0.2s;
}

.navbar-item a:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

.navbar-item a i {
  margin-right: 0.5rem;
}

.container {
  min-height: calc(100vh - 60px);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
}

.content {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 500px;
}

.header-section {
  text-align: center;
  margin-bottom: 1.5rem;
}

.title {
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 0.5rem;
}

.subtitle {
  color: #666;
  font-size: 1rem;
}

.tabs {
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.tabs button {
  padding: 0.75rem 1.5rem;
  border: none;
  cursor: pointer;
  background-color: #f0f0f0;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  margin: 0 0.5rem;
  border-radius: 5px;
}

.tabs button i {
  margin-right: 0.5rem;
}

.tabs button.active {
  background-color: #007bff;
  color: white;
  box-shadow: 0 2px 5px rgba(0, 123, 255, 0.3);
}

.balance-card {
  background: linear-gradient(135deg, #7795f8, #6772e5);
  color: white;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  box-shadow: 0 4px 10px rgba(103, 114, 229, 0.3);
}

.balance-icon {
  background-color: rgba(255, 255, 255, 0.2);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1rem;
}

.balance-details {
  flex: 1;
}

.balance-label {
  display: block;
  font-size: 0.9rem;
  opacity: 0.9;
}

.balance-amount {
  font-size: 1.5rem;
  font-weight: bold;
}

.form-section {
  margin-bottom: 1.5rem;
}

.form-section h3 {
  margin-bottom: 1rem;
  color: #333;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
}

.form-section h3 i {
  margin-right: 0.5rem;
  color: #007bff;
}

.form-group {
  margin-bottom: 1rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  color: #555;
}

.input-group {
  position: relative;
}

.input-prefix {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 5px 0 0 5px;
  border-right: none;
  font-weight: bold;
}

.input-group input {
  width: 100%;
  padding: 0.75rem 0.75rem 0.75rem 40px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  transition: border-color 0.2s;
}

.input-group input:focus {
  outline: none;}
  </style>