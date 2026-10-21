:root {
  --primary: #EC2028;
  --primary-dark: #C51921;
  --bg-color: #F4F6F9;
  --text-main: #333333;
  --white: #FFFFFF;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body {
  background-color: var(--bg-color);
  color: var(--text-main);
  padding-bottom: 70px;
}

header {
  background: linear-gradient(135deg, var(--primary), var(--primary-dark));
  color: var(--white);
  padding: 20px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  box-shadow: 0 4px 10px rgba(236, 32, 40, 0.3);
}

.saldo-card {
  background: rgba(255, 255, 255, 0.15);
  padding: 15px;
  border-radius: 12px;
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.container {
  padding: 15px;
  max-width: 600px;
  margin: 0 auto;
}

.menu-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  margin-bottom: 20px;
}

.menu-item {
  background: var(--white);
  padding: 12px 5px;
  text-align: center;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.05);
  cursor: pointer;
  font-size: 12px;
  font-weight: bold;
  transition: 0.2s;
}

.menu-item.active, .menu-item:hover {
  background: var(--primary);
  color: var(--white);
}

.card {
  background: var(--white);
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  margin-bottom: 15px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-size: 14px;
  font-weight: 600;
}

input, select {
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 14px;
}

button.btn-primary {
  background: var(--primary);
  color: var(--white);
  border: none;
  width: 100%;
  padding: 14px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.2s;
}

button.btn-primary:active {
  background: var(--primary-dark);
}

.transaction-list {
  margin-top: 10px;
}

.trx-item {
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #eee;
  font-size: 13px;
}
