import CreateCustomer from "./Components/features/customer/CreateCustomer";
import './App.css'

import AccountOperations from "./Components/features/account/AccountOperations";
import BalanceDisplay from "./Components/features/account/BalanceDisplay";
import Customer from "./components/features/customer/Customer";
import { useSelector } from "react-redux";


function App() {
  const fullName = useSelector((state)=>state.customer.fullName)
  return (
    <div>
      <h1>🏦 Welcome to Sujith's Bank ⚛️</h1>
      {
        fullName === "" ? (
          <CreateCustomer/>
        ):(
          <div>
          <Customer/>
      <AccountOperations />
      <BalanceDisplay />
      </div>
        )
      }
      
    </div>
  );
}

export default App;
