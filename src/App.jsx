import CreateCustomer from "./Components/CreateCustomer";
import './App.css'
import Customer from "./Components/Customer";
import AccountOperations from "./Components/AccountOperations";
import BalanceDisplay from "./Components/BalanceDisplay";


function App() {
  return (
    <div>
      <h1>🏦 Welcome to Sujith's Bank ⚛️</h1>
      <CreateCustomer />
      <Customer />
      <AccountOperations />
      <BalanceDisplay />
    </div>
  );
}

export default App;
