import React from 'react';

const SimpleCalculator=({a,b})=>{
    return(
        <>
        <p>SUM {a} + {b} : {a+b}</p>
        <p>SUB {a} - {b} : {a-b}</p>
        <p>MUL {a} * {b} : {a*b}</p>
        <p>DIV {a} / {b} : {a/b}</p>
        </>
    )

}
export default SimpleCalculator;