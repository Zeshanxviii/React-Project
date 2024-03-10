import { useState } from 'react'
import useCurrency from './hooks/useCurrency'
import InputBox from './components/InputBox'


function App() {
    const [To, setTo] = useState("inr")
    const [From, setFrom] = useState("usd")
    const [amount, SetAmount] =useState(null)
    const [converted, setConvert]= useState(null)
    const [currencychange ,selectCurrencychange]=useState()


  const currencyInfo=useCurrency(From)

  const option=Object.keys(currencyInfo)
  const swap =()=>{
    setTo(From)
    setFrom(To)
    SetAmount(convert)
    selectCurrencychange(setConvert)

  }

  const convert=()=>{
   let hi= setConvert(amount * currencyInfo[To])
   console.log("tested 2"+hi);
  }


  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        // style={{
        //  `https://media.istockphoto.com/id/1577017327/photo/graph-stock-chart-stock-market-digital-fui.webp?b=1&s=170667a&w=0&k=20&c=nSSA02ySlLEtTEiKlMujtgixYmwB1fGeBiyVLSGo6qY=`
        // }}
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert()
                       
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            amount={amount}
                            optionlist={option}
                            onCurrencyChange={(currency)=>setFrom(currency)}
                            onAmountChange={(amount)=>SetAmount(amount)}
                            selectCurrency={From}
                            selectOptions={From}
                            
                            
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="To"
                            // amount={setConvert}
                            onAmountChange={(setConvert)=>(setConvert)}
                            onCurrencyChange={(currency)=>setTo(currency)}
                            optionlist={option}
                            amountDisabled
                            selectCurrency={To}
                            amount={converted}
                            selectOptions={To}
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg" >
                        Convert {From.toUpperCase()} to {To.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
    </div>
);
}

export default App
