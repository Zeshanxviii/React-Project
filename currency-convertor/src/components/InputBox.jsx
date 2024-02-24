import React, { useId, useState } from "react";

function InputBox({
  label,
  amount,
  amountDisabled,
  onCurrencyChange,
  onAmountChange,
  optionlist = [],
  selectOptions = "usd",
  className = "",
}) {
  const id = useId();

  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className} `}>
      <div className="w-1/2">
        <label htmlFor={id} className="text-black/40 mb-2 inline-block">
          {label}
        </label>
        <input
          id={id}
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
          value={amount}
          disabled={amountDisabled}
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>

        <select
          className="rounded-lg  absolute px-2 py-2 bg-gray-100 cursor-pointer outline-none mt-7"
          value={selectOptions}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
        >
          {optionlist.map((currency) => (
            <option key={currency} value={currency}>
              {currency.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
