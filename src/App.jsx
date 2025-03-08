import "./index.css";
import currencyImage from "./assets/currency.jpg";
import CurrencyExchanger from "./components/currency";
import { useState } from "react";

function App() {
  const currencies = ["USD", "EUR", "GBP", "INR", "AUD"];
  const [inputVal, setInputValue] = useState(0);
  const [fromCurrencyOption, setFromCurrencyOption] = useState("USD");
  const [toCurrencyOption, setToCurrencyOption] = useState("USD");
  const [convertedAmount, setConvertedAmount] = useState(null);

  // Handle changes in the input value
  const setInputValueFunction = (e) => {
    setInputValue(e.target.value);
  };

  // Handle selecting the "from" currency
  const setFromCurrencyOptionFunction = (e) => {
    setFromCurrencyOption(e.target.value);
  };

  // Handle selecting the "to" currency
  const setToCurrencyOptionFunction = (e) => {
    setToCurrencyOption(e.target.value);
  };

  // Conversion Logic
  const calculateValue = (amount, currencyFrom, currencyTo) => {
    // If currencies are the same, return the amount as is
    if (currencyFrom === currencyTo) {
      setConvertedAmount(amount);
      return;
    }

    let conversionRate = 1;

    // Example conversion rates (you can replace these with actual rates)
    const conversionRates = {
      USD: { INR: 75, EUR: 0.92, GBP: 0.81, AUD: 1.4 },
      EUR: { USD: 1.09, INR: 82, GBP: 0.88, AUD: 1.52 },
      GBP: { USD: 1.24, EUR: 1.14, INR: 93, AUD: 1.73 },
      INR: { USD: 0.013, EUR: 0.012, GBP: 0.011, AUD: 0.019 },
      AUD: { USD: 0.71, EUR: 0.66, GBP: 0.58, INR: 53 },
    };

    // Set conversion rate based on selected currencies
    if (conversionRates[currencyFrom] && conversionRates[currencyFrom][currencyTo]) {
      conversionRate = conversionRates[currencyFrom][currencyTo];
    }

    const converted = amount * conversionRate;
    setConvertedAmount(converted);
  };

  return (
    <div
      className="min-h-screen max-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${currencyImage})` }}
    >
      <div className="w-[600px] h-[400px] rounded-2xl border-1 border-white" style={{ backgroundColor: "#E2DFD2" }}>
        <div className="flex flex-col items-center justify-between gap-5">
          <h3 className="font-bold text-2xl p-4 ">Currency Converter</h3>
          <CurrencyExchanger
            fromLabel="From"
            inputValue={setInputValueFunction}
            currencyType="Currency Type"
            currencyOptions={currencies}
            showPlaceholder={true}
            selectedCurrency={setFromCurrencyOptionFunction}
          />
          <CurrencyExchanger
            fromLabel="To"
            currencyType="Currency Type"
            totalAmount={convertedAmount !== null ? convertedAmount : inputVal}
            currencyOptions={currencies}
            selectedCurrency={setToCurrencyOptionFunction}
          />
          <div className="flex justify-center mt-2">
            <button
              onClick={() => calculateValue(inputVal, fromCurrencyOption, toCurrencyOption)} // Use the function properly
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Convert
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
