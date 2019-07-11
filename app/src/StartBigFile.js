import React from "react";

export function Page () {
    return (<div>
        {calcQuadratic(1, 4, 3)}
    </div>)
}

function makeRoundNumber ( Dis ) {
    let [intNum, floatNum] = Dis.toString().split(".")

    if (floatNum[2] > 4) 
        floatNum = parseInt(floatNum[0,1]) + 1
    else 
        floatNum = parseInt(floatNum[0,1])
    const result = parseFloat(intNum + "." + floatNum)

    return result
}

function calcQuadratic ( a, b, c ) {
    const Dis = b*b -4*a*c 
    let sqrtDis = Math.sqrt(Dis)

    if (Number.isInteger(Math.sqrt(Dis))) 
        sqrtDis =  sqrtDis/(2*a)
    else 
        sqrtDis = makeRoundNumber(sqrtDis/(2*a))

    let x1 = -b - sqrtDis
    let x2 = -b + sqrtDis
    let roots = [x1, x2]

    return roots
}
