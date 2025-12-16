import React from 'react';
export default function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "",
    amountDisabled = false,
    currencyDisabled = false,
    className = ""
}) {
    return (
        
             <div className={`container bg-light w-100 rounded-3 ${className} shadow-sm `} style={{border:".3px solid #ccc"}}>
            <div className="row d-flex justify-content-center align-items-center p-3">
                <div className="col-6  d-flex flex-column justify-content-center align-align-items-start gap-2">  
                    <label>{label}</label>
                    <input  style={{outline:"none"}}
                    className='border-0 bg-white'
                    type="number"
                    placeholder='Amount'
                    disabled={amountDisabled}
                    value={amount}
                    onChange={(e)=> onAmountChange && onAmountChange((e.target.value))}
                    
                    />
                </div>
                <div className="col-6 text-end d-flex flex-column justify-content-center align-items-end gap-2 flex-wrap">
                    <label>Currency Type</label>
                    <select 
                    className='rounded-2 w-50 '
                      value={selectCurrency}
                      onChange={(e)=> onCurrencyChange && onCurrencyChange(e.target.value)}
                      disabled={currencyDisabled}
                    > 
                        { 
                            currencyOptions.map((currency)=>(
                                <option key={currency} value={currency}>{currency}</option>
                            ))
                        }
                    </select>
                </div>
            </div>
        </div>
      
       
    )
}
