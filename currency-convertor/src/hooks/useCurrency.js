import { useState, useEffect } from "react";


function useCurrency(currency) {
    const [data,Setdata]=useState({})

    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((value)=>value.json())
        .then((value)=>Setdata(value[currency]))
    },[currency])

    return data     
}

export default useCurrency
