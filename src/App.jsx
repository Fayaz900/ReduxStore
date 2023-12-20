import CreateCustomer from "./Components/features/customer/CreateCustomer";
import './App.css'

import AccountOperations from "./Components/features/account/AccountOperations";
import BalanceDisplay from "./Components/features/account/BalanceDisplay";
import Customer from "./components/features/customer/Customer";


function App() {
  return (
    <div>
      <h1>🏦 Welcome to Sujith's Bank ⚛️</h1>
      <CreateCustomer />
      <Customer/>
      <AccountOperations />
      <BalanceDisplay />
    </div>
  );
}

export default App;
