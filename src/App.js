import './App.css';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

function App() {
  const promise = loadStripe("pk_test_51JFFryKo5dimco4zivFHrjSfGhswNxxnNeozKjlAUCYjQwDK4w986pr81lGEhqZKw7CRxXYEMMCDTxjNLyUAiKya00DDXJzHSZ");

  return (
    <div className="App">
      <header className="App-header">
        <Elements stripe={promise}>
          <CheckoutForm />
        </Elements>
      </header>
    </div>
  );
}

export default App;
