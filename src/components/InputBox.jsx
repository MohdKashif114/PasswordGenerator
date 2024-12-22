import React from "react";


function InputBox(){


    return(
        <>
            <div className="flex ">
                <label>From</label>

                <input
                placeholder="amount"
                type="number"
                value={amount}
                
                >
                </input>

            </div>
        </>
    )
}

export default InputBox;