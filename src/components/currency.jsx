import React from "react";

const CurrencyExchanger = ({
  fromLabel,
  totalAmount,
  inputValue,
  currencyType,
  currencyOptions,
  showPlaceholder,
  selectedCurrency
}) => {
  return (
    <div className="w-[500px] h-[100px] rounded-[9px] bg-white">
      <div className="flex flex-row h-full px-1 py-1.5 ">
        <div className="flex flex-col justify-between w-[50%] h-full font-bold text-1xl text-gray-500">
          {fromLabel}
          {showPlaceholder ? (
            <input
              className="mb-2 border-2 border-gray rounded-sm px-1 h-7"
              type="number"
              placeholder="0"
              onChange={inputValue}
              min={0}
              max={50000}
            />
          ) : (
            <input
              className="mb-2 border-2 rounded-sm px-1 h-7"
              type="number"
              value={totalAmount}
              readOnly
            />
          )}
        </div>
        <div className="flex flex-col w-[50%] justify-between h-full font-bold text-1xl pl-0.5 text-gray-500">
          {currencyType}
          <select
            name="select"
            className="mb-2 border-2 border-gray rounded-sm px-1 h-7 cursor-pointer"
            onChange={selectedCurrency}
          >
            {currencyOptions.map((cur, index) => (
              <option key={index} value={cur}>
                {cur}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default CurrencyExchanger;
